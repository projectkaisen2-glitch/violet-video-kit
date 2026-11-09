# Voice-over for EP04: 15 blocks, Kokoro af_heart

Below this instruction there are 15 voice blocks, each starting with a marker line `=== <id> ===`.
- `00` = long-video intro.
- `01`–`08` = the eight tool blocks. Each one is also a Short on its own.
- `99` = long-video finale.
- `t1`–`t5` = short end lines for the Shorts.

The text after the marker, up to the next marker, is the exact text of that block.
Do not change a single word, do not fix spelling, do not reword. Numbers, names and abbreviations are already written the way they must be spoken (e.g. "twenty twenty-six", "C L I", "N P M", "L M Studio", "S W E").

Step 0. Split this file into 15 texts by the markers (the marker line itself is not spoken).

For each block:
1. Synthesize with **Kokoro**, voice **af_heart**, lang_code `a` (American English), speed **1.0**, sample rate 24 kHz.
2. Synthesize the whole block as one piece. If the pipeline splits it into chunks, concatenate the chunks in order with no extra pauses.
3. Save `<id>.wav`: mono, 24 kHz, 16-bit PCM.
   - Normalize loudness to **−16 LUFS** (integrated), with true peak ≤ −1 dBTP.
   - Trim leading and trailing silence to ≤ 0.05 s.
4. Save `<id>.json` with word timings for that same WAV, in seconds from the start of the file:
   `[{"word": "The", "start": 0.000, "end": 0.120}, …]`
   - Take the timings from Kokoro's token timestamps (`start_ts`, `end_ts`).
   - Shift each chunk's timings by the duration of the chunks before it.
   - If you trimmed leading silence, shift all timings by the same amount.
   - Every word of the text must appear once, in order.

Checks before you finish:
- 15 WAV + 15 JSON, named by the block ids.
- For each block, all three of these must hold:
  - the last word's `end` is ≤ the WAV duration;
  - timings strictly increase;
  - the word count in the JSON equals the word count in the block text (±2 for punctuation tokens).
- Print a table: id · duration (s) · words · LUFS.

Pack all 30 files into `ep04_voice.zip` and tell me where it is.

---

=== 00 ===
Eight A I coding tools. One got bought by a rocket company. One got switched off by Google. And only one made S tier. Here's the twenty twenty-six tier list.

=== 01 ===
The most popular A I code editor is now owned by a rocket company. In August, SpaceX closed a sixty-billion-dollar deal for Cursor. In October, Cursor was folded into the X Subscription, right next to Grok and X Premium. The editor itself is still excellent: fast agents, cloud agents, built-in code review. But here's the catch. The cheapest plan, eight dollars, only runs Grok. Claude and G P T are no longer included at all. They bill at A P I price from the very first request. And that in-house model, Composer two? Cursor admitted it was built on top of Moonshot's Kimi. Great editor, shaky deal. Cursor goes to B tier.

=== 02 ===
Google switched off its best free coding agent, even for people paying for Ultra. In twenty twenty-five, Gemini C L I was the free champion: a thousand requests a day, open source, over a hundred thousand stars on GitHub. Then, in June twenty twenty-six, Google cut it off. For free users, and for paying A I Pro and Ultra subscribers too. The replacement is Antigravity C L I. It's closed source. And users say its weekly quota runs out after a couple of requests. You can't rank what you can't use. Gemini C L I: F tier.

=== 03 ===
GitHub Copilot switched to token billing, and one user projected his bill jumping from thirty-nine dollars to eight hundred forty-seven. Since June first, every Copilot plan runs on A I Credits: one cent each, billed by tokens. Pro is ten dollars for fifteen hundred credits, Pro Plus is thirty-nine, and there's a new Max plan at a hundred. Autocomplete is still free. Chat and agents eat credits. The upside: Copilot works almost everywhere. V S Code, JetBrains, Eclipse, Xcode, even GitHub itself. And it's still the cheapest way in. Cheapest entry, least predictable bill. B tier.

=== 04 ===
Windsurf doesn't exist anymore. OpenAI almost bought it for three billion dollars. Then Google hired the C E O, Cognition bought the rest, and in June twenty twenty-six, Windsurf became Devin Desktop. Windsurf dot com now redirects to Devin. Even Cascade, the agent people actually loved, has been replaced by Devin's own agent. What's left is a solid V S Code fork with Cognition's own S W E models. Pro is twenty dollars, Max is two hundred. New name, new brain, same price. C tier.

=== 05 ===
Apps built with Lovable get nine hundred million visits a month. And for forty-eight days, anyone could read their code. Lovable builds a whole web app from one chat message, and it's genuinely great at landing pages and prototypes. It's now worth thirteen billion dollars. But in March, a researcher found that any free account could pull other users' source code, database keys and A I chats in a handful of requests. For older projects, it stayed open for forty-eight days. Lovable's first response? Intentional behaviour. Pro is twenty-five dollars for a hundred credits, and credit burn is the number one complaint. Perfect for a prototype, scary for real users. C tier.

=== 06 ===
OpenAI tried to cut its two-hundred-dollar coding plan in half, and backed down the day before. At Dev Day in September, OpenAI announced that the two-hundred-dollar Pro plan would get half the Codex usage. Users revolted, and on October twenty-ninth, OpenAI cancelled the cut, and doubled limits on other plans. Codex now lives inside the ChatGPT app, and it runs everywhere: terminal, V S Code, JetBrains, Xcode, the cloud, even your phone. One catch: the command-line tool needs at least ChatGPT Plus, twenty dollars. Free users only get the desktop app. Biggest reach, but the limits keep moving. A tier.

=== 07 ===
This coding agent costs zero dollars, and it can run on your own G P U. Cline is open source and free. You bring the model: Claude, G P T, Gemini, or a local model through Ollama or L M Studio, with no subscription at all. It runs in V S Code, JetBrains, as a desktop app and in the terminal, with plan and act modes and checkpoints. The scar: in February, a poisoned Cline update sat on N P M for eight hours. Attackers got in through a prompt hidden in a GitHub issue title, and the update quietly installed another A I agent on about four thousand machines. Cline has since locked down its publishing. Free, open, and fully yours. A tier.

=== 08 ===
Two out of three developers who use A I agents use this one. In the twenty twenty-six Stack Overflow survey, sixty-six percent of agent users said they use Claude Code. More than GitHub Copilot. It lives in your terminal, plugs into your editor, and runs whole teams of sub-agents on the newest Claude models. It wasn't a clean year: in March, a packaging mistake leaked five hundred twelve thousand lines of its own source code. And there's no free plan. Pro is twenty dollars, Max starts at a hundred. The one everyone else is chasing. S tier.

=== 99 ===
So here's the board. S: Claude Code. A: Codex and Cline. B: Cursor and Copilot. C: Windsurf and Lovable. F: Gemini C L I. Disagree? Tell me in the comments where your tool belongs. Every week I test A I coding tools so you don't waste money on the wrong one. Subscribe if that helps. And the free guide for running Claude Code on a local model is in my Telegram.

=== t1 ===
Where does your tool rank? Full twenty twenty-six tier list, tap the video below.

=== t2 ===
Seven more tools, one S tier. Full list in the video below.

=== t3 ===
See who made S tier. Full ranking linked below.

=== t4 ===
The full tier list is one tap away. Video below.

=== t5 ===
Who's in A tier? Full list in the video below.
