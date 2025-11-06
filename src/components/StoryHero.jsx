import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function StoryHero() {
  return (
    <section id="hero" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white dark:from-slate-950/10 dark:via-slate-950/50 dark:to-slate-950" />

      <div className="relative z-10 mx-auto max-w-7xl h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            3D Storytelling for Futuristic Brands
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-5 text-lg leading-relaxed text-slate-700/90 dark:text-slate-300/90"
          >
            An interactive cubic core surrounded by iridescent orbits — designed for immersive narratives, product launches, and premium presentations.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            <a href="#story" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow hover:bg-slate-800">Read the Story</a>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-white/70 hover:bg-white text-slate-900 ring-1 ring-slate-200 px-5 py-3 text-sm font-medium">Explore Work</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
