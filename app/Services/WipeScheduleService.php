<?php

namespace App\Services;

use App\Models\Server;
use Carbon\Carbon;
use Carbon\CarbonInterface;

class WipeScheduleService
{
    /**
     * @return array{last_wipe: Carbon|null, next_wipe: Carbon|null}
     */
    public function calculate(Server $server, ?CarbonInterface $now = null): array
    {
        $now = Carbon::instance(($now ?? now())->toDateTime());
        $days = collect($server->wipe_schedule_days ?? [])
            ->map(fn ($day) => (int) $day)
            ->filter(fn ($day) => $day >= 0 && $day <= 6)
            ->unique()
            ->sort()
            ->values();

        if ($days->isEmpty()) {
            return [
                'last_wipe' => $server->wipe,
                'next_wipe' => $server->next_wipe,
            ];
        }

        [$hour, $minute] = $this->parseTime($server->wipe_schedule_time);
        $currentWeekStart = $now->copy()->startOfWeek(Carbon::SUNDAY);

        $candidates = collect();
        foreach ([-1, 0, 1] as $weekOffset) {
            $weekStart = $currentWeekStart->copy()->addWeeks($weekOffset);
            foreach ($days as $dayOfWeek) {
                $candidates->push(
                    $weekStart->copy()
                        ->addDays((int) $dayOfWeek)
                        ->setTime($hour, $minute)
                );
            }
        }

        $lastWipe = $candidates
            ->filter(fn (Carbon $candidate) => $candidate->lessThanOrEqualTo($now))
            ->sort()
            ->last();

        $nextWipe = $candidates
            ->filter(fn (Carbon $candidate) => $candidate->greaterThan($now))
            ->sort()
            ->first();

        if (! $nextWipe) {
            $nextWeekStart = $currentWeekStart->copy()->addWeek();
            $firstDay = (int) $days->first();
            $nextWipe = $nextWeekStart->copy()
                ->addDays($firstDay)
                ->setTime($hour, $minute);
        }

        return [
            'last_wipe' => $lastWipe,
            'next_wipe' => $nextWipe,
        ];
    }

    /**
     * @return array{0: int, 1: int}
     */
    private function parseTime(?string $time): array
    {
        if (! $time || ! preg_match('/^(\d{2}):(\d{2})$/', $time, $match)) {
            return [12, 0];
        }

        $hour = max(0, min(23, (int) $match[1]));
        $minute = max(0, min(59, (int) $match[2]));

        return [$hour, $minute];
    }
}
