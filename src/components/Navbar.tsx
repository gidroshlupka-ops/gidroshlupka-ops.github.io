import { useState, useEffect, type MouseEvent } from 'react';
import { motion } from 'motion/react';
import { Send, Github, FileText, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { forceUnlockBodyScroll } from '../lib/scrollLock';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export function Navbar({ onOpenResume, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Главная' },
    { id: 'projects', label: 'Проекты' },
    { id: 'about', label: 'Обо мне' },
    { id: 'contact', label: 'Контакты' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    window.dispatchEvent(new Event('portfolio:close-overlays'));
    forceUnlockBodyScroll();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-[110] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0e12]/80 backdrop-blur-md border-b border-white/10 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Minimal Typographic Brand with Mascot Indicator */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, 'hero')}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <span className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-xs group-hover:scale-110 transition-transform">
            🍃
          </span>
          <span className="text-xs font-mono-tech font-bold tracking-widest text-white uppercase flex items-center gap-1.5">
            <span>AFORI</span>
            <span className="text-white/40 font-normal">// PORTFOLIO</span>
          </span>
        </a>

        {/* Clean Transparent Desktop Navigation (No bulky background block) */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`relative py-1 text-xs font-mono-tech uppercase tracking-wider transition-colors ${
                  isActive ? 'text-white font-bold' : 'text-white/50 hover:text-white/90'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons Right (Minimal, Transparent) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenResume}
            className="px-4 py-1.5 rounded-full text-xs font-mono-tech btn-glass text-white/90 flex items-center gap-1.5 hover:text-white"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>

          <a
            href={portfolioData.personal.telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-xs font-mono-tech btn-solid-primary flex items-center gap-1.5"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Telegram</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl btn-glass text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-[#0c0e12]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 space-y-4"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-sm font-mono-tech uppercase ${
                  activeSection === link.id ? 'text-white font-bold' : 'text-white/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center gap-3">
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="flex-1 py-2.5 rounded-xl btn-glass text-xs font-mono-tech text-center text-white"
            >
              Резюме / CV
            </button>
            <a
              href={portfolioData.personal.telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-xl btn-solid-primary text-xs font-mono-tech text-center"
            >
              Telegram
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
