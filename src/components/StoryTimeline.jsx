import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Play, Globe, Layers } from 'lucide-react';

const chapters = [
  {
    id: 'origin',
    icon: Sparkles,
    title: 'Origin of the Cube',
    lead:
      'A core of dark, polished metal awakens — etched with cyan and violet energy lines.',
    body:
      'At the heart of our narrative sits a cubic structure. It is calm, deliberate, and powerful — a symbol of clarity in complex systems. Its glow hints at systems in balance and potential waiting to be unlocked.',
  },
  {
    id: 'orbits',
    icon: Globe,
    title: 'Orbits of Possibility',
    lead:
      'Reflective spheres revolve and respond — ideas and features gravitating around a strong center.',
    body:
      'Every product story has satellites: features, integrations, and touchpoints. These orbits create rhythm. As the ecosystem evolves, reflections shift, revealing new paths forward.',
  },
  {
    id: 'layers',
    icon: Layers,
    title: 'Layers of Craft',
    lead:
      'Polished surfaces, hidden frameworks, and thoughtful motion design.',
    body:
      'Great experiences are built in layers — structure, interaction, and emotion. The cube carries these layers with intent, making complexity feel effortless and elegant.',
  },
  {
    id: 'play',
    icon: Play,
    title: 'Interactive by Design',
    lead:
      'The scene invites exploration — hover, rotate, and discover delightful micro-reactions.',
    body:
      'Interactivity is not a garnish; it is the medium. The narrative comes alive as users engage at their own pace, turning a page into an experience.',
  },
];

function ChapterCard({ chapter, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: 0.05 * index }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/70 dark:ring-slate-800 p-6 shadow-sm"
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white shadow">
          <chapter.icon size={18} />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{chapter.title}</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-300">{chapter.lead}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600/90 dark:text-slate-300/90">{chapter.body}</p>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden>
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
        <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
      </div>
    </motion.article>
  );
}

export default function StoryTimeline() {
  const { scrollYProgress } = useScroll({ offset: ['start start', 'end end'] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="story" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <motion.div style={{ width: progressWidth }} className="pointer-events-none absolute left-0 top-0 h-1 bg-gradient-to-r from-indigo-600 to-fuchsia-600" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">A 3D Story in Four Chapters</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Explore a narrative built around an interactive cubic core — a visual metaphor for focus, craft, and possibility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => (
            <ChapterCard key={c.id} chapter={c} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl ring-1 ring-slate-200/70 dark:ring-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm p-6 flex items-center justify-between"
        >
          <div>
            <div className="text-sm uppercase tracking-wider text-slate-500">Interaction Tip</div>
            <p className="mt-1 text-slate-700 dark:text-slate-200">Hover and drag the 3D hero to rotate the cube and reveal new reflections.</p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium"><Play size={16}/> Try it</span>
        </motion.div>
      </div>
    </section>
  );
}
