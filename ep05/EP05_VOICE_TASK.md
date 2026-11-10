# Voice-over for EP05: 24 blocks, Kokoro af_heart

Below this instruction there are 24 voice blocks, each starting with a marker line `=== <id> ===`.
- `00` = long-video intro.
- `m0` = long-video method part.
- `01`–`08` = the eight plan blocks. Each one is also a Short on its own.
- `l1`–`l8` = long-video-only add-ons, one per block (spoken right after block 01…08 in the long video).
- `98` = long-video cheat sheet.
- `99` = long-video finale.
- `t1`–`t4` = short end lines for the Shorts.

The text after the marker, up to the next marker, is the exact text of that block.
Do not change a single word, do not fix spelling, do not reword. Numbers, names and abbreviations are already written the way they must be spoken (e.g. "twenty dollars", "A P I", "G P T", "G L M", "slash usage").

Step 0. Split this file into 24 texts by the markers (the marker line itself is not spoken).

For each block:
1. Synthesize with **Kokoro**, voice **af_heart**, lang_code `a` (American English), speed **1.0**, sample rate 24 kHz.
2. Synthesize the whole block as one piece. If the pipeline splits it into chunks, concatenate the chunks in order with no extra pauses.
3. Save `<id>.wav`: mono, 24 kHz, 16-bit PCM.
   - Normalize loudness to **−16 LUFS** (integrated), with true peak ≤ −1 dBTP.
   - Trim leading and trailing silence to ≤ 0.05 s.
4. Save `<id>.json` with word timings for that same WAV, in seconds from the start of the file:
   `[{"word": "Same", "start": 0.000, "end": 0.180}, …]`
   - Take the timings from Kokoro's token timestamps (`start_ts`, `end_ts`).
   - Shift each chunk's timings by the duration of the chunks before it.
   - If you trimmed leading silence, shift all timings by the same amount.
   - Every word of the text must appear once, in order.

Checks before you finish:
- 24 WAV + 24 JSON, named by the block ids.
- For each block, all three of these must hold:
  - the last word's `end` is ≤ the WAV duration;
  - timings strictly increase;
  - the word count in the JSON equals the word count in the block text (±2 for punctuation tokens).
- Print a table: id · duration (s) · words · LUFS.

Pack all 48 files into `ep05_voice.zip` and tell me where it is.

---

=== 00 ===
Same twenty dollars. One plan buys you about six hundred agent tasks a month. Another buys you fourteen. I priced every A I coding plan in the same currency. Here's what your money actually gets.

=== m0 ===
Every company counts limits differently: messages, credits, five-hour windows, weekly caps. So I picked one unit. A standard agent task, a medium bug fix: about a million tokens read from cache, sixty thousand written, twenty-five thousand generated. At official A P I prices, that's one dollar six on Claude Opus, and fifty-three cents on Sonnet or G P T. Then I converted every plan into A P I dollars. Some numbers are official. Claude and ChatGPT don't publish theirs, so I use independent measurements, and I'll say which is which. One warning: the same task can cost thirty times more on a bad run. The exact counts move. The ranking doesn't.

=== 01 ===
Twenty dollars of Claude Pro buys about six hundred seventy dollars of A I. That's from independent measurements across seventy-nine accounts: roughly a hundred fifty-five dollars of A P I usage every week. In my standard task, that's about eleven Opus bug fixes per five-hour window, and around thirteen full windows a week. The catch is the weekly cap. That's what actually stops you, not the five hours. And the bigger plans scale less than the name said. Ultra used to be sold as twenty times Pro. Per week, it's ten. Most work per dollar of any plan I priced.

=== l1 ===
Who it's for: you code every day and want the best model. Who it's not for: you also chat with Claude all day, because chat eats the same limit. Tip: run slash usage to see what's burning it, slash clear between tasks, and use Sonnet for routine work. It's half the price of Opus.

=== 02 ===
GitHub Copilot Pro costs ten dollars, and gives you exactly fifteen dollars of A I. Since June, Copilot runs on A I Credits: fifteen hundred a month, one cent each. And Copilot charges the same A P I prices as Anthropic. So that's about fourteen Opus bug fixes. A month. Pro Plus, thirty-nine dollars, is seventy dollars of credits. GitHub also removed the free fallback models. When credits run out, you pay, or you wait. What's still unlimited: autocomplete. Great autocomplete, tiny agent.

=== l2 ===
Who it's for: you mostly want suggestions while you type, in any editor. Who it's not for: you want an agent to do whole tasks. Tip: keep Copilot for autocomplete and pair it with a separate agent. Auto model selection also takes ten percent off.

=== 03 ===
Cursor doesn't sell a twenty-dollar plan anymore. Since October twelfth, new users get the X Subscription. Eight dollars runs only Grok and Cursor's own models. Thirty dollars, Premium, adds Claude and G P T, but at full A P I price, from the very first request. So in my standard task, every Opus bug fix is another dollar on top of the thirty. If you still have the old twenty-dollar Pro, keep it. Switching is permanent. You're paying for the editor. The A I is extra.

=== l3 ===
Who it's for: you love Cursor's editor, and you're fine with Grok. Who it's not for: you came to Cursor for Claude. Tip: set a monthly spending cap before you top up. Top-ups pay for third-party models first.

=== 04 ===
ChatGPT Plus gives you about two hundred dollars of Codex, and that number keeps falling. Independent measurements put Plus at around forty-six dollars of A P I usage a week. Ten times the price. In early October, it measured ninety-two. No announced cut. The mix of models changed. In August, OpenAI brought the five-hour limit back for Plus. And in December, ChatGPT and Codex start sharing one allowance, so every chat will eat into your coding. Solid value today. Watch it closely.

=== l4 ===
Who it's for: you already pay for ChatGPT, so Codex is a free bonus. Who it's not for: you need a predictable limit. Tip: the measurement is only six accounts. Check your own usage bar every week before you rely on it.

=== 05 ===
Google won't tell you how much coding twenty dollars buys. Google A I Pro includes Antigravity with Claude and Gemini models, a five-hour quota and a weekly cap. But no numbers. Anywhere. On Google's own forum, Pro users report lockouts of five to seven days. Google says that's the weekly limit working as intended. Devin Pro, formerly Windsurf, is the same story: a daily and weekly quota, zero numbers. What Google does give you: five terabytes of storage, and YouTube Premium Lite. You're buying a bundle, not a coding plan.

=== l5 ===
Who it's for: you'd pay for Google storage anyway, and the coding is a bonus. Who it's not for: anyone who needs to plan a work week. Tip: keep a second tool for when you're locked out.

=== 06 ===
There are A I coding plans for ten dollars. Here's the catch. OpenCode Go is ten dollars for up to sixty dollars of usage a month, across thirty-two models, mostly open ones like Kimi, G L M and DeepSeek. Z dot A I's G L M plan starts at eighteen. They plug straight into tools like Claude Code. The catches: your code goes to servers under Chinese jurisdiction. Quotas get rewritten every few months. G L M burns credits twice as fast in Singapore's afternoon peak. And as good as Sonnet is the vendors' claim, not mine. Cheap and real. Just not for your company's code.

=== l6 ===
Who it's for: side projects, learning, open-source work. Who it's not for: client or company code with compliance rules. Tip: use it as a second engine for routine tasks, and keep your main plan for the hard ones.

=== 07 ===
If you're a student, you can get an A I coding agent for zero dollars. Copilot Student is free for verified students, including high school. You get unlimited autocomplete and, by third-party reports, about two hundred A I credits a month, on automatic model choice only. Not a student? Copilot Free gives two thousand completions a month. And the only truly unlimited option: a local model on your own computer. Slower, weaker, but no limits, and nothing leaves your machine. Zero dollars is a real plan.

=== l7 ===
Who it's for: learning, school projects, trying agents before you pay. Who it's not for: long agent sessions. Two hundred credits can go in one evening. Tip: apply through GitHub Education with a dated school I D, and don't enter a card if it shows you paid plans.

=== 08 ===
When should you pay more than twenty dollars? Here's the math. Paying per token, twenty dollars buys about nineteen Opus bug fixes. So if you do fewer than that a month, skip the subscription and use an A P I key. Two twenty-dollar plans, Claude and ChatGPT, give you two separate limits: about eight hundred seventy dollars of usage for forty. But if you hit Claude's weekly cap three weeks in a row, the hundred-dollar Max is five times Pro. About three thousand three hundred dollars of usage. Per dollar, that's the best deal on this list. Upgrade when the cap stops you, not before.

=== l8 ===
Tip: check your usage history for a month first. Most people who think they need a hundred dollars hit the cap in only one bad week.

=== 98 ===
Here's the cheat sheet. Learning, or in school: Copilot Student, or a local model. Zero dollars. Coding an hour a day: Claude Pro. Most work per dollar. Already paying for ChatGPT: use Codex before you buy anything else. Mostly autocomplete: Copilot Pro, ten dollars. Love the Cursor editor: Premium, with a spending cap. Tight budget, side projects: OpenCode Go, with the data catch. Agent running all day: Claude Max. And under twenty tasks a month: just pay per token. Prices are before tax, and every one of these changed at least once this year. Screenshot this, and check again in a month.

=== 99 ===
Which plan are you on, and did it match the math? Tell me in the comments. Every week I break down A I coding tools so you don't overpay. Subscribe if that helps. And the free guide to running Claude Code on a local model is in my Telegram, violet underscore ina.

=== t1 ===
Every plan, priced in one currency. Full breakdown on my channel.

=== t2 ===
Which twenty dollars buys the most? Full video on my channel.

=== t3 ===
Eight plans, one cheat sheet. It's on my channel.

=== t4 ===
The full price math is on my channel.
