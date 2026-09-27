'use client';
import { useState } from 'react';
import { WA } from '@/lib/data';

export default function ContactForm() {
  const [f, setF] = useState({ name: '', vehicle: '', message: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const text = `Hi BM Autostyling, my name is ${f.name || '—'}.\nVehicle: ${f.vehicle || '—'}\n\n${f.message || ''}`;
    window.open(`${WA}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form onSubmit={send} className="grid max-w-xl gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-ink/70">Your name</label>
        <input id="name" required value={f.name} onChange={set('name')} className="w-full rounded-sm border border-ink/20 bg-white px-4 py-3 text-ink outline-none focus:border-pink" placeholder="Jane Doe" />
      </div>
      <div>
        <label htmlFor="vehicle" className="mb-1 block text-sm text-ink/70">Vehicle</label>
        <input id="vehicle" value={f.vehicle} onChange={set('vehicle')} className="w-full rounded-sm border border-ink/20 bg-white px-4 py-3 text-ink outline-none focus:border-pink" placeholder="e.g. BMW E60" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-ink/70">What would you like done?</label>
        <textarea id="message" required rows={4} value={f.message} onChange={set('message')} className="w-full rounded-sm border border-ink/20 bg-white px-4 py-3 text-ink outline-none focus:border-pink" placeholder="Starlight headliner, ambient lighting..." />
      </div>
      <button type="submit" className="rounded-sm px-6 py-3 font-semibold text-white transition hover:opacity-90" style={{ background: 'linear-gradient(90deg,#2fc7ff,#ff3fd8)' }}>Send via WhatsApp</button>
      <p className="text-xs text-ink/50">This opens WhatsApp with your message ready to send, so nothing is sent without you confirming.</p>
    </form>
  );
}
