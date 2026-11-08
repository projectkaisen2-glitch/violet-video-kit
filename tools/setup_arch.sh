#!/bin/bash
# One-time setup of the VIOLET render machine on Arch Linux.
# usage: bash tools/setup_arch.sh        (asks for sudo once for pacman)
set -e
cd "$(dirname "$0")/.."
echo "== system packages"
sudo pacman -S --needed --noconfirm git python ffmpeg fontconfig nss alsa-lib at-spi2-core libxkbcommon libxcomposite libxdamage libxrandr mesa pango cairo
echo "== fonts: bundled in fontpack/ (exact cloud fonts) — nothing to install"
echo "== python env (~/.violet-venv) — downloads ~200 MB, can take 5-10 min, progress below"
python -m venv "$HOME/.violet-venv"
"$HOME/.violet-venv/bin/pip" install -q --upgrade pip
"$HOME/.violet-venv/bin/pip" install --progress-bar on "playwright==1.56.0" numpy opencv-python-headless
"$HOME/.violet-venv/bin/python" -m playwright install chromium && echo "chromium OK"
echo
echo "READY. Render an episode with:"
echo "  ~/.violet-venv/bin/python tools/render_local.py ep03"
