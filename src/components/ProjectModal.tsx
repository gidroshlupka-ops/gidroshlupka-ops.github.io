import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Zap,
  TrendingUp,
  Share2,
  Check,
  Code2,
  ArrowLeft,
  Send,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Sparkles,
  Maximize2,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { lockBodyScroll, unlockBodyScroll } from '../lib/scrollLock';
import { MurkaOverview } from './MurkaOverview';
import { MurkaVoicePlayer } from './MurkaVoicePlayer';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (proj: ProjectItem) => void;
}

export function ProjectModal({ project, onClose, onSelectProject }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const allProjects = portfolioData.projects;
  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;

  useEffect(() => {
    setActiveImageIndex(0);
    setHeaderHidden(false);
    setLightboxOpen(false);
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [project?.id]);

  useEffect(() => {
    if (project) {
      document.body.classList.add('project-modal-open');
    } else {
      document.body.classList.remove('project-modal-open');
    }
    return () => document.body.classList.remove('project-modal-open');
  }, [project]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !project) return;

    const onScroll = () => {
      setHeaderHidden(el.scrollTop > 16);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      const gallery =
        project.caseStudy.screenshots && project.caseStudy.screenshots.length > 0
          ? project.caseStudy.screenshots
          : [
              {
                title: 'Главное превью',
                url: project.previewImage,
                description: project.tagline,
              },
            ];

      if (e.key === 'Escape') {
        if (lightboxOpen) {
          setLightboxOpen(false);
          return;
        }
        onClose();
        return;
      }
      if (e.key === 'ArrowRight') {
        if (lightboxOpen) {
          e.preventDefault();
          setActiveImageIndex((prev) => (prev + 1) % gallery.length);
          return;
        }
        if (currentIndex !== -1 && onSelectProject) {
          const nextIndex = (currentIndex + 1) % allProjects.length;
          onSelectProject(allProjects[nextIndex]);
        }
      }
      if (e.key === 'ArrowLeft') {
        if (lightboxOpen) {
          e.preventDefault();
          setActiveImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
          return;
        }
        if (currentIndex !== -1 && onSelectProject) {
          const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
          onSelectProject(allProjects[prevIndex]);
        }
      }
    };

    if (project) {
      lockBodyScroll();
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (project) unlockBodyScroll();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose, currentIndex, allProjects, onSelectProject, lightboxOpen]);

  if (!project) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleNextProject = () => {
    if (currentIndex !== -1 && onSelectProject) {
      const nextIndex = (currentIndex + 1) % allProjects.length;
      onSelectProject(allProjects[nextIndex]);
    }
  };

  const handlePrevProject = () => {
    if (currentIndex !== -1 && onSelectProject) {
      const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
      onSelectProject(allProjects[prevIndex]);
    }
  };

  const allImages =
    project.caseStudy.screenshots && project.caseStudy.screenshots.length > 0
      ? project.caseStudy.screenshots
      : [
          {
            title: 'Главное превью',
            url: project.previewImage,
            description: project.tagline,
          },
        ];

  const currentScreenshot = allImages[activeImageIndex] || allImages[0];

  const cycleGallery = (dir: 1 | -1) => {
    if (allImages.length < 2) return;
    setActiveImageIndex((prev) => (prev + dir + allImages.length) % allImages.length);
  };

  return createPortal(
    <>
    <AnimatePresence>
      <div
        id="project-fullscreen-modal"
        ref={scrollRef}
        className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#0c0e12] text-white"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <header
          className={`project-modal-header fixed top-0 inset-x-0 z-50 bg-[#0c0e12]/95 backdrop-blur-md border-b border-white/10 px-3 sm:px-8 py-2.5 flex items-center justify-between gap-2 flex-nowrap ${
            headerHidden ? 'is-hidden' : ''
          }`}
        >
          <div className="relative z-10 flex items-center gap-2 min-w-0">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-full btn-glass text-white text-xs font-mono-tech flex items-center gap-2 hover:bg-white hover:text-black transition-all cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Назад</span>
            </button>

            <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech uppercase bg-white/5 border border-white/10 text-white/80 max-w-[220px] truncate">
              <TechIcon name={project.iconName} className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{project.categoryLabel}</span>
            </span>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-20 flex -translate-x-1/2 items-center">
            <div className="pointer-events-auto flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 px-1 py-0.5">
              <button
                onClick={handlePrevProject}
                className="p-1.5 rounded-full text-white hover:bg-white/10 cursor-pointer"
                title="Предыдущий проект [←]"
                aria-label="Предыдущий проект"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="w-12 sm:w-14 text-center text-xs font-mono-tech tabular-nums text-white/60">
                {String(currentIndex + 1).padStart(2, '0')} / {String(allProjects.length).padStart(2, '0')}
              </span>
              <button
                onClick={handleNextProject}
                className="p-1.5 rounded-full text-white hover:bg-white/10 cursor-pointer"
                title="Следующий проект [→]"
                aria-label="Следующий проект"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-end gap-2 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold btn-solid-primary items-center gap-1.5 shadow-lg"
              >
                <span>ПЕРЕЙТИ К ПРОЕКТУ</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex px-2.5 lg:px-3.5 py-1.5 rounded-full text-xs font-mono-tech btn-glass text-white/90 items-center gap-1.5"
                title="Репозиторий на GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">GitHub</span>
              </a>
            )}

            {project.telegramBotUrl && (
              <a
                href={project.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex px-3.5 py-1.5 rounded-full text-xs font-mono-tech btn-glass text-sky-400 items-center gap-1.5"
                title="Telegram-бот проекта"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Bot</span>
              </a>
            )}

            <button
              onClick={handleCopyLink}
              className="p-2 rounded-full btn-glass text-white/80 hover:text-white transition-colors"
              title="Скопировать ссылку"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black text-white transition-colors cursor-pointer"
              title="Закрыть [Esc]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </header>
        <div className="project-modal-header-spacer" aria-hidden />

        {/* Fullscreen Body Content */}
        <main className="max-w-6xl mx-auto w-full px-3 sm:px-8 py-6 sm:py-12 space-y-10 sm:space-y-12 pb-24">
          
          {/* Hero Section of Deep Dive */}
          <div className="relative p-6 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/12 overflow-hidden shadow-2xl space-y-6">
            {/* Ambient Background Glow */}
            <div
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-[120px] opacity-25 pointer-events-none hidden sm:block"
              style={{ backgroundColor: project.accentColor }}
            />

            {/* Top Barcode & Serial */}
            <div className="flex items-center justify-between text-white/40 pb-4 border-b border-white/10 gap-3 min-w-0">
              <span className="text-[10px] sm:text-xs font-mono-tech truncate min-w-0">
                DEEP_DIVE_SPECIFICATION // 0417-{project.id.toUpperCase()}-DOC
              </span>
              <div className="flex items-center gap-[2px] h-4">
                <span className="w-[1.5px] h-full bg-white/60" />
                <span className="w-[3px] h-full bg-white/60" />
                <span className="w-[1px] h-full bg-white/60" />
                <span className="w-[2px] h-full bg-white/60" />
                <span className="w-[4px] h-full bg-white/60" />
              </div>
            </div>

            {/* Title & Tagline */}
            <div className="space-y-3">
              <div className="text-xs font-mono-tech text-amber-300 uppercase tracking-widest flex items-center gap-2">
                <span>■ {project.categoryLabel}</span>
                <span className="text-white/30">•</span>
                <span className="text-emerald-400">PRODUCTION DEPLOYED</span>
              </div>
              <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight break-words">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl text-white/80 max-w-3xl leading-relaxed">
                {project.tagline}
              </p>
            </div>

            {/* Highlight Banner */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm font-mono-tech text-white/90 flex items-start gap-3 min-w-0">
              <Sparkles className="w-5 h-5 text-amber-300 shrink-0" />
              <span className="break-words [overflow-wrap:anywhere]">{project.quoteHighlight}</span>
            </div>

            {/* Tags Cloud */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-xl text-xs font-mono-tech bg-white/5 text-white/90 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.voiceSample && (
              <div className="pt-2">
                <MurkaVoicePlayer sample={project.voiceSample} />
              </div>
            )}
          </div>

          {project.id === 'murka' && <MurkaOverview />}

          {/* INTERACTIVE GALLERY & SCREENSHOTS VIEWER */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2 min-w-0">
                <ImageIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="break-words">ГАЛЕРЕЯ ({allImages.length})</span>
              </h3>
              <span className="text-[10px] sm:text-xs font-mono-tech text-white/40">
                Нажмите фото — на весь экран
              </span>
            </div>

            {/* Main Active Screenshot Stage */}
            <div className="relative aspect-[16/10] sm:aspect-video rounded-2xl sm:rounded-3xl bg-black/70 border border-white/15 overflow-hidden shadow-2xl">
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="absolute inset-0 z-10 cursor-zoom-in group"
                aria-label="Открыть скриншот на весь экран"
              >
                <img
                  src={currentScreenshot.url}
                  alt={currentScreenshot.title}
                  decoding="async"
                  className="w-full h-full object-contain object-center"
                />
                <span className="absolute top-3 right-3 p-2 rounded-xl bg-black/70 text-white border border-white/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </button>

              <div className="absolute bottom-0 inset-x-0 z-20 p-3 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                  <div className="space-y-0.5 min-w-0">
                    <div className="text-sm sm:text-base font-bold text-white truncate">
                      {currentScreenshot.title}
                    </div>
                    <p className="text-[11px] sm:text-xs text-white/70 font-mono-tech line-clamp-2">
                      {currentScreenshot.description}
                    </p>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto px-4 py-2 rounded-xl text-xs font-mono-tech btn-solid-primary flex items-center gap-1.5 self-start sm:self-auto"
                    >
                      <span>Открыть вживую</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            {allImages.length > 1 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {allImages.map((img, idx) => {
                  const isActive = activeImageIndex === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveImageIndex(idx);
                        if (isActive) setLightboxOpen(true);
                      }}
                      className={`relative aspect-[16/9] rounded-2xl overflow-hidden border p-0.5 text-left transition-all cursor-pointer ${
                        isActive
                          ? 'border-white ring-2 ring-white/50 scale-[1.02]'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <img
                        src={img.url}
                        alt={img.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-[14px]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-[14px]" />
                      <span className="absolute bottom-2 left-2 right-2 text-[10px] font-mono-tech text-white font-semibold truncate block">
                        {img.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* KEY IMPACT METRICS */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>МЕТРИКИ & КЛЮЧЕВЫЕ ПОКАЗАТЕЛИ</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {project.caseStudy.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/[0.04] border border-white/10 text-center space-y-1 min-w-0 overflow-hidden"
                >
                  <div className="text-sm sm:text-3xl font-extrabold text-white leading-snug break-words [overflow-wrap:anywhere]">
                    {metric.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono-tech text-white/60 break-words [overflow-wrap:anywhere]">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PROBLEM & SOLUTION DUAL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono-tech uppercase font-bold text-amber-300 block">
                ■ ПРОБЛЕМА & ВЫЗОВ
              </span>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal break-words [overflow-wrap:anywhere]">
                {project.caseStudy.problem}
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/10 space-y-3">
              <span className="text-xs font-mono-tech uppercase font-bold text-emerald-400 block">
                ■ РЕШЕНИЕ & РЕАЛИЗАЦИЯ
              </span>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal break-words [overflow-wrap:anywhere]">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* SYSTEM ARCHITECTURE BREAKDOWN */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/10 space-y-4">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>АРХИТЕКТУРА СИСТЕМЫ И ПОТОКИ ДАННЫХ</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal break-words [overflow-wrap:anywhere]">
              {project.caseStudy.architecture}
            </p>
          </div>

          {/* KEY FEATURES LIST */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-300" />
              <span>КЛЮЧЕВОЙ ФУНКЦИОНАЛ ПРОЕКТА</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.caseStudy.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-start gap-3 text-xs sm:text-sm text-white/85"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="break-words [overflow-wrap:anywhere]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TECH STACK DETAILED BREAKDOWN */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-white" />
              <span>СТЕК ТЕХНОЛОГИЙ И ИНСТРУМЕНТОВ</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.caseStudy.techDetails.map((td, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 space-y-1"
                >
                  <span className="text-[10px] font-mono-tech font-bold uppercase text-amber-300 block">
                    {td.area}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-white block break-words [overflow-wrap:anywhere]">
                    {td.stack}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CTA & PROJECT TRANSITION BANNER */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/15 text-center space-y-6">
            <div className="space-y-2 max-w-xl mx-auto">
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Заинтересовал проект?
              </h4>
              <p className="text-xs sm:text-sm text-white/70">
                Вы можете протестировать живое демо, изучить репозиторий с кодом или обсудить аналогичную разработку со мной.
              </p>
            </div>

            <div className="flex flex-col sm:flex-wrap sm:flex-row items-stretch sm:items-center justify-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center px-6 py-3 rounded-full text-xs sm:text-sm font-mono-tech font-bold btn-solid-primary flex items-center gap-2"
                >
                  <span>ПЕРЕЙТИ К ПРОЕКТУ</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center px-5 py-3 rounded-full text-xs sm:text-sm font-mono-tech btn-glass text-white flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>Открыть на GitHub</span>
                </a>
              )}

              <a
                href={portfolioData.personal.telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center px-5 py-3 rounded-full text-xs sm:text-sm font-mono-tech btn-glass text-sky-400 flex items-center gap-2 hover:text-white"
              >
                <Send className="w-4 h-4" />
                <span>Обсудить в Telegram</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs sm:text-sm font-mono-tech btn-glass text-white/70 hover:text-white cursor-pointer"
              >
                ← Назад к портфолио
              </button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-white/10 px-3 sm:px-8 py-4 flex items-center justify-between gap-3 text-[10px] sm:text-xs font-mono-tech text-white/40">
          <span className="truncate min-w-0">{project.title}</span>
          <span className="shrink-0">© 2026 AFORI.SYS</span>
        </footer>
      </div>
    </AnimatePresence>
    {lightboxOpen && (
      <div
        className="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={currentScreenshot.title}
        onClick={() => setLightboxOpen(false)}
      >
        <button
          type="button"
          onClick={() => setLightboxOpen(false)}
          className="gallery-lightbox-close"
          aria-label="Закрыть фото"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {allImages.length > 1 && (
          <>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-nav-prev"
              onClick={(e) => {
                e.stopPropagation();
                cycleGallery(-1);
              }}
              aria-label="Предыдущее фото"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="gallery-lightbox-nav gallery-lightbox-nav-next"
              onClick={(e) => {
                e.stopPropagation();
                cycleGallery(1);
              }}
              aria-label="Следующее фото"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <figure
          className="gallery-lightbox-figure"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentScreenshot.url}
            alt={currentScreenshot.title}
            decoding="async"
            className="gallery-lightbox-image"
          />
          <figcaption className="gallery-lightbox-caption">
            <span className="block font-semibold text-white text-sm sm:text-base">
              {currentScreenshot.title}
            </span>
            <span className="block text-[11px] sm:text-xs text-white/70 mt-0.5">
              {currentScreenshot.description}
            </span>
          </figcaption>
        </figure>
      </div>
    )}
    </>,
    document.body
  );
}
