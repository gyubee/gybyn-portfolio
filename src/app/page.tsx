'use client';

import { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionNav from './components/SectionNav';
import AboutSection from './components/AboutSection';
import ProjectGrid from './components/ProjectGrid';
import ContactSection from './components/ContactSection';

const SECTION_IDS = ['about', 'projects', 'contact'] as const;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const heroEnd = document.getElementById('hero-end');
      if (!heroEnd) return;
      const rect = heroEnd.getBoundingClientRect();
      setShowNav(rect.top <= 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offsets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: Math.abs(el.getBoundingClientRect().top) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveId(closest.id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preloader keeps #about/#projects/etc. out of the DOM initially, so the browser
  // cannot scroll to the hash on first paint - re-apply after main content mounts.
  useEffect(() => {
    if (loading) return;
    const id = window.location.hash.replace(/^#/, '');
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [loading]);

  if (loading) return <Preloader onFinish={() => setLoading(false)} />;

  return (
    <>
      {showNav && <SectionNav activeId={activeId} />}
      <main className="flex-1">
        <Hero />
        <Section id="about" title="About">
          <AboutSection />
        </Section>
        <Section id="projects" title="Projects">
          <ProjectGrid />
        </Section>
        <Section id="contact" title="Contact">
          <ContactSection />
        </Section>
      </main>
    </>
  );
}
