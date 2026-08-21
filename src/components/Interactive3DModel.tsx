import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

const PURR_PHRASES = [
  'Муррр... ❤️',
  '*довольно щурится*',
  'Мяу! Листик заряжает чистым кодом 🍃',
  '*мурлычет от удовольствия* ✨',
  'Бот работает 24/7 без сбоев 🚀',
  'Поглаживание засчитано! 🐾',
];

export function Interactive3DModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPetting, setIsPetting] = useState(false);
  const [petCount, setPetCount] = useState(0);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const speechTimeoutRef = useRef<number | null>(null);

  // Mouse Tracking values (normalized from -1 to 1)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Physics springs for natural elastic movement
  const springConfigPupils = { damping: 25, stiffness: 220, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfigPupils);
  const smoothY = useSpring(mouseY, springConfigPupils);

  // Pupils motion strictly micro-clamped (max 2.2px) so they never leave the eyes
  const pupilShiftX = useTransform(smoothX, [-1, 1], [-2.2, 2.2]);
  const pupilShiftY = useTransform(smoothY, [-1, 1], [-1.6, 1.6]);

  // Subtle 2.5D head and body perspective tilt
  const bodyRotateY = useTransform(smoothX, [-1, 1], [-1.8, 1.8]);
  const bodyRotateX = useTransform(smoothY, [-1, 1], [1.2, -1.2]);

  // Parallax shifts for cat layer
  const catShiftX = useTransform(smoothX, [-1, 1], [0.5, -0.5]);
  const catShiftY = useTransform(smoothY, [-1, 1], [0.3, -0.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.35;

      const deltaX = (e.clientX - centerX) / (window.innerWidth / 2);
      const deltaY = (e.clientY - centerY) / (window.innerHeight / 2);

      mouseX.set(Math.max(-1, Math.min(1, deltaX)));
      mouseY.set(Math.max(-1, Math.min(1, deltaY)));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Petting action trigger
  const handlePetAction = (e: React.MouseEvent) => {
    setIsPetting(true);
    setPetCount((prev) => prev + 1);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      
      const newParticle = {
        id: Date.now() + Math.random(),
        x: clickX,
        y: clickY,
      };

      setParticles((prev) => [...prev.slice(-6), newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1200);
    }

    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    const phrase = PURR_PHRASES[Math.floor(Math.random() * PURR_PHRASES.length)];
    setSpeechBubble(phrase);
    speechTimeoutRef.current = window.setTimeout(() => {
      setSpeechBubble(null);
    }, 3200);

    setTimeout(() => {
      setIsPetting(false);
    }, 900);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] aspect-[1024/956] flex items-end justify-center select-none"
    >
      {/* 1. Ground Sitting Platform - positioned exactly at the base of the character's feet/legs */}
      <div className="absolute bottom-[10%] w-[88%] h-20 rounded-[100%] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/15 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.95)] pointer-events-none flex items-center justify-center">
        <div className="w-[84%] h-10 rounded-[100%] border border-cyan-500/25 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
      </div>

      {/* Deep Contact Occlusion Shadow directly beneath the socks, knees and hips */}
      <div className="absolute bottom-[12%] w-[78%] h-7 rounded-[100%] bg-black/95 blur-sm pointer-events-none" />
      <div className="absolute bottom-[10%] w-[86%] h-12 rounded-[100%] bg-black/90 blur-md pointer-events-none" />
      <div className="absolute bottom-[8%] w-[90%] h-16 rounded-[100%] bg-black/80 blur-xl pointer-events-none" />

      {/* 2. Floating Speech Bubble */}
      <AnimatePresence>
        {speechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            className="absolute top-2 sm:top-6 z-40 px-4 py-2.5 rounded-2xl bg-white/95 text-black font-mono-tech text-xs font-bold shadow-2xl border border-black/10 flex items-center gap-2 max-w-[280px]"
          >
            <Sparkles className="w-4 h-4 text-amber-500 shrink-0 animate-spin" />
            <span>{speechBubble}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Floating Heart Particles */}
      <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, scale: 0.6, x: p.x, y: p.y }}
            animate={{
              opacity: 0,
              scale: 1.4,
              y: p.y - 80,
              x: p.x + (Math.random() * 40 - 20),
            }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 text-rose-400 drop-shadow-md"
          >
            <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
          </motion.div>
        ))}
      </div>

      {/* 4. MAIN MULTI-LAYER CHARACTER STAGE */}
      <motion.div
        style={{
          rotateY: bodyRotateY,
          rotateX: bodyRotateX,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: 'easeInOut',
        }}
        onClick={handlePetAction}
        className="relative w-full h-full cursor-pointer group"
      >
        {/* LAYER 0: PONYTAIL (Super smooth autonomous idle sway, completely isolated from petting/mouse) */}
        <motion.div
          animate={{
            rotate: [0, -2.5, 1.5, -1, 0],
            y: [0, -1, 0.5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            ease: 'easeInOut',
          }}
          style={{
            originX: '36%',
            originY: '28%',
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src="/character/ponytail.png"
            alt="Ponytail"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* LAYER 1: BASE BODY (Girl Sitting, Hoodie, Legs) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/character/base.png"
            alt="Character Base"
            className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* LAYER 2A: IRIS BASE (pupils1.png - Yellow Eye Background) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src="/character/pupils1.png"
            alt="Eye Irises Base"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* LAYER 2B: DYNAMIC PUPILS (pupils.png - Mouse Tracking) */}
        <motion.div
          style={{
            x: pupilShiftX,
            y: pupilShiftY,
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src="/character/pupils.png"
            alt="Character Pupils"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* LAYER 2C: HOODIE STRINGS (Smooth autonomous gentle dangle) */}
        <motion.div
          animate={{
            rotate: [0, 1.5, -1, 0.8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: 'easeInOut',
          }}
          style={{
            originX: '55%',
            originY: '45%',
          }}
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src="/character/hoodie_strings.png"
            alt="Hoodie Strings"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* LAYER 3: HAND (Smooth Petting centered at wrist, zero gap exposure) */}
        <motion.div
          animate={
            isPetting
              ? {
                  y: [0, -1.5, 1, -0.5, 0],
                  rotate: [0, -1.8, 1.8, -0.8, 0],
                  originX: '38%',
                  originY: '58%',
                }
              : {
                  y: [0, -0.6, 0],
                  originX: '38%',
                  originY: '58%',
                }
          }
          transition={
            isPetting
              ? { duration: 1.1, ease: 'easeInOut' }
              : { repeat: Infinity, duration: 4.5, ease: 'easeInOut' }
          }
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src="/character/hand.png"
            alt="Hand Petting Cat"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* LAYER 4: CAT (Organic purr & petting snuggle without crude scaling) */}
        <motion.div
          style={{
            x: catShiftX,
            y: catShiftY,
            originX: '50%',
            originY: '75%',
          }}
          animate={
            isPetting
              ? {
                  y: [0, 1.8, 0.5, 1.2, 0],
                  rotate: [0, 1, -0.8, 0.5, 0],
                  scaleX: [1, 1.015, 0.99, 1.01, 1],
                  scaleY: [1, 0.985, 1.01, 0.99, 1],
                }
              : {
                  y: [0, -0.8, 0],
                  scaleX: [1, 1.008, 1],
                  scaleY: [1, 0.995, 1],
                }
          }
          transition={
            isPetting
              ? { duration: 1.1, ease: 'easeInOut' }
              : { repeat: Infinity, duration: 3.8, ease: 'easeInOut' }
          }
          className="absolute inset-0 w-full h-full pointer-events-none"
        >
          <img
            src="/character/cat.png"
            alt="Cat Mascot"
            className="w-full h-full object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
