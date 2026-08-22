import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Layers,
  Cpu,
  Zap,
  TrendingUp,
  Share2,
  Check,
  Code2,
  ArrowLeft,
  ArrowRight,
  Send,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Sparkles,
} from 'lucide-react';
import { ProjectItem } from '../types';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';
import { lockBodyScroll, unlockBodyScroll } from '../lib/scrollLock';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onSelectProject?: (proj: ProjectItem) => void;
}

export function ProjectModal({ project, onClose, onSelectProject }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allProjects = portfolioData.projects;
  const currentIndex = project ? allProjects.findIndex((p) => p.id === project.id) : -1;

  // Reset active image when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project?.id]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowRight' && currentIndex !== -1 && onSelectProject) {
        const nextIndex = (currentIndex + 1) % allProjects.length;
        onSelectProject(allProjects[nextIndex]);
      }
      if (e.key === 'ArrowLeft' && currentIndex !== -1 && onSelectProject) {
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onSelectProject(allProjects[prevIndex]);
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
  }, [project, onClose, currentIndex, allProjects, onSelectProject]);

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

  const allImages = [
    {
      title: 'Главное превью & Mockup',
      url: project.previewImage,
      description: project.tagline,
    },
    ...(project.caseStudy.screenshots || []),
  ];

  const currentScreenshot = allImages[activeImageIndex] || allImages[0];

  return createPortal(
    <AnimatePresence>
      <div
        id="project-fullscreen-modal"
        className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-[#0c0e12] text-white pt-16"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Sticky Top Header Navigation */}
        <header className="sticky top-0 z-40 bg-[#0c0e12]/95 border-b border-white/10 px-3 sm:px-8 py-3 flex items-center justify-between gap-2 flex-wrap">
          {/* Back Button */}
          <div className="flex items-center gap-2 min-w-0">
            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-full btn-glass text-white text-xs font-mono-tech flex items-center gap-2 hover:bg-white hover:text-black transition-all cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden xs:inline sm:inline">Назад</span>
              <span className="sm:hidden">Назад</span>
            </button>

            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech uppercase bg-white/5 border border-white/10 text-white/80">
              <TechIcon name={project.iconName} className="w-3.5 h-3.5" />
              <span>{project.categoryLabel}</span>
            </span>
          </div>

          {/* Project Switcher Arrows */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={handlePrevProject}
              className="p-1.5 rounded-lg btn-glass text-white hover:text-white cursor-pointer"
              title="Предыдущий проект [←]"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono-tech text-white/50 px-1">
              0{currentIndex + 1} / 0{allProjects.length}
            </span>
            <button
              onClick={handleNextProject}
              className="p-1.5 rounded-lg btn-glass text-white hover:text-white cursor-pointer"
              title="Следующий проект [→]"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Direct CTA Action Buttons */}
          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex px-4 py-1.5 rounded-full text-xs font-mono-tech font-bold btn-solid-primary items-center gap-1.5 shadow-lg"
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
                className="hidden sm:flex px-3.5 py-1.5 rounded-full text-xs font-mono-tech btn-glass text-white/90 items-center gap-1.5"
                title="Репозиторий на GitHub"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}

            {project.telegramBotUrl && (
              <a
                href={project.telegramBotUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex px-3.5 py-1.5 rounded-full text-xs font-mono-tech btn-glass text-sky-400 items-center gap-1.5"
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
          </div>

          {/* INTERACTIVE GALLERY & SCREENSHOTS VIEWER */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <h3 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-white/70 flex items-center gap-2 min-w-0">
                <ImageIcon className="w-4 h-4 text-amber-300 shrink-0" />
                <span className="break-words">ГАЛЕРЕЯ ({allImages.length})</span>
              </h3>
              <span className="text-[10px] sm:text-xs font-mono-tech text-white/40">
                Нажмите миниатюру
              </span>
            </div>

            {/* Main Active Screenshot Stage */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl bg-black/60 border border-white/15 overflow-hidden shadow-2xl group">
              <img
                src={currentScreenshot.url}
                alt={currentScreenshot.title}
                decoding="async"
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Bottom Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1">
                  <div className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>{currentScreenshot.title}</span>
                  </div>
                  <p className="text-xs text-white/70 font-mono-tech max-w-xl">
                    {currentScreenshot.description}
                  </p>
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-mono-tech btn-solid-primary flex items-center gap-1.5 self-start sm:self-auto"
                  >
                    <span>Открыть вживую</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
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
                      onClick={() => setActiveImageIndex(idx)}
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
    </AnimatePresence>,
    document.body
  );
}
