<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Реальные вопросы FAQ, перенесённые из старого проекта (rustresortOld, таблица faqs).
     * Идемпотентно: ключ — sort, повторный запуск обновляет существующие записи.
     * Дальше редактируется в админке /faqs.
     */
    public function run(): void
    {
        $faqs = [
            [
                'sort' => 1,
                'question_ru' => 'Как связаться с администрацией?',
                'question_en' => 'How do I contact the administration?',
                'answer_ru' => 'Для связи с администрацией нужно создать тикет в нашем Discord-канале https://discord.com/invite/rustresort',
                'answer_en' => 'To contact the administration, you need to create a ticket in our Discord channel https://discord.com/invite/rustresort',
            ],
            [
                'sort' => 2,
                'question_ru' => 'Как приобрести VIP-услугу для обхода очереди?',
                'question_en' => 'How to purchase a VIP service to bypass the queue?',
                'answer_ru' => 'Авторизуйтесь на нашем сайте, затем перейдите на страницу «Магазин», выберите сервер и оплатите услугу — после оплаты она будет автоматически применена к вашему игровому аккаунту!',
                'answer_en' => 'Log in to our website, then go to the "Store" page, select the server and pay for the service — it will automatically be applied to your game account after payment!',
            ],
            [
                'sort' => 3,
                'question_ru' => 'Проблема с подключением к серверу',
                'question_en' => 'How do I connect to the server?',
                'answer_ru' => 'Перейдите во вкладку «Сервера» на нашем сайте и скопируйте желаемый IP-адрес сервера. После этого зайдите в игру, нажмите клавишу «F1», в появившейся консоли напишите слово «connect» и вставьте IP-адрес. Пример: "connect 37.230.137.209:28015"',
                'answer_en' => 'On the "Servers" tab of our website, copy the IP, press the "F1" key in the game, and type there: "connect (IP)". Example: "connect 37.230.137.209:28015"',
            ],
            [
                'sort' => 4,
                'question_ru' => 'Как начать играть в Rust?',
                'question_en' => 'How to start playing Rust?',
                'answer_ru' => 'Чтобы начать играть в Rust, вам нужно зайти на игровой портал Steam и приобрести там игру. Ссылка: https://store.steampowered.com/app/252490/Rust/',
                'answer_en' => 'To start playing Rust, you need to go to the Steam games portal and purchase the game there. Link: https://store.steampowered.com/app/252490/Rust/',
            ],
            [
                'sort' => 5,
                'question_ru' => 'У меня проблема с оплатой/игрой/блокировкой, куда мне обратиться?',
                'question_en' => 'I have a problem with payment/game/ban — where should I go?',
                'answer_ru' => 'Для решения любой проблемы свяжитесь с администрацией — нужно создать тикет в нашем Discord-канале https://discord.com/invite/rustresort',
                'answer_en' => 'To solve any problem, contact the administration — you need to create a ticket in our Discord channel https://discord.com/invite/rustresort',
            ],
            [
                'sort' => 6,
                'question_ru' => 'Общие сведения, контакты для связи с проектом',
                'question_en' => 'General information, contacts for communication with the project',
                'answer_ru' => 'Вы можете отправить обращение на наш почтовый адрес: help@rustresort.com',
                'answer_en' => 'You can send an appeal to our mailing address: help@rustresort.com',
            ],
        ];

        foreach ($faqs as $faq) {
            Faq::updateOrCreate(
                ['sort' => $faq['sort']],
                [
                    'question_ru' => $faq['question_ru'],
                    'question_en' => $faq['question_en'],
                    'answer_ru' => $faq['answer_ru'],
                    'answer_en' => $faq['answer_en'],
                ],
            );
        }
    }
}
