import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Github,
  Play,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Send,
  Code2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { TechIcon } from './TechIcon';
import { ProjectModal } from './ProjectModal';

const skipHeavyFx =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches;

function slide(xIn: number, xOut: number) {
  if (skipHeavyFx) {
    return {
      initial: { opacity: 0, x: xIn },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: xOut },
    };
  }
  return {
    initial: { opacity: 0, x: xIn, filter: 'blur(4px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: { opacity: 0, x: xOut, filter: 'blur(4px)' },
  };
}

export function ProjectShowcase() {
  const projects = portfolioData.projects;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const currentProject = projects[activeIndex];

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleSelect = (idx: number) => {
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeModalProject) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject, projects.length]);

  return (
    <section
      id="projects"
      className="snap-section relative w-full min-h-screen flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Background Project-Adaptive Glow (Muted, Matte, Eye-Safe) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          key={`glow-${currentProject.id}`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 0.18, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full blur-[140px]"
          style={{ backgroundColor: currentProject.accentColor }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
      </div>

      {/* TOP BAR: Brand Label + Mochibots Interactive Pill Tabs Switcher */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
        {/* Left header */}
        <div className="flex items-center gap-3">
          <div
            className="w-2.5 h-2.5 rounded-full animate-pulse transition-colors"
            style={{ backgroundColor: currentProject.accentColor }}
          />
          <h2 className="text-xs font-mono-tech font-bold uppercase tracking-widest text-white/90">
            SELECTED PROJECTS // 0{activeIndex + 1} OF 0{projects.length}
          </h2>
        </div>

        {/* Project Selector Pill Tabs (Exact Figma style from video) */}
        <div className="flex items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-full backdrop-blur-md overflow-x-auto max-w-full">
          {projects.map((proj, idx) => {
            const isActive = activeIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => handleSelect(idx)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-mono-tech transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-white text-black font-bold shadow-lg scale-105'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                {proj.title.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      {/* GIANT EDITORIAL BACKDROP TYPOGRAPHY (Mochibots Style in Figma) */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`backdrop-${currentProject.id}`}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 0.06, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.08, y: -30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13vw] font-black uppercase tracking-tighter text-white whitespace-nowrap select-none"
          >
            {currentProject.title.split(' ')[0]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* MAIN 3-COLUMN SHOWCASE (Left Spec Card, Center Figma 3D/Photo Canvas, Right Mini Action Deck) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-4">
        
        {/* LEFT COLUMN: Editorial Tech Spec (Figma Frame 16 Style) */}
        <div className="lg:col-span-4 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`left-${currentProject.id}`}
              {...slide(-35, -25)}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/12 backdrop-blur-xl space-y-5 shadow-2xl"
            >
              {/* Category & Title */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-mono-tech uppercase tracking-widest text-amber-300 flex items-center gap-2">
                  <span>■ {currentProject.categoryLabel}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  {currentProject.title}
                </h3>
              </div>

              {/* Pitch / Short Description */}
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-normal">
                {currentProject.shortDescription}
              </p>

              {/* Bold Quote / Key Highlight (Figma 'YOUR PERSONAL COMPANION...' block) */}
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] font-mono-tech font-bold uppercase tracking-wider text-white/90">
                {currentProject.quoteHighlight}
              </div>

              {/* Tags Cloud */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {currentProject.tags.slice(0, 5).map((tag, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono-tech bg-white/5 text-white/80 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Barcode & Technical Serial Number (Exact Ref Aesthetic) */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/40">
                <span className="text-[10px] font-mono-tech">
                  0417-4389234-56728149-789
                </span>
                <div className="flex items-center gap-[2px] h-4">
                  <span className="w-[1.5px] h-full bg-white/60" />
                  <span className="w-[3px] h-full bg-white/60" />
                  <span className="w-[1px] h-full bg-white/60" />
                  <span className="w-[2px] h-full bg-white/60" />
                  <span className="w-[4px] h-full bg-white/60" />
                  <span className="w-[2px] h-full bg-white/60" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CENTER COLUMN: Interactive Preview Stage (Slide Animation with 600ms quick curve like in video) */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[420px] aspect-[4/5] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`center-${currentProject.id}`}
                custom={direction}
                initial={{
                  opacity: 0,
                  y: direction * 40,
                  scale: 0.9,
                  ...(skipHeavyFx ? {} : { filter: 'blur(6px)' }),
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  ...(skipHeavyFx ? {} : { filter: 'blur(0px)' }),
                }}
                exit={{
                  opacity: 0,
                  y: direction * -40,
                  scale: 0.9,
                  ...(skipHeavyFx ? {} : { filter: 'blur(6px)' }),
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1], // Smooth snappy curve matching Figma prototype
                }}
                onClick={() => setActiveModalProject(currentProject)}
                className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.1] to-white/[0.02] p-1 border border-white/15 shadow-2xl backdrop-blur-md overflow-hidden group cursor-pointer"
              >
                {/* Inner Card Screen */}
                <div className="relative w-full h-full rounded-[22px] bg-[#101319] overflow-hidden flex flex-col justify-between p-6">
                  
                  {/* Background Image / Render Preview */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={currentProject.previewImage}
                      alt={currentProject.title}
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e12] via-[#0c0e12]/60 to-transparent" />
                  </div>

                  {/* Top Status & Fullscreen Trigger */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono-tech text-white/70 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>PROD // READY</span>
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(currentProject);
                      }}
                      className="p-2 rounded-xl bg-black/60 hover:bg-white text-white hover:text-black transition-all border border-white/15 shadow-lg group-hover:scale-110"
                      title="Развернуть на весь экран"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Center Badge / Hover Prompt */}
                  <div className="relative z-10 my-auto text-center space-y-2 py-4">
                    <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-black/70 border border-white/20 shadow-2xl backdrop-blur-md group-hover:border-white/50 transition-colors">
                      <TechIcon name={currentProject.iconName} className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-mono-tech font-bold text-white uppercase tracking-wider drop-shadow-md">
                      {currentProject.tagline}
                    </div>
                  </div>

                  {/* Bottom Preview Action Pill */}
                  <div className="relative z-10 pt-3 border-t border-white/15 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-white">
                        Кликните для подробного кейса
                      </div>
                      <div className="text-[10px] font-mono-tech text-white/50">
                        Спецификация, архитектура, скриншоты
                      </div>
                    </div>

                    <div className="px-3 py-1.5 rounded-xl bg-white text-black text-[11px] font-mono-tech font-bold flex items-center gap-1 shadow-lg group-hover:translate-x-0.5 transition-transform">
                      <span>ОТКРЫТЬ</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Actions & Figma Mini-Thumbnails Stack (Frame 17 / Frame 19 in video) */}
        <div className="lg:col-span-3 flex flex-col justify-center space-y-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`right-${currentProject.id}`}
              {...slide(35, 25)}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-3xl bg-white/[0.04] border border-white/12 backdrop-blur-xl space-y-4 shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-tech uppercase tracking-wider text-white/70">
                  EXPLORE PROJECT
                </span>
                <span className="text-[10px] font-mono-tech text-amber-300">
                  0{activeIndex + 1} // 0{projects.length}
                </span>
              </div>

              {/* Video / Interactive Preview Card (Like 'Meet your new robot friends' in Figma) */}
              <div
                onClick={() => setActiveModalProject(currentProject)}
                className="group relative h-28 rounded-2xl bg-black/60 border border-white/15 flex items-center justify-center cursor-pointer overflow-hidden shadow-inner"
              >
                <img
                  src={currentProject.previewImage}
                  alt={currentProject.title}
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform z-10">
                  <Play className="w-4 h-4 fill-black translate-x-0.5" />
                </div>
                
                <span className="absolute bottom-2 text-[10px] font-mono-tech text-white/90 z-10 font-semibold tracking-wider">
                  РАЗВЕРНУТЬ НА ВЕСЬ ЭКРАН
                </span>
              </div>

              {/* Thumbnails Quick Switcher (Figma characters stacked preview) */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono-tech uppercase text-white/50 block">
                  ДРУГИЕ ПРОЕКТЫ:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {projects.map((proj, idx) => {
                    const isSelected = activeIndex === idx;
                    return (
                      <button
                        key={proj.id}
                        onClick={() => handleSelect(idx)}
                        className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all cursor-pointer ${
                          isSelected
                            ? 'border-white ring-2 ring-white/40 scale-105'
                            : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                        }`}
                        title={proj.title}
                      >
                        <img
                          src={proj.previewImage}
                          alt={proj.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                        <span className="absolute bottom-0.5 left-1 text-[8px] font-mono-tech font-bold text-white bg-black/70 px-1 rounded">
                          0{idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => setActiveModalProject(currentProject)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-mono-tech font-bold btn-solid-primary flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>/ ПОДРОБНЕЕ О ПРОЕКТЕ /</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {currentProject.liveUrl && (
                    <a
                      href={currentProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl text-xs font-mono-tech text-center btn-glass text-white/90 hover:text-white flex items-center justify-center gap-1"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {currentProject.githubUrl && (
                    <a
                      href={currentProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl text-xs font-mono-tech text-center btn-glass text-white/90 hover:text-white flex items-center justify-center gap-1"
                    >
                      <Github className="w-3 h-3" />
                      <span>GITHUB</span>
                    </a>
                  )}
                  {currentProject.telegramBotUrl && (
                    <a
                      href={currentProject.telegramBotUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 rounded-xl text-xs font-mono-tech text-center btn-glass text-sky-400 hover:text-white flex items-center justify-center gap-1"
                      title="Telegram Bot"
                    >
                      <Send className="w-3 h-3" />
                      <span>BOT</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* BOTTOM CONTROLS: Arrow Selectors & Indicator */}
      <div className="relative z-20 flex items-center justify-between pt-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-xl btn-glass text-white hover:text-white cursor-pointer"
            title="Предыдущий проект (Стрелка влево)"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-xl btn-glass text-white hover:text-white cursor-pointer"
            title="Следующий проект (Стрелка вправо)"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <span className="text-xs font-mono-tech text-white/40 ml-2 hidden sm:inline">
            Нажимайте стрелки влево / вправо для переключения
          </span>
        </div>

        {/* Quick Dots / Indicator */}
        <div className="flex items-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                activeIndex === idx ? 'w-8 bg-white' : 'w-2 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Detailed Project Deep-Dive View */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectProject={(proj) => setActiveModalProject(proj)}
      />
    </section>
  );
}
