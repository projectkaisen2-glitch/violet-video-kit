#!/usr/bin/env bash
# Night-shift render watcher. Start once on the laptop, leave it running:
#   bash tools/watch_jobs.sh
# Every 60 s it pulls the repo. A job is a file jobs/<name>.job with ONE line: "<dir> <args>",
# e.g. "ep04/ed 01" -> runs: bash ep04/ed/run.sh 01   (only run.sh scripts inside this repo, simple args).
# Each job runs once (remembered in ~/.violet-jobs-done). Logs: jobs/log/<name>.log.
# After a job it tries to push its log + preview sheets back (skips silently if push isn't allowed).
cd "$(dirname "$0")/.." || exit 1
export PY=${PY:-$HOME/.violet-venv/bin/python}
DONE=$HOME/.violet-jobs-done; touch "$DONE"; mkdir -p jobs/log
echo "watching $(pwd) — Ctrl+C to stop"
while true; do
  GIT_TERMINAL_PROMPT=0 git pull -q --ff-only 2>/dev/null
  for j in jobs/*.job; do
    [ -f "$j" ] || continue; n=$(basename "$j" .job)
    grep -qx "$n" "$DONE" && continue
    read -r dir args < "$j"
    if ! [[ "$dir" =~ ^[A-Za-z0-9_/]+$ && "$args" =~ ^[A-Za-z0-9_\ .-]*$ && -f "$dir/run.sh" ]]; then echo "skip bad job $n"; echo "$n" >> "$DONE"; continue; fi
    echo "$(date +%H:%M) start $n: $dir/run.sh $args"
    echo "$n" >> "$DONE"
    s=$(date +%s)
    if bash "$dir/run.sh" $args > "jobs/log/$n.log" 2>&1; then r=OK; else r=FAIL; fi
    echo "$r in $(( ($(date +%s)-s)/60 )) min" >> "jobs/log/$n.log"
    echo "$(date +%H:%M) $r $n ($(( ($(date +%s)-s)/60 )) min)"
    mkdir -p jobs/result/$n; cp "jobs/log/$n.log" jobs/result/$n/ ; cp "$dir"/out/sheet_*.jpg jobs/result/$n/ 2>/dev/null
    git add jobs/result/$n >/dev/null 2>&1
    if git commit -qm "job $n: $r" >/dev/null 2>&1; then
      GIT_TERMINAL_PROMPT=0 git push -q 2>/dev/null || { git reset -q --soft HEAD~1; git reset -q; }   # no push rights: keep files local, keep history clean
    fi
  done
  sleep 60
done
