import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'AFORI',
    legalName: 'Алексей Журбин',
    role: 'Python-разработчик · React · Telegram-боты',
    taglineRoles: [
      'Python-разработчик',
      'Telegram-боты и автоматизация',
      'React и TypeScript',
      'RAG, LLM и голосовые пайплайны',
    ],
    pitchEn:
      'Python backends, Telegram bot systems, Excel-scale data tools, React interfaces, RAG memory and RVC voice.',
    pitchRu:
      'Собираю рабочие контуры на Python: Telegram-боты, обработка данных, веб-интерфейсы, RAG-память и голосовые пайплайны. Ищу работу в команде или сильный проект.',
    aboutStory: [
      'Закрываю задачу целиком: схема данных, бэкенд, бот или интерфейс, деплой. Не оставляю «почти готово».',
      'Из внедрённого: RIGBI в ИТ ССК «Звезда» — индекс 3500+ Excel и поиск быстрее 0.01 с. Из заказов: живая партнёрская бот-экосистема на общей базе. Из инженерии: «Мурка» — гибридный RAG, ротация ключей LLM и голос Edge TTS → RVC, код модулей открыт на GitHub.',
      'Работал с постоянными заказчиками через Telegram и Кворк. Сейчас ищу штат или новый контур, который нужно довести до прода.',
      'Диплом — десктоп учёта KPI. Сайт ателье делал в колледже, его не взяли. Каталог Aromo был в работе, потом заморозили; демо на GitHub Pages.',
    ],
    location: 'Удалённо',
    workStatus: 'Открыт к работе и заказам',
    availabilityNote: 'Открыт к офферам: Python, боты, автоматизация, AI-интеграции',
    email: 'aforigidroshlupka@gmail.com',
    telegramUsername: '@shlalalalalalalo',
    telegramLink: 'https://t.me/shlalalalalalalo',
    githubUrl: 'https://github.com/gidroshlupka-ops',
    twitterUrl: 'https://x.com/Afori19',
    twitterLink: 'https://x.com/Afori19',
    contactWorkerUrl: 'https://portfolio-contact-relay.afori.workers.dev',
    resumePdf: 'resume.pdf',
    resumeDownloadName: 'Zhurbin-Alexey-Resume.pdf',
    experienceYears: 'проектная',
    metricsSummary: [
      {
        value: '3500+',
        label: 'Excel в RIGBI',
        description: 'Инструмент, который реально ставили в ИТ завода',
      },
      {
        value: '2',
        label: 'Постоянных заказчика',
        description: 'Telegram / Кворк, сейчас пауза',
      },
      {
        value: 'Python',
        label: 'Основной язык',
        description: 'Боты, RAG, React, автоматизация',
      },
      {
        value: 'Open',
        label: 'К работе',
        description: 'Junior, стажировка, заказы',
      },
    ],
  },

  skillCategories: [
    { id: 'all', label: 'Все технологии' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai_bots', label: 'Боты и LLM' },
    { id: 'database', label: 'Базы' },
    { id: 'devops', label: 'Деплой' },
  ],

  skills: [
    {
      name: 'Python',
      category: 'backend',
      categoryLabel: 'Backend',
      iconName: 'Code2',
      highlight: 'asyncio, FastAPI, Flask, скрипты, валидация данных',
      featured: true,
    },
    {
      name: 'Aiogram 3',
      category: 'ai_bots',
      categoryLabel: 'Telegram',
      iconName: 'Bot',
      highlight: 'Боты, админки, отложенный постинг, деплой на Amvera',
      featured: true,
    },
    {
      name: 'React + TypeScript',
      category: 'frontend',
      categoryLabel: 'Frontend',
      iconName: 'Layout',
      highlight: 'Vite, Tailwind, модалки, адаптив, продакшен-вёрстка',
      featured: true,
    },
    {
      name: 'PostgreSQL / SQLite',
      category: 'database',
      categoryLabel: 'Databases',
      iconName: 'Database',
      highlight: 'Схемы, индексы, Supabase или обычный SQLite под задачу',
      featured: true,
    },
    {
      name: 'Excel и данные',
      category: 'backend',
      categoryLabel: 'Data',
      iconName: 'Layers',
      highlight: 'python-calamine, грязные даты, индексация тысяч таблиц',
      featured: true,
    },
    {
      name: 'LLM API',
      category: 'ai_bots',
      categoryLabel: 'AI',
      iconName: 'Sparkles',
      highlight: 'Gemini / OpenAI, function-style вызовы, скоринг и чат в ботах',
      featured: true,
    },
    {
      name: 'RAG / ChromaDB',
      category: 'ai_bots',
      categoryLabel: 'AI',
      iconName: 'Database',
      highlight: 'Гибридный ранкер: сходство × свежесть × важность, память по uid',
      featured: true,
    },
    {
      name: 'Voice · RVC',
      category: 'ai_bots',
      categoryLabel: 'AI',
      iconName: 'Sparkles',
      highlight: 'Edge TTS → RVC, автопитч по медиане F0, voice-to-voice',
      featured: true,
    },
    {
      name: 'Telethon',
      category: 'ai_bots',
      categoryLabel: 'Telegram',
      iconName: 'Send',
      highlight: 'Парсинг чатов и участников, FloodWait, несколько сессий',
      featured: false,
    },
    {
      name: 'Docker',
      category: 'devops',
      categoryLabel: 'DevOps',
      iconName: 'Container',
      highlight: 'docker-compose, выкладка на VPS / Amvera',
      featured: false,
    },
    {
      name: 'Git + Pages',
      category: 'devops',
      categoryLabel: 'DevOps',
      iconName: 'Terminal',
      highlight: 'GitHub Pages, Cloudflare Worker для формы без токена на фронте',
      featured: false,
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      categoryLabel: 'Frontend',
      iconName: 'Palette',
      highlight: 'Адаптив, модалки, анимации, тёмные интерфейсы',
      featured: false,
    },
    {
      name: 'REST API',
      category: 'backend',
      categoryLabel: 'Backend',
      iconName: 'Network',
      highlight: 'FastAPI / Flask, вебхуки, прокси заявок в Telegram',
      featured: false,
    },
  ],

  projectCategories: [
    { id: 'all', label: 'Все проекты' },
    { id: 'fullstack', label: 'Сайты' },
    { id: 'ai_llm', label: 'AI' },
    { id: 'telegram_bot', label: 'Боты' },
    { id: 'backend', label: 'Автоматизация' },
  ],

  projects: [
    {
      id: 'rigbi',
      title: 'RIGBI — поиск по Excel-архиву',
      tagline: 'Индексация 3500+ таблиц для ИТ-отдела завода',
      category: 'backend',
      categoryLabel: 'Внедрение · автоматизация',
      shortTabLabel: 'RIGBI',
      statusLabel: 'СТАВИЛИ В РАБОТУ',
      shortDescription:
        'Внутренний поиск по архиву инвентарных карточек. openpyxl не тянул объём — поставил Rust-парсер и индекс, чтобы искать за доли секунды.',
      quoteHighlight: '3500+ таблиц · calamine · поиск < 0.01 с',
      previewImage: '/projects/rigbi-preview.png',
      tags: ['Python', 'python-calamine', 'ThreadPoolExecutor', 'SQLite'],
      githubUrl: 'https://github.com/gidroshlupka-ops/RIGBI_V2-calamine-',
      accentColor: '#3B82F6',
      accentGradient: 'from-blue-500 to-cyan-500',
      iconName: 'Database',
      featured: true,
      caseStudy: {
        overview:
          'Инструмент для ИТ-отдела ССК «Звезда»: собрать разрозненный Excel-архив в индекс и быстро найти нужную карточку.',
        problem:
          'Тысячи таблиц, разные форматы дат, пустые ячейки. Обычный обход через openpyxl занимал неприлично много времени.',
        solution:
          'Заменил парсер на python-calamine, распараллелил чтение, обновляю индекс по mtime и вычищаю кривые даты, чтобы один плохой файл не ронял всё.',
        architecture:
          'Папка с Excel → calamine + потоки → очистка → SQLite-индекс → поиск по инвентарному номеру.',
        keyFeatures: [
          'Парсинг на Rust-движке вместо openpyxl',
          'Инкрементальные обновления по дате файла',
          'Поиск по индексу быстрее 0.01 с',
        ],
        metrics: [
          { label: 'Таблиц в архиве', value: '3500+' },
          { label: 'Ускорение парсинга', value: 'в 10–50 раз' },
        ],
        techDetails: [
          { area: 'Парсинг', stack: 'python-calamine' },
          { area: 'Потоки', stack: 'ThreadPoolExecutor' },
          { area: 'Индекс', stack: 'SQLite' },
        ],
        screenshots: [
          {
            title: 'Поиск карточки',
            url: '/projects/rigbi/search.png',
            description: 'Индекс Excel и поиск по инвентарному номеру поверх открытой карточки',
          },
        ],
      },
    },
    {
      id: 'murka',
      title: 'Мурка',
      tagline: 'Личный AI-бот: память, ключи, голос',
      category: 'ai_llm',
      categoryLabel: 'Пет · AI',
      shortTabLabel: 'Мурка',
      statusLabel: 'ПЕТ · КОД НА GITHUB',
      shortDescription:
        'Мультимодальный компаньон: гибридный RAG, ротация ключей под 429 и голос Edge TTS → RVC. Публичный срез модулей с демо и доказательствами — на GitHub, полный бот в репозиторий не входит.',
      quoteHighlight: 'RAG · ротация 429 · Edge TTS → RVC',
      previewImage: '/projects/murka/murka-card.png',
      tags: ['Python', 'Aiogram 3', 'ChromaDB', 'Gemini API', 'RVC'],
      githubUrl: 'https://github.com/gidroshlupka-ops/murka-showcase',
      voiceSample: {
        url: '/projects/murka/murka-voice.wav',
        durationLabel: '00:03',
        title: 'Мурка',
        caption: 'RVC',
      },
      accentColor: '#3390EC',
      accentGradient: 'from-sky-500 to-blue-400',
      iconName: 'Bot',
      featured: true,
      caseStudy: {
        overview:
          'Пет. Публичный срез — не весь бот, а три инженерных куска, которые можно прочитать без токенов и личных переписок.',
        problem:
          'Обычный чат забывает человека, падает на бесплатной квоте и звучит как синтезатор.',
        solution:
          'Память переранжирует соседей по смыслу, свежести и важности. Пул ключей отличает минутный 429 от дневного лимита. Голос: интонация от Edge TTS, тембр от RVC.',
        architecture:
          'Telegram → память по uid → живой ключ → Gemini/Groq → текст или /tts. Полный бот в репозиторий не входит.',
        keyFeatures: [
          'Полки памяти изолированы по пользователю',
          'Гибридный скор: сходство / свежесть / важность',
          'Маяки: модель сама пишет долгие факты',
          'Ротация ключей с баном группы на сутки',
        ],
        metrics: [
          { label: 'Веса ранкера', value: '0.5 / 0.3 / 0.2' },
          { label: 'Окно свежести', value: '72 часа' },
        ],
        techDetails: [
          { area: 'Память', stack: 'ChromaDB, MiniLM, SQLite-факты' },
          { area: 'Ключи', stack: 'KeyManager + SQLite bans' },
          { area: 'Голос', stack: 'Edge TTS, RVC, pyin' },
        ],
        screenshots: [
          {
            title: 'Три модуля',
            url: '/projects/murka/hero.png',
            description: 'Память, пул ключей и голос — то, что вынесено в публичный срез',
          },
          {
            title: 'Ранкер памяти',
            url: '/projects/murka/score-demo.png',
            description: 'Как старый важный факт бьёт свежий оффтоп',
          },
          {
            title: 'Ротация ключей',
            url: '/projects/murka/keys-demo.png',
            description: 'Минутный 429 и дневной лимит обрабатываются по-разному',
          },
        ],
      },
    },
    {
      id: 'partner-bot-ecosystem',
      title: 'Партнёрская бот-экосистема',
      tagline: 'Реф-ссылки, кабинет и редирект на одной SQLite',
      category: 'telegram_bot',
      categoryLabel: 'Заказ · боты',
      shortTabLabel: 'Партнёрка',
      statusLabel: 'ЖИВАЯ · БЕЗ СКРИНОВ',
      shortDescription:
        'Три сервиса: каталог, админка партнёров и короткие ссылки. Боты живые. Скрины не кладу — в статистике чужие переходы и имена.',
      quoteHighlight: 'каталог + админка + Flask-slug',
      previewImage: '/projects/partner-bot-preview.png',
      tags: ['Python', 'Aiogram 3', 'Flask', 'SQLite', 'Amvera'],
      githubUrl: 'https://github.com/gidroshlupka-ops/partneer',
      accentColor: '#EC4899',
      accentGradient: 'from-pink-500 to-rose-500',
      iconName: 'Workflow',
      featured: false,
      caseStudy: {
        overview:
          'Партнёры получают свою ссылку, видят переходы, админ смотрит сводку. Короткий slug на Flask уводит в нужный бот.',
        problem:
          'Нужно было понять, кто привёл клиента, без внешней аналитики и без отдельного сайта-кабинета.',
        solution:
          'Общая SQLite, роли partner/admin, редиректор на Amvera с диском, чтобы счётчики не обнулялись после обновления.',
        architecture:
          'Короткая ссылка → Flask → start-параметр в бота → запись перехода.',
        keyFeatures: [
          'Личный кабинет партнёра в Telegram',
          'Сводный отчёт админу',
          'Короткие персональные ссылки',
          'Деплой на Amvera с persistent volume',
        ],
        metrics: [],
        techDetails: [
          { area: 'Боты', stack: 'Aiogram 3, SQLite' },
          { area: 'Редирект', stack: 'Flask, Amvera' },
        ],
      },
    },
    {
      id: 'aromo-gid',
      title: 'Aromo Gid',
      tagline: 'Каталог, который был живым и его заморозили',
      category: 'fullstack',
      categoryLabel: 'Сайт · демо',
      shortTabLabel: 'Aromo',
      statusLabel: 'ЗАМОРОЖЕН · ДЕМО',
      shortDescription:
        'Каталог парфюмерии для заказчика. Раньше был в работе, потом его остановили. Сейчас это демо на GitHub Pages, без живого трафика.',
      quoteHighlight: 'React · карточки · свайпы · демо',
      previewImage: '/projects/aromo-gid-preview.png',
      tags: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/gidroshlupka-ops/aromo-gid',
      liveUrl: 'https://gidroshlupka-ops.github.io/aromo-gid/',
      accentColor: '#F59E0B',
      accentGradient: 'from-amber-500 to-orange-500',
      iconName: 'Sparkles',
      featured: false,
      caseStudy: {
        overview:
          'Витрина ароматов: карточки, модалки, свайпы, отзывы. Связка с партнёрскими ботами была, сайт сейчас не продаёт.',
        problem:
          'Нужен был лёгкий каталог, который нормально открывается с телефона.',
        solution:
          'Обычный SPA на Vite. Анимации — Framer Motion. Отдельной админки и живой витрины больше нет.',
        architecture: 'React + Vite → GitHub Pages. Бэкенд каталога — в ботах, не на этом сайте.',
        keyFeatures: [
          'Карточки и модалки',
          'Свайпы на мобильном',
          'Галерея отзывов',
        ],
        metrics: [],
        techDetails: [
          { area: 'Frontend', stack: 'React 18, Vite, Tailwind' },
          { area: 'Статус', stack: 'Демо, заказ заморожен' },
        ],
      },
    },
    {
      id: 'fantaziya-atelier',
      title: 'Ателье «Фантазия»',
      tagline: 'Учебный сайт. Ателье им не воспользовалось',
      category: 'fullstack',
      categoryLabel: 'Учёба · демо',
      shortTabLabel: 'Фантазия',
      statusLabel: 'КОЛЛЕДЖ · ОТКАЗАЛИСЬ',
      shortDescription:
        'Лендинг, который делал в колледже под реальное ателье. Форма заявок в Telegram через прокси есть. Сам заказчик сайт не взял. Осталось демо.',
      quoteHighlight: 'учёба · форма в Telegram · демо',
      previewImage: '/projects/fantaziya-preview.png',
      tags: ['HTML5', 'Vanilla JS', 'Telegram Bot API'],
      githubUrl: 'https://github.com/gidroshlupka-ops/fantaziya-site',
      liveUrl: 'https://gidroshlupka-ops.github.io/fantaziya-site/',
      accentColor: '#10B981',
      accentGradient: 'from-emerald-500 to-teal-500',
      iconName: 'Send',
      featured: false,
      caseStudy: {
        overview:
          'Учебная проектная работа: услуги, галерея, заявка мастеру в Telegram. В прод ателье это не ушло.',
        problem:
          'Нужна была визитка с заявкой без токена бота в HTML.',
        solution:
          'Форма уходит на прокси, токен живёт только на сервере. Сейчас смотреть можно только вёрстку и сценарий.',
        architecture: 'Статика → прокси → Telegram Bot API.',
        keyFeatures: [
          'Каталог услуг и галерея',
          'Заявка в Telegram без токена на фронте',
          'Адаптивная вёрстка',
        ],
        metrics: [],
        techDetails: [
          { area: 'Frontend', stack: 'HTML, CSS, JS' },
          { area: 'Заявки', stack: 'прокси + Telegram Bot API' },
        ],
      },
    },
    {
      id: 'zvezda-diploma',
      title: 'KPI «Звезда» — диплом',
      tagline: 'Дипломный десктоп учёта KPI и ресурсов',
      category: 'backend',
      categoryLabel: 'Диплом',
      shortTabLabel: 'Диплом',
      statusLabel: 'ДИПЛОМ · НЕ ПРОД',
      shortDescription:
        'Дипломный модуль учёта KPI и ресурсов: окно на CustomTkinter, SQLite, отчёты Word, алерты в Telegram. Это защита в колледже, а не то, чем завод пользуется каждый день.',
      quoteHighlight: 'диплом · Tkinter · SQLite · не прод',
      previewImage: '/projects/zvezda-preview.png',
      tags: ['Python', 'CustomTkinter', 'SQLite', 'Telegram', 'python-docx'],
      githubUrl: 'https://github.com/gidroshlupka-ops/SSK_ZVEZDA_KPI',
      accentColor: '#8B5CF6',
      accentGradient: 'from-violet-500 to-purple-500',
      iconName: 'GraduationCap',
      featured: false,
      caseStudy: {
        overview:
          'Диплом для ИТ-отдела «Звезды». Есть сборка установщика и учебные данные. Называть это внедрённой ERP нельзя.',
        problem:
          'Нужно было показать учёт сотрудников, KPI и остатков в одном десктоп-окне и уметь выгрузить отчёт.',
        solution:
          'Локальная SQLite, синхронизация через приватный GitHub как «облако», фоновые алерты в Telegram, Word с графиками. Это учебный контур.',
        architecture:
          'The_Storm.py → UI / БД / отчёты / трей. Не путать с RIGBI — тот как раз ставили в работу.',
        keyFeatures: [
          'Окно учёта KPI и ресурсов',
          'Word-отчёт с графиками',
          'Telegram-алерты из учебного контура',
        ],
        metrics: [],
        techDetails: [
          { area: 'UI', stack: 'CustomTkinter' },
          { area: 'Данные', stack: 'SQLite' },
          { area: 'Отчёты', stack: 'python-docx, графики' },
        ],
        screenshots: [
          {
            title: 'Дашборд KPI',
            url: '/projects/zvezda/dashboard.png',
            description: 'Дипломный десктоп: сводка по отделам, динамика и учебные данные',
          },
        ],
      },
    },
  ],

  experiences: [
    {
      id: 'exp-freelance',
      role: 'Проектная разработка',
      company: 'Фриланс · Telegram / Кворк',
      period: '2025 — н.в.',
      type: 'Заказы',
      location: 'Удалённо',
      summary:
        'Заказная разработка через Telegram и Кворк: боты, реф-контуры и сайты. Сейчас беру штат или новый проект.',
      achievements: [
        'Партнёрская экосистема Aromo: бот-каталог, админка и Flask-редиректор на общей SQLite, деплой на Amvera.',
        'Telegram-автоматизация: отложенный постинг, парсер участников с FloodWait-retry, welcome-userbot.',
        'Каталог Aromo на React — был в бою, сейчас демо после заморозки заказчиком.',
      ],
      technologies: ['Python', 'Aiogram 3', 'FastAPI', 'SQLite', 'React', 'TypeScript'],
    },
    {
      id: 'exp-zvezda',
      role: 'Практика / диплом',
      company: 'ССК «Звезда», ИТ-отдел',
      period: 'Январь 2026 — март 2026',
      type: 'Практика',
      location: 'Удалённо',
      summary:
        'Практика в ИТ завода. Из этого периода две разные вещи: RIGBI, который ставили в работу, и дипломный KPI-модуль.',
      achievements: [
        'RIGBI: индекс 3500+ Excel, calamine вместо openpyxl, поиск по карточкам для ИТ-отдела.',
        'Диплом: десктоп учёта KPI на CustomTkinter + SQLite + Telegram. Учебный проект, не боевой контур предприятия.',
      ],
      technologies: ['Python', 'python-calamine', 'SQLite', 'CustomTkinter'],
    },
  ],

  socials: [
    {
      platform: 'Telegram',
      url: 'https://t.me/shlalalalalalalo',
      label: 'Написать в Telegram',
      iconName: 'Send',
      handle: '@shlalalalalalalo',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/gidroshlupka-ops',
      label: 'Профиль на GitHub',
      iconName: 'Github',
      handle: 'github.com/gidroshlupka-ops',
    },
    {
      platform: 'Email',
      url: 'aforigidroshlupka@gmail.com',
      label: 'Отправить Email',
      iconName: 'Mail',
      handle: 'aforigidroshlupka@gmail.com',
    },
  ],

  resume: {
    fullName: 'Журбин Алексей',
    title: 'Python-разработчик · React · Telegram-боты',
    contactsLine: 'aforigidroshlupka@gmail.com   ·   Telegram: @shlalalalalalalo',
    locationLine: 'github.com/gidroshlupka-ops   ·   удалённо',
    salary: 'Желаемая зарплата: от 60 000 до 90 000 ₽',
    about:
      'Собираю рабочие контуры на Python: Telegram-боты, обработка данных, веб-интерфейсы, RAG и голос. Внедрил RIGBI в ИТ ССК «Звезда» — индекс 3500+ Excel, поиск < 0.01 с. Поднимаю бот-экосистемы с общей базой и деплоем. В открытом коде — модули «Мурки»: гибридный RAG (ChromaDB), ротация ключей LLM и RVC-голос. Ищу работу: Python / боты / автоматизация / AI-интеграции, удалённо.',
    stack: [
      {
        label: 'Языки и backend',
        value: 'Python (asyncio, typing), FastAPI, Flask, Aiogram 3.x, REST API',
      },
      {
        label: 'Frontend',
        value: 'React, Vite, TypeScript, Tailwind CSS, Framer Motion',
      },
      {
        label: 'Базы',
        value: 'PostgreSQL (в т.ч. Supabase), SQLite, ChromaDB',
      },
      {
        label: 'Данные и Telegram',
        value: 'python-calamine, Telethon, валидация Excel, парсинг чатов',
      },
      {
        label: 'AI и голос',
        value: 'Gemini / OpenAI API, RAG (гибридный ранкер, маяки), Edge TTS → RVC, автопитч F0',
      },
      {
        label: 'Деплой',
        value: 'Git, Docker / compose, Amvera, GitHub Pages, Cloudflare Workers, .env',
      },
    ],
    jobs: [
      {
        title: 'Проектная разработка — фриланс (Telegram / Кворк)',
        period: '2025 — по настоящее время',
        projects: [
          {
            title: 'Партнёрка Aromo: каталог + админка + редиректор',
            bullets: [
              'Три сервиса на общей SQLite: реф-переходы, роли partner/admin, короткие slug-ссылки на Flask.',
              'Деплой на Amvera с диском, чтобы статистика не обнулялась. Сайт-каталог позже заморозили, боты в работе.',
            ],
          },
          {
            title: 'Telegram-автоматизация под заказы',
            bullets: [
              'Отложенный постинг (Aiogram + APScheduler + SQLite), парсер участников с FloodWait-retry, welcome-userbot с антифлудом.',
            ],
          },
        ],
      },
      {
        title: 'ССК «Звезда», ИТ-отдел — практика / диплом',
        period: 'Январь 2026 — март 2026',
        projects: [
          {
            title: 'RIGBI — поиск по архиву Excel (ставили в работу)',
            bullets: [
              'Индексация 3500+ таблиц инвентарных карточек для ИТ-отдела.',
              'openpyxl не тянул объём — python-calamine + потоки, ускорение в 10–50 раз, поиск по индексу < 0.01 с.',
              'Инкрементальные обновления по mtime и очистка кривых дат.',
            ],
          },
          {
            title: 'Модуль KPI — дипломный проект, не прод завода',
            bullets: [
              'Десктоп на CustomTkinter, локальная SQLite, Word-отчёты, учебные Telegram-алерты.',
              'Защитил как диплом. Это не внедрённая система учёта предприятия.',
            ],
          },
        ],
      },
    ],
    pets: [
      {
        title: '«Мурка» — мультимодальный AI Telegram-бот',
        bullets: [
          'Гибридный RAG: ChromaDB + переранжирование 0.5 сходство / 0.3 свежесть / 0.2 важность, изоляция по uid, маяки.',
          'Ротация LLM-ключей: RPM vs дневной 429, бан биллинг-группы, кулдауны в SQLite.',
          'Голос персонажа: Edge TTS → RVC, автопитч по медиане F0. Код модулей: github.com/gidroshlupka-ops/murka-showcase.',
        ],
      },
      {
        title: 'Портфолио',
        bullets: [
          'Сайт на React + Vite + TypeScript: gidroshlupka-ops.github.io. Форма контактов уходит в Telegram через Cloudflare Worker, токен на фронте не лежит.',
        ],
      },
    ],
    education: [
      'Среднее профессиональное (СПО) — Информационные системы и программирование, выпуск 2026 г.',
      'Учебный сайт ателье «Фантазия»: делал в колледже, ателье от внедрения отказалось. Демо — на GitHub Pages.',
    ],
  },
};
