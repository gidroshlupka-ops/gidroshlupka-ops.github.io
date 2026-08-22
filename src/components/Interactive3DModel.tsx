import { useEffect, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'motion/react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

const PURR_PHRASES = [
  'Мурр…',
  '*жмурится*',
  'Ещё чуть-чуть.',
  'Тепло.',
  '*трётся щекой*',
  'Не убирай руку.',
  'Листик доволен.',
];

const lookSpring = { damping: 28, stiffness: 38, mass: 1.2 };
const petSpring = { damping: 24, stiffness: 64, mass: 0.75 };
const lidSpring = { damping: 22, stiffness: 320, mass: 0.28 };

function Layer({
  src,
  className = '',
  priority = false,
}: {
  src: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt=""
      width={1024}
      height={956}
      decoding={priority ? 'sync' : 'async'}
      loading="eager"
      fetchPriority={priority ? 'high' : 'auto'}
      className={`absolute inset-0 w-full h-full object-contain pointer-events-none ${className}`}
      referrerPolicy="no-referrer"
      draggable={false}
    />
  );
}

export function Interactive3DModel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [speechBubble, setSpeechBubble] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const speechTimeoutRef = useRef<number | null>(null);
  const phraseIndexRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0, movedAt: 0 });
  const blinkRef = useRef({ until: 0, next: 0, openUntil: 0 });

  const lookX = useMotionValue(0);
  const lookY = useMotionValue(0);
  const smoothLookX = useSpring(lookX, lookSpring);
  const smoothLookY = useSpring(lookY, lookSpring);

  const time = useMotionValue(0);
  const pet = useSpring(0, petSpring);
  const lids = useSpring(0, lidSpring);

  const pupilShiftX = useTransform(
    [smoothLookX, time],
    ([lx, t]: number[]) => lx * 3.6 + Math.sin(t * 0.5) * 0.18
  );
  const pupilShiftY = useTransform(
    [smoothLookY, time],
    ([ly, t]: number[]) => ly * 2.1 + Math.cos(t * 0.42) * 0.12
  );

  const bodyShiftX = useTransform(smoothLookX, [-1, 1], [-3.5, 3.5]);
  const breatheY = useTransform(time, (t) => Math.sin(t * 0.82) * 1.8);
  const weightTilt = useTransform(time, (t) => Math.sin(t * 0.29) * 0.42);

  const chestScaleY = useTransform(time, (t) => 1 + Math.sin(t * 0.82) * 0.01);
  const chestScaleX = useTransform(time, (t) => 1 + Math.sin(t * 0.82) * 0.0035);

  const ponytailRotate = useTransform(
    time,
    (t) => Math.sin(t * 0.58) * 2.0 + Math.sin(t * 0.24) * 0.7
  );
  const ponytailY = useTransform(time, (t) => Math.sin(t * 0.58 + 0.4) * 0.9);
  const stringsRotate = useTransform(time, (t) => Math.sin(t * 0.68 + 0.8) * 1.4);

  const headRot = useTransform(
    [smoothLookX, time, pet],
    ([lx, t, p]: number[]) => lx * 2.2 + Math.sin(t * 0.45) * 0.5 + p * 0.65
  );
  const headY = useTransform(
    [smoothLookY, time],
    ([ly, t]: number[]) => ly * 1.1 + Math.sin(t * 0.82) * 0.35
  );

  const petHandX = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.85) * 0.25 + Math.sin(t * 6.6) * 1.6 * p);
  const petHandY = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.82 + 0.25) * 0.4 + (Math.sin(t * 6.6 + 0.3) * 2.1 - 0.25) * p);
  const petHandRot = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.7) * 0.4 + Math.sin(t * 6.6) * 2.6 * p);

  const fingersY = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.9 + 0.5) * 0.25 + Math.sin(t * 7.1 + 0.4) * 1.15 * p);
  const thumbX = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.8) * 0.15 + Math.sin(t * 6.2) * 0.7 * p);

  const catGroupY = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 1.02 + 0.55) * 1.15 + p * 0.55);
  const catGroupRot = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.64) * 0.28 + p * 0.55);
  const catBreathY = useTransform(time, (t) => 1 + Math.sin(t * 1.02 + 0.55) * 0.012);
  const catBreathX = useTransform(time, (t) => 1 + Math.sin(t * 1.02 + 0.55) * 0.005);

  const catHeadRot = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.72) * 0.55 + p * (1.1 + Math.sin(t * 5.4) * 0.25));
  const catHeadY = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 1.02 + 0.8) * 0.35 + p * 0.7);

  const earL = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 1.4) * 1.1 + Math.sin(t * 8) * 2.4 * p);
  const earR = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 1.25 + 0.9) * 0.9 + Math.sin(t * 7.2 + 0.5) * 1.8 * p);

  const tailRot = useTransform(time, (t) => Math.sin(t * 0.55) * 3.2 + Math.sin(t * 0.21) * 1.4);

  const leftHandY = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 1.02 + 0.55) * 0.2 + p * 0.45);
  const leftHandRot = useTransform([time, pet], ([t, p]: number[]) => Math.sin(t * 0.6) * 0.25 + p * 0.7);

  useEffect(() => {
    const handlePointer = (e: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const nx = (e.clientX - (rect.left + rect.width * 0.54)) / (rect.width * 0.58);
      const ny = (e.clientY - (rect.top + rect.height * 0.26)) / (rect.height * 0.5);
      mouseRef.current = {
        x: Math.max(-1, Math.min(1, nx)),
        y: Math.max(-1, Math.min(1, ny)),
        movedAt: performance.now(),
      };
    };
    window.addEventListener('pointermove', handlePointer, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointer);
  }, []);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    let visible = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting && entry.intersectionRatio > 0.12;
      },
      { threshold: [0, 0.12, 0.4], rootMargin: '40px' }
    );
    io.observe(root);

    const coarse =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const minFrame = coarse ? 33 : 0;

    blinkRef.current.next = performance.now() + 2400;
    let raf = 0;
    let lastDraw = 0;
    const start = performance.now();

    const tick = (now: number) => {
      raf = requestAnimationFrame(tick);
      if (document.hidden || !visible) return;
      if (minFrame && now - lastDraw < minFrame) return;
      lastDraw = now;

      const t = (now - start) / 1000;
      time.set(t);

      const idleMs = now - mouseRef.current.movedAt;
      if (idleMs > 1600) {
        lookX.set(-0.12 + Math.sin(t * 0.31) * 0.18);
        lookY.set(0.28 + Math.sin(t * 0.24 + 1.1) * 0.1);
      } else {
        lookX.set(mouseRef.current.x * 0.85);
        lookY.set(0.16 + mouseRef.current.y * 0.7);
      }

      const blinkState = blinkRef.current;
      if (now >= blinkState.next) {
        blinkState.until = now + 95;
        blinkState.openUntil = now + 170;
        blinkState.next = now + (Math.random() < 0.2 ? 240 : 4000 + Math.random() * 4800);
      }
      if (now < blinkState.until) lids.set(1);
      else if (now < blinkState.openUntil) lids.set(0.35);
      else lids.set(0);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [lids, lookX, lookY, time]);

  const handlePetAction = (e: React.MouseEvent) => {
    pet.set(1);
    window.setTimeout(() => pet.set(0), 560);

    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const particle = {
        id: Date.now() + Math.random(),
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
      setParticles((prev) => [...prev.slice(-5), particle]);
      window.setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, 1100);
    }

    if (speechTimeoutRef.current) clearTimeout(speechTimeoutRef.current);
    const phrase = PURR_PHRASES[phraseIndexRef.current % PURR_PHRASES.length];
    phraseIndexRef.current += 1;
    setSpeechBubble(phrase);
    speechTimeoutRef.current = window.setTimeout(() => setSpeechBubble(null), 2400);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[440px] sm:max-w-[500px] lg:max-w-[540px] aspect-[1024/956] flex items-end justify-center select-none [contain:layout]"
    >
      <div className="absolute bottom-[10%] w-[88%] h-20 rounded-[100%] bg-gradient-to-b from-white/[0.06] to-white/[0.01] border border-white/15 backdrop-blur-md shadow-[0_16px_40px_rgba(0,0,0,0.95)] pointer-events-none flex items-center justify-center">
        <div className="w-[84%] h-10 rounded-[100%] border border-cyan-500/25 bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
      </div>
      <div className="absolute bottom-[12%] w-[78%] h-7 rounded-[100%] bg-black/95 blur-sm pointer-events-none" />
      <div className="absolute bottom-[10%] w-[86%] h-12 rounded-[100%] bg-black/90 blur-md pointer-events-none" />
      <div className="absolute bottom-[8%] w-[90%] h-16 rounded-[100%] bg-black/80 blur-xl pointer-events-none" />

      <AnimatePresence>
        {speechBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="absolute top-2 sm:top-6 z-40 px-4 py-2 rounded-2xl bg-white/95 text-black font-mono-tech text-xs shadow-2xl border border-black/10 max-w-[240px]"
          >
            {speechBubble}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 pointer-events-none z-50 overflow-visible">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0.9, scale: 0.55, x: p.x, y: p.y }}
            animate={{ opacity: 0, scale: 1.12, y: p.y - 64, x: p.x + 8 }}
            transition={{ duration: 1.05, ease: 'easeOut' }}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-rose-400"
          >
            <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          </motion.div>
        ))}
      </div>

      <motion.div
        style={{
          x: bodyShiftX,
          y: breatheY,
          rotate: weightTilt,
        }}
        onClick={handlePetAction}
        className="relative w-full h-full cursor-pointer"
      >
        <motion.div
          style={{ rotate: ponytailRotate, y: ponytailY, originX: '36%', originY: '28%' }}
          className="absolute inset-0"
        >
          <Layer src="/character/ponytail.png" />
        </motion.div>

        <motion.div
          style={{ scaleX: chestScaleX, scaleY: chestScaleY, originX: '50%', originY: '72%' }}
          className="absolute inset-0"
        >
          <Layer src="/character/base.png" priority />
        </motion.div>

        <motion.div
          style={{
            rotate: headRot,
            y: headY,
            transformOrigin: '54% 42%',
            backfaceVisibility: 'hidden',
          }}
          className="absolute inset-0 isolate"
        >
          <Layer src="/character/head.png" priority />
          <motion.div style={{ x: pupilShiftX, y: pupilShiftY }} className="absolute inset-0">
            <Layer src="/character/pupils1.png" />
            <Layer src="/character/pupils.png" />
          </motion.div>
          <motion.div style={{ opacity: lids }} className="absolute inset-0">
            <Layer src="/character/eyelids.png" />
          </motion.div>
        </motion.div>

        <motion.div
          style={{
            rotate: stringsRotate,
            scaleX: chestScaleX,
            scaleY: chestScaleY,
            originX: '55%',
            originY: '45%',
          }}
          className="absolute inset-0"
        >
          <Layer src="/character/hoodie_strings.png" />
        </motion.div>

        <motion.div
          style={{
            y: catGroupY,
            rotate: catGroupRot,
            scaleX: catBreathX,
            scaleY: catBreathY,
            originX: '42%',
            originY: '78%',
          }}
          className="absolute inset-0"
        >
          <motion.div style={{ rotate: tailRot, originX: '47%', originY: '82%' }} className="absolute inset-0">
            <Layer src="/character/cat_tail.png" />
          </motion.div>

          <Layer src="/character/cat.png" />

          <motion.div
            style={{
              x: petHandX,
              y: petHandY,
              rotate: petHandRot,
              originX: '34%',
              originY: '58%',
            }}
            className="absolute inset-0"
          >
            <motion.div style={{ x: thumbX, originX: '41%', originY: '59%' }} className="absolute inset-0">
              <Layer src="/character/thumb.png" />
            </motion.div>
            <Layer src="/character/hand.png" />
            <motion.div style={{ y: fingersY, originX: '36%', originY: '58%' }} className="absolute inset-0">
              <Layer src="/character/fingers.png" />
            </motion.div>
          </motion.div>

          <motion.div style={{ rotate: earL, originX: '33%', originY: '66%' }} className="absolute inset-0">
            <Layer src="/character/cat_ear_l.png" />
          </motion.div>
          <motion.div style={{ rotate: earR, originX: '45%', originY: '60%' }} className="absolute inset-0">
            <Layer src="/character/cat_ear_r.png" />
          </motion.div>

          <motion.div
            style={{ rotate: catHeadRot, y: catHeadY, originX: '40%', originY: '70%' }}
            className="absolute inset-0"
          >
            <Layer src="/character/cat_head.png" />
          </motion.div>

          <motion.div
            style={{ y: leftHandY, rotate: leftHandRot, originX: '64%', originY: '70%' }}
            className="absolute inset-0"
          >
            <Layer src="/character/handoncat.png" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
