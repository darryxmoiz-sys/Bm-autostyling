'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TEL, PHONE_DISPLAY } from '@/lib/data';

const links = [['/', 'Home'], ['/services', 'Services'], ['/gallery', 'Gallery'], ['/areas', 'FAQ'], ['/about', 'About'], ['/contact', 'Contact']];

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const item = (h) => `transition hover:text-pink ${path === h ? 'text-pink' : 'text-white/75'}`;
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img src="/logo-wide.png" alt="BM Autostyling" className="h-10 w-auto object-contain" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([h, l]) => <Link key={h} href={h} className={item(h)}>{l}</Link>)}
          <a href={TEL} className="rounded-sm bg-pink px-5 py-2 font-semibold text-white transition hover:bg-blue hover:text-ink">Call {PHONE_DISPLAY}</a>
        </nav>
        <button className="rounded-sm border border-white/30 px-4 py-2 md:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'}</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-5 py-4 md:hidden">
          {links.map(([h, l]) => <Link key={h} href={h} onClick={() => setOpen(false)} className={`py-2 text-lg ${item(h)}`}>{l}</Link>)}
        </nav>
      )}
    </header>
  );
}
