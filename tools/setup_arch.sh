#!/bin/bash
# One-time setup of the VIOLET render machine on Arch Linux.
# usage: bash tools/setup_arch.sh        (asks for sudo once for pacman)
set -e
cd "$(dirname "$0")/.."
echo "== system packages"
sudo pacman -S --needed --noconfirm git python ffmpeg ttf-dejavu unzip nss alsa-lib at-spi2-core libxkbcommon libxcomposite libxdamage libxrandr mesa pango cairo
echo "== fonts: Inter 4.0 (same version as the cloud render)"
F="$HOME/.local/share/fonts/violet-inter"
if [ ! -f "$F/InterDisplay-Bold.otf" ]; then
  mkdir -p "$F" /tmp/violet-inter && cd /tmp/violet-inter
  curl -fsSLo inter.zip https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip
  unzip -qo inter.zip && cp extras/otf/*.otf "$F/" && cd - >/dev/null && rm -rf /tmp/violet-inter
  fc-cache -f >/dev/null
fi
fc-list : family | grep -q "Inter Display" && echo "Inter Display OK" || { echo "Inter Display font missing"; exit 1; }
echo "== python env (~/.violet-venv)"
python -m venv "$HOME/.violet-venv"
"$HOME/.violet-venv/bin/pip" install -q --upgrade pip
"$HOME/.violet-venv/bin/pip" install -q "playwright==1.56.0" numpy opencv-python-headless
"$HOME/.violet-venv/bin/python" -m playwright install chromium
echo
echo "READY. Render an episode with:"
echo "  ~/.violet-venv/bin/python tools/render_local.py ep03"
