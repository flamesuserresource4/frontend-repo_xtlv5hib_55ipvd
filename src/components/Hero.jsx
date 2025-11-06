import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ title, subtitle, tags, cta }) {
  return (
    <section id="hero" className="relative h-[88vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white dark:from-slate-950/10 dark:via-slate-950/50 dark:to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/60 backdrop-blur-md px-3 py-1 text-xs text-slate-700 shadow-sm"
          >
            {tags?.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-full bg-slate-900/5">{t}</span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="mt-5 text-lg leading-relaxed text-slate-700/90 dark:text-slate-300/90"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="mt-8 flex items-center gap-3"
          >
            {cta?.map((c) => (
              <a key={c.href} href={c.href} className={`inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-all ${c.primary ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white/70 hover:bg-white text-slate-900 ring-1 ring-slate-200'}`}>
                {c.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
