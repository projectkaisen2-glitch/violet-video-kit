# EP05: What $20 Actually Gets You (AI coding plans, priced in one currency)
*Сценарий для одобрения: английский текст + перевод. Факты на 10.11.2026, досье — `ep05/research/RESEARCH_EP05.md`, расчёт — `ep05/research/calc.py`.*

**Как устроен ролик (П60).** 8 блоков. Каждый блок = готовый Short: крючок понятен без контекста, внутри один полезный вывод. В длинной версии к каждому блоку добавляется **экспертный слой** «кому подходит / кому нет / совет» (помечен ▶LONG) — в Shorts его нет. Только в длинном: вход (результат в первые 10 с, П43), «метод» (П56–П57), шпаргалка по профилям (П58), финал.

- **Длинный:** вход + метод + 8 блоков с ▶LONG + шпаргалка + финал ≈ 1 360 слов ≈ **~9 мин**.
- **Short N:** блок N без ▶LONG + концовка «on my channel» (П68). 45–55 с.
- Без URL и без QR (П64–П65). Где цифра — замер третьей стороны, это сказано голосом (П56).

---

## ВХОД (только длинный, 0:00–0:12)
**Кадр:** итоговая таблица «$ работы за $20» уже на экране, столбики от 34× до 1×.

> Same twenty dollars. One plan buys you about six hundred agent tasks a month. Another buys you fourteen. I priced every AI coding plan in the same currency — here's what your money actually gets.

*Те же двадцать долларов. Один тариф даёт примерно шестьсот задач агента в месяц. Другой — четырнадцать. Я пересчитал все тарифы для кода в одну валюту — вот что на самом деле получают ваши деньги.*

## МЕТОД (только длинный)
> Every company counts limits differently: messages, credits, five-hour windows, weekly caps. So I picked one unit. A standard agent task — a medium bug fix: about a million tokens read from cache, sixty thousand written, twenty-five thousand generated. At official API prices that's one dollar six on Claude Opus, fifty-three cents on Sonnet or GPT. Then I converted every plan into API dollars. Some numbers are official. Claude and ChatGPT don't publish theirs, so I use independent measurements — and I'll say which is which. One warning: the same task can cost thirty times more on a bad run. The exact counts move. The ranking doesn't.

*Каждая компания считает лимиты по-своему: сообщения, кредиты, пятичасовые окна, недельные потолки. Поэтому я взял одну единицу. Эталонная задача агента — средний баг-фикс: около миллиона токенов из кэша, шестьдесят тысяч записано, двадцать пять тысяч сгенерировано. По официальным ценам API это $1.06 на Claude Opus и 53 цента на Sonnet или GPT. Потом я перевёл каждый тариф в доллары API. Часть цифр официальные. Claude и ChatGPT свои не публикуют — беру независимые замеры и говорю, где что. Предупреждение: та же задача при неудачном прогоне может стоить в тридцать раз больше. Точные числа плавают. Порядок мест — нет.*

---

## БЛОК 1 — CLAUDE PRO ($20)
> Twenty dollars of Claude Pro buys about six hundred seventy dollars of AI.
> That's from independent measurements across seventy-nine accounts: roughly a hundred fifty-five dollars of API usage every week. In my standard task, that's about eleven Opus bug fixes per five-hour window, and around thirteen full windows a week. The catch is the weekly cap — that's what actually stops you, not the five hours. And the bigger plans scale less than the name said: Ultra used to be sold as "twenty times Pro" — per week, it's ten.
> Most work per dollar of any plan I priced.

▶LONG: *Who it's for:* you code every day and want the best model. *Who it's not for:* you also chat with Claude all day — chat eats the same limit. *Tip:* run slash-usage to see what's burning it, slash-clear between tasks, and use Sonnet for routine work — it's half the price of Opus.

*Двадцать долларов Claude Pro покупают примерно шестьсот семьдесят долларов ИИ. Это по независимым замерам на 79 аккаунтах: около $155 использования по ценам API каждую неделю. В моей эталонной задаче это примерно одиннадцать баг-фиксов на Opus за пятичасовое окно и около тринадцати полных окон в неделю. Подвох — недельный потолок: останавливает именно он, а не пять часов. И старшие тарифы растут меньше, чем обещает название: Ultra раньше продавали как «двадцать Pro» — за неделю это десять. Больше всего работы за доллар из всех тарифов, что я посчитал.*
*▶ Кому: кодите каждый день и хотите лучшую модель. Кому нет: если ещё и весь день общаетесь с Claude в чате — чат ест тот же лимит. Совет: /usage покажет, что сжигает лимит; /clear между задачами; Sonnet для рутины — он вдвое дешевле Opus.*

## БЛОК 2 — GITHUB COPILOT PRO ($10)
> GitHub Copilot Pro costs ten dollars — and gives you exactly fifteen dollars of AI.
> Since June, Copilot runs on AI Credits: fifteen hundred a month, one cent each. And Copilot charges the same API prices as Anthropic. So that's about fourteen Opus bug fixes. A month. Pro Plus, thirty-nine dollars, is seventy dollars of credits. GitHub also removed the free fallback models — when credits run out, you pay or you wait. What's still unlimited: autocomplete.
> Great autocomplete, tiny agent.

▶LONG: *Who it's for:* you mostly want suggestions while you type, in any editor. *Who it's not for:* you want an agent to do whole tasks. *Tip:* keep Copilot for autocomplete and pair it with a separate agent — auto model selection also takes ten percent off.

*GitHub Copilot Pro стоит десять долларов — и даёт ровно пятнадцать долларов ИИ. С июня Copilot работает на AI Credits: полторы тысячи в месяц по центу. И берёт те же цены API, что и Anthropic. Это примерно четырнадцать баг-фиксов на Opus. В месяц. Pro+ за $39 — это $70 кредитов. А ещё GitHub убрал бесплатные запасные модели: кончились кредиты — платите или ждите. Безлимитным осталось автодополнение. Отличное автодополнение, крошечный агент.*
*▶ Кому: в основном нужны подсказки при наборе, в любом редакторе. Кому нет: хотите, чтобы агент делал задачи целиком. Совет: оставьте Copilot для автодополнения, а агента возьмите отдельно; автовыбор модели ещё и даёт −10%.*

## БЛОК 3 — CURSOR ($8 / $30)
> Cursor doesn't sell a twenty-dollar plan anymore.
> Since October twelfth, new users get the X Subscription. Eight dollars runs only Grok and Cursor's own models. Thirty dollars, Premium, adds Claude and GPT — but at full API price, from the very first request. So in my standard task, every Opus bug fix is another dollar on top of the thirty. If you still have the old twenty-dollar Pro, keep it: switching is permanent.
> You're paying for the editor. The AI is extra.

▶LONG: *Who it's for:* you love Cursor's editor and you're fine with Grok. *Who it's not for:* you came to Cursor for Claude. *Tip:* set a monthly spending cap before you top up — top-ups pay for third-party models first.

*Cursor больше не продаёт тариф за двадцать долларов. С 12 октября новые пользователи получают X Subscription. За восемь долларов работают только Grok и собственные модели Cursor. Тридцать долларов, Premium, добавляют Claude и GPT — но по полной цене API, с первого же запроса. В моей эталонной задаче каждый баг-фикс на Opus — это ещё доллар сверх тридцати. Если у вас остался старый Pro за $20 — держитесь за него: переход необратим. Вы платите за редактор. ИИ — отдельно.*
*▶ Кому: любите редактор Cursor и устраивает Grok. Кому нет: пришли в Cursor ради Claude. Совет: перед пополнением поставьте месячный лимит трат.*

## БЛОК 4 — CHATGPT PLUS / CODEX ($20)
> ChatGPT Plus gives you about two hundred dollars of Codex — and that number keeps falling.
> Independent measurements put Plus at around forty-six dollars of API usage a week — ten times the price. In early October it measured ninety-two. No announced cut; the mix of models changed. In August, OpenAI brought the five-hour limit back for Plus. And in December, ChatGPT and Codex start sharing one allowance — so every chat will eat into your coding.
> Solid value today. Watch it closely.

▶LONG: *Who it's for:* you already pay for ChatGPT — Codex is a free bonus. *Who it's not for:* you need a predictable limit. *Tip:* the measurement is only six accounts — check your own usage bar weekly before you rely on it.

*ChatGPT Plus даёт примерно двести долларов Codex — и эта цифра падает. Независимые замеры показывают у Plus около $46 использования по ценам API в неделю — в десять раз больше цены. В начале октября замер был $92. Урезание не объявляли — поменялся набор моделей. В августе OpenAI вернул для Plus пятичасовой лимит. А в декабре ChatGPT и Codex начнут делить один лимит — каждый чат будет отъедать от кода. Сегодня хорошо. Следите внимательно.*
*▶ Кому: уже платите за ChatGPT — Codex идёт бонусом. Кому нет: нужен предсказуемый лимит. Совет: замер всего на шести аккаунтах — проверяйте свою полоску использования каждую неделю.*

## БЛОК 5 — GOOGLE AI PRO & DEVIN ($20)
> Google won't tell you how much coding twenty dollars buys.
> Google AI Pro includes Antigravity with Claude and Gemini models, a five-hour quota and a weekly cap — but no numbers. Anywhere. On Google's own forum, Pro users report lockouts of five to seven days; Google says that's the weekly limit working as intended. Devin Pro, formerly Windsurf, is the same story: a daily and weekly quota, zero numbers. What Google does give you: five terabytes of storage and YouTube Premium Lite.
> You're buying a bundle, not a coding plan.

▶LONG: *Who it's for:* you'd pay for Google storage anyway — the coding is a bonus. *Who it's not for:* anyone who needs to plan a workweek. *Tip:* keep a second tool for when you're locked out.

*Google не говорит, сколько программирования покупают двадцать долларов. Google AI Pro включает Antigravity с моделями Claude и Gemini, пятичасовую квоту и недельный потолок — но ни одной цифры. Нигде. На собственном форуме Google пользователи Pro пишут о блокировках на 5–7 дней; Google отвечает, что так работает недельный лимит. Devin Pro, бывший Windsurf, — то же самое: дневная и недельная квота, ноль цифр. Зато Google даёт пять терабайт хранилища и YouTube Premium Lite. Вы покупаете набор, а не тариф для кода.*
*▶ Кому: всё равно платили бы за хранилище Google — код идёт бонусом. Кому нет: тем, кому нужно планировать рабочую неделю. Совет: держите второй инструмент на время блокировки.*

## БЛОК 6 — ДЕШЁВЫЕ ПЛАНЫ ($10–18)
> There are AI coding plans for ten dollars. Here's the catch.
> OpenCode Go is ten dollars for up to sixty dollars of usage a month, across thirty-two models, mostly open ones like Kimi, GLM and DeepSeek. Z dot AI's GLM plan starts at eighteen. They plug straight into tools like Claude Code. The catches: your code goes to servers under Chinese jurisdiction, quotas get rewritten every few months, GLM burns credits twice as fast in Singapore's afternoon peak — and "as good as Sonnet" is the vendors' claim, not mine.
> Cheap and real. Just not for your company's code.

▶LONG: *Who it's for:* side projects, learning, open-source work. *Who it's not for:* client or company code with compliance rules. *Tip:* use it as a second engine for routine tasks and keep your main plan for the hard ones.

*Есть тарифы для кода за десять долларов. Вот подвох. OpenCode Go — десять долларов за использование на сумму до шестидесяти в месяц, на 32 моделях, в основном открытых, вроде Kimi, GLM и DeepSeek. План GLM от Z.ai — от восемнадцати. Они подключаются прямо в инструменты вроде Claude Code. Подвохи: ваш код уходит на серверы под юрисдикцией Китая, квоты переписывают каждые несколько месяцев, GLM расходует кредиты вдвое быстрее в дневной пик по Сингапуру, а «не хуже Sonnet» — это слова продавцов, не мои. Дёшево и по-настоящему. Только не для кода вашей компании.*
*▶ Кому: свои проекты, учёба, open source. Кому нет: код клиентов или компании с требованиями безопасности. Совет: используйте как второй движок для рутины, а основной тариф — для сложного.*

## БЛОК 7 — БЕСПЛАТНО: STUDENT, FREE, LOCAL ($0)
> If you're a student, you can get an AI coding agent for zero dollars.
> Copilot Student is free for verified students — including high school. You get unlimited autocomplete and, by third-party reports, about two hundred AI credits a month, on automatic model choice only. Not a student? Copilot Free gives two thousand completions a month. And the only truly unlimited option: a local model on your own computer — slower, weaker, but no limits and nothing leaves your machine.
> Zero dollars is a real plan.

▶LONG: *Who it's for:* learning, school projects, trying agents before paying. *Who it's not for:* long agent sessions — two hundred credits can go in one evening. *Tip:* apply through GitHub Education with a dated school ID, and don't enter a card when it shows paid plans.

*Если вы учитесь, ИИ-агента для кода можно получить за ноль долларов. Copilot Student бесплатен для подтверждённых учащихся — включая школьников. Безлимитное автодополнение и, по сторонним данным, около двухсот AI-кредитов в месяц, только с автовыбором модели. Не учитесь? Copilot Free даёт две тысячи подсказок в месяц. А единственный по-настоящему безлимитный вариант — локальная модель на своём компьютере: медленнее, слабее, но без лимитов, и ничего не уходит с вашей машины. Ноль долларов — это настоящий тариф.*
*▶ Кому: учёба, школьные проекты, попробовать агентов до оплаты. Кому нет: долгие сессии агента — двести кредитов уходят за вечер. Совет: подавайте через GitHub Education с датированным школьным документом и не вводите карту, если показывают платные тарифы.*

## БЛОК 8 — КОГДА ПЛАТИТЬ БОЛЬШЕ (API / $40 / $100)
> When should you pay more than twenty dollars? Here's the math.
> Paying per token, twenty dollars buys about nineteen Opus bug fixes. So if you do fewer than that a month, skip the subscription and use an API key. Two twenty-dollar plans — Claude and ChatGPT — give you two separate limits, about eight hundred seventy dollars of usage for forty. But if you hit Claude's weekly cap three weeks in a row, the hundred-dollar Max is five times Pro — about three thousand three hundred dollars of usage. Per dollar, that's the best deal on this list.
> Upgrade when the cap stops you, not before.

▶LONG: *Who it's for:* anyone deciding whether to upgrade. *Tip:* check your usage history for a month first — most people who think they need a hundred dollars hit the cap in only one bad week.

*Когда стоит платить больше двадцати долларов? Вот расчёт. С оплатой за токены двадцать долларов — это примерно девятнадцать баг-фиксов на Opus. Если у вас меньше в месяц — подписка не нужна, берите ключ API. Два тарифа по двадцать — Claude и ChatGPT — дают два независимых лимита, примерно $870 использования за $40. Но если вы три недели подряд упираетесь в недельный потолок Claude, Max за сто долларов — это пять Pro, около $3 300 использования. На доллар это самая выгодная сделка в списке. Повышайте тариф, когда потолок вас останавливает, — не раньше.*
*▶ Совет: сначала месяц смотрите историю использования — большинство, кому «нужен» тариф за сто, упирались в потолок всего одну неудачную неделю.*

---

## ШПАРГАЛКА (только длинный)
**Кадр:** таблица «если ты… → бери», сохраняемая (П58).
> Here's the cheat sheet. Learning or in school: Copilot Student, or a local model — zero dollars. Coding an hour a day: Claude Pro — most work per dollar. Already paying for ChatGPT: use Codex before you buy anything else. Mostly autocomplete: Copilot Pro, ten dollars. Love the Cursor editor: Premium, with a spending cap. Tight budget, side projects: OpenCode Go, with the data catch. Agent running all day: Claude Max. And under twenty tasks a month: just pay per token. Prices are before tax, and every one of these changed at least once this year — screenshot this, and check again in a month.

*Шпаргалка. Учитесь или в школе: Copilot Student или локальная модель — ноль долларов. Кодите час в день: Claude Pro — больше всего работы за доллар. Уже платите за ChatGPT: используйте Codex, прежде чем покупать что-то ещё. В основном автодополнение: Copilot Pro за десять. Любите редактор Cursor: Premium с лимитом трат. Мало денег, свои проекты: OpenCode Go — с оговоркой про данные. Агент работает весь день: Claude Max. И меньше двадцати задач в месяц: платите за токены. Цены без налога, и каждая из них менялась в этом году хотя бы раз — сделайте скриншот и проверьте через месяц.*

## ФИНАЛ (только длинный)
> Which plan are you on — and did it match the math? Tell me in the comments. Every week I break down AI coding tools so you don't overpay. Subscribe if that helps. And the free guide to running Claude Code on a local model is in my Telegram, violet underscore ina.

*На каком тарифе вы — и совпало ли с расчётом? Напишите в комментариях. Каждую неделю я разбираю ИИ-инструменты для кода, чтобы вы не переплачивали. Подпишитесь, если это полезно. А бесплатный гайд, как запустить Claude Code на локальной модели, — в моём Telegram, violet_ina.*

## КОНЦОВКИ SHORTS (П68: без «ниже», мост текстом)
- T1: `Every plan, priced in one currency — full breakdown on my channel.` — *Все тарифы в одной валюте — полный разбор на моём канале.*
- T2: `Which twenty dollars buys the most? Full video on my channel.` — *Какие двадцать долларов покупают больше всего? Полное видео на моём канале.*
- T3: `Eight plans, one cheat sheet. It's on my channel.` — *Восемь тарифов, одна шпаргалка. Она на моём канале.*
- T4: `The full price math is on my channel.` — *Весь расчёт цен — на моём канале.*

Распределение: 1–T2, 2–T1, 3–T4, 4–T2, 5–T1, 6–T3, 7–T3, 8–T4.

---

## Название (П47) — варианты
1. **What $20 Actually Gets You: Every AI Coding Plan Priced (Claude, ChatGPT, Copilot, Cursor)**
2. Claude Pro vs ChatGPT Plus vs Copilot vs Cursor: Which $20 Buys the Most?
3. I Priced Every AI Coding Plan in One Currency (2026)

*Рекомендую 1: поисковые слова «what $20 gets you / AI coding plan», четыре самых ищущихся бренда.*

## Проверка по своду (П62, §12)
- П54 список одобрен (10.11) — все 8 пунктов покрыты: 1 → вход+метод+блок 8; 2 → блок 1; 3 → блоки 2–3; 4 → блок 5; 5 → блок 7; 6 → блок 8; 7 → шпаргалка; 8 → блок 6.
- П55: у каждого блока вывод + ▶LONG «кому/кому нет/совет». П56: метод — отдельная часть, замер/официально сказано голосом. П57: собственный расчёт «эталонной задачи». П58: шпаргалка. П59: без связок «а теперь».
- П43: первые 10 с — результат (числа 600 vs 14). П64/П65: ни URL, ни QR; Telegram — словами.
- Длина: ≈1 360 слов → ~9 мин (темп EP04 ~153 слова/мин) (§10).
- ⚠️ Помечено голосом как непроверенное/стороннее: замеры Claude (79 акк.) и ChatGPT (6 акк.), 200 кредитов Student, «as good as Sonnet».
- Моя оговорка: Claude — продукт Anthropic, как и я. Поэтому вывод «больше всего работы за доллар» опирается только на чужие замеры и официальные цены и снабжён оговорками; Codex показан с его плюсом (бонус к ChatGPT).

## Источники
См. `ep05/research/RESEARCH_EP05.md` §5–6 (официальные страницы цен Claude, OpenAI, GitHub, Cursor, Google One, Devin docs; замеры Wokey 26.10–09.11.2026; Notebookcheck 25.08; OpenAI Help Center 31.10; heise; Layer3Labs; codingplan.org; Standard Compute; Bai et al. 2026).
