import { useMemo, useState } from 'react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import PortfolioSwitcher from './components/PortfolioSwitcher.jsx';

const PROFILES = [
  {
    id: 'photography',
    name: 'Photography',
    icon: 'photographer',
    hero: {
      title: 'Cinematic Photography & Visual Stories',
      subtitle:
        'I capture light, mood, and movement for brands and artists. Editorial, product, and on-location shoots crafted with precision.',
      tags: ['Photography', 'Editorial', 'Retouching'],
      cta: [
        { label: 'View Work', href: '#projects', primary: true },
        { label: 'Get in Touch', href: '#contact' },
      ],
    },
    projects: {
      heading: 'Featured Sets',
      intro: 'A selection of commissioned and personal works exploring people, product, and place.',
      items: [
        {
          title: 'Desert Vogue',
          description: 'Editorial series exploring texture and tone during golden hour.',
          image:
            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1600&auto=format&fit=crop',
          tags: ['Editorial', 'Portrait'],
          link: '#',
        },
        {
          title: 'Studio Minimal',
          description: 'High-key product shoot with soft shadows and precise gradients.',
          image:
            'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop',
          tags: ['Product', 'Lighting'],
          link: '#',
        },
        {
          title: 'City After Rain',
          description: 'Noir-inspired street photography in reflective evening scenes.',
          image:
            'https://images.unsplash.com/photo-1523419409543-8f6f7f2a2f00?q=80&w=1600&auto=format&fit=crop',
          tags: ['Street', 'Moody'],
          link: '#',
        },
      ],
    },
    contact: {
      headline: 'Book a Shoot',
      blurb: 'Let’s plan your next campaign or editorial. Flexible for studio or on-location worldwide.',
    },
  },
  {
    id: 'design',
    name: 'UI/UX Design',
    icon: 'designer',
    hero: {
      title: 'Interface Design for Modern Brands',
      subtitle:
        'I craft conversion-focused sites and design systems with accessibility and performance at the core.',
      tags: ['UI/UX', 'Design Systems', 'Accessibility'],
      cta: [
        { label: 'Selected Work', href: '#projects', primary: true },
        { label: 'Contact', href: '#contact' },
      ],
    },
    projects: {
      heading: 'Case Studies',
      intro: 'From landing pages to complex SaaS dashboards, here are highlights from recent projects.',
      items: [
        {
          title: 'SaaS Analytics',
          description: 'Design system and dashboard patterns increasing task completion by 28%.',
          image:
            'https://images.unsplash.com/photo-1551281044-8e146f1191f3?q=80&w=1600&auto=format&fit=crop',
          tags: ['Dashboard', 'System'],
          link: '#',
        },
        {
          title: 'Fintech Mobile',
          description: 'A mobile-first money app with delightful micro-interactions.',
          image:
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop',
          tags: ['Mobile', 'Motion'],
          link: '#',
        },
        {
          title: 'Brand Landing',
          description: 'High-impact marketing page focused on clear storytelling and speed.',
          image:
            'https://images.unsplash.com/photo-1529336953121-a0c0fb0f0b9b?q=80&w=1600&auto=format&fit=crop',
          tags: ['Marketing', 'Web'],
          link: '#',
        },
      ],
    },
    contact: {
      headline: 'Start a Design Project',
      blurb: 'I partner with startups and teams to ship polished, scalable experiences.',
    },
  },
  {
    id: 'film',
    name: 'Film & Motion',
    icon: 'filmmaker',
    hero: {
      title: 'Directing Motion for Screen and Social',
      subtitle:
        'Crisp edits, clean color, and purposeful pacing for commercials, explainers, and content.',
      tags: ['Directing', 'Editing', 'Color'],
      cta: [
        { label: 'Watch Reels', href: '#projects', primary: true },
        { label: 'Hire Me', href: '#contact' },
      ],
    },
    projects: {
      heading: 'Video Highlights',
      intro: 'Short-form, brand spots, and narrative experiments stitched with rhythm and care.',
      items: [
        {
          title: 'Midnight Drive',
          description: 'A moody automotive spot with neon reflections and grit.',
          image:
            'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop',
          tags: ['Commercial', 'Automotive'],
          link: '#',
        },
        {
          title: 'Product Loop',
          description: 'Seamless motion loop showcasing product hero moments.',
          image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
          tags: ['Motion', 'Product'],
          link: '#',
        },
        {
          title: 'Café Stories',
          description: 'Warm human moments captured between conversations.',
          image:
            'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop',
          tags: ['Narrative', 'Lifestyle'],
          link: '#',
        },
      ],
    },
    contact: {
      headline: 'Let’s Make a Film',
      blurb: 'From scripting to delivery, I help brands tell cleaner, sharper stories.',
    },
  },
];

export default function App() {
  const [activeId, setActiveId] = useState('photography');
  const active = useMemo(() => PROFILES.find((p) => p.id === activeId) || PROFILES[0], [activeId]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <NavBar profiles={PROFILES} activeId={activeId} onSelect={setActiveId} />

      <main className="pt-20">
        <Hero {...active.hero} />
        <PortfolioSwitcher profiles={PROFILES} activeId={activeId} />
        <Projects {...active.projects} />
        <Contact {...active.contact} />

        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Multifolio — All rights reserved.</p>
            <p className="opacity-80">Built with React, Tailwind, Framer Motion, and Spline.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
