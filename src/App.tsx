import { lazy, Suspense, useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

const ProjectShowcase = lazy(() =>
  import('./components/ProjectShowcase').then((m) => ({ default: m.ProjectShowcase }))
);
const About = lazy(() =>
  import('./components/About').then((m) => ({ default: m.About }))
);
const Contact = lazy(() =>
  import('./components/Contact').then((m) => ({ default: m.Contact }))
);
const ResumeModal = lazy(() =>
  import('./components/ResumeModal').then((m) => ({ default: m.ResumeModal }))
);

function SectionFallback() {
  return <div className="snap-section w-full min-h-screen bg-[#0c0e12]" />;
}

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const containerRef = useRef<HTMLDivElement>(null);

  const sections = ['hero', 'projects', 'about', 'contact'];

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const handleScrollToNext = () => {
    scrollToSection('projects');
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const scrollPos = window.scrollY + window.innerHeight * 0.35;
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPos >= top && scrollPos < top + height) {
              setActiveSection(id);
              break;
            }
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0c0e12] text-[#f1f5f9] font-sans selection:bg-white selection:text-black">
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <main ref={containerRef} className="w-full">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onScrollToNext={handleScrollToNext}
        />
        <Suspense fallback={<SectionFallback />}>
          <ProjectShowcase />
          <About />
          <Contact />
        </Suspense>
      </main>

      {isResumeOpen && (
        <Suspense fallback={null}>
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </Suspense>
      )}
    </div>
  );
}
