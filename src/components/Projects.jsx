import { motion } from 'framer-motion';

function ProjectCard({ item }) {
  return (
    <motion.a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/70 dark:ring-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-0.5 transition-all"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          {item.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300">{t}</span>
          ))}
        </div>
        <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-300 line-clamp-2">{item.description}</p>
      </div>
    </motion.a>
  );
}

export default function Projects({ items, heading, intro }) {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{heading}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{intro}</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <ProjectCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
