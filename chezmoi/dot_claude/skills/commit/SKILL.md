---
allowed-tools: Bash(git status:*), Bash(git diff:*), Bash(git log:*), Bash(git branch:*), Bash(git add:*), Bash(git commit:*)
argument-hint: [additional explanation]
description: Create a git commit
---

## Context

- Current git status: !`git status`
- Staged changes: !`git diff --staged`
- Unstaged changes: !`git diff`
- Recent commits (for language detection): !`git log -n 10 --pretty=format:"%s"`
- Current branch: !`git branch --show-current`

## Your Task

Based on the above context:

1. Decide what goes into the commit by following the **Staging Rules** section below, then analyze those changes for any critical issues:
   - Review the changes that will be committed: the **Staged changes** from context above, or the changes you are about to stage when nothing is staged
   - Check for sensitive information (passwords, API keys, etc.)
   - Verify that the changes are complete and coherent
   - If issues are found, confirm with the user before proceeding

2. Determine the commit message language:
   - Based on the **Recent commits** from context above
   - If the majority are in English, write in English
   - If the majority are in Japanese, write in Japanese
   - If `$ARGUMENTS` includes a language instruction, follow that instead

3. Create and execute the commit:
   - Refer to the **Commit Message Guidelines** section below when writing the message
   - Use `git commit -m` with an appropriate message
   - When the Staging Rules yield several commits, stage and commit them one at a time

4. Verify the commit was successful:
   - Execute `git status` to verify the commit was successful
   - Provide a summary of what was committed to the user

## Staging Rules

One commit holds one responsibility. Always decide the granularity by responsibility; never put changes into one commit only because they sit in the working tree together. A single commit is fine when the changes really are one responsibility. This governs what you stage yourself; a non-empty index has already been split by the user, so do not re-split or second-guess it.

- **Staged changes exist**: commit exactly what is staged. Do not widen the selection on your own: a non-empty index is the user's deliberate choice, and adding to it merges changes they meant to keep separate.
  - If unstaged or untracked changes look like they belong to the same responsibility as the staged ones (the user may have forgotten to `git add` them), ask the user with the `AskUserQuestion` tool whether to include them before committing.
  - Otherwise leave them untouched and mention them after the commit.
- **Nothing is staged, but the working tree has changes**: the user is asking for those changes to be committed. Do not stop to ask for permission to stage.
  - Group the changes by responsibility. For each group, stage it by explicit path (never `git add -A` or `git add .`) and commit it before staging the next group.
  - Include an untracked file when it clearly belongs to a group. Read it before staging it, because its content is not in the context above. If you are unsure whether it belongs, ask the user with the `AskUserQuestion` tool.
  - If one file mixes several responsibilities and cannot be split by path, ask the user how to proceed.
- **Nothing to commit at all**: say so and stop.

## Commit Message Guidelines

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
  - Format: `<type>(optional scope): <description>`
  - Example: `feat(auth): add OAuth2 login support`
- **Allowed types**: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`
- Use the **imperative mood** in the description (e.g., "add", not "added" or "adds").
- Keep the **summary concise** (max ~72 characters).
- **Body rules**:
  - **Include a body** when the change needs explanation. For trivial changes such as comment or typo fixes, write the summary line only (e.g. `chore(ci): コメント修正`)
  - Insert one blank line after the summary, then write the body
  - The body **must** be written as bullet points — **never** use prose paragraphs or a single free-form line
  - Each bullet should describe a reason, context, or detail of the change
  - Do not insert blank lines between bullet points
  - If a trailer (e.g. `Co-Authored-By`) is appended, separate it from the last bullet with exactly one blank line
  - Example:

    ```
    feat(auth): add OAuth2 login support

    - implement login with OAuth2
    - update user model with providerId
    - add tests for OAuth2 flow
    ```

- **Language rule**:
  - Use the same language as the majority of recent commits
  - If `$ARGUMENTS` includes a language instruction, follow that instead
  - **Scope language matches the message language**: for Japanese commits, the scope may also be written in Japanese (e.g., `feat(認証): OAuth2 ログインを追加`). For English commits, keep the scope in English.
- **Focus rule**:
  - Do **not** write vague phrases like "fixed review comments", or "minor fix".
  - Always describe **what was actually changed** (e.g., "remove unused import", "fix null check in auth flow").
- **Arguments rule**:
  - Treat `$ARGUMENTS` as additional context or instruction for the commit message

## HEREDOC Handling for Commit Messages

When composing a multi-line commit message with `git commit -m "$(cat <<...EOF ... EOF)"`, the HEREDOC quoting style affects how backticks are interpreted:

- **Single-quoted HEREDOC (`<<'EOF'`)**: No shell expansion happens, so write raw backticks directly (e.g., inline `` `functionName` `` or `` `file.ts` `` is safe)
- **Double-quoted or unquoted HEREDOC (`<<"EOF"` / `<<EOF`)**: Bash may interpret backticks as command substitution. Avoid inline single backticks — use triple-backtick fenced blocks (```` ``` ````) if a code span is needed

**Rationale**: In double-quoted/unquoted HEREDOC, backticks sometimes get auto-escaped as `` \` ``, which leaks literal backslashes into the commit message.

**Recommendation**: Prefer `<<'EOF'` whenever the commit message contains backticks or code identifiers — it is the safest default.

## Important Notes

- Do not execute `git push`
