import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Mail,
  MapPin,
  Send,
  Briefcase,
  Code2,
  GraduationCap,
  Award,
  Globe,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { lockBodyScroll, unlockBodyScroll } from '../lib/scrollLock';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      lockBodyScroll();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (isOpen) unlockBodyScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        >
          {/* Header Action Bar */}
          <div className="no-print p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between shrink-0 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm sm:text-base">Резюме разработчика</span>
              <span className="text-xs text-slate-400">({portfolioData.personal.role})</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                id="print-resume-btn"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Печать / Сохранить в PDF</span>
              </button>
              <button
                onClick={onClose}
                aria-label="Закрыть окно"
                className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Paper */}
          <div className="p-6 sm:p-10 overflow-y-auto bg-white space-y-8 text-slate-900 font-sans">
            {/* Top Resume Header */}
            <div className="border-b border-slate-200 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950">
                  {portfolioData.personal.name}
                </h1>
                <div className="text-base font-bold text-indigo-700 mt-0.5">
                  {portfolioData.personal.role}
                </div>
                <div className="text-xs text-slate-600 mt-1 max-w-lg">
                  {portfolioData.personal.pitchEn}
                </div>
              </div>

              {/* Contact details */}
              <div className="text-xs space-y-1.5 text-slate-700 shrink-0">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  <span>{portfolioData.personal.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Send className="w-3.5 h-3.5 text-slate-500" />
                  <span>Telegram: {portfolioData.personal.telegramUsername}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-indigo-600" />
                <span>Технологический стек</span>
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">Backend:</span>
                  <span className="text-slate-600">Python (FastAPI, Django, Asyncio), Node.js, REST, WebSockets</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">Frontend:</span>
                  <span className="text-slate-600">React 19, TypeScript, Tailwind CSS, Next.js, Motion</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">Базы данных & Кеш:</span>
                  <span className="text-slate-600">PostgreSQL (pgvector), Redis, MongoDB, Оптимизация SQL</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">DevOps & Cloud:</span>
                  <span className="text-slate-600">Docker, Docker Compose, CI/CD GitHub Actions, Linux, Nginx</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">Telegram Ecosystem:</span>
                  <span className="text-slate-600">Telegram Bot API, Aiogram 3, Telegram Mini Apps (TMA)</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="font-bold text-slate-900 block">AI & LLM Integrations:</span>
                  <span className="text-slate-600">RAG пайплайны, Function Calling, Gemini / Claude API, LangChain</span>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-indigo-600" />
                <span>Практический опыт & Проекты</span>
              </h2>

              <div className="space-y-6">
                {portfolioData.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <div>
                        <span className="text-sm font-bold text-slate-900">{exp.role}</span>
                        <span className="text-xs text-indigo-700 font-semibold ml-2">@ {exp.company}</span>
                      </div>
                      <span className="text-xs font-medium text-slate-500">{exp.period}</span>
                    </div>

                    <p className="text-xs text-slate-600">{exp.summary}</p>

                    <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 pl-1">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="leading-relaxed">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Projects summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-indigo-600" />
                <span>Ключевые проекты</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {portfolioData.projects.slice(0, 4).map((p) => (
                  <div key={p.id} className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="font-bold text-slate-900 block">{p.title}</span>
                    <span className="text-slate-600 mt-1 block">{p.shortDescription}</span>
                    <span className="text-[11px] text-indigo-600 font-medium mt-1 block">
                      Стек: {p.tags.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Languages */}
            <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row justify-between text-xs text-slate-600 gap-2">
              <div>
                <span className="font-bold text-slate-900">Образование: </span>
                Высшее техническое (Информатика и вычислительная техника)
              </div>
              <div>
                <span className="font-bold text-slate-900">Языки: </span>
                Русский (Родной), Английский (B2/Professional Working Proficiency)
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
