<?php

namespace Database\Seeders;

class OptionsData
{
    /**
     * @return array<string, string>
     */
    public static function getDefaultOptions(): array
    {
        return array_merge(
            self::getBasicOptions(),
            self::getAuthOptions(),
            self::getSmtpOptions(),
            self::getPolicyAndTerms(),
            self::getPaymentOptions(),
            self::getMainPageOptions(),
            self::getSocialLinks(),
            self::getServerOptions(),
            self::getAnalyticsOptions(),
            self::getOtherOptions(),
        );
    }

    /**
     * @return array<string, string>
     */
    protected static function getBasicOptions(): array
    {
        return [
            'title' => 'Rust Resort',
            'meta_decription_en' => 'Rust Resort - game server project',
            'meta_keywords_en' => 'rust, раст, кгые, hfcn, растрезорт, rustresort, раст резорт, rust resort, сервера раст, сервер раст, играть раст, server rust, play rust, reid rust, site rust,',
            'meta_decription_ru' => 'Rust Resort',
            'meta_keywords_ru' => 'rust, раст, кгые, hfcn, растрезорт, rustresort, раст резорт, rust resort, сервера раст, сервер раст, играть раст, server rust, play rust, reid rust, site rust,',
            'language1' => 'en',
            'language2' => 'ru',
            'robots_txt' => "User-agent: *\nDisallow:",
            'link_game_now' => '#',
            'learn_more_link' => '/news',
            'forum_link' => 'gbg',
            'forum_type' => '1',
            'forum_api_key' => '#',
            'exchange_rate_usd' => '80',
            'shop_services_show' => 'VIP,SkinBox,ElitePack,Sorting,NickName',
            'copyright_description_en' => 'All rights reserved. All trademarks shown in this website are the property of their respective owner.',
            'copyright_description_ru' => 'Все права защищены. Все торговые марки, представленные на этом сайте, являются собственностью их владельцев.',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getAuthOptions(): array
    {
        return [
            'change_login' => '0',
            'change_email' => '0',
            'login_max_char' => '16',
            'password_max_char' => '16',
            'ga_status' => '0',
            'ga_users_status' => '0',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getSmtpOptions(): array
    {
        return [
            'smtp_host' => 'mail.wizardcp.com',
            'smtp_user' => 'info@wizardcp.com',
            'smtp_password' => '0en2KuT3RCfx',
            'smtp_port' => '25',
            'smtp_from' => 'info@wizardcp.com',
            'smtp_name' => 'Wizardcp.com',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getPolicyAndTerms(): array
    {
        $policyEn = <<<'HTML'
<p>General information, contact information for the project:</p>
<p>- Email address: help@rustresort.com</p>
<p><strong>1. General Provisions</strong></p>
<p>1.1. The Operator's primary goal and condition for conducting its activities is to ensure the rights and freedoms of individuals during the processing of their personal data, including the protection of the right to privacy and personal and family secrets.</p>
<p>1.2. This Operator's policy regarding the processing of personal data (hereinafter referred to as the Policy) applies to all information that the Operator may receive about visitors to the website https://rustresort.com</p>
<p><strong>2. Key Concepts Used in the Policy</strong></p>
<p>2.1. Automated processing of personal data – processing of personal data using computer technology.</p>
<p>2.2. Blocking of personal data – temporary cessation of processing personal data (except when processing is necessary to clarify personal data).</p>
<p>2.3. Website – a set of graphic and informational materials, as well as computer programs and databases that provide access to them on the Internet at the network address https://rustresort.com.</p>
<p>2.4. Personal data information system – a set of personal data contained in databases, as well as information technologies and technical means that ensure their processing.</p>
<p>2.5. Anonymization of personal data – actions that result in the inability to determine, without using additional information, the belonging of personal data to a specific User or another subject of personal data.</p>
<p>2.6. Processing of personal data – any action (operation) or a set of actions (operations) performed using automation tools or without them with personal data, including collection, recording, systematization, accumulation, storage, clarification (updating, modification), extraction, use, transfer (distribution, provision, access), anonymization, blocking, deletion, destruction of personal data.</p>
<p>2.7. Operator – a state body, a municipal body, a legal entity, or an individual who independently or jointly with others organizes and (or) processes personal data, as well as determines the purposes of processing personal data, the composition of personal data subject to processing, and actions (operations) carried out with personal data.</p>
<p>2.8. Personal data – any information related directly or indirectly to a specific or identifiable user of the Website https://rustresort.com</p>
<p>2.9. Personal data authorized by the subject of personal data for distribution – personal data to which the subject of personal data has granted access to an unlimited number of persons by giving consent to the processing of personal data authorized for distribution in accordance with the procedure established by the Personal Data Law (hereinafter referred to as personal data authorized for distribution).</p>
<p>2.10. User – any visitor to the website https://rustresort.com</p>
<p>2.11. Provision of personal data – actions aimed at disclosing personal data to a specific person or specific group of persons.</p>
<p>2.12. Distribution of personal data – any actions aimed at disclosing personal data to an indefinite circle of persons (transfer of personal data) or providing access to personal data to an unlimited number of persons, including publication of personal data in the media, placement in information and telecommunications networks, or providing access to personal data in any other way.</p>
<p>2.13. Cross-border transfer of personal data – transfer of personal data to the territory of a foreign state to the authority of a foreign state, a foreign individual, or a foreign legal entity.</p>
<p>2.14. Destruction of personal data – any actions that result in the irreversible destruction of personal data with the inability to restore its content in the personal data information system and/or destruction of physical media of personal data.</p>
<p><strong>3. Main Rights and Responsibilities of the Operator</strong></p>
<p>3.1. The Operator has the right to:</p>
<p>- receive reliable information and/or documents containing personal data from the subject of personal data;</p>
<p>- if the subject of personal data withdraws consent for processing their personal data, the Operator has the right to continue processing the personal data without the subject's consent if there are grounds specified in the Personal Data Law;</p>
<p>- independently determine the composition and list of measures necessary and sufficient to ensure compliance with obligations stipulated by the Personal Data Law and regulations adopted in accordance with it, unless otherwise provided by the Personal Data Law or other federal laws.</p>
<p>3.2. The Operator is obliged to:</p>
<p>- provide the subject of personal data, upon request, with information regarding the processing of their personal data;</p>
<p>- respond to requests from subjects of personal data and their legal representatives in accordance with the requirements of the Personal Data Law;</p>
<p>- provide the authorized body for the protection of the rights of subjects of personal data with the necessary information within 30 days from the date of receipt of such a request;</p>
<p>- publish or otherwise provide unrestricted access to this Policy regarding the processing of personal data;</p>
<p>- take legal, organizational, and technical measures to protect personal data from unauthorized or accidental access, destruction, modification, blocking, copying, provision, distribution of personal data, as well as from other unlawful actions regarding personal data;</p>
<p>- cease the transfer (distribution, provision, access) of personal data, stop processing, and destroy personal data in the manner and cases stipulated by the Personal Data Law;</p>
<p>- fulfill other obligations provided by the Personal Data Law.</p>
<p><strong>4. Main Rights and Responsibilities of Subjects of Personal Data</strong></p>
<p>4.1. Subjects of personal data have the right to:</p>
<p>- receive information regarding the processing of their personal data, except in cases provided for by federal laws. Information is provided to the subject of personal data by the Operator in an accessible form and should not contain personal data relating to other subjects of personal data, except in cases where there are legal grounds for disclosing such personal data. The list of information and the procedure for its receipt are established by the Personal Data Law;</p>
<p>- require the operator to clarify their personal data, block or destroy it if the personal data is incomplete, outdated, inaccurate, obtained unlawfully, or not necessary for the stated purpose of processing, as well as take legal measures to protect their rights;</p>
<p>- impose a condition for prior consent when processing personal data for the purposes of promoting goods, works, and services in the market;</p>
<p>- withdraw consent to process personal data;</p>
<p>- appeal to the authorized body for the protection of the rights of subjects of personal data or to the court with a complaint about unlawful actions or inaction of the Operator in processing their personal data;</p>
<p>4.2. Subjects of personal data are obliged to:</p>
<p>- provide the Operator with reliable data about themselves;</p>
<p>- inform the Operator about the clarification (updating, changes) of their personal data.</p>
<p><strong>5. The Operator may process the following personal data of the User:</strong></p>
<p>5.1. Email address.</p>
<p>5.2. Information about the Steam ID of the gaming account, registration date on the service.</p>
<p>5.3. Also, the website collects and processes anonymous data about visitors (including cookies) using internet statistics (Yandex Metrica, Google Analytics, and others).</p>
<p>5.4. The above data, hereinafter referred to in this Policy, is combined under the general term Personal Data.</p>
<p>5.5. The processing of special categories of personal data concerning race, nationality, political views, religious or philosophical beliefs, intimate life is not carried out by the Operator.</p>
<p>5.6. The processing of personal data that is permitted to be disseminated from among special categories of personal data specified in part 1 of Article 10 of the Personal Data Law is allowed provided that the prohibitions and conditions stipulated in Article 10.1 of the Personal Data Law are observed.</p>
<p>5.7. The User's consent for the processing of personal data permitted for dissemination is issued separately from other consents for the processing of their personal data. At the same time, the conditions provided for, in particular, in Article 10.1 of the Personal Data Law are observed. The requirements for the content of such consent are established by the authorized body for the protection of the rights of subjects of personal data.</p>
<p>5.7.1. The consent for the processing of personal data permitted for dissemination is provided by the User to the Operator directly.</p>
HTML;

        $policyRu = <<<'HTML'
<p><strong>Общие сведения, контакты для связи с проектом:</strong><br />
- Почтовый адрес: help@rustresort.com</p>
<p><strong>1. Общие положения</strong></p>
<p>1.1. Оператор ставит своей основной целью соблюдение прав и свобод человека и гражданина при обработке персональных данных, включая защиту права на неприкосновенность частной жизни.<br />
1.2. Настоящая Политика применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта https://rustresort.com.</p>
<p><strong>2. Основные понятия</strong></p>
<p>2.1. Персональные данные — любая информация, относящаяся прямо или косвенно к конкретному Пользователю.<br />
2.2. Обработка персональных данных — любое действие (операция) или их совокупность, включая сбор, запись, хранение, уточнение, использование, передачу, обезличивание, удаление.<br />
2.3. Оператор — лицо, организующее и/или осуществляющее обработку персональных данных.<br />
2.4. Пользователь — любое лицо, посещающее сайт rustresort.com.<br />
2.5. Трансграничная передача персональных данных — передача на территорию иностранного государства органу власти, иностранному физическому или юридическому лицу.</p>
<p><strong>3. Персональные данные, которые может обрабатывать Оператор</strong></p>
<p>3.1. Адрес электронной почты.<br />
3.2. Информация о Steam ID игрового аккаунта и дате регистрации.<br />
3.3. Анонимные данные о посещениях (включая cookie) через системы аналитики (Яндекс.Метрика, Google Analytics и др.).</p>
<p>3.4. Особые категории персональных данных (раса, национальность, политические взгляды, религиозные или философские убеждения, интимная жизнь) Оператором не обрабатываются.<br />
3.5. Обработка персональных данных, разрешённых субъектом для распространения, допускается только с отдельного согласия в порядке</p>
<p><strong>4. Цели обработки персональных данных</strong></p>
<p>— предоставление доступа к сервисам сайта;<br />
— обработка обращений Пользователей;<br />
— выполнение договорных обязательств;<br />
— улучшение качества работы сайта и сервисов;<br />
— направление уведомлений и информации (при согласии Пользователя).</p>
<p><strong>5. Права и обязанности сторон</strong></p>
<p><em>Права Пользователя:</em><br />
— получать информацию об обработке своих персональных данных;<br />
— требовать уточнения, блокирования или уничтожения данных;<br />
— отозвать согласие на обработку;<br />
— обжаловать действия Оператора в уполномоченный орган или суд.</p>
<p><em>Обязанности Пользователя:</em><br />
— предоставлять достоверные сведения о себе;<br />
— своевременно информировать об их изменении.</p>
<p><em>Обязанности Оператора:</em><br />
— обеспечивать законность обработки данных;<br />
— защищать персональные данные от несанкционированного доступа;<br />
— предоставлять информацию по запросу субъекта;<br />
— публиковать актуальную редакцию Политики.</p>
<p><strong>6. Передача персональных данных</strong></p>
<p>6.1. Передача данных третьим лицам возможна только в случаях, предусмотренных законом, либо с согласия Пользователя.<br />
6.2. Трансграничная передача персональных данных допускается только при обеспечении соответствующей защиты.</p>
<p><strong>7. Защита персональных данных</strong></p>
<p>Оператор принимает необходимые правовые, организационные и технические меры для защиты персональных данных от неправомерного доступа, уничтожения, изменения, блокирования, копирования и иных незаконных действий.</p>
<p><strong>8. Заключительные положения</strong></p>
<p>8.1. Пользователь подтверждает, что ознакомлен с настоящей Политикой и принимает её условия.<br />
8.2. Оператор вправе вносить изменения в Политику без предварительного уведомления. Новая редакция вступает в силу с момента её размещения на сайте.<br />
8.3. Действующая редакция Политики всегда доступна по адресу: https://rustresort.com/policy.</p>
HTML;

        $termRu = <<<'HTML'
<p><strong>Общие сведения, контакты для связи с проектом:</strong><br />
- Почтовый адрес: help@rustresort.com</p>
<p><strong>1. Общие положения</strong></p>
<p>Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует использование сайта rustresort.com и предоставляемых им сервисов.<br />
Используя Сайт, Пользователь подтверждает согласие с условиями данного Соглашения.</p>
<p><strong>2. Термины</strong></p>
<p>«Сайт» — интернет-ресурс rustresort.com, принадлежащий Компании.<br />
«Пользователь» — лицо, использующее Сайт и/или получающее услуги.<br />
«Услуги» — доступ к игровым серверам RustResort, интернет-магазину, цифровым товарам и привилегиям.<br />
«Контент Сайта» — дизайн, тексты, графика, изображения, программный код, базы данных.</p>
<p><strong>3. Присоединение к Соглашению</strong></p>
<p>Использование Сайта означает полное согласие Пользователя с Соглашением.<br />
Несогласие с условиями обязывает прекратить использование Сайта и Услуг.</p>
<p><strong>4. Пользователи Сайта</strong></p>
<p>4.1. К использованию Сайта допускаются лица старше 6 лет и не ограниченные в правах по решению суда.<br />
4.2. Для доступа к отдельным сервисам требуется регистрация через Steam и/или Discord.<br />
4.3. При регистрации Пользователь обязуется предоставить достоверные данные.</p>
<p><strong>5. Интеллектуальная собственность</strong></p>
<p>Все права на Контент и Программное обеспечение принадлежат Компании.<br />
Копирование, распространение, модификация и иное использование без согласия Компании запрещено.</p>
<p><strong>6. Правила поведения</strong></p>
<p>Пользователю запрещается:<br />
— распространять запрещённый контент;<br />
— предпринимать действия, направленные на нарушение работы сервера или Сайта;<br />
— использовать ошибки и уязвимости программного обеспечения;<br />
— совершать действия, нарушающие права других Пользователей.</p>
<p><strong>7. Платежи и расчёты</strong></p>
<p>7.1. Оплата услуг осуществляется в условных единицах («Caps») и конвертируется в валюту сервиса.<br />
7.2. Поддерживаемые методы оплаты: банковские карты (Visa/MasterCard, СБП), Tebex, Heleket, PayPalych, внутриигровые предметы Steam.<br />
7.3. Все расчёты регулируются Политикой возврата.</p>
<p><strong>8. Ответственность сторон</strong></p>
<p>Компания не несёт ответственности за:<br />
— перебои в работе сервисов по вине третьих лиц;<br />
— убытки, возникшие у Пользователя в результате использования Сайта или Игровых серверов.<br />
Пользователь несёт ответственность за свои действия на Сайте и в игре.</p>
<p><strong>9. Использование цифровых активов</strong></p>
<p>Компания вправе использовать данные аккаунтов Steam и Discord для авторизации и предоставления Услуг.<br />
Пользователь подтверждает, что имеет законное право распоряжаться своими цифровыми активами.</p>
<p><strong>10. Заключительные положения</strong></p>
<p>10.1. Компания вправе изменять условия Соглашения без предварительного уведомления.<br />
10.2. Новая редакция вступает в силу с момента публикации на Сайте.<br />
10.3. Действующая версия всегда доступна по адресу: https://rustresort.com/term.</p>
HTML;

        $refundRu = <<<'HTML'
<h2>Возврат средств</h2>
<h3>1. Общие положения</h3>
<ul>
<li>Настоящие правила регулируют порядок возврата средств Пользователям за оплаченные услуги проекта RustResort.</li>
<li>Возврат возможен только в случаях, предусмотренных данным разделом.</li>
<li>Возврат производится в той же форме, в которой была произведена оплата.</li>
</ul>
<h3>2. Порядок возврата средств</h3>
<ul>
<li>Возврат осуществляется на основании обращения Пользователя в службу поддержки проекта.</li>
<li>Все обращения рассматриваются в индивидуальном порядке, с учётом фактических обстоятельств.</li>
</ul>
<h3>3. Основания для возврата</h3>
<ul>
<li>Услуга оплачена, но не оказана/не активирована в течение 24 часов с момента оплаты (при отсутствии вины Пользователя).</li>
<li>Технический сбой на стороне Сайта/сервера, приведший к невозможности получения оплаченной услуги.</li>
<li>Ошибка/двойное списание по одной покупке (дублирующий платёж).</li>
<li>Неверная сумма списания по сравнению с оформленным заказом.</li>
</ul>
<h3>4. Случаи, когда возврат не производится</h3>
<ul>
<li>Услуга предоставлена/активирована в полном объёме (цифровой контент надлежащего качества после активации возврату не подлежит).</li>
<li>Блокировка аккаунта/санкции в игре за нарушение правил проекта или игры.</li>
<li>Неверно указанные Пользователем данные, использование сторонних модификаций, вмешательство в клиент/сервер.</li>
<li>Изменение решения Пользователя («передумал», «не понравилось», «ожидания не совпали») при надлежащем оказании услуги.</li>
</ul>
<h3>5. Порядок обращения за возвратом</h3>
<p>Для рассмотрения запроса направьте обращение на help@rustresort.com с темой «Возврат». В письме укажите:</p>
<ul>
<li>Дату и время оплаты, способ оплаты (карта/TEBEX/HELEKET и др.).</li>
<li>Сумму, валюту и идентификатор транзакции (чек/скриншот).</li>
<li>Ваш <strong>STEAM ID</strong> и/или ник на сервере, наименование купленной услуги.</li>
<li>Краткое описание проблемы и подтверждающие материалы (скриншоты/видео).</li>
</ul>
<p><em>Срок предварительного ответа — до 3 рабочих дней, срок принятия решения — до 10 календарных дней с момента получения полного пакета данных.</em></p>
<h3>6. Способ и сроки возврата</h3>
<ul>
<li>Возврат осуществляется тем же способом, которым производилась оплата (на банковскую карту, кошелёк или иной исходный способ платежа).</li>
<li>Срок возврата зависит от платёжной системы и составляет до 30 календарных дней с момента принятия положительного решения.</li>
</ul>
HTML;

        return [
            'policy_en' => $policyEn,
            'policy_ru' => $policyRu,
            'term_ru' => $termRu,
            'refund_ru' => $refundRu,
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getPaymentOptions(): array
    {
        return [
            'enot_merchant_id' => '55997',
            'enot_secret_word' => '',
            'enot_secret_word_2' => '',
            'cent_authorization' => '28386|TBBqIBqS6KoQVKI1tVqb8GrV5Q2eYy3z89fmSyIl',
            'cent_shop_id' => 'lemLWWMvDP',
            'qiwi_account' => '111',
            'qiwi_secret_key' => '',
            'freekassa_merchant_id' => '26998',
            'freekassa_secret_word' => '',
            'freekassa_secret_word_2' => '',
            'tebex_project_id' => '1726829',
            'tebex_private_key' => 'IsgHJbH7iViniKL6eyGWnNgGNDw7vcqf',
            'tebex_public_token' => '110fh-f45e56cf99faec71b35ed1cb26dc35fc07b7328a',
            'tebex_webhook_Key' => '56b987f505381ea3bf3cb5d8aecdce4a',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getMainPageOptions(): array
    {
        return [
            'main_title_en' => 'Rust Resort',
            'main_welcome_en' => '',
            'main_description_en' => '',
            'main_title_ru' => 'Rust Resort',
            'main_welcome_ru' => '',
            'main_description_ru' => '',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getSocialLinks(): array
    {
        return [
            'twitter_link' => '',
            'vk_link' => 'https://vk.com/rustresort',
            'discord_link' => 'https://discord.gg/rustresort',
            'steam_link' => 'https://steamcommunity.com/groups/Rustresort',
            'youtube_link' => 'https://www.youtube.com/channel/UCsutxKOjge8TTNx-zma1NRA',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getServerOptions(): array
    {
        $serverOpts = [];
        foreach ([1, 2, 3, 4, 5, 6, 7, 8] as $id) {
            $serverOpts["server_{$id}_max_online"] = '1000';
            $serverOpts["server_{$id}_mul_online"] = '1';
            $serverOpts["server_{$id}_plate"] = in_array($id, [6]) ? '1' : '0';
            $serverOpts["server_{$id}_description_en"] = '';
            $serverOpts["server_{$id}_long_description_en"] = '';
            $serverOpts["server_{$id}_description_ru"] = '';
            $serverOpts["server_{$id}_long_description_ru"] = '';
        }
        $serverOpts['server_6_description_en'] = '123';
        $serverOpts['server_6_long_description_en'] = '123';
        $serverOpts['server_8_description_en'] = 'Modded 2X is a modified server.';
        $serverOpts['server_8_description_ru'] = 'Modded 2X — Модифицированный сервер.';
        $serverOpts['server_1_next_wipe'] = '7';
        $serverOpts['server_1_next_wipe_add'] = '3';
        $serverOpts['server_1_next_wipe_time'] = '367';
        $serverOpts['server_1_next_wipe_time_add'] = '5';
        $serverOpts['server_1_opening_date'] = '2025-01-03T12:00';
        $serverOpts['server_2_next_wipe'] = '2022-11-25T23:30';
        $serverOpts['server_2_next_wipe_time'] = '168';
        $serverOpts['server_2_next_wipe_time_add'] = '5';
        $serverOpts['server_2_opening_date'] = '2023-01-05T20:00';
        $serverOpts['server_3_next_wipe'] = '2022-11-01T20:29';
        $serverOpts['server_3_next_wipe_time'] = '1';
        $serverOpts['server_3_next_wipe_time_add'] = '0';
        $serverOpts['server_3_opening_date'] = '2023-09-11T17:00';
        $serverOpts['server_4_next_wipe'] = '2022-12-08T15:30';
        $serverOpts['server_4_next_wipe_time'] = '167';
        $serverOpts['server_4_next_wipe_time_add'] = '0';
        $serverOpts['server_4_opening_date'] = '2024-06-27T17:00';
        $serverOpts['server_5_next_wipe'] = '2023-01-07T23:27';
        $serverOpts['server_6_next_wipe'] = '2022-11-26T00:12';
        $serverOpts['server_6_opening_date'] = '2023-04-01T09:33';
        $serverOpts['server_7_next_wipe'] = '2022-11-30T17:37';
        $serverOpts['server_8_next_wipe_time'] = '168';
        $serverOpts['server_8_next_wipe_time_add'] = '5';
        $serverOpts['server_8_opening_date'] = '2023-06-02T15:00';

        return $serverOpts;
    }

    /**
     * @return array<string, string>
     */
    protected static function getAnalyticsOptions(): array
    {
        return [
            'google_analitics' => '<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({\'gtm.start\':
new Date().getTime(),event:\'gtm.js\'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!=\'dataLayer\'?\'&l=\'+l:\'\';j.async=true;j.src=
\'https://www.googletagmanager.com/gtm.js?id=\'+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,\'script\',\'dataLayer\',\'GTM-TXKW6WM\');</script>
<!-- End Google Tag Manager -->',
            'yandex_metric' => '<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,\'script\',\'https://mc.yandex.ru/metrika/tag.js?id=106293985\', \'ym\');
    ym(106293985, \'init\', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/106293985" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->',
        ];
    }

    /**
     * @return array<string, string>
     */
    protected static function getOtherOptions(): array
    {
        return [
            'game_api_key' => 'SjA2o7v@Bqn$mZNCBd2EX8Vwd!5',
            'steam_api_key' => '41386366DF7B7C75D76F143F6115A719',
            'snowfall_status' => '0',
            'snowfall_flakecount' => '50',
            'snowfall_minsize' => '2',
            'snowfall_maxsize' => '10',
            'snowfall_minspeed' => '1',
            'snowfall_maxspeed' => '2',
            'snowfall_round' => 'true',
            'snowfall_shadow' => 'true',
        ];
    }
}
