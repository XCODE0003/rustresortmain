<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TicketController extends Controller
{
    public function __construct()
    {
        // $this->middleware('can:support'); // gated by route-level Backend middleware
    }

    public function support(Request $request)
    {
        $tickets_status = $request->has('status') ? $request->get('status') : '0';

        if ($tickets_status === '3') {
            $tickets = Ticket::with('user')->onlyTrashed()->latest('updated_at')->paginate();
        } elseif ($tickets_status === '1') {
            $tickets = Ticket::with('user')->where('status', '1')->latest('updated_at')->paginate();
        } elseif ($tickets_status === '2') {
            $tickets = Ticket::with('user')->where('status', '0')->latest('updated_at')->paginate();
        } elseif ($tickets_status === '4') {
            $tickets = Ticket::with('user')->where('status', '1')->where('is_read', '0')->latest('updated_at')->paginate();
        } else {
            $tickets = Ticket::with('user')->withTrashed()->latest('updated_at')->paginate();
        }

        return view('backend.pages.tickets.list', compact('tickets', 'tickets_status'));
    }

    public function show(Ticket $ticket)
    {
        $ticket->load(['user', 'answerer']);
        $ticket->question = str_replace('<br>', "\r\n", $ticket->question);

        return view('backend.pages.tickets.full', compact('ticket'));
    }

    public function update(Request $request, Ticket $ticket)
    {
        if ($request->has('answer')) {
            $history = json_decode($ticket->history) ?: [];

            $attachment = '';
            if ($request->has('attachment') && $request->attachment !== null) {
                $attachment = $request->attachment->store('attachments', 'public');
            }

            $history[] = (object) [
                'text' => $request->input('answer'),
                'attachment' => $attachment,
                'user_id' => auth()->user()->id,
                'user_name' => auth()->user()->name,
                'updated_at' => date('d.m.Y H:i'),
                'type' => 'answer',
            ];

            $ticket->history = json_encode($history);
            $ticket->answerer()->associate(auth()->user());
            $ticket->is_read = '1';
            $ticket->user_is_read = '0';
            $ticket->save();
        }

        return back();
    }

    public function isread(Ticket $ticket)
    {
        $ticket->is_read = '1';
        $ticket->save();

        return back();
    }

    public function close(Ticket $ticket)
    {
        $ticket->status = 0;
        $ticket->save();

        return back();
    }

    public function updateReply(Request $request, Ticket $ticket)
    {
        $histories = $ticket->history !== null ? json_decode($ticket->history) : [];

        $histories_upd = [];
        $index = 0;
        foreach ($histories as $history) {
            $index++;
            if ((int) $request->reply_index === $index) {
                $history->text = str_replace("\r\n", '<br>', $request->reply);
            }
            $histories_upd[] = $history;
        }

        $ticket->history = json_encode($histories_upd);
        $ticket->save();

        $this->alert('success', __('Вы успешно обновили сообщение!'));

        return back();
    }

    public function updateQuestion(Request $request, Ticket $ticket)
    {
        $ticket->question = str_replace("\r\n", '<br>', $request->question);
        $ticket->save();

        $this->alert('success', __('Вы успешно обновили сообщение!'));

        return back();
    }

    public function destroy(Ticket $ticket)
    {
        if ($ticket->attachment) {
            Storage::disk('public')->delete($ticket->attachment);
        }
        $ticket->forceDelete();

        return back();
    }
}
