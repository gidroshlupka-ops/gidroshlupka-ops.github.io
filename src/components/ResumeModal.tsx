import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { lockBodyScroll, unlockBodyScroll } from '../lib/scrollLock';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resume = portfolioData.resume;
  const pdfHref = `${import.meta.env.BASE_URL}${portfolioData.personal.resumePdf}`;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.classList.add('resume-modal-open');
      lockBodyScroll();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.classList.remove('resume-modal-open');
      if (isOpen) unlockBodyScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    document.documentElement.classList.add('printing-resume');
    const restore = () => {
      document.documentElement.classList.remove('printing-resume');
      window.removeEventListener('afterprint', restore);
    };
    window.addEventListener('afterprint', restore);
    window.print();
  };

  return (
    <AnimatePresence>
      <div
        id="resume-modal-backdrop"
        className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md print:static print:p-0 print:overflow-visible print:bg-transparent print:block"
        onClick={onClose}
      >
        <motion.div
          id="resume-modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl bg-white text-[#111111] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] print:max-h-none print:overflow-visible print:rounded-none print:shadow-none"
        >
          <div className="no-print p-3 sm:p-5 bg-slate-900 text-white flex items-center justify-between gap-2 shrink-0 border-b border-slate-800">
            <div className="min-w-0">
              <span className="font-bold text-sm sm:text-base block truncate">Резюме</span>
              <span className="text-[11px] text-slate-400 truncate block">{resume.title}</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={pdfHref}
                download={portfolioData.personal.resumeDownloadName}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-semibold hover:bg-slate-100 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xs:inline sm:inline">Скачать PDF</span>
                <span className="sm:hidden">PDF</span>
              </a>
              <button
                id="print-resume-btn"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Печать</span>
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

          <div
            id="resume-sheet"
            className="px-5 py-6 sm:px-10 sm:py-9 overflow-y-auto bg-white text-[#111111] print:overflow-visible print:p-0 print:max-h-none"
            style={{ fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif' }}
          >
            <header className="pb-3 border-b border-[#d8d8d8] space-y-1">
              <h1 className="text-[22px] sm:text-[24px] font-bold leading-tight tracking-tight text-[#111111]">
                {resume.fullName}
              </h1>
              <p className="text-[13px] sm:text-[14px] font-semibold text-[#1F4E5F]">{resume.title}</p>
              <p className="text-[11px] sm:text-[12px] text-[#555555] leading-relaxed">{resume.contactsLine}</p>
              <p className="text-[11px] sm:text-[12px] text-[#555555] leading-relaxed">
                <a
                  href={portfolioData.personal.githubUrl}
                  className="text-[#1155CC] underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/gidroshlupka-ops
                </a>
                <span> · Приморский край, г. Большой Камень · удалённо, полная занятость</span>
              </p>
              <p className="text-[11px] sm:text-[12px] text-[#555555]">{resume.salary}</p>
            </header>

            <section className="pt-4 space-y-1.5">
              <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-[#1F4E5F]">
                О себе
              </h2>
              <p className="text-[12px] sm:text-[13px] leading-relaxed text-[#222222]">{resume.about}</p>
            </section>

            <section className="pt-4 space-y-1.5">
              <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-[#1F4E5F]">
                Технический стек
              </h2>
              <ul className="space-y-0.5 text-[12px] sm:text-[13px] leading-relaxed text-[#222222]">
                {resume.stack.map((line) => (
                  <li key={line.label}>
                    <span className="font-semibold">{line.label}: </span>
                    <span>{line.value}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pt-4 space-y-4">
              <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-[#1F4E5F]">
                Опыт работы
              </h2>
              {resume.jobs.map((job) => (
                <div key={job.title} className="space-y-2">
                  <div>
                    <div className="text-[13px] font-bold text-[#111111]">{job.title}</div>
                    <div className="text-[11px] sm:text-[12px] text-[#555555]">{job.period}</div>
                  </div>
                  {job.projects.map((project) => (
                    <div key={project.title} className="space-y-0.5">
                      <div className="text-[12px] sm:text-[13px] font-bold text-[#111111]">{project.title}</div>
                      <ul className="list-disc pl-5 space-y-0.5 text-[12px] sm:text-[13px] leading-relaxed text-[#222222]">
                        {project.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </section>

            <section className="pt-4 space-y-2">
              <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-[#1F4E5F]">
                Пет-проекты
              </h2>
              {resume.pets.map((pet) => (
                <div key={pet.title} className="space-y-0.5">
                  <div className="text-[12px] sm:text-[13px] font-bold text-[#111111]">{pet.title}</div>
                  <ul className="list-disc pl-5 space-y-0.5 text-[12px] sm:text-[13px] leading-relaxed text-[#222222]">
                    {pet.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="pt-4 space-y-1.5">
              <h2 className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wide text-[#1F4E5F]">
                Образование
              </h2>
              <ul className="list-disc pl-5 space-y-0.5 text-[12px] sm:text-[13px] leading-relaxed text-[#222222]">
                {resume.education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
