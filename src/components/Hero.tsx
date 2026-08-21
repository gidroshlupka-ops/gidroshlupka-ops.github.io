import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  Download,
  Terminal,
  Send,
  Github,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Code2,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Interactive3DModel } from './Interactive3DModel';

interface HeroProps {
  onOpenResume: () => void;
  onScrollToNext: () => void;
}

export function Hero({ onOpenResume, onScrollToNext }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.personal.taglineRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="hero"
      className="snap-section relative w-full min-h-screen flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Background Subtle Organic Gradient (Matte, Eye-Safe, Non-AI) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-slate-800/10 blur-[130px] animate-ambient-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/[0.04] blur-[140px] animate-ambient-slow-reverse" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      {/* Main Hero Split Content (Left Typography & Actions, Right 3D Layered Model) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Greeting, Role Ticker, Pitch, Buttons */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-7 text-left">
          
          {/* Subtle Technical Label */}
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-white/50 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>PORTFOLIO // FULLSTACK & TELEGRAM DEV</span>
          </div>

          {/* Massive Display Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              <span>Привет, я </span>
              <span className="text-white drop-shadow-sm">
                {portfolioData.personal.name}
              </span>
            </h1>

            {/* Cycling Role Pill */}
            <div className="h-9 sm:h-10 flex items-center">
              <motion.div
                key={roleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-lg sm:text-2xl font-semibold text-white/80 flex items-center gap-2.5 font-mono-tech"
              >
                <Terminal className="w-5 h-5 text-amber-300" />
                <span>{roles[roleIndex]}</span>
              </motion.div>
            </div>
          </div>

          {/* Clean Pitch in Russian & English */}
          <div className="space-y-2.5 max-w-xl text-white/70 text-sm sm:text-base leading-relaxed">
            <p className="font-normal text-white/90">
              {portfolioData.personal.pitchRu}
            </p>
            <p className="text-xs sm:text-sm text-white/50">
              {portfolioData.personal.pitchEn}
            </p>
          </div>

          {/* Redesigned Sleek Pill Buttons (Project AIRI / High-Craft Style) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onScrollToNext}
              className="px-6 py-3 rounded-full text-xs sm:text-sm btn-solid-primary flex items-center gap-2"
            >
              <span>Посмотреть проекты</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={onOpenResume}
              className="px-5 py-3 rounded-full text-xs sm:text-sm btn-glass text-white flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5 text-white/70" />
              <span>Резюме / CV</span>
            </button>

            <a
              href={portfolioData.personal.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-xs sm:text-sm btn-glass text-white/90 flex items-center gap-2 hover:text-white"
            >
              <Send className="w-3.5 h-3.5 text-sky-400" />
              <span>Telegram</span>
            </a>

            <a
              href={portfolioData.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full btn-glass text-white/70 hover:text-white"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          {/* Minimalist Specs Row */}
          <div className="pt-4 flex items-center gap-6 text-xs font-mono-tech text-white/40 border-t border-white/10">
            <div>
              <span className="text-white font-bold block text-sm">30+</span>
              <span>ПРОЕКТОВ</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">Python / React</span>
              <span>ОСНОВНОЙ СТЕК</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">&lt;150ms</span>
              <span>RESPONSE TIME</span>
            </div>
          </div>
        </div>

        {/* Right Column: Multi-layer 3D Model with Inverse Mouse Parallax */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <Interactive3DModel />
        </div>
      </div>

      {/* Bottom Scroll Indicator / Section Jump Prompt */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech text-white/40">
        <span>SCROLL DOWN TO EXPLORE</span>
        <button
          onClick={onScrollToNext}
          className="flex items-center gap-1 text-white/70 hover:text-white transition-colors"
        >
          <span>КЕЙСЫ ПРОЕКТОВ</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
