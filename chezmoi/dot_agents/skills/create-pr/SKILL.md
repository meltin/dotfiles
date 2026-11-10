---
name: create-pr
description: Create a GitHub pull request using the gh CLI. Use when the user wants to create a PR, submit changes for review, push and open a pull request on GitHub, or share a branch with collaborators. Handles PR title/body language detection (English/Japanese) and uses repository PR templates when available.
---

## Pull Request Workflow

1. Inspect the repository state before creating a PR:
   - `git status -sb`
   - `git branch -vv`
   - `gh repo view --json defaultBranchRef --jq '.defaultBranchRef.name'`
   - `gh repo view --json pullRequestTemplates --jq '.pullRequestTemplates[0].body' 2>/dev/null || echo ""`
   - `git log -n 10 --pretty=format:%s`
2. Use the default branch from `gh repo view`.
3. Review the PR contents:
   - `git diff origin/<default_branch>..HEAD --stat`
   - `git log origin/<default_branch>..HEAD --oneline`
4. Ensure all intended changes are committed before creating the PR.
5. If there are unstaged or uncommitted changes, stop and ask the user unless they explicitly said a draft/WIP PR is acceptable with local changes left out.
6. Push the current branch with `git push -u origin HEAD`.
7. Draft the PR title and body. If they are in Japanese, polish them with the `yomiyasu` skill (`yomiyasu:yomiyasu`) before creating the PR. Do not run `gh pr create` until this is done.
   - Pass the drafted title and body to the skill explicitly as the text to polish. Never invoke it without text, and keep any working files it needs outside the repository.
   - Keep the Markdown structure as is: the Copilot comment, template headings, `- [ ]` checkboxes, contiguous bullets, image references, code, and the `<type>(scope):` title prefix.
   - Put only the polished text into the PR. Report anything else the skill returns that needs the user's judgment (e.g. 書き手に確かめたい点) to the user instead.
   - If the skill is not available, create the PR without it and say so in the report.
8. Create the PR with `gh pr create`.
9. After creating the PR, open it with `gh pr view --web`, then report the PR URL and a short summary.
10. Do not merge the PR unless explicitly instructed.

## Pull Request Content

- Use the repository PR template if one exists.
- If no repository template exists, use the default template below.
- Use the same language as the majority of recent commits unless the user specifies one.
- Make the title concise and descriptive, about 72 characters or less.
- Use a Conventional Commit-style title when it fits: `<type>(scope): <description>`.
- For Japanese PR titles, the scope may also be Japanese, e.g. `feat(認証): OAuth2 ログイン機能を追加`.
- Treat user-provided arguments as additional context for the title and body.
- Keep bullet lists compact. Do not insert blank lines between bullet points.
- Write sections equivalent to Changes (e.g. `変更内容`, `変更したこと`) and Verification (e.g. `確認したこと`) at a level a PM can read and understand.
- Do not overload PR readers with excessive detail; keep these sections short and high-signal.
- In verification/checklist sections, do not list CI-only checks such as lint, typecheck, or tests unless the reviewer must manually verify them.
- Keep verification items unchecked and phrased as reviewer acceptance criteria.
- Include implementation notes only when they help reviewers understand the approach or trade-offs.
- If the PR changes frontend code, include screenshots of the affected screens captured from the running app, even when the appearance is unchanged. Put `![<verified screen>](./screenshot.png)` references in the template's screenshot section (add one if missing), pass the body with `--body-file`, and upload with `gh pr create --attach ./screenshot.png` (or `gh pr edit <number> --attach`; repeat per file). `gh` rewrites the references to uploaded asset URLs. Verify they render; if capture or upload is blocked, report it and do not mark the PR ready for review.
- Include this comment at the top of the PR body unless the user asks otherwise:

```markdown
<!-- Instructions for GitHub Copilot Code Review: Please provide your comments and review this pull request in Japanese. -->
```

## Default PR Template

```markdown
<!-- Instructions for GitHub Copilot Code Review: Please provide your comments and review this pull request in Japanese. -->

## Issue

N/A - [brief description of the purpose]

## Changes

- [Describe the main changes made]

## Verification

- [ ] [Describe the expected behavior or manual verification step]

## Additional Notes
```

## Command Notes

- Prefer a single PR body file or single-quoted heredoc (`<<'EOF'`) so Markdown renders correctly and bullet lists stay contiguous.
- Do not force push unless absolutely necessary.
- Do not push unrelated local changes.
