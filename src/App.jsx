import StoryNavbar from './components/StoryNavbar.jsx';
import StoryHero from './components/StoryHero.jsx';
import StoryTimeline from './components/StoryTimeline.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

const SHOWCASE = {
  heading: 'Selected Projects',
  intro:
    'A curated set of visuals and interactive moments crafted around the cubic narrative — from launch sites to product reveals.',
  items: [
    {
      title: 'Core Launch Site',
      description:
        'A premium landing experience introducing a new platform through cinematic 3D and purposeful motion.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
      tags: ['Web', '3D', 'Framer Motion'],
      link: '#',
    },
    {
      title: 'Iridescent System',
      description:
        'A design language built from reflective materials, gradients, and soft depth cues for a futuristic identity.',
      image:
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
      tags: ['Identity', 'Visual'],
      link: '#',
    },
    {
      title: 'Interactive Orbit',
      description:
        'Micro-interactions that respond to drag, hover, and scroll creating a delightful product story.',
      image:
        'https://images.unsplash.com/photo-1536895058696-a69b1c7ba34c?q=80&w=1600&auto=format&fit=crop',
      tags: ['Interaction', 'Prototype'],
      link: '#',
    },
  ],
};

const CONTACT_COPY = {
  headline: 'Partner on an Immersive Story',
  blurb:
    'Bring your product narrative to life with interactive 3D, refined motion, and a focus on clarity and craft.',
};

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white">
      <StoryNavbar />
      <main className="pt-20">
        <StoryHero />
        <StoryTimeline />
        <Projects {...SHOWCASE} />
        <Contact {...CONTACT_COPY} />
        <footer className="py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
            <p>© {new Date().getFullYear()} CubeStory — All rights reserved.</p>
            <p className="opacity-80">Crafted with React, Tailwind, Framer Motion, and Spline.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
