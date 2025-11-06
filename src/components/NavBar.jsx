import { LayoutGrid, Mail, Code2, Camera, Palette, Film } from 'lucide-react';

export default function NavBar({ profiles, activeId, onSelect }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-md shadow-indigo-500/20" />
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white group-hover:opacity-90 transition-opacity">Multifolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><LayoutGrid size={16}/>Hero</a>
          <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Code2 size={16}/>Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Mail size={16}/>Contact</a>
        </nav>

        <ProfileSelector profiles={profiles} activeId={activeId} onSelect={onSelect} />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-4 md:hidden">
        <nav className="flex items-center gap-6 text-sm font-medium justify-center">
          <a href="#hero" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><LayoutGrid size={16}/>Hero</a>
          <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Code2 size={16}/>Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Mail size={16}/>Contact</a>
        </nav>
      </div>
    </header>
  );
}

function ProfileSelector({ profiles, activeId, onSelect }) {
  const iconMap = {
    photographer: Camera,
    designer: Palette,
    filmmaker: Film,
  };

  return (
    <div className="flex items-center gap-2 rounded-xl bg-white/70 dark:bg-slate-900/60 ring-1 ring-slate-200 dark:ring-slate-800 p-1 shadow-sm">
      {profiles.map((p) => {
        const Icon = iconMap[p.icon] || LayoutGrid;
        const active = p.id === activeId;
        return (
          <button
            key={p.id}
            aria-pressed={active}
            onClick={() => onSelect(p.id)}
            className={`flex items-center gap-2 rounded-lg px-3 py-2 transition-all ${
              active
                ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
            }`}
          >
            <Icon size={16} />
            <span className="hidden sm:inline whitespace-nowrap text-sm">{p.name}</span>
          </button>
        );
      })}
    </div>
  );
}
