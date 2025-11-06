import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact({ headline, blurb }) {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    // Mock submission
    await new Promise((r) => setTimeout(r, 900));
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">{headline}</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{blurb}</p>

          <div className="mt-8 grid gap-4">
            <Info icon={Mail} label="Email" value="hello@multifolio.dev" />
            <Info icon={Phone} label="Phone" value="(+1) 555-0102" />
            <Info icon={MapPin} label="Location" value="Worldwide / Remote" />
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/70 dark:ring-slate-800 p-6 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name">
              <input required type="text" placeholder="Your name" className="w-full rounded-lg border border-slate-300/80 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </Field>
            <Field label="Email">
              <input required type="email" placeholder="you@email.com" className="w-full rounded-lg border border-slate-300/80 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </Field>
            <Field label="Subject" className="sm:col-span-2">
              <input required type="text" placeholder="How can I help?" className="w-full rounded-lg border border-slate-300/80 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </Field>
            <Field label="Message" className="sm:col-span-2">
              <textarea required rows={5} placeholder="Tell me about your project" className="w-full rounded-lg border border-slate-300/80 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </Field>
          </div>
          <div className="mt-6">
            <button type="submit" disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-5 py-2.5 text-sm font-medium shadow disabled:opacity-60">
              {status === 'loading' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children, className='' }) {
  return (
    <label className={`grid gap-1 ${className}`}>
      <span className="text-xs font-medium text-slate-600 dark:text-slate-300">{label}</span>
      {children}
    </label>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
        <Icon size={16} />
      </span>
      <div>
        <div className="text-xs text-slate-500">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
}
