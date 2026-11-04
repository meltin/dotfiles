#!/usr/bin/env bash
set -uo pipefail

# Enhanced version with progress indicators

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

OLD_USER=""
NEW_USER=""
DRY_RUN=0
HOST="github.com"
VERBOSE=0
SHOW_PROGRESS=1

print_usage() {
  cat <<'USAGE'
Rewrite GitHub remote URLs (under current or specified directories) from old username to new one.

Options:
  --old OLD_USERNAME     (required)
  --new NEW_USERNAME     (required)
  --dry-run              Show changes without applying
  --verbose              Show all repos, even unchanged ones
  --no-progress          Disable progress indicators
  -h, --help             Show this help

Args:
  ROOT...                Zero or more root directories to scan recursively.
                         If omitted, uses the current directory ($PWD).

Examples:
  rewrite-gh-remotes.sh --old ixxq --new unmett --dry-run
  rewrite-gh-remotes.sh --old ixxq --new unmett
  rewrite-gh-remotes.sh --old ixxq --new unmett ~/dev/private ~/dev/work
USAGE
}

# ---- Progress indicators ----
# Spinner PID storage
SPINNER_PID=""

# Start spinner in background
start_spinner() {
  local msg="${1:-Processing}"
  local spinstr='⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏'

  while true; do
    for ((i = 0; i < ${#spinstr}; i++)); do
      printf "\r${CYAN}%s${NC} %s" "${spinstr:$i:1}" "$msg"
      sleep 0.1
    done
  done &

  SPINNER_PID=$!
}

# Stop spinner
stop_spinner() {
  if [[ -n "$SPINNER_PID" ]]; then
    kill $SPINNER_PID 2>/dev/null || true
    wait $SPINNER_PID 2>/dev/null || true
    SPINNER_PID=""
  fi
  clear_line
}

show_progress() {
  local current=$1
  local total=$2
  local width=30
  local repo_name="${3:-}"

  if [[ $total -eq 0 ]]; then
    return
  fi

  local percent=$(((current * 100 + total / 2) / total))
  local filled=$(((width * current + total / 2) / total))

  printf "\r["
  printf "%${filled}s" | tr ' ' '█'
  printf "%$((width - filled))s" | tr ' ' '░'
  printf "] %3d%% (%d/%d)" $percent $current $total

  if [[ -n "$repo_name" ]]; then
    printf " ${CYAN}%s${NC}" "$repo_name"
  fi
}

clear_line() {
  printf "\r%-80s\r" " "
}

# ---- Parse args ----
ROOTS=()
while [[ $# -gt 0 ]]; do
  case "$1" in
  --old)
    OLD_USER="${2-}"
    shift 2
    ;;
  --new)
    NEW_USER="${2-}"
    shift 2
    ;;
  --dry-run)
    DRY_RUN=1
    shift
    ;;
  --verbose)
    VERBOSE=1
    shift
    ;;
  --no-progress)
    SHOW_PROGRESS=0
    shift
    ;;
  -h | --help)
    print_usage
    exit 0
    ;;
  --)
    shift
    while [[ $# -gt 0 ]]; do
      ROOTS+=("$1")
      shift
    done
    ;;
  -*)
    echo -e "${RED}Unknown option: $1${NC}" >&2
    print_usage
    exit 2
    ;;
  *)
    ROOTS+=("$1")
    shift
    ;;
  esac
done

[[ -z "$OLD_USER" || -z "$NEW_USER" ]] && {
  echo -e "${RED}ERROR: --old and --new are required.${NC}" >&2
  exit 2
}
[[ ${#ROOTS[@]} -eq 0 ]] && ROOTS=("$PWD")

# ---- URL transformer ----
transform_url() {
  # in: $1=url, $2=old, $3=new
  local url="$1" old="$2" new="$3"

  # Define URL patterns as arrays for cleaner iteration
  local patterns=(
    "^https://$HOST/([^/]+)/(.+)$"
    "^git@$HOST:([^/]+)/(.+)$"
    "^ssh://git@$HOST/([^/]+)/(.+)$"
    "^git\+ssh://git@$HOST/([^/]+)/(.+)$"
  )

  local formats=(
    'https://%s/%s/%s\n'
    'git@%s:%s/%s\n'
    'ssh://git@%s/%s/%s\n'
    'git+ssh://git@%s/%s/%s\n'
  )

  local i
  for i in "${!patterns[@]}"; do
    if [[ "$url" =~ ${patterns[$i]} ]]; then
      local user="${BASH_REMATCH[1]}"
      local rest="${BASH_REMATCH[2]}"
      [[ "$user" = "$old" ]] || return 1
      printf "${formats[$i]}" "$HOST" "$new" "$rest"
      return 0
    fi
  done

  return 1
}

# ---- Process a single repo ----
process_repo() {
  local repo_dir="$1"
  # Validate repo
  if ! git -C "$repo_dir" rev-parse --git-dir >/dev/null 2>&1; then
    return 0
  fi

  local remotes=()
  while IFS= read -r remote; do
    remotes+=("$remote")
  done < <(git -C "$repo_dir" remote 2>/dev/null || true)
  [[ ${#remotes[@]} -eq 0 ]] && return 0

  local changed=false
  local url_changes=0
  local repo_name
  repo_name=$(basename "$repo_dir")

  for r in "${remotes[@]}"; do
    # get all fetch/push urls
    local urls=()
    while IFS= read -r url; do
      urls+=("$url")
    done < <(git -C "$repo_dir" remote get-url --all "$r" 2>/dev/null || true)
    [[ ${#urls[@]} -eq 0 ]] && continue

    for old_url in "${urls[@]}"; do
      local new_url
      if new_url="$(transform_url "$old_url" "$OLD_USER" "$NEW_USER")"; then
        changed=true
        ((url_changes++))
        ((CHANGED_URLS++))

        # Clear progress line before showing results
        [[ $SHOW_PROGRESS -eq 1 ]] && clear_line

        if [[ $DRY_RUN -eq 1 ]]; then
          echo -e "${YELLOW}[DRY]${NC} ${BLUE}${repo_name}${NC} (${r})"
          echo -e "      ${RED}${old_url}${NC}"
          echo -e "   -> ${GREEN}${new_url}${NC}"
        else
          # Pinpoint replace: only change if exact old_url matches.
          local fetch_ok=false push_ok=false
          if git -C "$repo_dir" remote set-url "$r" "$new_url" "$old_url" 2>/dev/null; then
            fetch_ok=true
          fi
          if git -C "$repo_dir" remote set-url --push "$r" "$new_url" "$old_url" 2>/dev/null; then
            push_ok=true
          fi

          if [[ "$fetch_ok" == true || "$push_ok" == true ]]; then
            echo -e "${GREEN}[OK ]${NC} ${BLUE}${repo_name}${NC} (${r})"
            echo -e "      ${RED}${old_url}${NC}"
            echo -e "   -> ${GREEN}${new_url}${NC}"
            [[ "$fetch_ok" == true ]] && echo -e "      ${CYAN}✓ fetch updated${NC}"
            [[ "$push_ok" == true ]] && echo -e "      ${CYAN}✓ push updated${NC}"
          else
            echo -e "${RED}[ERR]${NC} ${BLUE}${repo_name}${NC} (${r})"
            echo -e "      Failed to update URL"
          fi
        fi
      fi
    done
  done

  if [[ "$changed" == true ]]; then
    return 10 # used as "changed" indicator
  elif [[ $VERBOSE -eq 1 ]]; then
    [[ $SHOW_PROGRESS -eq 1 ]] && clear_line
    echo -e "${CYAN}[---]${NC} ${BLUE}${repo_name}${NC} (no changes needed)"
  fi
  return 0
}

# ---- Discover repos under roots ----
# Global array to store found repos
FOUND_REPOS=()
declare -i SCANNED=0
declare -i CHANGED_REPOS=0
declare -i CHANGED_URLS=0
declare -i ERRORS=0

# Collect all repos into array (single find execution)
collect_repos() {
  local root="$1"
  local -a repos=()

  while IFS= read -r -d '' cand; do
    local repo_dir=""
    local base
    base="$(basename "$cand")"

    if [[ -d "$cand" && "$base" == ".git" ]]; then
      repo_dir="$(dirname "$cand")"
    elif [[ -f "$cand" && "$base" == ".git" ]]; then
      repo_dir="$(dirname "$cand")"
    elif [[ -d "$cand" && "$base" == *.git ]]; then
      repo_dir="$cand" # bare repo
    fi

    if [[ -n "$repo_dir" ]]; then
      # Check if not already in array (dedup)
      local already_seen=0
      if [[ ${#repos[@]} -gt 0 ]]; then
        for seen in "${repos[@]}"; do
          if [[ "$seen" == "$repo_dir" ]]; then
            already_seen=1
            break
          fi
        done
      fi
      [[ $already_seen -eq 0 ]] && repos+=("$repo_dir")
    fi
  done < <(find "$root" \( -name "*.git" -o -name ".git" \) -print0 2>/dev/null)

  # Return repos array via global variable
  FOUND_REPOS=("${repos[@]}")
}

discover_and_process_root() {
  local root="$1"
  if [[ ! -d "$root" ]]; then
    echo -e "${YELLOW}WARN: Not a directory: $root${NC}" >&2
    return 1
  fi

  echo -e "${CYAN}Scanning: $root${NC}"

  # Collect all repos in a single find operation
  FOUND_REPOS=()
  if [[ $SHOW_PROGRESS -eq 1 ]]; then
    start_spinner "Scanning for Git repositories..."
  fi

  collect_repos "$root"

  if [[ $SHOW_PROGRESS -eq 1 ]]; then
    stop_spinner
  fi

  local total_repos=${#FOUND_REPOS[@]}
  echo -e "${CYAN}Found ${total_repos} repositories${NC}"

  # Process each repository
  local current_repo=0
  for repo_dir in "${FOUND_REPOS[@]}"; do
    ((SCANNED++))
    ((current_repo++))

    # Show progress
    if [[ $SHOW_PROGRESS -eq 1 && $total_repos -gt 0 ]]; then
      show_progress $current_repo $total_repos "$(basename "$repo_dir")"
    fi

    # Capture return code properly
    local rc=0
    process_repo "$repo_dir" || rc=$?

    if [[ $rc -eq 10 ]]; then
      ((CHANGED_REPOS++))
    elif [[ $rc -ne 0 ]]; then
      ((ERRORS++))
    fi
  done

  # Clear progress line after completion
  [[ $SHOW_PROGRESS -eq 1 ]] && clear_line
}

# Main execution
echo -e "${GREEN}=== GitHub Remote URL Rewriter ===${NC}"
echo -e "Change: ${YELLOW}${OLD_USER}${NC} →  ${YELLOW}${NEW_USER}${NC}"
[[ $DRY_RUN -eq 1 ]] && echo -e "${YELLOW}Mode: DRY RUN (no changes will be made)${NC}"
echo ""

for root in "${ROOTS[@]}"; do
  discover_and_process_root "$root"
done

echo ""
echo -e "${GREEN}=== Summary ===${NC}"
echo -e "Roots scanned : ${BLUE}${#ROOTS[@]}${NC} (${ROOTS[*]})"
echo -e "Repos found   : ${BLUE}${SCANNED}${NC}"

if [[ $DRY_RUN -eq 1 ]]; then
  echo -e "Would change  : ${YELLOW}${CHANGED_REPOS}${NC} repos, ${YELLOW}${CHANGED_URLS}${NC} URLs"
else
  echo -e "Changed       : ${GREEN}${CHANGED_REPOS}${NC} repos, ${GREEN}${CHANGED_URLS}${NC} URLs"
fi

[[ $ERRORS -gt 0 ]] && echo -e "Errors        : ${RED}${ERRORS}${NC}"

# Clean up any remaining spinner
stop_spinner 2>/dev/null || true

# Exit with appropriate code
if [[ $ERRORS -gt 0 ]]; then
  exit 1
elif [[ $CHANGED_REPOS -eq 0 && $SCANNED -gt 0 ]]; then
  echo -e "${CYAN}No changes needed.${NC}"
fi
