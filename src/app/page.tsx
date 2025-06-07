'use client';

import { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionNav from './components/SectionNav';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [activeId, setActiveId] = useState('about');
  const sectionIds = ['about', 'projects', 'education'];
  const observerRef = useRef<IntersectionObserver | null>(null);

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
      const offsets = sectionIds.map(id => {
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
  }, [sectionIds]);

  if (loading) return <Preloader onFinish={() => setLoading(false)} />;

  return (
    <>
      {showNav && <SectionNav activeId={activeId} />}
      <main>
        <Hero />
        <Section id="about" title="About">
          <p>This is about section content.</p>
        </Section>
        <Section id="projects" title="Projects">
          <p>Here are some of my projects.</p>
        </Section>
        <Section id="education" title="Education">
          <p>Contact form or info goes here.</p>
        </Section>
      </main>
    </>
  );
}
