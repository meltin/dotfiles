---
name: commit
description: Create a git commit following the Conventional Commits specification. Use when the user wants to commit changes, create a commit message, or run git commit. Handles commit message language detection (English/Japanese) based on recent commits.
---

## Commit Workflow

1. Inspect the repository state before committing:
   - `git status --short`
   - `git diff --staged`
   - `git diff`
   - `git log -n 10 --pretty=format:%s`
   - `git branch --show-current`
2. Decide what goes into the commit by following the Staging Rules below.
3. Check the changes that will be committed for secrets, broken partial edits, or obviously wrong files. If found, stop and ask the user.
4. Choose the commit message language from recent commits unless the user specifies one.
5. Run `git commit` and verify with `git status --short`. When the Staging Rules yield several commits, stage and commit them one at a time.

## Staging Rules

One commit holds one responsibility. Always decide the granularity by responsibility; never put changes into one commit only because they sit in the working tree together. A single commit is fine when the changes really are one responsibility. This governs what you stage yourself; a non-empty index has already been split by the user, so do not re-split or second-guess it.

When these rules say to ask the user, use `request_user_input` when available; otherwise ask normally.

- **Staged changes exist**: commit exactly what is staged. Do not widen the selection on your own: a non-empty index is the user's deliberate choice, and adding to it merges changes they meant to keep separate.
  - If unstaged or untracked changes look like they belong to the same responsibility as the staged ones (the user may have forgotten to `git add` them), ask the user whether to include them before committing.
  - Otherwise leave them untouched and mention them after the commit.
- **Nothing is staged, but the working tree has changes**: the user is asking for those changes to be committed. Do not stop to ask for permission to stage.
  - Group the changes by responsibility. For each group, stage it by explicit path (never `git add -A` or `git add .`) and commit it before staging the next group.
  - Include an untracked file when it clearly belongs to a group. Read it before staging it, because `git diff` does not show its content. If you are unsure whether it belongs, ask the user.
  - If one file mixes several responsibilities and cannot be split by path, ask the user how to proceed.
- **Nothing to commit at all**: say so and stop.

## Commit Message

- Use Conventional Commits: `<type>(scope): <description>`.
- Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`.
- Keep the summary imperative and under about 72 characters.
- Use the same language as the majority of recent commits unless the user specifies one.
- For Japanese commit messages, the scope may also be Japanese, e.g. `feat(認証): OAuth2 ログインを追加`.
- Include a body when the change needs explanation. For trivial changes such as comment or typo fixes, use the summary line only, e.g. `chore(ci): コメント修正`.
- Write the body as bullet points.
- Do not insert blank lines between bullet points.
- Separate the final body bullet from the `Co-authored-by` trailer with exactly one blank line.
- Be specific about what changed. Avoid vague wording like "minor fix" or "review comments".
- Immediately before `git commit`, run `bash "$HOME/.codex/skills/commit/scripts/current-codex-attribution.sh"` and append its single-line output as the final trailer.
- The helper reads the latest `turn_context` for the current `CODEX_THREAD_ID` from the session JSONL and formats its model and reasoning effort.
- If the helper exits non-zero, stop and report its provenance warning. Do not commit or substitute values from `commit_attribution` or `~/.codex/config.toml`.

## Command Notes

- Prefer a single commit message body string or a message file so bullet points stay contiguous.
- If using heredoc, use single-quoted heredoc (`<<'EOF'`) when the message contains backticks.
- Do not push.
