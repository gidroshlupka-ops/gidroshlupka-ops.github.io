import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { ProjectVoiceSample } from '../types';

const WAVE_PATTERN = [4, 10, 7, 14, 9, 16, 11, 18, 8, 15, 12, 19, 7, 13, 17, 10, 16, 8, 14, 11, 18, 6, 13, 9, 15, 7, 12, 10];
const WAVE_BARS = Array.from({ length: 48 }, (_, i) => WAVE_PATTERN[i % WAVE_PATTERN.length]);

function formatTime(seconds: number, fallback: string) {
  if (!Number.isFinite(seconds) || seconds <= 0) return fallback;
  const n = Math.max(0, Math.floor(seconds));
  return `${String(Math.floor(n / 60)).padStart(2, '0')}:${String(n % 60).padStart(2, '0')}`;
}

interface MurkaVoicePlayerProps {
  sample: ProjectVoiceSample;
}

export function MurkaVoicePlayer({ sample }: MurkaVoicePlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentLabel, setCurrentLabel] = useState(sample.durationLabel);

  useEffect(() => {
    const audio = new Audio(sample.url);
    audio.preload = 'metadata';
    audioRef.current = audio;

    const onTime = () => {
      const duration = audio.duration || 3;
      setProgress(duration > 0 ? audio.currentTime / duration : 0);
      setCurrentLabel(
        `${formatTime(audio.currentTime, '00:00')} / ${formatTime(duration, sample.durationLabel)}`
      );
    };
    const onEnded = () => {
      setPlaying(false);
      setProgress(0);
      setCurrentLabel(`${sample.durationLabel} · коснитесь, чтобы слушать`);
    };

    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('ended', onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('ended', onEnded);
      audioRef.current = null;
    };
  }, [sample.url, sample.durationLabel]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="w-full max-w-xl space-y-2">
      <div className="text-sm font-semibold text-white/90 px-1">{sample.title || 'Мурка'}</div>
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Пауза голосового' : 'Прослушать голосовое Мурки'}
        className="group w-full h-[72px] sm:h-[84px] rounded-full bg-[#3390EC] text-white flex items-center gap-3 sm:gap-4 px-3 sm:px-4 shadow-[0_8px_24px_rgba(51,144,236,0.35)] hover:bg-[#2d82d6] transition-colors cursor-pointer"
      >
        <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white text-[#2b7fd4] grid place-items-center shrink-0 shadow-sm">
          {playing ? (
            <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-[#2b7fd4]" />
          ) : (
            <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-[#2b7fd4] translate-x-0.5" />
          )}
        </span>

        <span className="flex-1 min-w-0 flex flex-col justify-center gap-1.5">
          <span className="flex items-end gap-[1.5px] sm:gap-[2px] h-7 sm:h-8 w-full" aria-hidden>
            {WAVE_BARS.map((h, i) => {
              const lit = i / WAVE_BARS.length <= progress;
              return (
                <span
                  key={i}
                  className={`flex-1 max-w-[3px] rounded-full origin-bottom ${
                    lit ? 'bg-white' : 'bg-white/45'
                  } ${playing ? 'murka-wave-bar' : ''}`}
                  style={{
                    height: `${h * 1.6}px`,
                    animationDelay: `${i * 28}ms`,
                  }}
                />
              );
            })}
          </span>
          <span className="text-[11px] sm:text-xs font-medium text-white/90 text-left">
            {playing ? currentLabel : `${sample.durationLabel} · ${sample.caption || 'RVC'}`}
          </span>
        </span>
      </button>
    </div>
  );
}
