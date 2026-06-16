<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex, nofollow">
    <title>Статистика промокода {{ strtoupper($promo->code) }}</title>
    <link rel="icon" href="/images/logo.png">
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
            background: #141414;
            color: #fff;
            font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
            -webkit-font-smoothing: antialiased;
            min-height: 100vh;
        }
        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
        .promo-public-page { padding: 60px 0; min-height: 60vh; }

        /* Header */
        .promo-header { text-align: center; margin-bottom: 50px; }
        .promo-header__badge {
            display: inline-block;
            background: linear-gradient(135deg, #cd412b 0%, #a33527 100%);
            padding: 16px 40px; border-radius: 6px; margin-bottom: 16px;
            box-shadow: 0 4px 20px rgba(205, 65, 43, 0.4);
        }
        .promo-header__code {
            font-size: 32px; font-weight: 800; color: #fff;
            letter-spacing: 3px; text-transform: uppercase;
        }
        .promo-header__title { font-weight: 500; font-size: 18px; color: rgba(255,255,255,0.7); margin-top: 8px; }
        .promo-header__hint { font-size: 13px; color: rgba(255,255,255,0.35); margin-top: 14px; }

        /* Stats grid */
        .promo-stats-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 20px; margin-bottom: 40px;
        }
        .promo-stat-card {
            background: rgba(30,30,30,0.8); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px; padding: 24px; display: flex; align-items: center; gap: 20px;
            transition: all 0.3s ease;
        }
        .promo-stat-card:hover { border-color: rgba(205,65,43,0.5); transform: translateY(-2px); }
        .promo-stat-card--primary {
            background: linear-gradient(135deg, rgba(205,65,43,0.2) 0%, rgba(163,53,39,0.15) 100%);
            border-color: rgba(205,65,43,0.4);
        }
        .promo-stat-card__icon {
            width: 56px; height: 56px; background: rgba(205,65,43,0.15); border-radius: 8px;
            display: flex; align-items: center; justify-content: center; color: #cd412b; flex-shrink: 0;
        }
        .promo-stat-card__icon svg { width: 26px; height: 26px; }
        .promo-stat-card__value { font-size: 28px; font-weight: 700; color: #fff; line-height: 1.2; }
        .promo-stat-card__label {
            font-weight: 500; font-size: 12px; color: rgba(255,255,255,0.5);
            margin-top: 4px; text-transform: uppercase; letter-spacing: 1px;
        }

        /* Period */
        .promo-period { text-align: center; margin-bottom: 40px; padding: 16px; background: rgba(30,30,30,0.5); border-radius: 8px; }
        .promo-period__label { color: rgba(255,255,255,0.5); margin-right: 8px; }
        .promo-period__value { font-weight: 700; color: #fff; }

        /* Section + table */
        .promo-section {
            background: rgba(30,30,30,0.8); border: 1px solid rgba(255,255,255,0.1);
            border-radius: 8px; margin-bottom: 30px; overflow: hidden;
        }
        .promo-section__header { padding: 20px 24px; border-bottom: 1px solid rgba(255,255,255,0.1); }
        .promo-section__title { font-size: 17px; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 1px; }
        .promo-table-wrap { overflow-x: auto; }
        .promo-table { width: 100%; border-collapse: collapse; }
        .promo-table th, .promo-table td { padding: 14px 24px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .promo-table th { font-weight: 500; font-size: 12px; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 1px; }
        .promo-table td { font-size: 14px; color: rgba(255,255,255,0.8); }
        .promo-table tbody tr:hover td { background: rgba(255,255,255,0.03); }
        .promo-table__amount { font-weight: 700; color: #4ade80 !important; }
        .promo-table__id { font-family: monospace; color: rgba(255,255,255,0.5) !important; }
        .promo-section__note { padding: 14px 24px; font-size: 13px; color: rgba(255,255,255,0.35); border-top: 1px solid rgba(255,255,255,0.06); }

        /* Empty */
        .promo-empty { text-align: center; padding: 80px 20px; }
        .promo-empty__icon { margin-bottom: 20px; color: rgba(255,255,255,0.3); }
        .promo-empty__icon svg { width: 64px; height: 64px; }
        .promo-empty__text { font-weight: 500; font-size: 18px; color: rgba(255,255,255,0.4); }

        @media (max-width: 768px) {
            .promo-public-page { padding: 30px 0; }
            .promo-header__code { font-size: 24px; }
            .promo-stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
            .promo-stat-card { padding: 16px; gap: 12px; }
            .promo-stat-card__icon { width: 44px; height: 44px; }
            .promo-stat-card__value { font-size: 20px; }
            .promo-table th, .promo-table td { padding: 10px 12px; font-size: 13px; }
        }
        @media (max-width: 480px) { .promo-stats-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
<div class="container">
    <div class="promo-public-page">

        <div class="promo-header">
            <div class="promo-header__badge">
                <span class="promo-header__code">{{ strtoupper($promo->code) }}</span>
            </div>
            @if($promo->title && $promo->title !== $promo->code)
                <div class="promo-header__title">{{ $promo->title }}</div>
            @endif
            <div class="promo-header__hint">Учитываются донаты игроков после активации промокода</div>
        </div>

        <div class="promo-stats-grid">
            <div class="promo-stat-card promo-stat-card--primary">
                <div class="promo-stat-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21V4h6a4.5 4.5 0 0 1 0 9H7"/><path d="M5 13h8M5 17h7"/></svg>
                </div>
                <div class="promo-stat-card__content">
                    <div class="promo-stat-card__value">{{ number_format($donateStats['total_amount'], 0, ',', ' ') }} ₽</div>
                    <div class="promo-stat-card__label">Сумма донатов</div>
                </div>
            </div>

            <div class="promo-stat-card">
                <div class="promo-stat-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 7h8M8 11h8M8 15h5"/></svg>
                </div>
                <div class="promo-stat-card__content">
                    <div class="promo-stat-card__value">{{ $donateStats['total_count'] }}</div>
                    <div class="promo-stat-card__label">Количество донатов</div>
                </div>
            </div>

            <div class="promo-stat-card">
                <div class="promo-stat-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <div class="promo-stat-card__content">
                    <div class="promo-stat-card__value">{{ $totalActivations }}</div>
                    <div class="promo-stat-card__label">Всего активаций</div>
                </div>
            </div>

            <div class="promo-stat-card">
                <div class="promo-stat-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><rect x="2" y="6" width="20" height="12" rx="4"/></svg>
                </div>
                <div class="promo-stat-card__content">
                    <div class="promo-stat-card__value">{{ $serverActivations }}</div>
                    <div class="promo-stat-card__label">С сервера</div>
                </div>
            </div>
        </div>

        @if($donateStats['first_donation_at'])
            <div class="promo-period">
                <span class="promo-period__label">Период:</span>
                <span class="promo-period__value">
                    {{ \Carbon\Carbon::parse($donateStats['first_donation_at'])->format('d.m.Y') }}
                    —
                    {{ \Carbon\Carbon::parse($donateStats['last_donation_at'])->format('d.m.Y') }}
                </span>
            </div>
        @endif

        @if($dailyStats->count() > 0)
            <div class="promo-section">
                <div class="promo-section__header"><h2 class="promo-section__title">Донаты за 30 дней</h2></div>
                <div class="promo-table-wrap">
                    <table class="promo-table">
                        <thead><tr><th>Дата</th><th>Кол-во</th><th>Сумма</th></tr></thead>
                        <tbody>
                        @foreach($dailyStats as $day)
                            <tr>
                                <td>{{ \Carbon\Carbon::parse($day->date)->format('d.m.Y') }}</td>
                                <td>{{ $day->count }}</td>
                                <td class="promo-table__amount">{{ number_format($day->total, 0, ',', ' ') }} ₽</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        @endif

        @if($donations->count() > 0)
            <div class="promo-section">
                <div class="promo-section__header"><h2 class="promo-section__title">Последние донаты</h2></div>
                <div class="promo-table-wrap">
                    <table class="promo-table">
                        <thead><tr><th>Дата</th><th>ID</th><th>Сумма</th></tr></thead>
                        <tbody>
                        @foreach($donations as $donation)
                            <tr>
                                <td>{{ $donation->created_at->format('d.m.Y H:i') }}</td>
                                <td class="promo-table__id">
                                    @if($donation->user_id)#{{ $donation->user_id }}@else{{ substr($donation->steam_id ?? '', -6) }}@endif
                                </td>
                                <td class="promo-table__amount">{{ number_format($donation->amount, 0, ',', ' ') }} ₽</td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                </div>
                @if($donateStats['total_count'] > $donations->count())
                    <div class="promo-section__note">Показаны последние {{ $donations->count() }} из {{ $donateStats['total_count'] }} донатов.</div>
                @endif
            </div>
        @endif

        @if($totalActivations == 0 && $donateStats['total_count'] == 0)
            <div class="promo-empty">
                <div class="promo-empty__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/></svg>
                </div>
                <div class="promo-empty__text">Пока нет данных</div>
            </div>
        @endif

    </div>
</div>
</body>
</html>
