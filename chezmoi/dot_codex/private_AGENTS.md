## Tool use

- In Code Mode, within each bounded stage, run independent, functions.exec-available tool calls concurrently in one functions.exec call. Use `await Promise.allSettled([...])` when partial results are useful, and inspect every result; use `await Promise.all([...])` only when any failure should abort the batch. Keep dependencies, waits/resumes, approvals, conflicting or interdependent mutations, and adaptive investigations sequential.
- Use `request_user_input` in Default Mode when available for consequential, bounded choices that affect the next action or result. Do not use it for routine confirmations, informational questions, or genuinely open-ended clarification. If unavailable, ask normally.
- When using `request_user_input`, put the recommended choice first and suffix its label with `(Recommended)`. Provide concrete choices and ensure the final choice allows free-form input. The tool supplies this option automatically; do not add an `Other` option manually.

## Code quality

- Avoid `any` and minimize type assertions with `as`.
- Prefer non-destructive operations for arrays and objects.
- Prefer `const` over `let` unless reassignment is required.
- In Issue drafting and design as well as implementation, avoid speculative abstractions, configuration options, follow-up Issues, or generalization beyond what the current task requires. Prefer the simplest solution that satisfies the stated requirement over one that anticipates hypothetical future needs.
- Fix the root cause, not the symptom. Avoid workarounds such as suppressing errors, catching and ignoring exceptions, or hardcoding special cases to make a failure disappear without resolving the underlying issue.

## Verification

- Before completing a task, inspect `package.json`, find and run the repository's typecheck and lint commands, and resolve all reported type, lint, and diagnostic errors.
- If both `lint` and `lint-types` exist, run only `lint-types`.
- Do not run state-changing dev/prod operations (POST, PUT, PATCH, DELETE, or equivalent) just to verify a change unless the user explicitly authorizes that exact action. Ask the user for such checks and any you cannot perform, and state precisely what remains for them to verify and why.

## Commits and pull requests

- Never run `git commit` or `gh pr create` directly. Create commits with the `commit` skill and pull requests with the `create-pr` skill, even for one-line changes and in other worktrees.
- Before creating a pull request, check for and follow any repository PR template.
