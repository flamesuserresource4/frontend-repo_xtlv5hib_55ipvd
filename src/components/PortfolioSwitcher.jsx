import { useMemo } from 'react';

export default function PortfolioSwitcher({ profiles, activeId }) {
  const active = useMemo(() => profiles.find(p => p.id === activeId), [profiles, activeId]);
  if (!active) return null;
  return (
    <div className="mx-auto max-w-7xl px-6 -mt-10">
      <div className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/70 dark:ring-slate-800 p-4 shadow-sm grid sm:grid-cols-3 gap-3">
        {profiles.map((p) => (
          <a key={p.id} href="#hero" className={`rounded-lg px-4 py-3 text-sm font-medium transition-all text-center ${p.id===activeId ? 'bg-slate-900 text-white' : 'bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{p.name}</a>
        ))}
      </div>
    </div>
  );
}
