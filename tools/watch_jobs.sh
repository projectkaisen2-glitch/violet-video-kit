#!/usr/bin/env bash
# Render watcher for the laptop. Start once, leave it running:
#   bash tools/watch_jobs.sh
# A job is a file jobs/<name>.job with ONE line "<dir> <args>", e.g. "ep04/ed 01" -> bash ep04/ed/run.sh 01
# (only run.sh scripts inside this repo, simple args).
#
# Rules that stop wasted renders (10.11.2026: 38 min were spent on stale duplicate jobs):
#  1. git pull before EVERY job, not once per pass -> a job deleted or replaced in the repo is never run.
#  2. Pending jobs with the same command are collapsed: the command runs ONCE (on the newest files),
#     every duplicate is marked done. Old "v1/v2" jobs for the same piece can no longer eat time.
#  3. Each job runs once (remembered in ~/.violet-jobs-done). Logs: jobs/log/<name>.log
# After a job its log + preview sheets go to jobs/result/<name>/ and are pushed (needs push rights, see README).
[ -z "$VIOLET_WATCH_COPY" ] && { c=$(mktemp /tmp/violet-watch.XXXXXX.sh); cp "$0" "$c"; VIOLET_WATCH_COPY=1 exec bash "$c" "$(cd "$(dirname "$0")/.." && pwd)"; }
cd "$1" || exit 1          # runs from a temp copy, so 'git pull' can update this file safely
export PY=${PY:-$HOME/.violet-venv/bin/python}
DONE=$HOME/.violet-jobs-done; touch "$DONE"; mkdir -p jobs/log
echo "watching $(pwd) — Ctrl+C to stop"
pending(){ for j in jobs/*.job; do [ -f "$j" ] || continue; n=$(basename "$j" .job); grep -qx "$n" "$DONE" || echo "$j"; done; }
while true; do
  GIT_TERMINAL_PROMPT=0 git pull -q --ff-only 2>/dev/null
  j=$(pending | head -1)
  if [ -z "$j" ]; then sleep 60; continue; fi
  n=$(basename "$j" .job); cmd=$(head -1 "$j")
  read -r dir args <<< "$cmd"
  if ! [[ "$dir" =~ ^[A-Za-z0-9_/]+$ && "$args" =~ ^[A-Za-z0-9_\ .-]*$ && -f "$dir/run.sh" ]]; then echo "skip bad job $n"; echo "$n" >> "$DONE"; continue; fi
  # collapse duplicates: every pending job with the same command is satisfied by this one run
  dups=$(for k in $(pending); do [ "$(head -1 "$k")" = "$cmd" ] && basename "$k" .job; done)
  for d in $dups; do echo "$d" >> "$DONE"; done
  [ "$(echo "$dups" | wc -w)" -gt 1 ] && echo "$(date +%H:%M) merged duplicates: $(echo $dups)"
  echo "$(date +%H:%M) start $n: $dir/run.sh $args"
  s=$(date +%s); mark=$(mktemp); 
  if bash "$dir/run.sh" $args > "jobs/log/$n.log" 2>&1; then r=OK; else r=FAIL; fi
  m=$(( ($(date +%s)-s)/60 )); echo "$r in $m min" >> "jobs/log/$n.log"; echo "$(date +%H:%M) $r $n ($m min)"
  mkdir -p "jobs/result/$n"; cp "jobs/log/$n.log" "jobs/result/$n/"; find "$dir/out" -maxdepth 2 -name "*.jpg" -newer "$mark" -exec cp {} "jobs/result/$n/" \; 2>/dev/null; rm -f "$mark"
  git add "jobs/result/$n" >/dev/null 2>&1
  if git commit -qm "job $n: $r" >/dev/null 2>&1; then
    if ! { GIT_TERMINAL_PROMPT=0 git pull -q --rebase 2>/dev/null && GIT_TERMINAL_PROMPT=0 git push -q 2>/dev/null; }; then
      git rebase --abort 2>/dev/null; git reset -q --soft HEAD~1; git reset -q; echo "  (results not pushed: no push rights — see README 'laptop push')"
    fi
  fi
done
