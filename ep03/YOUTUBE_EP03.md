# EP03 — YouTube pack

## Title (pick one)
1. Claude Code for Free: Run It With Local Models (Ollama, LM Studio, llama.cpp)
2. Run Claude Code Locally for Free: Ollama Setup + 3 Traps Nobody Mentions
3. Free Claude Code With Ollama: Which Model for Your GPU (8GB / 24GB)

Recommended: **1**. The search phrase "Claude Code for free" comes first, and the three tool names people search for come after it.

## Description
You can run Claude Code for free: same agent, same terminal, same commands. The only thing you swap is the brain, a model running on your own computer instead of Anthropic's servers. In this video: three ways to set it up (Ollama, LM Studio, llama.cpp), which model fits your graphics card, and the three traps that make most people give up in the first ten minutes.

📌 Free step-by-step guide (which model fits your exact GPU, which file to grab, the settings I use): https://t.me/violet_ina

Chapters
0:00 Claude Code for free?
0:33 Why this is even possible
1:21 Setup, the easy way (Ollama)
1:56 LM Studio and llama.cpp
2:34 VS Code: the catch
2:49 Trap 1: the context window
3:43 Trap 2: tool calls
4:39 Trap 3: no cache
5:14 Which model for your card
6:03 The honest verdict

Quick start
• Ollama, one command:
  ollama launch claude --model qwen3.6:35b-a3b
• Or by hand (PowerShell):
  $env:ANTHROPIC_BASE_URL = "http://localhost:11434"
  $env:ANTHROPIC_AUTH_TOKEN = "ollama"
  claude --model qwen3.6:35b-a3b
• LM Studio: start the server, base URL http://localhost:1234
• llama.cpp: llama-server with -c (context size) and --jinja, base URL http://localhost:8080
• Context: give the model at least 32K (64K is comfortable). In Ollama, set OLLAMA_CONTEXT_LENGTH.
• VS Code extension: put the variables into claudeCode.environmentVariables in settings.json. The extension does not read your terminal variables.

Interfaces in this video are recreated for illustration. Versions, models and prices change fast, so check the official docs before you set things up.

## Tags
claude code, claude code free, claude code local model, claude code ollama, run claude code locally, ollama, lm studio, llama.cpp, local llm, local ai coding, free ai coding agent, anthropic_base_url, qwen 3.6, qwen3.6 35b a3b, gpt-oss 20b, gemma 4, ollama context length, tool calling local model, opencode, vibe coding, ai coding 2026, self hosted ai, run llm locally, claude code setup, claude code vs local

## Settings
- Audience: not made for kids.
- Language: English.
- Category: Science & Technology.
- Chapters: on (the timecodes above are enough).
- End screen: right half of the last 11 s (6:59–7:10): one video plus subscribe. The left half has the Telegram QR.

## Pinned comment (optional)
Which GPU are you running? Tell me your VRAM and I'll tell you which model to try first. Full guide: https://t.me/violet_ina
