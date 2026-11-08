# EP03 — Claude Code for Free: Run It With Local Models
Target length: ~9–10 min (≈1,400 words). Voice: female, first person (channel persona). Draft for owner approval.

---

## 01 · Hook (0:00)
You can run Claude Code for free. Same agent, same terminal, same commands. The only thing you swap is the brain: instead of Anthropic's servers, it's a model running on your own computer. No subscription, no limits, and your code never leaves your machine.

In this video I'll show you exactly how to set it up in three different ways, which model to pick for your graphics card, and the three traps that make most people give up in the first ten minutes. Because yes, it works. But not the way the five-minute tutorials promise.

## 02 · Why this is even possible
Quick reminder from my last video. Claude Code is a harness: the hands. The model is the brain. And the hands don't actually care whose brain is plugged in.

Claude Code talks to the model through one address. By default, that's Anthropic's server. But you can redirect it with a single setting called ANTHROPIC_BASE_URL. Point it somewhere else, and Claude Code will happily talk to whatever answers there.

For a long time, nothing local answered in the right language. That changed this January. In one two-week stretch, Ollama, llama.cpp and LM Studio all learned to speak Anthropic's API. Ollama on January sixteenth, llama.cpp three days later, LM Studio at the end of the month. Since then, running Claude Code on a local model is officially supported, not a hack.

## 03 · Setup, the easy way
The easiest route is Ollama. Install it, and you get one command: ollama launch, then Claude, then the model you want. It downloads the model if you don't have it, sets all the variables, and opens Claude Code already connected. That's it.

If you'd rather see what's happening under the hood, it's three lines. Set ANTHROPIC_BASE_URL to Ollama's local address, localhost, port 11434. Set ANTHROPIC_AUTH_TOKEN to anything, literally the word "ollama" works. Then start Claude with dash dash model and the model's name.

## 04 · Setup, the other two ways
LM Studio works the same way. Start its server, point the base URL at port 1234, and pick the model by name. This is the friendliest option if you hate the terminal: it shows you which file fits your card before you download anything.

And llama.cpp is the speed option. You launch llama-server with the model straight from Hugging Face, give it the context size and the jinja flag, and point Claude Code at port 8080. It's the fastest of the three, but its Anthropic support is the roughest. Some people still get a login screen until they also set the auth token and the model name.

One catch for VS Code users: the Claude Code extension doesn't read your terminal variables. You have to put the base URL and the token into the extension's own settings, or it will keep calling Anthropic and asking you to log in.

## 05 · Trap one: the context window
Now the traps. And the first one kills most setups before they even start.

Claude Code is heavy. Before it reads a single word of your request, it sends the model around thirty-three thousand tokens: its instructions, its tool descriptions, its rules. A lean harness like OpenCode sends about seven thousand. That's four point seven times less, measured by an independent test this July.

So if your local model only has an eight-thousand-token window, Claude Code doesn't fit. At sixteen thousand, you get a demo. The practical minimum is thirty-two thousand, and sixty-four is the comfortable spot.

And here's the sneaky part. Ollama doesn't always give your model the full window by default. If you don't raise it yourself with OLLAMA_CONTEXT_LENGTH, your context gets cut silently, and the agent forgets what it was doing after a couple of turns. No error. It just gets dumber.

## 06 · Trap two: tool calls
Trap two: the model talks instead of acting.

An agent works through tool calls: read this file, edit that line, run this command. A model has to be trained for that. If it isn't, you'll see something strange: it prints the tool call as plain text, a chunk of JSON right in the chat, and nothing actually happens. No file gets created, no error appears.

One developer tested this back in January on a MacBook with 32 gigs. Gemma 3 4B simply refused: "does not support tools." Llama 3.1 8B wrote broken code. Qwen 2.5 Coder 14B printed its to-do list as text instead of doing anything. His verdict: not practical yet.

The fix is choosing a model that was trained for agents, and, in llama.cpp, not forgetting the jinja flag, because without the right chat template even a good model can't call tools.

## 07 · Trap three: no cache
Trap three is speed, and it's about the cache.

In my last video I showed that on a paid plan, almost the whole bill is cache: the model re-reading your conversation at a huge discount. Locally, there's usually no prompt cache in this setup. So at every step, your graphics card re-reads the entire conversation from scratch. Thirty-three thousand tokens of instructions, plus your files, plus everything said so far. Again and again.

Short tasks feel fine. Long sessions get slower and slower. That's why, locally, the rule from my last video matters even more: one task per session, then clear.

## 08 · Which model for your card
So which brain do you plug in?

If you've got 8 gigs of VRAM and at least 16 gigs of RAM, go with a mixture-of-experts model like Qwen 3.6 35B-A3B. Only a small part of it works at any moment, so it runs on modest hardware. It's weak for long projects, but it handles small scripts.

With 24 gigs, you can run the dense Qwen 3.6 27B at four-bit, and it's a serious step up. If you just want the easiest start, OpenAI's open gpt-oss 20B is what many guides use first. Google's Gemma 4 26B-A4B is another popular pick, with tool calling built in.

What to avoid: older general chat models with no tool training, like the stock Llama 3 instruct versions. They're the ones that print JSON and do nothing.

## 09 · The honest verdict
So, is it a free replacement for a two-hundred-dollar subscription? No. And anyone who says yes is selling you a thumbnail.

A local model inside Claude Code won't match Opus on a big project. It will make more mistakes, it will be slower on long sessions, and you'll spend time on setup.

But it's genuinely useful in three situations. When your limits are burned and you still need small fixes done. When the code can't leave your computer, because it's private, or it's your client's. And when you're offline. And if Claude Code itself feels too heavy for your card, try a lean open harness like OpenCode or Pi with the same model. Less overhead means more room for your code.

## 10 · Outro
The full step-by-step guide is in my Telegram: which model fits your exact card, which file to grab, and the settings I actually use. Link in the description.

Give your model real hands. Even if, for now, they're a little clumsy.

---

## Facts to double-check before animation (owner review)
- Dates: Ollama Anthropic API Jan 16 2026; llama.cpp Jan 19 2026 (HF blog); LM Studio 0.4.1, Jan 30 2026 (DEV article).
- `ollama launch claude` (Ollama v0.15+, classmethod.jp Jan 2026); some sources write `ollama launch claude-code` — exact spelling to confirm.
- 33k vs 7k tokens, 4.7× — Systima benchmark, July 2026 (secondary sources).
- Minimum 32k / sweet spot 64k context — DEV article (Apr 2026), Ollama article (Jun 2026).
- "Ollama doesn't always give the full window by default" — from our EP02 material (Ollama <24 GB → 4k); exact default to confirm.
- No prompt caching locally — DEV article (Ollama compat) and angelo-lima (Jun 2026).
- January test (Gemma 3 4B / Llama 3.1 8B / Qwen 2.5 Coder 14B, M4 32 GB) — classmethod.jp, Jan 25 2026.
- Qwen 3.6 35B-A3B on 8 GB VRAM + 16 GB RAM — our EP02 material. Qwen 3.6 27B fits 24 GB at Q4 — angelo-lima (Jun 2026). I left out its "77.2% SWE-bench" figure: one secondary source only.
