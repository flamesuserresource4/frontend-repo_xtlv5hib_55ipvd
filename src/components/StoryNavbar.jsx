import { LayoutGrid, BookOpen, Code2, Mail } from 'lucide-react';

export default function StoryNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 dark:bg-slate-950/40 backdrop-blur-xl border-b border-slate-200/70 dark:border-slate-800/60">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-md shadow-indigo-500/20" />
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white group-hover:opacity-90 transition-opacity">CubeStory</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#hero" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><LayoutGrid size={16}/>Hero</a>
          <a href="#story" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><BookOpen size={16}/>Story</a>
          <a href="#projects" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Code2 size={16}/>Projects</a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-2"><Mail size={16}/>Contact</a>
        </nav>
      </div>
    </header>
  );
}
