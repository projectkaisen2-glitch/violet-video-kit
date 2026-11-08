# Voice-over for EP02: 48 blocks, Kokoro af_heart

Below this instruction there are 48 voice blocks, each starting with a marker line `=== <id> ===` (01a … 17a).
The text after the marker, up to the next marker, is the exact text of that block.
Do not change a single word, do not fix spelling, do not reword. Numbers and names are already written the way they must be spoken (e.g. "Opus five point five", "pie-P-I", "slash clear").

Step 0. Split this file into 48 texts by the markers (the marker line itself is not spoken).

For each block:
1. Synthesize with **Kokoro**, voice **af_heart**, lang_code `a` (American English), speed **1.0**, sample rate 24 kHz.
2. Synthesize the whole block as one piece (if the pipeline splits it into chunks, concatenate the chunks in order with no extra pauses).
3. Save `<id>.wav`: mono, 24 kHz, 16-bit PCM, loudness normalized to **−16 LUFS** (integrated), true peak ≤ −1 dBTP. Trim leading/trailing silence to ≤ 0.05 s.
4. Save `<id>.json` with word timings for that same WAV, in seconds from the start of the file:
   `[{"word": "Picture", "start": 0.000, "end": 0.412}, …]`
   Take them from Kokoro's token timestamps (`start_ts`, `end_ts`) and shift each chunk's timings by the duration of the chunks before it. If you trimmed leading silence, shift all timings by the same amount. Every word of the text must appear once, in order.

Checks before you finish:
- 48 WAV + 48 JSON, named by the block ids.
- For each block: last word `end` ≤ WAV duration, timings strictly increase, word count in JSON = word count in the block text (±2 for punctuation tokens).
- Print a table: id · duration (s) · words · LUFS.

Pack all 96 files into `ep02_voice.zip` and tell me where it is.

---

=== 01a ===
Picture this. Someone's paying twenty bucks a month for ChatGPT. They open the chat, paste in a chunk of code, wait, copy the answer, and drag it back into their editor. Then an error pops up in the console, so they copy the error, paste it back into the chat, and fix it by hand. And the whole time they're thinking: wow, the future is here, it all just works. But why are you working as an unpaid courier between an AI and the files on your own drive? While you're shuttling text back and forth, the models learned to edit files, run commands, and pretty much get the job done without you.

=== 01b ===
Today we're climbing the whole ladder: from clicking buttons in a browser, to broke-tier setups on free API keys, to full-on rabbit holes with local models. And we're counting the real cost, down to the cent.

=== 02a ===
So what is this thing that does everything by itself? Professional developers have mostly left the chat window. According to JetBrains, the people behind IntelliJ and PyCharm, 90 percent of professionals run AI agents at least once a week. The chat window is now mostly non-programmers: paying the standard twenty dollars a month and never having heard the words "agent" or "harness".

=== 02b ===
Let's separate the two. An agent is when the model doesn't just print text on a screen. It goes into your files, runs commands, writes code, and fixes its own mistakes on the fly. A harness is the program wrapped around the model that gives it hands: access to your files, your terminal, your tests. The term "vibe coding" came from Andrej Karpathy, and he meant throwaway weekend projects. Hit accept, don't read the diff, forget the code even exists. Later he called that post a throwaway, and called the real work "agentic engineering": managing agents.

=== 02c ===
Honestly? I see pure human stubbornness here. People want to download and set up nothing so badly that the companies gave in. Claude Code and Codex got stuffed right into the browser, running on someone else's servers. ChatGPT got ChatGPT agent, with its own cloud computer and browser. All so that people, God forbid, never have to open a terminal.

=== 03a ===
Coming up: what that famous two-hundred-dollar subscription is actually worth, and how to burn a week of limits in under two days. Why the advertised price per million tokens tells you almost nothing about your bill. Whose subscription officially works in third-party tools, and whose can get you banned. What are these eighteen-dollar subscriptions quietly sitting on the market, and why does almost nobody do the math on them?

=== 03b ===
Is DeepSeek still the cheapest thing around, and who's suddenly beating it? What one detail earned Kimi a special shout-out? Which free access to dozens of models lets the provider train on your prompts, right there in the terms? What fresh models can your eight-gig gaming GPU actually run? Why does a fan-made remix of an open model finish hard work three times faster than the clunky original? And what's left for you if you're truly unhinged? Quick disclaimer: every price and limit in this video is current as of October thirty-first, twenty twenty-six. This space changes every week, so some of it may already be out of date.

=== 04a ===
Let's start with the first, most obvious rung: buy a subscription from the people who make the model, and use their own harness. Sounds basic. But for most people, AI is still stuck in a browser tab where you paste text in and copy text out. Plenty of people are convinced AI is only good for rewriting an email or making a thumbnail. Meanwhile, Claude puts together the whole rough cut of my videos. And no, that's not a one-off experiment. It's my daily routine.

=== 04b ===
But for heavy work, the base plan isn't enough. Throw big scripts or timelines at a model, and you slam into the limits fast. And I need a real working tool. "Why pay when there's a free tier?" Because the free tier only covers basic questions. A paid plan gives you at least five times the usage, and it unlocks Claude Code, which works with the files on your computer directly.

=== 05a ===
But even a paid plan has limits, and I hit them hard. In September, I burned through a full week of limits on two two-hundred-dollar flagship plans at once, Claude and Kimi, in 48 hours. That's it. Hard ceiling. Five more days without the top models. I was in full-on withdrawal. Luckily, there's always a backup: grab Codex for twenty bucks, switch on free models on some services, or go local. I also remembered I still had a student Gemini subscription. It was blazing fast, answers in seconds, but often not up to big, serious work.

=== 05b ===
That's exactly when this ladder saves you. When your project's dead in the water and all your access is burned, you just step down a rung, and you know exactly what you're paying, and for what. So what does that look like in real money? I pulled my Claude Code logs and my subscription bills, and recalculated everything at API prices. One week came out to two thousand six hundred fifty dollars, while the subscription itself cost me two hundred thirty-two dollars. Not bad.

=== 05c ===
SemiAnalysis, the folks who study the economics of AI, calculated the theoretical ceiling of these plans. There's also a story going around that a subscription gets you up to fourteen thousand dollars worth of usage. But that number came out back in June, and it was for ChatGPT. Claude's ceiling was noticeably lower. And these measurements go stale fast: literally the day before yesterday, Claude Max twenty-x got renamed to Ultra. Because on weekly limits, "twenty-x" was really only ten times Pro.

=== 05d ===
So who actually burns that much? Almost nobody. At companies, the average API spend per developer is a hundred fifty to two hundred fifty dollars a month. So a two-hundred-dollar plan only pays off if you actually work in it, not peek in once a week.

=== 06a ===
But the real secret is hiding inside the bill itself. Almost three quarters of it is cache. When an agent writes code, it doesn't keep the context in its head forever. At every single step, the harness re-sends the model your whole conversation and every open file. Cache is a huge discount for the server re-reading what it's already seen. In my October reports, 97 percent of tokens went to cache reads, while generating new code took a bit over a quarter of the money. That's why the advertised price per million tokens explains almost nothing. What matters most is how many times the model re-read your history.

=== 07a ===
And since re-reading is what burns the bill, how you work decides how long your limits last and how much you pay. I'm guilty too. I run endless conversations, and that's how I torched a week's limit in 48 hours. Okay, I'm lying: most of it was actually subagents. But the long chats helped. According to my logs on Opus five point five, a request at the tail end of a conversation costs four times more than at the start. The conversation won't break. But you're paying for every re-read.

=== 07b ===
That's why OpenAI and Anthropic officially recommend one task per session. Finished a piece of logic? Reset the context with slash clear. The model drops the junk and stops re-reading it on your dime. If the agent trips on the same error twice in a row, don't write a third fix. Roll back to the last checkpoint, rewind, and restate the task. Otherwise it'll sink deeper and deeper into its own hallucinations.

=== 07c ===
On complex features, demand a step-by-step plan before it touches the codebase. Keep your rules file short: only what isn't obvious from the project structure. For tests, set a strict condition, pass or fail, and make it show you the raw terminal output instead of sweet promises that everything's fixed. And use git. Seriously, use git. The harness's built-in undo won't save you from losing files. Of course, follow all these rules and there's basically nothing left of Karpathy's chill vibe coding.

=== 08a ===
And when your limit's burned to the ground anyway, where do you go? To Claude's biggest rival. Classic heavyweight fight: Claude Code versus ChatGPT plus Codex. Skip the fanboy wars. Claude Code is a strictly proprietary product. Yes, its source code accidentally leaked this spring thanks to a dumb packaging mistake, but that didn't change the license or the company's policies. Codex C-L-I is open source: take it and modify it however you want.

=== 08b ===
Artificial Analysis, an independent group that benchmarks agents professionally, ran both tools on hundreds of tasks. Claude Code with Opus five point five really does score highest: 62 versus 54. But you pay for that intelligence in both time and money. At API prices, one task on Claude costs over eleven dollars and takes a full hour. The same task in Codex costs about a dollar fifty and takes around 24 minutes. And on some other tests, the two flagships are dead even.

=== 08c ===
That's why, on the base twenty-dollar plan, people call Codex flat-out overpowered. On paper, Claude's limit is worth more in dollars. But Codex tasks are so much cheaper that you get more done, even with a slightly lower score. Plus, on October twenty-ninth, OpenAI doubled the limits on its hundred-dollar and five-hundred-dollar plans and restored the old limits on the two-hundred-dollar one. The twenty-dollar plan got nothing, though.

=== 08d ===
There's a security difference, too. Out of the box, Codex is locked in a system sandbox: no network access, and it can only write to your working folder. Claude Code's sandbox is off by default. Actions get checked by a classifier, and on plain Windows there's no sandbox at all.

=== 08e ===
And one more difference. I'd say it matters even more than the license. Since late September, a ChatGPT subscription officially works with open harnesses like OpenCode or Pi. You just log in, and requests come out of your usual plan. Anthropic, meanwhile, spent all spring tightening the screws. OpenCode removed subscription login after a request from Anthropic's lawyers. The company's own rules contradict each other right now, but third-party developers aren't allowed to route requests through your subscription. And with Google, linking your account to someone else's software can get you banned outright.

=== 09a ===
Speaking of tools, here's the eternal question: where do you run your agent, in the cloud or on your own hardware? "The browser's easier and safer." Fair. That's true on both counts. The cloud really is isolated. The agent can't reach your personal drive. Tasks run in parallel, you can kick them off from your phone and close your laptop. But you're boxed in. The cloud needs GitHub. The virtual machine is modest. There's no GPU, your local configs don't come along, and you can't plug in another provider's model with your own key.

=== 09b ===
On your own computer, the agent gets way more freedom, and without guardrails that can end badly. In July, GPT five point six Sol in Codex wiped almost every file in investor Matt Shumer's Mac home folder, and engineer Bruno Lemos says it deleted his entire production database. OpenAI confirmed cases like these. Most of them happened in full-access mode, with no sandbox. Another user reported Opus five dropping 22 tables in his test project's database.

=== 09c ===
So running locally gives the agent a lot more, but only if you keep the sandbox on, cut its permissions, and actually use git. Nobody has measured the difference in hard numbers yet, so let's collect the stats ourselves. Tell me in the comments which rung you're on right now: a chat in the browser, or a harness in the terminal. And subscribe, so you don't miss the next breakdown.

=== 10a ===
So what about people already in the terminal, when the standard twenty a month is gone and the limits still run out? Between expensive Claude and raw API access there's a whole huge rung almost nobody talks about: Chinese coding subscriptions. G-L-M's coding plan starts at eighteen dollars a month. Kimi Plus is nineteen, MiniMax is twenty-two dollars. Price-wise, it's basically the same Western twenty, just with different models. Meanwhile DeepSeek, as popular as it is, has no subscription at all. It's pay-per-token only.

=== 10b ===
But how do you hook these outside brains up to proper tools? Claude Code is closed to outsiders, but you can redirect its endpoint with literally two environment variables. In plain English: an endpoint is the network address your harness goes to for every single answer. Fair warning, though: Anthropic doesn't officially support other models. Your Claude subscription won't apply, and Remote Control and voice input stop working completely. Codex and Kimi Code, on the other hand, officially let you set your own server right in the config file.

=== 11a ===
But the market is now a whole zoo of harnesses, and every one of them wants your wallet. So you don't drown in names, sort them on two axes: who makes it, and whether it's open source. There are independent tools: OpenCode, Pi, Cline. There are open tools from the model makers themselves: Codex C-L-I, Kimi Code, DeepSeek's harness. And there are closed products from the providers: Claude Code and Antigravity.

=== 11b ===
I'd put Cursor and Devin Desktop, formerly Windsurf, in their own corner. They're older than Claude Code and grew up alongside it. In my opinion, they're outdated, but it's too early to bury them. SpaceX, for example, bought Cursor at a sixty-billion-dollar valuation, and the team behind Devin says it's doing a billion a year in revenue. But for someone paying out of their own pocket, the choice is simple. I'll spell it out at the end. Oh, and on Cursor's new plans, since October, third-party models are billed at API prices.

=== 11c ===
And every tool on this endless list promises you the world. Drop the pricey American subscriptions, plug in cheap tokens through a third-party gateway, and development will cost you pennies.

=== 12a ===
Except the price per token and the price of finished work are two different prices. So I ran a little investigation: how much does one real task cost in each of these setups? Let's look at the receipts. Artificial Analysis found that DeepSeek's own harness with the latest Flash cost just 30 cents per task. Meanwhile, Claude Code on top-tier Opus five point five burned eleven dollars and forty-two cents on a single problem. That's almost 38 times more, even if it did solve more tests.

=== 12b ===
So wouldn't it be cheaper to just run a smaller Claude through the API? Anthropic's cheapest option is Haiku five point five inside Claude Code, and it eats two dollars and sixty-seven cents per task, with frankly modest quality. So no: the illusion of savings shatters against the price list. But DeepSeek isn't the cheapest in the table either. The small GPT six Luna inside Codex does a task for just 16 cents, with a very low score. And DeepSeek here was counted at peak prices.

=== 12c ===
Why is the Chinese Flash so cheap? Again, it's all about cache. Without the discount on re-reads, the same task in DeepSeek's harness would cost 18 times more. Re-reading context on DeepSeek costs pennies compared to Western models.

=== 12d ===
But in real development, what you should count isn't the pretty price of one attempt. It's the final price of a task that's actually done. On the brutal Terminal-Bench test, a single raw run on Gemini Flash costs a fraction of Opus, but the cheap model solves the task far less often. So a fully solved task on Flash ends up costing twenty-nine dollars, versus twenty-two on Claude. The harnesses there are different, sure, but the math is clear: a cheap model burns money on its own mistakes.

=== 13a ===
So is DeepSeek the final answer? Of course not. "But it costs pennies! Why bother with anything else?" First, its scores are noticeably lower than the top setups. Second, those pennies have grown. On August sixteenth, on an agent's real token mix, it got almost three times more expensive at peak hours and almost one and a half times more off-peak. Though evenings and weekends are half price. And web search became paid on October thirty-first, though it's still cheaper than the competition. DeepSeek's edge isn't the input or output price at all. Its main advantage is the cache.

=== 13b ===
And since we're on Chinese models, there's one objective plus you can't take away from Moonshot, the makers of Kimi. Their new K three point one Pro took first place on Terminal-Bench at Artificial Analysis, and made the top three on the Vals AI benchmark. And one more fun fact about Cursor: their own model, Composer two, is actually trained on top of Kimi. The developers kept quiet at first, then admitted it openly.

=== 14a ===
And if you don't want to pay? Not a single cent? This is where our ladder drops to the very bottom rung, where you pay for convenience with your privacy. Option one: OpenRouter. Top up your balance with ten dollars, once in your life, and the platform permanently raises your daily limit on free models from a measly 50 requests to a thousand. But on 8 of the 14 free models, the provider can train on your prompts.

=== 14b ===
Option two: OpenCode, the open harness, whose team periodically drops temporary free access to strong models like DeepSeek Flash or G-L-M. But on October seventeenth, their cloud console got hacked, and saved API keys were stolen from more than 1 percent of users. People in the community reported unauthorized charges of up to seventeen hundred dollars. The agent itself wasn't affected. But since mid-October, users have also been reporting IP bans on the free models. Option three: API keys from NVIDIA's developer portal. You get plenty of models, but the terms explicitly let the company take your prompts to improve its own models. And phone verification doesn't work for everyone: in some countries it just breaks.

=== 14c ===
Same bucket: free Gemini three point eight Flash through AI Studio and the Antigravity terminal. You pay nothing, but they train on your prompts just the same. In real work, this model is lightning fast. It spits out code in seconds while everything else grinds for minutes. But there's a flip side. It sucks up shamelessly, agrees with whatever dumb idea you have, and completely forgets its instructions after five to ten messages. On terminal tests it has a pitiful 19 percent success rate, versus 65 for Opus. Hence a practical rule: if you wouldn't show it to a random stranger on the street, don't send it to a free model.

=== 14d ===
But there is a way to close this question for good: no country lists, and no one training on your prompts.

=== 15a ===
And of course, that reliable way is my favorite thing: local AI, running models right on your own computer. The full guide is in my Telegram: how to download it all, which model your hardware can handle, which build to pick, and more. Link in the description, or scan the QR code on screen.

=== 15b ===
"Nothing's going to run on my machine." If you've got 8 gigs of V-RAM and 16 gigs of RAM, Qwen three point six, thirty-five B, A three B will do just fine. It's weak for long projects, but it knocks out small scripts. Qwen three point eight, twenty-seven B is genuinely smart, but it's dense, a monolith. It needs 16 gigs of V-RAM or more. On a basic 8, it crawls along at four to five tokens per second.

=== 15c ===
And of course, Qwen three point eight Flash Next on the Strata engine is an absolute banger. But an SSD doesn't replace RAM. Only helper tables live on disk; the model itself needs 32 gigs of RAM for coding, 64 for general use, plus a GPU with 12 gigs or more. I did get it running on 8 gigs, but it took some wrestling. And if your hardware is even beefier, you'll figure it out yourself. You clearly know your way around. Also, Qwen's lead is only confirmed for home PCs, not for every task in the world.

=== 16a ===
You don't even have to download the factory original. If you run models locally, always check out fine-tunes: remixes by enthusiasts, tuned for your task, whether that's coding, roleplay or working with documents. These builds vary, because training physically changes the model's weights. For example, Ornith one point five is the same size as Qwen three point six, but its developers show a solid lead on benchmarks.

=== 16b ===
I run the Teal Coder build: that's the same Ornith, with its own i-matrix table bolted on. Or take the big Qwen three point eight: there's a remix called Swift one point five. Developer Fabio Akita ran both on the same hardware. Swift finished in 64 minutes, versus 192 for the original. Scores were a tie, but it finished three times faster. Flash Next has its own Swift too, plus a Coder build that keeps only the half of the model that was trained on code. But keep in mind: most of these numbers come from the creators themselves, and the licenses differ, so always read the model cards.

=== 16c ===
Now, what do you actually run all this through? For local models, the best picks are open harnesses with no extra junk in memory. People love Pi for its clean system prompt: it takes only one to two thousand tokens at startup. DeepSeek's official harness wins on transparency: right in the web interface, you can see tokens, cache state and free space. Though it's still a preview, and updates can break things. On a tight thirty-two-thousand-token context, the difference is critical: 6 percent of the context gone at startup, versus 22.

=== 16d ===
Two small traps here. The real DeepSeek harness installs only through N P M. On pie-P-I, there's someone else's project with the exact same name. And Ollama, on GPUs under 24 gigs, silently cuts your context to four thousand tokens, and your first request gets truncated.

=== 17a ===
And finally, if you're truly unhinged, you can start writing your own harness. Good luck with that. For everyone else, the practical rule is simple. Don't want to deal with models? Take the provider's official harness, and don't hop between them for no reason. If you know your stuff, take an open harness, redirect the endpoint, and pick the model that fits your tasks. And the next time you see someone with a twenty-dollar subscription and a chat open in their browser, you'll know exactly what to tell them. Stop being an unpaid courier between an AI and your files. Give the model real hands, and keep the results for yourself.
