# EP05 — "What $20 actually gets you" — research dossier (10.11.2026)

*Статус каждого факта: **OFF** = официальная страница компании, **MEAS** = независимое измерение (третья сторона), **PROJ** = проекция/оценка, **REP** = жалобы/отчёты пользователей. В ролике OFF говорим как факт, MEAS/PROJ — «по измерениям X», REP — «пользователи сообщают».*
*Перед сценарием и перед рендером цены перепроверить (П56): всё меняется каждые 2–4 недели.*

## 1. Тарифы (около $20) — что внутри

| План | Цена | Как считается лимит | Что при превышении | Статус |
|---|---|---|---|---|
| **Claude Pro** | $20 ($17 при оплате за год) | 5-часовое окно + недельный потолок, цифры не публикуются; общий с чатом Claude | usage credits (доплата по API-ценам) или ждать | OFF claude.com/pricing |
| Claude Max / **Ultra** | $100 (5×) / $200 (10× в неделю, без 5-ч лимита для verified) | 30.10.2026 Max 20x переименован в Ultra; «weekly limits unchanged» | — | OFF (X @claudeai 30.10) |
| **ChatGPT Plus** (Codex) | $20 | 5-ч окно (вернули 25.08.2026 после 6 недель без него) + недельный; общий с ChatGPT Work | докупить credits, или свой API-ключ | OFF learn.chatgpt.com/docs/pricing; Notebookcheck 25.08 |
| ChatGPT Go | $8 | модели как у Free (GPT-6 Luna) | — | OFF |
| **Copilot Pro** | $10 | 1,500 AI credits/мес = **$15** по API-ценам; автодополнение безлимитно | бюджет доплаты / апгрейд / ждать 1-го числа | OFF GitHub Docs |
| Copilot Pro+ | $39 | 7,000 credits = $70 | то же | OFF |
| Copilot Max | $100 | 20,000 credits = $200 | то же | OFF |
| **Copilot Student** | $0 | 200 credits/мес, только Auto-модель, безлимит автодополнения; **с 13 лет, школьники подходят** | — | 3rd-party guide (Layer3Labs), сверить с docs.github.com |
| **Cursor Plus** | $8 | недельный пул, **только Grok + Composer** | top-up | OFF cursor.com/pricing |
| **Cursor Premium** | $30 (бывший Pro $20) | 4× Plus по Grok; **Claude/GPT — по API-прайсу с первого запроса** из предоплаты | top-up, кредит живёт 365 дней | OFF + dev.to / munderdiffl.in (12.10.2026) |
| **Google AI Pro** | $20 | Antigravity: 5-ч окно до недельного потолка, цифр нет; Opus 5.5/Sonnet 5.5 включены | AI Credit Overages (по умолчанию выкл) | 3rd-party (Layer3Labs) со ссылкой на antigravity.google |
| **Devin Pro** (бывш. Windsurf) | $20 | дневная + недельная квота, цифр нет | on-demand credits (не сгорают) | OFF docs.devin.ai |
| GLM Coding Lite (Z.ai) | $18 ($12.6 за год) | 2,000 credits/5ч, 10,000/нед; в часы пик (14–18 Сингапур, будни) — двойной расход | — | codingplan.org (24.09) |
| Kimi Code Plus | ¥99 | 5-ч окно, без недельного (новые) | — | codingplan.org |
| OpenCode Go | $10 | $12/5ч, $30/нед, $60/мес; 32 open-модели | — | codingplan.org |
| API (свой ключ, Cline и т.п.) | по факту | Opus 5.5 $4/$20, Sonnet 5.5 $2/$10 за 1M; cache read $0.20/$0.10 | нет лимита — есть счёт | OFF |

## 2. Изменения 2026 и противоречия (П61)
- **Claude:** 13.05–13.09 недельные +50% (промо). С 14.09 «навсегда +25%» к базе, но относительно промо это −17% — Anthropic подавали как «рост» (HN 49506519, @ClaudeDevs 29.08). 22.09 подняли 5-ч лимиты с выходом Opus 5.5. 30.10 Ultra. MEAS: значение Pro по неделям прыгает $125 → $170 → $155 (Wokey). Аккаунты одного тарифа могут отличаться (~20%, SemiAnalysis через Wokey).
- **Ключевое противоречие Claude:** Ultra «20× Pro» за 5 часов, но **≈10× Pro за неделю** — и теперь это официально (pricing: «10x weekly»). Недельный потолок — то, что реально останавливает.
- **Codex:** 13.07–25.08 Plus был без 5-ч лимита, потом вернули «чтобы не перегружать сервера». OpenAI показывает только процент-бар, долларов не раскрывает (InventiveHQ). Диапазоны Plus за 5 ч: GPT-6.1 Sol 15–160 сообщений — разброс в 10×.
- **Copilot:** 01.06 переход на AI credits; убраны бесплатные «fallback»-модели (GPT-4.1/4o/5 mini) — то, что было главным плюсом (heise). Студентам — 200 credits («200 credits exhausted on day 1», community #197557).
- **Cursor:** 12.10 «X Subscription» (SpaceX/xAI). Pro $20 больше не продаётся новым; аналог Premium $30. Claude/GPT теперь не входят в пул вообще. Legacy-план можно оставить — переход необратим.
- **Google:** 18.06 Gemini CLI выключен для Pro/Ultra/бесплатных (→ Antigravity CLI). Форум: многодневные блокировки вместо 5 часов (Google: «это недельный лимит, не баг»). Цифры квот Google не публикует.
- **Китайские планы:** дешёвые, но код уходит в юрисдикцию КНР; квоты меняют часто; «уровень Sonnet» — заявление вендоров (standardcompute, 14.10, конкурент — с оговоркой).

## 3. Своя проверка (П57) — `calc.py`
**Эталонная задача** «средний баг-фикс агентом»: 1.0M токенов чтения из кэша, 60k запись в кэш, 15k новый ввод, 25k вывод (форма — как пример `/usage` в официальной документации Claude Code). Цена по официальным API-ценам:
Opus 5.5 **$1.06**, Sonnet 5.5 / GPT-6.1 Sol **$0.53**, Grok 4.7 $0.80.

| План | Цена | Включено в $ API в мес | «Отдача» | Задач Opus/мес | $ за задачу |
|---|---|---|---|---|---|
| Claude Pro | $20 | ~$672 (MEAS) | **~34×** | ~630 | ~$0.03 |
| ChatGPT Plus | $20 | ~$200 (MEAS, 6 акк.) | ~10× | ~376 (Sol) | ~$0.05 |
| Copilot Pro | $10 | $15 (OFF) | 1.5× | ~14 | $0.71 |
| Copilot Pro+ | $39 | $70 (OFF) | 1.8× | ~66 | $0.59 |
| Cursor Premium | $30 | $0 для Claude/GPT (OFF) | 1× (платишь по API) + пул Grok | 0 + по $1.06 | $1.06 |
| API напрямую | $20 | $20 | 1× | ~19 | $1.06 |
| Google AI Pro, Devin Pro | $20 | **не опубликовано** | ? | ? | ? |

**Выводы расчёта:**
1. Разница между «одинаковыми $20» — **до 20–30 раз** по объёму работы. Это главный тезис ролика.
2. Сравнение честное: Copilot и Cursor берут за Claude **те же API-цены**, что Anthropic, — значит, в одной валюте.
3. На Claude Pro ~$12 API-стоимости в одно 5-ч окно ≈ **~11 средних задач Opus за окно**, ~13 полных окон в неделю (MEAS). Кто кодит час в день — до недельного потолка не дойдёт; кто гоняет агента весь день — упрётся в среду.
4. Чувствительность: одна и та же задача у одной модели может стоить в 30 раз больше/меньше (Bai et al., Stanford, 2026). Размер задачи ×0.3…×3 меняет абсолютные числа (210–2100 задач), но **не порядок мест** — все считаются в одних API-долларах.
5. Ограничения: Claude/Codex — измерения третьих сторон (кэш-доля 82–96%); у Google и Devin цифр нет вообще — это тоже вывод («платишь за непрозрачность»).

## 4. Вердикт по профилям (черновик)
- **Пишешь код пару раз в неделю / учишься:** Copilot Student (бесплатно, с 13 лет) или Copilot Free; локально (EP03) — $0.
- **Каждый день час-два, хочешь лучшее за $20:** Claude Pro (больше всего работы за доллар по измерениям); альтернатива — ChatGPT Plus (Codex) — и в комплекте ChatGPT.
- **Любишь IDE и автодополнение:** Copilot Pro $10 (безлимитное автодополнение) + агент где-то ещё; Cursor теперь дороже для Claude/GPT ($30 + API).
- **Агент работает часами:** две подписки по $20 (Claude + Codex) часто лучше, чем одна $100 — разные лимиты не пересекаются. Переход на $100, если упираешься в недельный потолок 3+ недели подряд.
- **Минимальный бюджет:** OpenCode Go $10 / GLM Lite — с оговоркой про данные и стабильность.

## 5. Источники (по изданию и дате; в описание — без URL, П64)
claude.com/pricing (10.11.2026) · Claude Code docs «Manage costs» · @claudeai X, 30.10.2026 (Ultra) · Hacker News 49506519 / @ClaudeDevs 29.08.2026 · Wokey «Claude usage limits», неделя 26.10–02.11.2026 · learn.chatgpt.com Codex pricing · Notebookcheck 25.08.2026 · InventiveHQ «Codex subscription usage measured» · GitHub Docs: usage-based billing; models and pricing · heise (Copilot, июнь 2026) · Layer3Labs (Copilot Student; Antigravity pricing) · cursor.com/pricing · DEV/Munder Difflin (Cursor, 12–26.10.2026) · docs.devin.ai self-serve · Digital Applied (Gemini CLI → Antigravity CLI, 09.06.2026) · Google AI Developers Forum (Antigravity lockouts) · codingplan.org (24.09.2026) · Standard Compute (14.10.2026) · Bai et al., Stanford Digital Economy Lab, 14.04.2026.

## 6. Дыры — закрыты 10.11
- **Copilot Student:** официально (docs.github.com/copilot/get-started/plans) — бесплатно для verified students, «allowance of AI credits» без цифры, только Auto, без сторонних агентов. «200 credits» и «с 13 лет, школьники» — только сторонние (Layer3Labs, wikidocs) → в ролике: «about 200 credits, by third-party reports».
- **Google AI Pro (one.google.com, US):** $19.99/мес ($199.99/год); 5 TB хранилища, Gemini 4 Argon в приложении, Antigravity «expanded», $10/мес Google Cloud credits, 200 Colab units, YouTube Premium Lite, семейный доступ до 5 человек.
- **ChatGPT Plus — прямой замер:** Wokey, 6 аккаунтов, неделя 02–09.11.2026: ~$46/нед (~$200/мес, 10×), ~6.4 полных 5-ч окна в неделю. Тренд: $92 (08.10) → $58 → $55 → $46 — без объявленного урезания (сдвиг моделей). Малая выборка → помечать. calc.py обновлён: ~376 задач GPT-6.1 Sol/мес.
- **ChatGPT, декабрь:** help center OpenAI (обновлено 31.10.2026): «Starting in December, Plus, Pro, and Business plans' usage allowance will be shared across ChatGPT and Codex» — размер не опубликован.
- **Налоги/регионы:** цены везде «excluding taxes» → в ролике одной фразой «plus tax where you live»; отдельный разбор регионов не делаем (не опубликовано единообразно).
