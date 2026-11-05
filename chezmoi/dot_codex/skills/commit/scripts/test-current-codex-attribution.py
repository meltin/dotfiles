"""Run with python3 to check attribution against isolated session histories."""

import json
import os
from pathlib import Path
import subprocess
import tempfile


SCRIPT = Path(__file__).with_name("current-codex-attribution.sh")
THREAD = "00000000-0000-0000-0000-000000000001"
SESSION = "00000000-0000-0000-0000-000000000002"
OTHER = "00000000-0000-0000-0000-000000000003"
OLDER = f"rollout-2026-10-01T10-00-00-{THREAD}.jsonl"
RESUMED = f"rollout-2026-10-01T11-00-00-{THREAD}_{SESSION}.jsonl"
TRAILER = "Co-authored-by: Codex GPT-test Max <noreply@openai.com>\n"


def history(model, thread=THREAD):
    rows = [{"type": "session_meta", "payload": {"id": thread}}]
    if model:
        rows.append({"type": "turn_context", "payload": {"model": model, "effort": "max"}})
    return rows


def check(files, expected):
    with tempfile.TemporaryDirectory(prefix="codex-attribution-test-") as directory:
        history_root = Path(directory)
        sessions = history_root / "sessions/2026/10/01"
        sessions.mkdir(parents=True)
        for name, rows in files.items():
            (sessions / name).write_text("".join(json.dumps(row) + "\n" for row in rows))
        result = subprocess.run(
            ["bash", str(SCRIPT)],
            env={**os.environ, "CODEX_HOME": directory, "CODEX_THREAD_ID": THREAD},
            capture_output=True,
            text=True,
            check=False,
        )
        if expected is None:
            assert result.returncode != 0 and not result.stdout, result
        else:
            assert result.returncode == 0 and result.stdout == expected, result


latest = history("gpt-old") + history("gpt-test")[1:]
check({OLDER: latest}, TRAILER)
check({RESUMED: history("gpt-test"), OLDER: history(None)}, TRAILER)
check({RESUMED: history("gpt-test"), OLDER: history("gpt-old")}, TRAILER)
unrelated = f"rollout-2026-10-01T12-00-00-{OTHER}_{THREAD}.jsonl"
check({RESUMED: history("gpt-test"), unrelated: history("gpt-wrong", OTHER)}, TRAILER)
check({RESUMED: history("gpt-wrong", OTHER)}, None)
check({RESUMED: history(None), OLDER: history("gpt-old")}, None)
check({}, None)
print("Attribution checks passed: legacy, resumed, latest, unrelated, mismatched, missing context, missing session.")
