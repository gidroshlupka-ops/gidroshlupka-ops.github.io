import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Database, Cpu, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

export function About() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills =
    selectedCategory === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      id="about"
      className="snap-section relative w-full min-h-screen flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Background Animated Subtle Gradient (Eye-Safe, Muted) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-slate-800/10 blur-[130px] animate-ambient-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      {/* Top Bar Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <h2 className="text-xs font-mono-tech font-bold uppercase tracking-widest text-white/90">
            ABOUT ME // BACKGROUND & ARCHITECTURE
          </h2>
        </div>
        <span className="text-[11px] font-mono-tech text-white/40 hidden sm:inline">
          FREELANCE & PET-PROJECTS
        </span>
      </div>

      {/* Main Grid: Story on Left, Tech Pillars on Right */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6">
        {/* Left Column: Bio Story & Philosophy */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4 text-left">
          <div className="space-y-2">
            <span className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-300">
              ■ ОБО МНЕ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Практический стек, проверенный на реальных задачах
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed">
            {portfolioData.personal.aboutStory.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 text-xs font-mono-tech">
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-white/80">Async & FastAPI</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-white/80">Telegram Mini Apps</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-white/80">Docker & Linux</span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-white/80">LLM & RAG Systems</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Tech Stack Matrix */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
            <span className="text-xs font-mono-tech font-bold uppercase text-white/80 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-white/60" />
              <span>МАТРИЦА НАВЫКОВ</span>
            </span>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1">
              {portfolioData.skillCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-full text-[11px] font-mono-tech transition-all ${
                      isActive
                        ? 'bg-white text-black font-bold'
                        : 'text-white/50 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/25 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-white/90 shrink-0">
                    <TechIcon name={skill.iconName} className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">{skill.name}</h4>
                    <span className="text-[10px] font-mono-tech text-white/40">
                      {skill.categoryLabel}
                    </span>
                  </div>
                </div>

                {skill.highlight && (
                  <p className="text-[11px] text-white/60 line-clamp-2 mt-1 font-normal">
                    {skill.highlight}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Barcode & Meta */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech text-white/40">
        <span>ARCH // MODULAR_CODE_PRINCIPLES</span>
        <span>0417-DEV-SPEC-982</span>
      </div>
    </section>
  );
}
