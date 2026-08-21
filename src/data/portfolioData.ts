import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Алексей',
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
    email: 'alex.developer@example.com',
    telegramUsername: '@alex_fullstack_dev',
    telegramLink: 'https://t.me/alex_fullstack_dev',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com',
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
      id: 'omniflow-ai',
      title: 'OmniFlow AI Orchestrator',
      tagline: 'Платформа автономных AI-агентов и мультимодельных пайплайнов',
      category: 'ai_llm',
      categoryLabel: 'AI & LLM Engine',
      shortDescription:
        'Интеллектуальная система автоматизации рабочих процессов с поддержкой цепочек рассуждений, векторного поиска и стриминга ответов в реальном времени.',
      quoteHighlight: 'AUTONOMOUS MULTI-AGENT ORCHESTRATION WITH REAL-TIME STREAMING & PGVECTOR',
      previewImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'pgvector', 'Gemini / Claude API', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#6366F1',
      accentGradient: 'from-indigo-500 to-cyan-400',
      iconName: 'Cpu',
      featured: true,
      caseStudy: {
        overview:
          'OmniFlow AI — это масштабируемая система для запуска и оркестрации цепочек AI-агентов, решающих сложные аналитические задачи и формирующих структурированные отчеты.',
        problem:
          'Ручной сбор данных, классификация входящей информации и формирование многостраничных отчетов отнимали много времени. Требовалось решение с фоновым выполнением задач, потоковым выводом и контролем точности ответов.',
        solution:
          'Спроектировал асинхронный бэкенд на FastAPI с очередями задач на Redis. Реализовал механизм Function Calling для вызова внешних API, векторный поиск по базе знаний через pgvector и реактивный фронтенд со стримингом токенов через WebSockets.',
        architecture:
          'API Gateway + FastAPI воркеры + Vector Store (PostgreSQL) + Кеширующий слой Redis + React 19 интерфейс с интерактивным графом выполнения задач.',
        keyFeatures: [
          'Параллельное исполнение задач несколькими AI-агентами с контролем контекста',
          'Потоковая генерация и рендеринг Markdown в реальном времени',
          'Гибридный семантический поиск по загруженным документам',
          'Панель мониторинга стоимости токенов и времени отклика каждого агента',
        ],
        metrics: [
          { label: 'Экономия времени', value: '75%' },
          { label: 'Скорость отклика', value: '<200ms TTFB' },
          { label: 'Точность извлечения', value: '96.4%' },
          { label: 'Обработанных документов', value: '50,000+' },
        ],
        techDetails: [
          { area: 'Backend Core', stack: 'FastAPI, Python 3.12, Asyncio, Pydantic v2' },
          { area: 'Frontend', stack: 'React 19, TypeScript, Tailwind CSS, Motion' },
          { area: 'Storage & Cache', stack: 'PostgreSQL 16, pgvector, Redis' },
          { area: 'AI & Ingestion', stack: 'OpenAI/Gemini Embeddings, Hybrid BM25/Cosine' },
        ],
        screenshots: [
          {
            title: 'Интерактивный граф агентов',
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
            description: 'Визуализация связей между агентами, очередей задач и текущего статуса обработки данных.',
          },
          {
            title: 'Векторная база знаний pgvector',
            url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop',
            description: 'Хранение векторных эмбеддингов документов с гибридным косинусным поиском.',
          },
          {
            title: 'Потоковый терминал ответов',
            url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop',
            description: 'WebSocket-стриминг генерации токенов в реальном времени с форматированием Markdown.',
          },
        ],
      },
    },
    {
      id: 'telecommerce-platform',
      title: 'TeleCommerce Ecosystem',
      tagline: 'Telegram Mini App & Бот для цифровых продаж и подписок',
      category: 'telegram_bot',
      categoryLabel: 'Telegram & TMA',
      shortDescription:
        'Комплексное решение для интернет-коммерции внутри Telegram: каталог товаров, нативная корзина, онлайн-оплата и мгновенная автоматическая выдача доступов.',
      quoteHighlight: 'SEAMLESS IN-APP TELEGRAM COMMERCE, CRYPTO GATEWAYS & AUTO-ACCESS',
      previewImage: 'https://images.unsplash.com/photo-1614680376593-902f749f7ffc?q=80&w=1000&auto=format&fit=crop',
      tags: ['Python', 'Aiogram 3', 'React TMA', 'PostgreSQL', 'Docker', 'Stripe / CryptoPay'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#0EA5E9',
      accentGradient: 'from-sky-500 to-blue-600',
      iconName: 'Bot',
      featured: true,
      caseStudy: {
        overview:
          'TeleCommerce — платформа для автоматизации продаж цифрового контента и товаров прямо в мессенджере с высокой конверсией без перехода на сторонние сайты.',
        problem:
          'Пользователям неудобно выходить из мессенджера для оформления покупок. Требовалось создать нативный удобный магазин с каталогом и моментальной оплатой.',
        solution:
          'Разработал Telegram Mini App на React с плавными мобильными анимациями и бэкенд на Aiogram 3 с обработкой вебхуков, интеграцией платежей (карты + криптовалюты) и мгновенным управлением закрытыми каналами.',
        architecture:
          'Telegram Webhook Server -> Fast Dispatcher -> PostgreSQL с транзакционным учетом заказов -> Очередь уведомлений -> Интеграция с Telegram Bot Payments API.',
        keyFeatures: [
          'Полноценный каталог с поиском, фильтрами и мгновенной синхронизацией остатков',
          'Автоматическая генерация инвойсов и подтверждение транзакций через вебхуки',
          'CRM-панель администратора с аналитикой заказов и клиентов',
          'Управление правами в закрытых Telegram-каналах и чатах (Auto-Kick / Auto-Invite)',
        ],
        metrics: [
          { label: 'Рост конверсии', value: '+38%' },
          { label: 'Активных пользователей', value: '45,000+ MAU' },
          { label: 'Бесперебойность', value: '99.98%' },
          { label: 'Обработка транзакции', value: '< 1.2 сек' },
        ],
        techDetails: [
          { area: 'Bot Engine', stack: 'Python, Aiogram 3.x, Asyncpg' },
          { area: 'Mini App UI', stack: 'React 19, Telegram WebApp SDK, Tailwind' },
          { area: 'Payments', stack: 'Telegram Payments, Stars, CryptoPay, ЮKassa' },
          { area: 'Infrastructure', stack: 'Docker Compose, Nginx, PostgreSQL, Redis' },
        ],
        screenshots: [
          {
            title: 'Интерфейс каталога Telegram Mini App',
            url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
            description: 'Мобильный SPA-интерфейс с быстрой загрузкой, корзиной и выбором способов оплаты.',
          },
          {
            title: 'Аналитическая панель продаж',
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
            description: 'Графики выручки, конверсий, когортный анализ и управление товарной матрицей.',
          },
        ],
      },
    },
    {
      id: 'pulsemetric-cloud',
      title: 'PulseMetric Real-time Monitor',
      tagline: 'Дашборд мониторинга микросервисов и аналитики API',
      category: 'fullstack',
      categoryLabel: 'Full-stack Platform',
      shortDescription:
        'Система сбора метрик, трейсинга ошибок и мониторинга доступности серверов с визуализацией временных рядов и алертами в Telegram/Slack.',
      quoteHighlight: 'SUB-50MS LATENCY TELEMETRY, REAL-TIME SOCKETS & INSTANT TELEGRAM ALERTS',
      previewImage: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop',
      tags: ['TypeScript', 'Node.js', 'React', 'Tailwind', 'PostgreSQL', 'WebSockets', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#10B981',
      accentGradient: 'from-emerald-500 to-teal-400',
      iconName: 'Activity',
      featured: true,
      caseStudy: {
        overview:
          'PulseMetric предоставляет мгновенный срез состояния распределенных сервисов с графиками задержки, потребления ресурсов и статусов эндпоинтов.',
        problem:
          'Большинство готовых систем мониторинга тяжеловесны и сложны в быстрой настройке для пет-проектов и небольших сервисов.',
        solution:
          'Создал легковесный агент сбора метрик и централизованный сервер с поддержкой WebSockets для обновления графиков без перезагрузки страниц и гибким конструктором правил оповещения в Telegram.',
        architecture:
          'HTTP Telemetry Collector -> Aggregator Service -> PostgreSQL Time-Series -> WebSocket Gateway -> Canvas / SVG Charting Engine.',
        keyFeatures: [
          'Live-графики задержки (p50, p95, p99) и статус-кодов ответов',
          'Настраиваемые правила алертинга с подавлением ложных срабатываний',
          'Экспорт логов инцидентов и автоматическая генерация отчетов',
          'Конструктор кастомных дашбордов под разные проекты',
        ],
        metrics: [
          { label: 'Пропускная способность', value: '10k req/sec' },
          { label: 'Задержка обновления UI', value: '<50ms' },
          { label: 'MTTR инцидентов', value: '-45%' },
          { label: 'Использование CPU агентом', value: '< 1.5%' },
        ],
        techDetails: [
          { area: 'Frontend', stack: 'React 19, TypeScript, Recharts, Tailwind CSS' },
          { area: 'Backend', stack: 'Node.js, Express, WebSocket (ws), Async Workers' },
          { area: 'Database', stack: 'PostgreSQL с партиционированием по датам' },
          { area: 'Alerts', stack: 'Telegram Bot API, Webhook Integrations, Email' },
        ],
        screenshots: [
          {
            title: 'Графики времени отклика API',
            url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1000&auto=format&fit=crop',
            description: 'Векторные графики p50/p95/p99 задержек эндпоинтов в реальном времени.',
          },
          {
            title: 'Алерты и нотификации в Telegram',
            url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop',
            description: 'Мгновенная доставка отчетов об ошибках и падениях с полным стектрейсом.',
          },
        ],
      },
    },
    {
      id: 'neuraldoc-engine',
      title: 'NeuralDoc Semantic Search',
      tagline: 'Движок семантического поиска по базе знаний и документам',
      category: 'ai_llm',
      categoryLabel: 'AI & Knowledge Base',
      shortDescription:
        'Быстрый поиск ответов в PDF, DOCX и текстовых файлах с точными ссылками на источники и контекстными цитатами с помощью векторных эмбеддингов.',
      quoteHighlight: 'HYBRID BM25 & VECTOR EMBEDDINGS WITH PRECISE CONTEXTUAL CITATIONS',
      previewImage: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
      tags: ['Python', 'FastAPI', 'pgvector', 'React', 'TypeScript', 'Docker', 'NLP'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#8B5CF6',
      accentGradient: 'from-violet-500 to-fuchsia-500',
      iconName: 'FileSearch',
      featured: false,
      caseStudy: {
        overview:
          'NeuralDoc преобразует массивы разрозненных документов в структурированную базу знаний с умным поисковым и вопросно-ответным интерфейсом.',
        problem:
          'Поиск ответов в объемных технических регламентах и PDF-файлах по ключевым словам часто не дает результатов из-за синонимов и формулировок.',
        solution:
          'Разработал пайплайн умной нарезки текста (chunking), генерации эмбеддингов и гибридного ранжирования (векторный поиск + BM25), выдающий точный абзац с ответом за доли секунды.',
        architecture:
          'Document Parser (PDF/DOCX) -> Text Chunker -> Vector Embedding Engine -> PostgreSQL (pgvector) -> FastAPI Answer Generator -> React Search UI.',
        keyFeatures: [
          'Поддержка файлов PDF, Word, Markdown, HTML и текстовых заметок',
          'Подсветка точного места в оригинальном документе, откуда взят ответ',
          'Фильтрация по тегам, категориям и датам',
          'История поисковых запросов и сохранение избранных ответов',
        ],
        metrics: [
          { label: 'Скорость поиска', value: '80мс' },
          { label: 'Точность цитирования', value: '98%' },
          { label: 'Объем документов', value: '100+ GB' },
          { label: 'Удовлетворенность', value: '4.9 / 5.0' },
        ],
        techDetails: [
          { area: 'Core Search', stack: 'FastAPI, SentenceTransformers, pgvector' },
          { area: 'Parsing', stack: 'PyMuPDF, python-docx, Unstructured' },
          { area: 'UI & Visuals', stack: 'React 19, TypeScript, Lucide Icons' },
          { area: 'Deployment', stack: 'Docker, Linux, Nginx, Gunicorn' },
        ],
        screenshots: [
          {
            title: 'Поисковый интерфейс с подсветкой источников',
            url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
            description: 'Отображение найденных фрагментов с точными ссылками на страницы и контекст.',
          },
        ],
      },
    },
    {
      id: 'devsync-workspace',
      title: 'DevSync Collaboration Hub',
      tagline: 'Совместный редактор кода и песочница в реальном времени',
      category: 'fullstack',
      categoryLabel: 'Full-stack & Real-time',
      shortDescription:
        'Веб-среда для совместного написания кода, разбора сниппетов и мгновенного запуска программ в изолированных контейнерах.',
      quoteHighlight: 'MULTI-USER REAL-TIME COLLABORATIVE CODE EXECUTION & ISOLATED SANDBOXES',
      previewImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1000&auto=format&fit=crop',
      tags: ['React', 'TypeScript', 'Node.js', 'Docker API', 'WebSockets', 'Tailwind'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#F59E0B',
      accentGradient: 'from-amber-500 to-orange-500',
      iconName: 'TerminalSquare',
      featured: false,
      caseStudy: {
        overview:
          'DevSync позволяет одновременно редактировать код с синхронизацией курсоров нескольких участников и запускать программы на Python, JavaScript и Go.',
        problem:
          'Для быстрого тестирования кода с коллегами или проведения собеседований требовался легкий инструмент без установки громоздких программ.',
        solution:
          'Спроектировал платформу с синхронизацией ввода через WebSockets и изолированным Docker-раннером с лимитом памяти и времени выполнения.',
        architecture:
          'React Code Canvas -> WebSocket Sync Server -> Execution Manager -> Sandboxed Docker Containers.',
        keyFeatures: [
          'Многопользовательское редактирование с цветными курсорами участников',
          'Безопасный запуск кода в изолированных песочницах за секунды',
          'Поддержка подсветки синтаксиса для популярных языков',
          'Встроенный терминал вывода stdout/stderr и отслеживания ошибок',
        ],
        metrics: [
          { label: 'Синхронизация ввода', value: '<25ms' },
          { label: 'Старт контейнера', value: '< 600ms' },
          { label: 'Одновременных сессий', value: '500+' },
          { label: 'Безопасность среды', value: '100% Sandbox' },
        ],
        techDetails: [
          { area: 'Editor Engine', stack: 'Monaco Editor, WebSocket Sync' },
          { area: 'Runner Backend', stack: 'Node.js, Docker SDK, Linux cgroups' },
          { area: 'Frontend', stack: 'React 19, TypeScript, Tailwind CSS' },
        ],
        screenshots: [
          {
            title: 'Совместное редактирование кода',
            url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
            description: 'Синхронизация позиции курсоров в реальном времени с поддержкой подсветки синтаксиса.',
          },
        ],
      },
    },
    {
      id: 'botforge-studio',
      title: 'BotForge Visual Builder',
      tagline: 'Конструктор логики Telegram-ботов с поддержкой вебхуков',
      category: 'backend',
      categoryLabel: 'Backend & Tools',
      shortDescription:
        'Визуальный редактор сценариев для ботов со стейт-машинами, интеграцией внешних REST API и встроенным симулятором диалогов.',
      quoteHighlight: 'VISUAL FSM NODE EDITOR WITH IN-BROWSER TELEGRAM DIALOG SIMULATOR',
      previewImage: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=1000&auto=format&fit=crop',
      tags: ['Python', 'FastAPI', 'React Flow', 'PostgreSQL', 'Redis', 'Aiogram'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      telegramBotUrl: 'https://t.me/alex_fullstack_dev',
      accentColor: '#EC4899',
      accentGradient: 'from-pink-500 to-rose-500',
      iconName: 'Workflow',
      featured: false,
      caseStudy: {
        overview:
          'BotForge позволяет создавать сложные разветвленные сценарии диалогов для Telegram без необходимости вручную писать шаблонный код FSM.',
        problem:
          'Быстрое прототипирование и тестирование новых воронок в ботах требовало много времени на ручное кодирование каждого шага.',
        solution:
          'Создал визуальный drag-and-drop редактор узлов на React и движок интерпретации графа состояний на Python с мгновенным развертыванием бота по токену.',
        architecture:
          'Node Flow Builder (React) -> JSON Schema Graph -> Python FSM Interpreter -> Telegram Webhook Receiver -> Execution Engine.',
        keyFeatures: [
          'Визуальный граф узлов: кнопки, инлайн-меню, условия, таймеры и API запросы',
          'Встроенный симулятор прямо в браузере для отладки логики до релиза',
          'Поддержка динамических переменных и условий переходов',
          'Готовые шаблоны для лидогенерации, поддержки и квизов',
        ],
        metrics: [
          { label: 'Ускорение релиза', value: 'в 5 раз' },
          { label: 'Создано сценариев', value: '1,200+' },
          { label: 'Обработка сообщений', value: '<30ms' },
          { label: 'Отказоустойчивость', value: '99.95%' },
        ],
        techDetails: [
          { area: 'Visual Editor', stack: 'React, React Flow, TypeScript, Tailwind' },
          { area: 'Interpreter', stack: 'Python 3.12, FastAPI, State Machine Core' },
          { area: 'Storage', stack: 'PostgreSQL, Redis' },
          { area: 'Integrations', stack: 'Telegram Bot API, Generic HTTP Webhooks' },
        ],
        screenshots: [
          {
            title: 'Визуальный граф диалоговых цепочек',
            url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
            description: 'Конструктор шагов, условий переходов и интеграций с вебхуками сторонних API.',
          },
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
      url: 'https://t.me/alex_fullstack_dev',
      label: 'Написать в Telegram',
      iconName: 'Send',
      handle: '@alex_fullstack_dev',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com',
      label: 'Профиль на GitHub',
      iconName: 'Github',
      handle: 'github.com/developer',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      label: 'Связаться в LinkedIn',
      iconName: 'Linkedin',
      handle: 'linkedin.com/in/developer',
    },
    {
      platform: 'Email',
      url: 'mailto:alex.developer@example.com',
      label: 'Отправить Email',
      iconName: 'Mail',
      handle: 'alex.developer@example.com',
    },
  ],
};
