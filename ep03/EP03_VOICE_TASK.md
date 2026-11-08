# Voice-over for EP03: 19 blocks, Kokoro af_heart

Below this instruction there are 19 voice blocks, each starting with a marker line `=== <id> ===` (01a … 10a).
The text after the marker, up to the next marker, is the exact text of that block.
Do not change a single word, do not fix spelling, do not reword. Numbers, names and commands are already written the way they must be spoken (e.g. "ANTHROPIC BASE URL", "eleven four three four", "dash dash model").

Step 0. Split this file into 19 texts by the markers (the marker line itself is not spoken).

For each block:
1. Synthesize with **Kokoro**, voice **af_heart**, lang_code `a` (American English), speed **1.0**, sample rate 24 kHz.
2. Synthesize the whole block as one piece (if the pipeline splits it into chunks, concatenate the chunks in order with no extra pauses).
3. Save `<id>.wav`: mono, 24 kHz, 16-bit PCM, loudness normalized to **−16 LUFS** (integrated), true peak ≤ −1 dBTP. Trim leading/trailing silence to ≤ 0.05 s.
4. Save `<id>.json` with word timings for that same WAV, in seconds from the start of the file:
   `[{"word": "You", "start": 0.000, "end": 0.180}, …]`
   Take them from Kokoro's token timestamps (`start_ts`, `end_ts`) and shift each chunk's timings by the duration of the chunks before it. If you trimmed leading silence, shift all timings by the same amount. Every word of the text must appear once, in order.

Checks before you finish:
- 19 WAV + 19 JSON, named by the block ids.
- For each block: last word `end` ≤ WAV duration, timings strictly increase, word count in JSON = word count in the block text (±2 for punctuation tokens).
- Print a table: id · duration (s) · words · LUFS.

Pack all 38 files into `ep03_voice.zip` and tell me where it is.

---

=== 01a ===
You can run Claude Code for free. Same agent, same terminal, same commands. The only thing you swap is the brain: instead of Anthropic's servers, it's a model running on your own computer. No subscription, no limits, and your code never leaves your machine.

=== 01b ===
In this video I'll show you exactly how to set it up in three different ways, which model to pick for your graphics card, and the three traps that make most people give up in the first ten minutes. Because yes, it works. But not the way the five-minute tutorials promise.

=== 02a ===
Quick reminder from my last video. Claude Code is a harness: the hands. The model is the brain. And the hands don't actually care whose brain is plugged in. Claude Code talks to the model through one address. By default, that's Anthropic's server. But you can redirect it with a single setting called ANTHROPIC BASE URL. Point it somewhere else, and Claude Code will happily talk to whatever answers there.

=== 02b ===
For a long time, nothing local answered in the right language. That changed this January. In one two-week stretch, Ollama, llama dot C P P and LM Studio all learned to speak Anthropic's API. Ollama on January sixteenth, llama dot C P P three days later, LM Studio at the end of the month. Since then, running Claude Code on a local model is officially supported, not a hack.

=== 03a ===
The easiest route is Ollama. Install it, and you get one command: ollama launch, then Claude, then the model you want. It downloads the model if you don't have it, sets all the variables, and opens Claude Code already connected. That's it.

=== 03b ===
If you'd rather see what's happening under the hood, it's three lines. Set ANTHROPIC BASE URL to Ollama's local address: localhost, port eleven four three four. Set ANTHROPIC AUTH TOKEN to anything. Literally the word "ollama" works. Then start Claude with dash dash model and the model's name.

=== 04a ===
LM Studio works the same way. Start its server, point the base URL at port twelve thirty-four, and pick the model by name. This is the friendliest option if you hate the terminal: it shows you which file fits your card before you download anything.

=== 04b ===
And llama dot C P P is the speed option. You launch llama server with the model straight from Hugging Face, give it the context size and the jinja flag, and point Claude Code at port eighty eighty. It's the fastest of the three, but its Anthropic support is the roughest. Some people still get a login screen until they also set the auth token and the model name.

=== 04c ===
One catch for VS Code users: the Claude Code extension doesn't read your terminal variables. You have to put the base URL and the token into the extension's own settings, or it will keep calling Anthropic and asking you to log in.

=== 05a ===
Now the traps. And the first one kills most setups before they even start. Claude Code is heavy. Before it reads a single word of your request, it sends the model around thirty-three thousand tokens: its instructions, its tool descriptions, its rules. A lean harness like OpenCode sends about seven thousand. That's four point seven times less, measured by an independent test this July.

=== 05b ===
So if your local model only has an eight-thousand-token window, Claude Code doesn't fit. At sixteen thousand, you get a demo. The practical minimum is thirty-two thousand, and sixty-four is the comfortable spot. And here's the sneaky part. Ollama doesn't always give your model the full window by default. If you don't raise it yourself with OLLAMA CONTEXT LENGTH, your context gets cut silently, and the agent forgets what it was doing after a couple of turns. No error. It just gets dumber.

=== 06a ===
Trap two: the model talks instead of acting. An agent works through tool calls: read this file, edit that line, run this command. A model has to be trained for that. If it isn't, you'll see something strange: it prints the tool call as plain text, a chunk of JSON right in the chat, and nothing actually happens. No file gets created, no error appears.

=== 06b ===
One developer tested this back in January on a MacBook with 32 gigs. Gemma three, four B simply refused: "does not support tools." Llama three point one, eight B wrote broken code. Qwen two point five Coder, fourteen B printed its to-do list as text instead of doing anything. His verdict: not practical yet. The fix is choosing a model that was trained for agents, and, in llama dot C P P, not forgetting the jinja flag, because without the right chat template even a good model can't call tools.

=== 07a ===
Trap three is speed, and it's about the cache. In my last video I showed that on a paid plan, almost the whole bill is cache: the model re-reading your conversation at a huge discount. Locally, there's usually no prompt cache in this setup. So at every step, your graphics card re-reads the entire conversation from scratch. Thirty-three thousand tokens of instructions, plus your files, plus everything said so far. Again and again. Short tasks feel fine. Long sessions get slower and slower. That's why, locally, the rule from my last video matters even more: one task per session, then clear.

=== 08a ===
So which brain do you plug in? If you've got 8 gigs of V-RAM and at least 16 gigs of RAM, go with a mixture-of-experts model like Qwen three point six, thirty-five B, A three B. Only a small part of it works at any moment, so it runs on modest hardware. It's weak for long projects, but it handles small scripts.

=== 08b ===
With 24 gigs, you can run the dense Qwen three point six, twenty-seven B at four-bit, and it's a serious step up. If you just want the easiest start, OpenAI's open G P T O S S, twenty B is what many guides use first. Google's Gemma four, twenty-six B, A four B is another popular pick, with tool calling built in. What to avoid: older general chat models with no tool training, like the stock Llama three instruct versions. They're the ones that print JSON and do nothing.

=== 09a ===
So, is it a free replacement for a two-hundred-dollar subscription? No. And anyone who says yes is selling you a thumbnail. A local model inside Claude Code won't match Opus on a big project. It will make more mistakes, it will be slower on long sessions, and you'll spend time on setup.

=== 09b ===
But it's genuinely useful in three situations. When your limits are burned and you still need small fixes done. When the code can't leave your computer, because it's private, or it's your client's. And when you're offline. And if Claude Code itself feels too heavy for your card, try a lean open harness like OpenCode or Pi with the same model. Less overhead means more room for your code.

=== 10a ===
The full step-by-step guide is in my Telegram: which model fits your exact card, which file to grab, and the settings I actually use. Link in the description. Give your model real hands. Even if, for now, they're a little clumsy.
