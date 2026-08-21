import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Send,
  Github,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  ArrowRight,
  Clock,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    // If Cloudflare Worker URL is configured, send directly to Telegram Bot via Worker
    if (portfolioData.personal.contactWorkerUrl) {
      try {
        const res = await fetch(portfolioData.personal.contactWorkerUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: formState.name,
            contact: formState.email,
            message: formState.message,
          }),
        });

        const data = await res.json();
        if (data.ok) {
          setSubmitted(true);
          setFormState({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.error || 'Не удалось доставить сообщение');
        }
      } catch (err: any) {
        setErrorMessage('Ошибка отправки в Telegram. Открываем почту...');
        setTimeout(() => {
          const subject = encodeURIComponent(`Сообщение от ${formState.name} через портфолио`);
          const body = encodeURIComponent(
            `От: ${formState.name} (${formState.email})\n\nСообщение:\n${formState.message}`
          );
          window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
          setSubmitted(true);
        }, 1200);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Direct Email Client Fallback
      setSubmitted(true);
      setIsSubmitting(false);
      setTimeout(() => {
        const subject = encodeURIComponent(`Сообщение от ${formState.name} через портфолио`);
        const body = encodeURIComponent(
          `От: ${formState.name} (${formState.email})\n\nСообщение:\n${formState.message}`
        );
        window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
      }, 600);
    }
  };

  return (
    <section
      id="contact"
      className="snap-section relative w-full min-h-screen flex flex-col justify-between py-16 sm:py-20 px-4 sm:px-8 lg:px-12 overflow-hidden bg-[#0c0e12] select-none"
    >
      {/* Background Subtle Organic Gradient (Eye-Safe, Muted) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-[600px] h-[500px] rounded-full bg-slate-800/10 blur-[140px] animate-ambient-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px] opacity-25" />
      </div>

      {/* Top Bar */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
          <h2 className="text-xs font-mono-tech font-bold uppercase tracking-widest text-white/90">
            CONTACT // INITIATE TRANSMISSION
          </h2>
        </div>
        <span className="text-[11px] font-mono-tech text-white/40 hidden sm:inline">
          AVAILABLE FOR FREELANCE & PROJECTS
        </span>
      </div>

      {/* Main Grid: Direct Contact on Left, Quick Form on Right */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6">
        {/* Left Column: Direct Telegram, Email & Socials */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
          <div className="space-y-1.5">
            <span className="text-[11px] font-mono-tech uppercase tracking-wider text-amber-300">
              ■ СВЯЗАТЬСЯ СО МНОЙ
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Обсудим проект или задачу?
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              Отвечаю быстро в Telegram или по электронной почте.
            </p>
          </div>

          <div className="space-y-2.5 pt-2">
            {/* Telegram Card */}
            <a
              href={portfolioData.personal.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/[0.04] border border-white/12 hover:border-white/25 flex items-center justify-between transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-400 group-hover:scale-105 transition-transform">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-white/50 block">Telegram</span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {portfolioData.personal.telegramUsername}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all" />
            </a>

            {/* Email Card */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/12 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-tech uppercase text-white/50 block">Email</span>
                  <span className="text-xs sm:text-sm font-bold text-white">
                    {portfolioData.personal.email}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 transition-colors"
                title="Скопировать email"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub, Twitter & LinkedIn Row */}
            <div className="grid grid-cols-3 gap-2.5">
              <a
                href={portfolioData.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 text-xs font-mono-tech text-white/80 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4 shrink-0" />
                <span>GITHUB</span>
              </a>
              <a
                href={portfolioData.personal.twitterUrl || 'https://x.com'}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 text-xs font-mono-tech text-white/80 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4 shrink-0 text-sky-400" />
                <span>TWITTER</span>
              </a>
              <a
                href={portfolioData.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 flex items-center justify-center gap-2 text-xs font-mono-tech text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4 shrink-0 text-sky-400" />
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="p-6 sm:p-7 rounded-3xl bg-white/[0.04] border border-white/12 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-white">
                Быстрое сообщение
              </h4>
              {portfolioData.personal.contactWorkerUrl && (
                <span className="text-[10px] font-mono-tech text-emerald-400/90 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Прямая доставка в Telegram
                </span>
              )}
            </div>

            {errorMessage && (
              <div className="mb-3 p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-mono-tech flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {submitted ? (
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h5 className="font-bold text-white">Сообщение отправлено!</h5>
                <p className="text-xs text-white/60">
                  {portfolioData.personal.contactWorkerUrl
                    ? 'Ваше сообщение успешно доставлено прямо в Telegram.'
                    : 'Почтовый клиент открывается с заполненным письмом.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs font-mono-tech text-amber-300 hover:underline"
                >
                  Отправить еще одно
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-white/50 mb-1">
                      Имя
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Иван"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono-tech focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono-tech uppercase text-white/50 mb-1">
                      Контакты (Telegram / Email)
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="@username или mail@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono-tech focus:outline-none focus:border-white/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono-tech uppercase text-white/50 mb-1">
                    Сообщение
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Опишите задачу или проект..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono-tech focus:outline-none focus:border-white/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl text-xs font-mono-tech btn-solid-primary flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>ОТПРАВКА В TELEGRAM...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>ОТПРАВИТЬ СООБЩЕНИЕ</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Barcode & Meta */}
      <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono-tech text-white/40">
        <span>TRANSMISSION // READY</span>
        <span>© 2026 {portfolioData.personal.name.toUpperCase()}.SYS</span>
      </div>
    </section>
  );
}
