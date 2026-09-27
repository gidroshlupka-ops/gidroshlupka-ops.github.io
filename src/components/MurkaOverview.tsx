import { Brain, KeyRound, AudioLines, ArrowRight } from 'lucide-react';

const MODULES = [
  {
    icon: Brain,
    title: 'Гибридная память',
    point: 'Смысл × свежесть × важность',
    text: 'Chroma отдаёт больше соседей, чем нужно. Потом каждый хит пересчитывается: похожесть не побеждает автоматически — старый важный факт бьёт свежий оффтоп.',
  },
  {
    icon: KeyRound,
    title: 'Пул ключей',
    point: 'RPM ≠ дневная квота',
    text: 'Минутный 429 — пауза 65 секунд. Дневной лимит банит весь биллинг-аккаунт на сутки. Кулдауны живут в SQLite: рестарт бота мёртвый ключ не воскрешает.',
  },
  {
    icon: AudioLines,
    title: 'Голос персонажа',
    point: 'Edge TTS → RVC',
    text: 'Синтез даёт интонацию, чекпоинт — тембр. На voice-to-voice питч считается из медианы F0: уже «женский» диапазон не сдвигается, низкий голос поднимается в полутонах.',
  },
];

const MEMORY_KINDS = [
  { name: 'Ход диалога', weight: '0.45', hint: 'что только что говорили' },
  { name: 'Слепок сессии', weight: '0.75', hint: 'человек пропал ≥ 2 часов' },
  { name: 'Факт-маяк', weight: '0.90', hint: 'долгосрочная запись о нём' },
];

const RANK_ROWS = [
  { kind: 'Факт', text: 'Живёт в Лиссабоне, печёт хлеб', score: 78, win: true },
  { kind: 'Ход', text: 'Утренняя шутка про булочки', score: 70, win: false },
  { kind: 'Ход', text: 'Случайный оффтоп', score: 64, win: false },
];

const KEY_STEPS = [
  { code: '200', label: 'mark_used', tone: 'ok' },
  { code: '429 RPM', label: 'бан 65 с', tone: 'warn' },
  { code: '429 день', label: 'группа 24 ч', tone: 'bad' },
  { code: 'limit 0', label: 'отдых 1 ч', tone: 'warn' },
  { code: 'revoked', label: 'навсегда', tone: 'dead' },
];

export function MurkaOverview() {
  return (
    <section className="space-y-6 sm:space-y-8">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70">
            Как это устроено
          </h3>
          <p className="text-xs sm:text-sm text-white/55 mt-1 max-w-2xl">
            Не три туториала подряд, а три модуля из живого компаньона. Публичный репозиторий — инженерный срез, без токенов и личных промптов.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
        {MODULES.map((mod) => {
          const Icon = mod.icon;
          return (
            <article
              key={mod.title}
              className="p-5 rounded-3xl bg-white/[0.04] border border-white/10 space-y-3 min-w-0"
            >
              <div className="flex items-center gap-2.5">
                <span className="w-9 h-9 rounded-2xl bg-[#3390EC]/15 text-[#7cbcf5] grid place-items-center shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-sm font-bold text-white">{mod.title}</div>
                  <div className="text-[10px] font-mono-tech uppercase tracking-wider text-[#7cbcf5]">
                    {mod.point}
                  </div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed">{mod.text}</p>
            </article>
          );
        })}
      </div>

      <div className="p-5 sm:p-7 rounded-3xl bg-white/[0.03] border border-white/10 space-y-5">
        <div className="text-[11px] font-mono-tech uppercase tracking-wider text-white/50">
          Один ход ответа
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-2">
          {['Человек в Telegram', 'Память по uid', 'Живой ключ', 'Gemini / Groq', 'Текст + голос'].map(
            (step, i, arr) => (
              <div key={step} className="flex items-center gap-2 lg:flex-1 min-w-0">
                <div className="flex-1 px-3 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-center text-[11px] sm:text-xs font-mono-tech text-white/85">
                  {step}
                </div>
                {i < arr.length - 1 && (
                  <ArrowRight className="hidden lg:block w-4 h-4 text-white/25 shrink-0" />
                )}
              </div>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Почему факт побеждает болтовню</h4>
            <p className="text-[11px] sm:text-xs font-mono-tech text-white/45">
              score = 0.5·similarity + 0.3·e<sup>−age/72</sup> + 0.2·importance
            </p>
          </div>

          <div className="flex h-3 rounded-full overflow-hidden">
            <div className="w-[50%] bg-[#3390EC]" title="сходство" />
            <div className="w-[30%] bg-sky-300/80" title="свежесть" />
            <div className="w-[20%] bg-white/70" title="важность" />
          </div>
          <div className="flex justify-between text-[10px] font-mono-tech text-white/45">
            <span>50% смысл</span>
            <span>30% свежесть</span>
            <span>20% важность</span>
          </div>

          <div className="space-y-2">
            {RANK_ROWS.map((row) => (
              <div key={row.text} className="space-y-1">
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="text-white/80 truncate">
                    <span className="font-mono-tech text-white/40 mr-2">{row.kind}</span>
                    {row.text}
                  </span>
                  <span className={`font-mono-tech shrink-0 ${row.win ? 'text-emerald-400' : 'text-white/40'}`}>
                    {row.score}
                    {row.win ? ' ←' : ''}
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full ${row.win ? 'bg-emerald-400' : 'bg-white/25'}`}
                    style={{ width: `${row.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {MEMORY_KINDS.map((kind) => (
              <div key={kind.name} className="p-2.5 rounded-2xl bg-black/30 border border-white/8">
                <div className="text-sm font-extrabold text-white">{kind.weight}</div>
                <div className="text-[10px] font-mono-tech text-white/70">{kind.name}</div>
                <div className="text-[10px] text-white/40 leading-snug">{kind.hint}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-5 sm:p-6 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Что делает пул при ошибке</h4>
            <p className="text-xs text-white/55">
              Ключи с одним префиксом — один облачный проект. Дневной лимит гасит всю группу, чтобы не жечь соседние токены того же аккаунта.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
            {KEY_STEPS.map((step) => (
              <div
                key={step.code}
                className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-2xl bg-black/30 border border-white/8"
              >
                <span className="text-[11px] font-mono-tech text-white/80">{step.code}</span>
                <span
                  className={`text-[11px] font-mono-tech ${
                    step.tone === 'ok'
                      ? 'text-emerald-400'
                      : step.tone === 'warn'
                        ? 'text-amber-300'
                        : step.tone === 'bad'
                          ? 'text-rose-300'
                          : 'text-white/35'
                  }`}
                >
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
