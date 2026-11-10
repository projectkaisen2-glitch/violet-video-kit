# EP05 own check (P57): one "standard agent task" priced at official list rates,
# then each plan's included usage converted into tasks/month.
# Standard task = medium bug-fix session in an agent (shape of the official /usage example in Claude Code docs):
TASK = dict(cache_read=1_000_000, cache_write=60_000, fresh_in=15_000, out=25_000)
# USD per 1M tokens: (input, cache_read, cache_write, output) — claude.com/pricing, GitHub Copilot models-and-pricing (Nov 2026)
RATES = {
 'Opus 5.5':      (4.00, 0.20, 5.00, 20.0),
 'Sonnet 5.5':    (2.00, 0.10, 2.50, 10.0),
 'GPT-6.1 Sol':   (2.00, 0.10, 2.50, 10.0),
 'Grok 4.7':      (2.00, 0.50, 2.00,  6.0),   # no cache-write price listed -> billed as input
}
def cost(m):
    i,cr,cw,o = RATES[m]
    return (TASK['fresh_in']*i + TASK['cache_read']*cr + TASK['cache_write']*cw + TASK['out']*o)/1e6
W = 52/12  # weeks per month
# Included usage in API dollars per month. source / status
PLANS = [
 ('Claude Pro',            20, 155*W, 'Opus 5.5',   'measured: Wokey, 79 accounts, week 26.10-02.11.2026 (~$155/wk)'),
 ('ChatGPT Plus (Codex)',  20,  66*W, 'GPT-6.1 Sol','projected: InventiveHQ from Pro measurements (~$66/wk)'),
 ('Copilot Pro',           10,  15,   'Opus 5.5',   'official: 1,500 AI credits x $0.01 (GitHub Docs)'),
 ('Copilot Pro+',          39,  70,   'Opus 5.5',   'official: 7,000 AI credits x $0.01'),
 ('Cursor Premium',        30,   0,   'Opus 5.5',   'official: Claude/GPT billed at API list price from credit; Grok pool not in $'),
 ('API, pay as you go',    20,  20,   'Opus 5.5',   'by definition'),
]
print('Standard task cost at list price:')
for m in RATES: print(f'  {m:12s} ${cost(m):.2f}')
print()
print(f"{'plan':22s} {'price':>5s} {'API $/mo':>9s} {'value x':>8s} {'tasks/mo':>9s} {'$ per task':>10s}  model")
for n,p,v,m,src in PLANS:
    t = v/cost(m); x = v/p
    print(f"{n:22s} {p:5d} {v:9.0f} {x:8.1f} {t:9.0f} {(p/t if t else float('nan')):10.2f}  {m}  [{src}]")
# sensitivity: task size x0.3 .. x3 (same-task runs differ up to 30x, Bai et al. 2026)
print('\nSensitivity, Claude Pro Opus tasks/mo if task is smaller/bigger:')
for k in (0.3,1,3): print(f'  x{k}: {155*W/(cost("Opus 5.5")*k):.0f}')
