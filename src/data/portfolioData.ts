import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'AFORI',
    role: 'Full-stack Developer',
    taglineRoles: [
      'Full-stack Developer',
      'Python & FastAPI Developer',
      'React & TypeScript Developer',
      'Telegram Bot & TMA Architect',
      'LLM & AI Integration Engineer',
    ],
    pitchEn:
      'Building responsive web applications, resilient Python backends, Telegram bot ecosystems, and smart AI integrations through hands-on freelance and open-source projects.',
    pitchRu:
      'Создаю современные веб-приложения на React, производительные бэкенды на Python/FastAPI, Telegram-ботов и решения с интеграцией нейросетей.',
    aboutStory: [
      'Занимаюсь веб-разработкой и созданием бэкендов на Python и TypeScript, решая практические задачи во фрилансе и развивая собственные пет-проекты.',
      'Мой практический стек выстроен вокруг создания полноценных цифровых решений: от интерактивных интерфейсов на React до устойчивой серверной логики на FastAPI и PostgreSQL.',
      'Особый интерес вызывают разработка Telegram Mini Apps, проектирование умных ботов на Aiogram и интеграция современных LLM (OpenAI, Claude, Gemini) в реальные рабочие сценарии.',
      'Каждый свой проект я проектирую с нуля: продумываю архитектуру базы данных, настраиваю Docker-окружение и уделяю внимание деталям интерфейса.',
      'Постоянно практикуюсь на реальных задачах, исследую новые технологии и стремлюсь писать чистый, надежный и поддерживаемый код.',
    ],
    location: 'Remote / Worldwide',
    workStatus: 'Открыт к предложениям и проектам',
    availabilityNote: 'Готов к фриланс-заказам, Full-stack разработке и интересным задачам',
    email: 'aforigidroshlupka@gmail.com',
    telegramUsername: '@shlalalalalalalo',
    telegramLink: 'https://t.me/@shlalalalalalalo',
    githubUrl: 'https://github.com/gidroshlupka-ops',
    linkedinUrl: 'https://www.linkedin.com/in/afori',
    experienceYears: '3+',
    metricsSummary: [
      {
        value: '30+',
        label: 'Реализованных проектов',
        description: 'Web, Telegram, SaaS, AI-сервисы',
      },
      {
        value: '100%',
        label: 'Практический опыт',
        description: 'Архитектура с нуля до релиза',
      },
      {
        value: '<150мс',
        label: 'Средний response time',
        description: 'Оптимизация бэкенда и БД',
      },
      {
        value: '24/7',
        label: 'Uptime & Docker деплой',
        description: 'Изоляция и контейнеризация',
      },
    ],
  },

  skillCategories: [
    { id: 'all', label: 'Все технологии' },
    { id: 'backend', label: 'Backend & Архитектура' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'ai_bots', label: 'LLM & Telegram API' },
    { id: 'database', label: 'Базы данных & Кеш' },
    { id: 'devops', label: 'DevOps & Инфраструктура' },
  ],

  skills: [
    {
      name: 'Python',
      category: 'backend',
      categoryLabel: 'Backend',
      iconName: 'Code2',
      highlight: 'FastAPI, Django, Asyncio, Pydantic, Celery, парсинг данных',
      featured: true,
    },
    {
      name: 'React 19 & Next.js',
      category: 'frontend',
      categoryLabel: 'Frontend',
      iconName: 'Layout',
      highlight: 'SPA, SSR, Server Components, Hooks, State Management',
      featured: true,
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      categoryLabel: 'Frontend / Fullstack',
      iconName: 'FileCode',
      highlight: 'Строгая типизация, Generic types, Node.js + React',
      featured: true,
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      categoryLabel: 'Databases',
      iconName: 'Database',
      highlight: 'Индексы, оптимизация запросов, pgvector, JSONB',
      featured: true,
    },
    {
      name: 'Docker & Compose',
      category: 'devops',
      categoryLabel: 'DevOps',
      iconName: 'Container',
      highlight: 'Multi-stage сборка, контейнеризация проектов, docker-compose',
      featured: true,
    },
    {
      name: 'Telegram Bot API & TMA',
      category: 'ai_bots',
      categoryLabel: 'Telegram & Bots',
      iconName: 'Bot',
      highlight: 'Aiogram 3, Webhooks, Telegram Mini Apps, прием оплат',
      featured: true,
    },
    {
      name: 'LLM & AI Integration',
      category: 'ai_bots',
      categoryLabel: 'AI / LLM',
      iconName: 'Sparkles',
      highlight: 'RAG пайплайны, Function Calling, OpenAI / Claude / Gemini API',
      featured: true,
    },
    {
      name: 'Redis',
      category: 'database',
      categoryLabel: 'Caching & Queues',
      iconName: 'Layers',
      highlight: 'Кеширование, Pub/Sub, Rate Limiting, очереди задач Celery',
      featured: false,
    },
    {
      name: 'Node.js & Express',
      category: 'backend',
      categoryLabel: 'Backend',
      iconName: 'Server',
      highlight: 'RESTful API, WebSocket серверы, микросервисы',
      featured: false,
    },
    {
      name: 'Tailwind CSS',
      category: 'frontend',
      categoryLabel: 'Frontend',
      iconName: 'Palette',
      highlight: 'Современный адаптивный UI, дизайн-системы, Motion анимации',
      featured: false,
    },
    {
      name: 'CI/CD & Linux',
      category: 'devops',
      categoryLabel: 'DevOps',
      iconName: 'Terminal',
      highlight: 'GitHub Actions, Nginx Reverse Proxy, SSL, настройка VPS',
      featured: false,
    },
    {
      name: 'REST & WebSockets',
      category: 'backend',
      categoryLabel: 'Architecture',
      iconName: 'Network',
      highlight: 'OpenAPI/Swagger спецификации, вебхуки, real-time события',
      featured: false,
    },
  ],

  projectCategories: [
    { id: 'all', label: 'Все проекты' },
    { id: 'fullstack', label: 'Full-stack & Web' },
    { id: 'ai_llm', label: 'AI & LLM' },
    { id: 'telegram_bot', label: 'Telegram & Боты' },
    { id: 'backend', label: 'Backend & Архитектура' },
  ],

  projects: [
    {
      id: 'rigbi',
      title: 'RIGBI — обработчик Excel-данных',
      tagline: 'Backend-инструмент для сбора и валидации данных из 3500+ таблиц',
      category: 'backend',
      categoryLabel: 'Backend & Data Processing',
      shortDescription:
        'Инструмент для автоматического сбора и валидации данных из распределённого репозитория Excel-таблиц. Ускорил обработку в разы, заменив стандартный парсер на Rust-движок.',
      quoteHighlight: 'RUST-POWERED EXCEL PARSING WITH MULTITHREADED VALIDATION PIPELINE',

      // previewImage — картинка на карточке. Сделай скриншот консоли/кода/схемы и положи в public/projects/
      previewImage: '/projects/rigbi-preview.png',

      tags: ['Python', 'python-calamine (Rust engine)', 'ThreadPoolExecutor', 'Валидация данных'],

      // ССЫЛКИ:
      githubUrl: 'https://github.com/gidroshlupka-ops/RIGBI_V2-calamine-', 

      accentColor: '#3B82F6',
      accentGradient: 'from-blue-500 to-cyan-500',
      iconName: 'Database',
      featured: true,
      caseStudy: {
        overview:
          'RIGBI — backend-инструмент для автоматического сбора и валидации данных из распределённого репозитория, содержащего более 3500 Excel-таблиц.',
        problem:
          'Стандартный стек на openpyxl не тянул объём по скорости — обработка тысяч таблиц занимала неприемлемо много времени, плюс данные в таблицах были «грязными»: несогласованные форматы дат, пропуски, опечатки.',
        solution:
          'Заменил openpyxl на Rust-движок python-calamine, что ускорило парсинг в разы. Добавил многопоточную обработку через ThreadPoolExecutor и отдельный слой строгой валидации/очистки данных, чтобы система не падала на кривых файлах.',
        architecture:
          'Excel-репозиторий (3500+ файлов) -> python-calamine (Rust parser) -> ThreadPoolExecutor (параллельная обработка) -> Валидация и очистка -> Структурированный вывод.',
        keyFeatures: [
          'Парсинг тысяч Excel-файлов на Rust-движке вместо медленного openpyxl',
          'Многопоточная обработка для параллельного чтения таблиц',
          'Строгая валидация дат, форматов и пропусков — отказоустойчивость на «грязных» данных',
        ],
        metrics: [
          { label: 'Обрабатываемых таблиц', value: '3500+' },
          { label: 'Ускорение парсинга', value: 'в разы (Rust vs Python)' },
        ],
        techDetails: [
          { area: 'Парсинг', stack: 'python-calamine (Rust engine)' },
          { area: 'Многопоточность', stack: 'concurrent.futures.ThreadPoolExecutor' },
          { area: 'Валидация', stack: 'Собственная логика очистки данных' },
        ],
      },
    },

    {
      id: 'zvezda-murka',
      title: 'ССК «Звезда» + Мурка',
      tagline: 'KPI-система предприятия: десктоп-клиент, Telegram-бот и AI-ассистент',
      category: 'ai_llm',
      categoryLabel: 'AI & Enterprise System',
      shortDescription:
        'Внутренняя система учёта KPI и ресурсов производственного предприятия: десктоп-приложение в связке с Telegram-ботом на общей базе, плюс мультимодальный AI-бот с долгосрочной памятью.',
      quoteHighlight: 'REALTIME DESKTOP-TO-TELEGRAM SYNC WITH MULTIMODAL AI MEMORY SYSTEM',

      previewImage: '/projects/zvezda-preview.png',
      // heroImage: '/projects/zvezda-hero.png', // необязательно, крупная картинка в модалке

      tags: ['Python', 'Tkinter', 'PostgreSQL (Supabase)', 'Aiogram 3', 'Gemini API', 'Fernet/bcrypt'],

      githubUrl: 'https://github.com/gidroshlupka-ops/SSK_ZVEZDA_KPI',

      accentColor: '#8B5CF6',
      accentGradient: 'from-violet-500 to-purple-500',
      iconName: 'Sparkles',
      featured: true,
      caseStudy: {
        overview:
          'Внутренняя система для судостроительного предприятия: десктоп-клиент и Telegram-бот, работающие на общей базе, плюс AI-ассистент с мультимодальным чатом и долгосрочной памятью.',
        problem:
          'Нужно было синхронизировать десктоп-клиент и Telegram-бота без вебсокетов и лишней нагрузки на сервер, а также автоматически предупреждать о критических остатках ресурсов без участия человека.',
        solution:
          'Реализовал polling Supabase каждые 15 секунд со сравнением снапшотов таблиц — лёгкая realtime-синхронизация без постоянного соединения. Фоновый воркер раз в час сам проверяет остатки и шлёт подробные алерты в Telegram. Отдельно собрал AI-бота с системой долгосрочной памяти ("маяки" — паттерн, по которому бот сам сохраняет факты в SQLite) и ротацией ключей LLM-провайдера для устойчивости к лимитам.',
        architecture:
          'Desktop Client (Tkinter) <-> Supabase (Postgres, realtime polling) <-> Telegram Bot (Aiogram 3) + LLM Gateway (Gemini API, ротация ключей).',
        keyFeatures: [
          'Realtime-синхронизация между десктопом и ботом без вебсокетов',
          'Автоматические Telegram-алерты при падении остатков ниже минимума',
          'Долгосрочная память AI-ассистента через собственный механизм записи фактов',
          'Мультимодальный чат: текст, изображения, аудио',
          'Шифрование данных (Fernet, bcrypt) и автогенерация отчётов в Word с графиками',
        ],
        metrics: [
          { label: 'Интервал синхронизации', value: '15 сек' },
          { label: 'Проверка критических остатков', value: 'раз в час, автоматически' },
        ],
        techDetails: [
          { area: 'Desktop', stack: 'Python, Tkinter, pystray (трей-иконка)' },
          { area: 'База данных', stack: 'PostgreSQL (Supabase)' },
          { area: 'Bot', stack: 'Aiogram 3, SQLite (память диалогов)' },
          { area: 'AI', stack: 'Gemini API с ротацией ключей, генерация изображений' },
          { area: 'Безопасность', stack: 'Fernet (шифрование данных), bcrypt (пароли)' },
        ],
      },
    },

    {
      id: 'aromo-gid',
      title: 'Aromo Gid',
      tagline: 'Сайт-каталог парфюмерии с адаптивным дизайном и анимациями',
      category: 'fullstack',
      categoryLabel: 'Full-stack & Web',
      shortDescription:
        'Элегантный сайт-каталог парфюмерии: интерактивные карточки товаров с модалками и свайпами, система отзывов с pinch-to-zoom, плавные анимации.',
      quoteHighlight: 'RESPONSIVE PERFUME CATALOG WITH GESTURE-SUPPORTED PRODUCT MODALS',

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
          'Каталог парфюмерии с минималистичной эстетикой в стиле "Stone & Nature": просмотр карточек товаров с модальными окнами, поддержкой свайпов и полноэкранным просмотром отзывов.',
        problem:
          'Нужен был премиальный, но лёгкий каталог с удобной навигацией по товарам и без задержек на мобильных устройствах.',
        solution:
          'Собрал SPA на React 18 + Vite для быстрой сборки, стилизацию — на Tailwind, анимации переходов между карточками и модалками — на Framer Motion. Отдельно реализовал умную блокировку скролла при открытых модалках и pinch-to-zoom для просмотра отзывов.',
        architecture: 'React 18 (Vite) -> Tailwind CSS -> Framer Motion (анимации) -> GitHub Pages (статический деплой).',
        keyFeatures: [
          'Интерактивные карточки товаров с модалками и поддержкой свайпов',
          'Полноэкранный просмотр отзывов с pinch-to-zoom',
          'Полная адаптивность под мобильные и планшеты',
          'Быстрая сборка и загрузка на Vite',
        ],
        metrics: [],
        techDetails: [
          { area: 'Frontend', stack: 'React 18, Vite 6, Tailwind CSS' },
          { area: 'Анимации', stack: 'Motion (Framer Motion)' },
          { area: 'Иконки', stack: 'Lucide React' },
        ],
      },
    },

    {
      id: 'fantaziya-atelier',
      title: 'Ателье «Фантазия»',
      tagline: 'Сайт-визитка ателье с заявками, уходящими напрямую в Telegram',
      category: 'fullstack',
      categoryLabel: 'Full-stack & Web',
      shortDescription:
        'Сайт-визитка швейного ателье: каталог услуг, галерея работ, форма заказа. Заявка с сайта мгновенно приходит мастеру в Telegram через собственный прокси-сервер — токен бота не светится на фронтенде.',
      quoteHighlight: 'SECURE TELEGRAM ORDER PIPELINE WITH TOKEN-HIDING PROXY SERVER',

      // Скриншот у тебя уже есть — сохрани как fantaziya-preview.png в public/projects/
      previewImage: '/projects/fantaziya-preview.png',

      tags: ['HTML5', 'Vanilla JS', 'Node.js', 'Express', 'Telegram Bot API'],

      githubUrl: 'https://github.com/gidroshlupka-ops/fantaziya-site',
      liveUrl: 'https://gidroshlupka-ops.github.io/fantaziya-site/',

      accentColor: '#10B981',
      accentGradient: 'from-emerald-500 to-teal-500',
      iconName: 'Send',
      featured: false,
      caseStudy: {
        overview:
          'Сайт-визитка для швейного ателье: клиент просматривает каталог услуг и галерею, оставляет заявку — она сразу приходит мастеру в Telegram, без пропущенных заказов.',
        problem:
          'Нужно было безопасно принимать заказы с сайта в Telegram, не храня токен бота на фронтенде — иначе его мог бы украсть любой, кто откроет исходный код страницы.',
        solution:
          'Спроектировал схему заявок и написал Node.js/Express прокси-сервер, который принимает данные формы и пересылает их в Telegram Bot API. Токен бота хранится только на сервере, в переменных окружения — на фронтенде его нет вообще.',
        architecture:
          'Клиент заполняет форму -> js/main.js -> Node.js прокси-сервер (токен только здесь) -> Telegram Bot API -> Сообщение мастеру.',
        keyFeatures: [
          'Приём заказов с сайта напрямую в Telegram мастера',
          'Безопасное хранение токена бота через прокси-сервер',
          'Каталог услуг по категориям и галерея готовых работ',
          'Полностью адаптивная вёрстка',
        ],
        metrics: [],
        techDetails: [
          { area: 'Frontend', stack: 'HTML5, CSS3, Vanilla JS' },
          { area: 'Backend', stack: 'Node.js, Express' },
          { area: 'Доставка заявок', stack: 'Telegram Bot API' },
        ],
      },
    },

    {
      id: 'partner-bot-ecosystem',
      title: 'Партнёрская бот-экосистема',
      tagline: 'Реф-программа: бот-каталог, бот-админка и редирект-сервис на общей базе',
      category: 'telegram_bot',
      categoryLabel: 'Telegram & Боты',
      shortDescription:
        'Три сервиса на общей SQLite-базе: бот считает переходы по реферальным ссылкам партнёров, отдельная бот-админка показывает статистику, Flask-редиректор матчит короткие ссылки с нужным партнёром.',
      quoteHighlight: 'MULTI-SERVICE REFERRAL SYSTEM WITH SHARED SQLITE STATE',

      previewImage: '/projects/partner-bot-preview.png',

      tags: ['Python', 'Aiogram 3', 'Flask', 'SQLite', 'Amvera (деплой)'],

      githubUrl: 'https://github.com/gidroshlupka-ops/partneer',

      accentColor: '#EC4899',
      accentGradient: 'from-pink-500 to-rose-500',
      iconName: 'Workflow',
      featured: false,
      caseStudy: {
        overview:
          'Партнёрская программа для бота-каталога: партнёры получают персональные реферальные ссылки, бот-админка показывает статистику по каждому, а отдельный редирект-сервис на Flask направляет короткие ссылки в нужный чат.',
        problem:
          'Нужно было отслеживать, кто из партнёров привёл клиента, без сложной внешней аналитики — и при этом дать каждому партнёру простой личный кабинет прямо в Telegram.',
        solution:
          'Сделал бот-админку с ролями: обычный пользователь видит свою ссылку и статистику переходов, администратор — сводный отчёт по всем партнёрам. Отдельно поднял Flask-сервис на Amvera, который матчит короткие slug-ссылки с партнёром по username/tag и редиректит в основной бот с нужным start-параметром.',
        architecture:
          'Клиент переходит по короткой ссылке -> Flask-редиректор (SQLite) -> определяет партнёра -> редирект в основной Telegram-бот с start-параметром -> запись перехода в БД.',
        keyFeatures: [
          'Личный кабинет партнёра прямо в Telegram: своя ссылка и статистика',
          'Админ-панель со сводным отчётом по всем партнёрам',
          'Flask-редиректор для коротких персональных ссылок',
          'Бесплатный деплой на Amvera с persistent volume (данные не теряются при обновлениях)',
        ],
        metrics: [],
        techDetails: [
          { area: 'Боты', stack: 'Python, Aiogram 3, SQLite' },
          { area: 'Редирект-сервис', stack: 'Flask, деплой на Amvera' },
        ],
      },
    },

    {
      id: 'n8n-orchestrator-worker',
      title: 'n8n Orchestrator / Worker',
      tagline: 'Мультиагентный workflow с валидацией, состоянием сессии и retry-политиками',
      category: 'backend',
      categoryLabel: 'Automation & Orchestration',
      shortDescription:
        'Тестовое задание на позицию n8n-разработчика: система разделена на управляющий workflow (валидация, состояние сессии) и исполнительный (поиск данных), с политиками повторных попыток на критичных узлах.',
      quoteHighlight: 'ORCHESTRATOR/WORKER SPLIT WITH SUPABASE SESSION STATE AND RETRY POLICIES',

      previewImage: '/projects/n8n-preview.png',

      tags: ['n8n', 'Supabase', 'Webhook', 'JSON API contracts'],

    // ссылки на репозиторий нет — только визуальная демонстрация

      accentColor: '#EF4444',
      accentGradient: 'from-red-500 to-orange-500',
      iconName: 'Workflow',
      featured: false,
      caseStudy: {
        overview:
          'Модульная система для обработки поисковых запросов с разделением логики на управляющий workflow (Orchestrator) и исполнительный (Worker) — тестовое задание на позицию n8n-разработчика.',
        problem:
          'Нужно было спроектировать архитектуру, которая масштабируется и не разваливается при ошибках: отдельно интерфейс и валидация, отдельно — тяжёлая работа с данными, с сохранением состояния между шагами.',
        solution:
          'Разделил систему на два независимых workflow: Orchestrator принимает вебхук, валидирует вход и сразу пишет статус сессии в Supabase (для отслеживания истории запросов), затем делегирует поиск отдельному Worker-процессу через executeWorkflow. Поиск в Worker реализован нативными средствами ноды Supabase (фильтрация на стороне БД, а не в JS) — быстрее и правильнее, чем тянуть всё в память. На всех критичных узлах (запросы к БД, вызовы под-процессов) настроены retry-политики (3 попытки, интервал 1000мс).',
        architecture:
          'Webhook -> Validation (JS) -> Supabase (запись session_state) -> Call Worker Workflow -> Supabase (поиск с фильтрацией) -> Структурированный JSON-ответ.',
        keyFeatures: [
          'Чёткое разделение Orchestrator/Worker для масштабируемости',
          'Состояние сессии сохраняется в Supabase сразу после валидации',
          'Поиск через нативную фильтрацию Supabase вместо обработки в JS',
          'Retry-политики на всех критичных узлах',
          'Структурированные JSON-контракты ответа: success / missing_data / error',
        ],
        metrics: [
          { label: 'Retry-попыток на критичных нодах', value: '3, интервал 1000мс' },
        ],
        techDetails: [
          { area: 'Оркестрация', stack: 'n8n (Webhook, Code, executeWorkflow nodes)' },
          { area: 'Хранилище состояния', stack: 'Supabase (Postgres)' },
          { area: 'Контракт ответа', stack: 'Структурированный JSON (success/missing_data/error)' },
        ],
      },
    },
  ],

  experiences: [
    {
      id: 'exp-1',
      role: 'Full-stack & Telegram Bot Разработчик',
      company: 'Фриланс & Заказная разработка',
      period: '2023 — Настоящее время',
      type: 'Фриланс / Проектная работа',
      location: 'Удаленно',
      summary:
        'Разработка веб-приложений под ключ, создание сложных Telegram-ботов с интеграцией платежей, парсеров данных и бэкендов на FastAPI.',
      achievements: [
        'Разработал и запустил более 15 Telegram-ботов и Mini Apps (интернет-магазины, боты для закрытых каналов с платной подпиской, AI-ассистенты).',
        'Интегрировал платежные шлюзы (Telegram Stars, CryptoPay, ЮKassa, Stripe) с автоматической валидацией чеков и вебхуками.',
        'Создал полнофункциональные SPA-панели управления на React и Tailwind для администрирования ботов и просмотра аналитики.',
        'Настроил стабильный деплой проектов на VPS с Docker Compose, SSL-сертификатами и Nginx реверс-прокси.',
      ],
      technologies: ['Python', 'FastAPI', 'Aiogram 3', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Redis', 'Telegram API'],
    },
    {
      id: 'exp-2',
      role: 'Автор & Разработчик пет-проектов',
      company: 'Pet Projects & Open Source',
      period: '2022 — 2024',
      type: 'Самостоятельная разработка',
      location: 'Удаленно',
      summary:
        'Проектирование и запуск собственных инструментов, RAG-сервисов с векторными базами данных и веб-приложений с нуля.',
      achievements: [
        'Спроектировал архитектуру системы оркестрации AI-агентов OmniFlow на FastAPI и pgvector со стримингом через WebSockets.',
        'Реализовал систему мониторинга PulseMetric с real-time графиками задержки и веб-сокетами на Node.js и React.',
        'Оптимизировал SQL-запросы в PostgreSQL, использовал партиционирование и индексы для работы с большими объемами логов.',
        'Оформил открытые репозитории с подробной документацией по запуску в Docker и чистой структурой кода.',
      ],
      technologies: ['Python', 'FastAPI', 'React 19', 'TypeScript', 'pgvector', 'Docker', 'Redis', 'WebSockets', 'Tailwind CSS'],
    },
    {
      id: 'exp-3',
      role: 'Backend & Скрипты автоматизации',
      company: 'Самостоятельная практика & Заказы',
      period: '2021 — 2022',
      type: 'Фриланс / Практика',
      location: 'Удаленно',
      summary:
        'Изучение архитектуры бэкенд-систем, написание асинхронных парсеров, автоматизация рутинных процессов и создание первых ботов.',
      achievements: [
        'Создавал асинхронные парсеры на Python (aiohttp, BeautifulSoup, Playwright) для сбора и структурирования данных в PostgreSQL.',
        'Разрабатывал RESTful API на Django и FastAPI с валидацией схем через Pydantic и автодокументацией Swagger.',
        'Освоил работу с Docker, написание Dockerfile и базовую настройку Linux-серверов для непрерывной работы скриптов.',
        'Регулярно решал алгоритмические задачи и изучал паттерны проектирования чистой архитектуры.',
      ],
      technologies: ['Python', 'FastAPI', 'Django', 'PostgreSQL', 'Docker', 'Linux', 'Git', 'Asyncio'],
    },
  ],

  socials: [
    {
      platform: 'Telegram',
      url: 'https://t.me/@shlalalalalalalo',
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
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/afori',
      label: 'Связаться в LinkedIn',
      iconName: 'Linkedin',
      handle: 'linkedin.com/in/afori',
    },
    {
      platform: 'Email',
      url: 'aforigidroshlupka@gmail.com',
      label: 'Отправить Email',
      iconName: 'Mail',
      handle: 'aforigidroshlupka@gmail.com',
    },
  ],
};
