import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles, Terminal, Bot, Layers, Code2, Image as ImageIcon } from 'lucide-react';

interface Interactive3DModelProps {
  customImageSrc?: string;
}

export function Interactive3DModel({ customImageSrc }: Interactive3DModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse motion values normalized to [-1, 1]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid natural motion
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Inverse transforms for different parallax depth layers (moving OPPOSITE to cursor)
  // Layer 0: Background letters & aura (subtle inverse shift)
  const bgShiftX = useTransform(smoothX, [-1, 1], [25, -25]);
  const bgShiftY = useTransform(smoothY, [-1, 1], [25, -25]);

  // Layer 1: Main 3D model / Character (moderate inverse shift + 3D rotation)
  const modelShiftX = useTransform(smoothX, [-1, 1], [50, -50]);
  const modelShiftY = useTransform(smoothY, [-1, 1], [40, -40]);
  const rotateX = useTransform(smoothY, [-1, 1], [15, -15]);
  const rotateY = useTransform(smoothX, [-1, 1], [-18, 18]);

  // Layer 2: Foreground floating badges (high inverse shift for depth)
  const fg1ShiftX = useTransform(smoothX, [-1, 1], [80, -80]);
  const fg1ShiftY = useTransform(smoothY, [-1, 1], [65, -65]);

  const fg2ShiftX = useTransform(smoothX, [-1, 1], [-70, 70]);
  const fg2ShiftY = useTransform(smoothY, [-1, 1], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const normalizedY = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
      mouseX.set(normalizedX);
      mouseY.set(normalizedY);
    };

    const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[480px] sm:max-w-[540px] lg:max-w-[580px] aspect-[4/5] flex items-center justify-center select-none perspective-[1200px]"
    >
      {/* LAYER 0: Background Giant Typography & Tech Marks */}
      <motion.div
        style={{ x: bgShiftX, y: bgShiftY }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
      >
        <div className="text-[120px] sm:text-[160px] font-black tracking-tighter text-white/[0.03] uppercase leading-none select-none">
          ALEX
        </div>
        <div className="absolute top-8 left-6 text-[10px] font-mono-tech text-white/20 tracking-widest uppercase">
          SYS // 3D_PARALLAX_RENDER
        </div>
        <div className="absolute bottom-8 right-6 text-[10px] font-mono-tech text-white/20 tracking-widest">
          POS: 35.6895° N, 139.6917° E
        </div>
      </motion.div>

      {/* LAYER 0.5: Ambient Glow Halo */}
      <motion.div
        style={{ x: bgShiftX, y: bgShiftY }}
        className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-amber-500/10 via-rose-500/10 to-indigo-500/10 blur-3xl pointer-events-none"
      />

      {/* LAYER 1: Main 3D Model / Character Card (Moving in opposite direction of mouse + 3D Tilt) */}
      <motion.div
        style={{
          x: modelShiftX,
          y: modelShiftY,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative z-10 w-[290px] sm:w-[350px] lg:w-[380px] h-[390px] sm:h-[470px] lg:h-[510px] rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent p-1.5 border border-white/15 shadow-2xl backdrop-blur-md group"
      >
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#11141a] flex flex-col items-center justify-between p-6">
          {/* Top Card Bar */}
          <div className="w-full flex items-center justify-between z-20">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500/80" />
              <span className="w-2 h-2 rounded-full bg-amber-500/80" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[11px] font-mono-tech uppercase text-white/50 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
              DEV // AVATAR
            </span>
          </div>

          {/* Center: Stylized High-Craft 3D Character / Visual Representation */}
          <div className="relative w-full flex-1 flex items-center justify-center my-4">
            {customImageSrc ? (
              <img
                src={customImageSrc}
                alt="3D Character Model"
                className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center">
                {/* Visual Stylized 3D Avatar Illustration */}
                <div className="relative w-48 sm:w-56 h-48 sm:h-56 flex items-center justify-center">
                  {/* Outer Hologram Rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-[spin_24s_linear_infinite]" />
                  <div className="absolute inset-3 rounded-full border border-white/10 animate-[spin_16s_linear_infinite_reverse]" />
                  
                  {/* Multi-tier character avatar silhouette with cyberpunk-anime aesthetic */}
                  <div className="relative w-36 sm:w-44 h-36 sm:h-44 rounded-full bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-900 border-2 border-white/20 flex flex-col items-center justify-center shadow-inner overflow-hidden">
                    {/* Headset / Hair aesthetic glow */}
                    <div className="absolute top-2 w-28 h-10 bg-gradient-to-r from-rose-400/40 via-amber-300/40 to-teal-400/40 blur-md" />
                    
                    {/* Stylized Face & Eyewear */}
                    <div className="w-20 h-10 rounded-xl bg-black/60 border border-white/30 backdrop-blur-xs flex items-center justify-center gap-3 shadow-lg z-10">
                      <div className="w-4 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <div className="w-4 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>

                    {/* Bandage / Patch sticker like in ref */}
                    <div className="absolute bottom-6 px-2.5 py-0.5 rounded bg-rose-500/30 border border-rose-400/40 text-[9px] font-mono-tech text-rose-200 uppercase tracking-widest">
                      FULLSTACK
                    </div>
                  </div>
                </div>

                {/* Status indicator & notice */}
                <div className="mt-3 text-center space-y-1 z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono-tech text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>3D Model Tracking Active</span>
                  </div>
                  <p className="text-[10px] text-white/40 font-mono-tech">
                    [ Заглушка: курсор инвертирует слой ]
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Bar: Barcode & Technical Meta (Inspired by Mochibots ref) */}
          <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-white/50 z-20">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono-tech uppercase tracking-wider text-white/70">
                ■ ALEX.SYS // DEV
              </span>
              <span className="text-[9px] font-mono-tech text-white/40">
                0417-4389234-56728149
              </span>
            </div>
            
            {/* Minimalist Barcode SVG */}
            <div className="flex items-center gap-[2px] h-5 opacity-75">
              <span className="w-[1.5px] h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-[4px] h-full bg-white" />
              <span className="w-[1.5px] h-full bg-white" />
              <span className="w-[2px] h-full bg-white" />
              <span className="w-[3px] h-full bg-white" />
              <span className="w-[1px] h-full bg-white" />
              <span className="w-[2.5px] h-full bg-white" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* LAYER 2: Floating Foreground Badge #1 (Strong Parallax Shift) */}
      <motion.div
        style={{
          x: fg1ShiftX,
          y: fg1ShiftY,
          translateZ: '80px',
        }}
        className="absolute -top-4 -left-2 sm:-left-6 z-30 p-3.5 rounded-2xl bg-black/70 border border-white/20 backdrop-blur-xl shadow-xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
          <Bot className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono-tech uppercase text-white/50 block">Telegram API</span>
          <span className="text-xs font-bold text-white tracking-tight">Mini Apps & Bots</span>
        </div>
      </motion.div>

      {/* LAYER 3: Floating Foreground Badge #2 (Opposite Parallax Shift) */}
      <motion.div
        style={{
          x: fg2ShiftX,
          y: fg2ShiftY,
          translateZ: '100px',
        }}
        className="absolute -bottom-4 -right-2 sm:-right-6 z-30 p-3.5 rounded-2xl bg-black/70 border border-white/20 backdrop-blur-xl shadow-xl flex items-center gap-3"
      >
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-teal-300">
          <Code2 className="w-4 h-4" />
        </div>
        <div>
          <span className="text-[10px] font-mono-tech uppercase text-white/50 block">Backend & Web</span>
          <span className="text-xs font-bold text-white tracking-tight">Python / FastAPI / React</span>
        </div>
      </motion.div>
    </div>
  );
}
