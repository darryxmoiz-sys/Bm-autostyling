import './globals.css';
import Link from 'next/link';
import { Poppins, Rajdhani } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PHONE_DISPLAY, TEL, WA, FB, LOCATION } from '@/lib/data';

const display = Rajdhani({ subsets: ['latin'], weight: ['700'], variable: '--font-display' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: { default: 'BM Autostyling | Custom Car Interiors, Longford', template: '%s | BM Autostyling Longford' },
  description: 'Starlight headliners, ambient lighting, logo lights, dash trims and upholstery repair, built your way in Longford, Ireland.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'BM Autostyling', telephone: '+353851754470', areaServed: 'Longford, Ireland' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IE" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Cursor /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-ink px-5 py-12 text-sm text-white/60">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div><p className="h text-lg text-white">BM Autostyling</p><p className="mt-2">Custom car interiors, done your way. Based in {LOCATION}.</p></div>
            <div className="space-y-1"><Link href="/services" className="block hover:text-pink">Services</Link><Link href="/gallery" className="block hover:text-pink">Gallery</Link><Link href="/areas" className="block hover:text-pink">FAQ</Link><Link href="/contact" className="block hover:text-pink">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-pink">{PHONE_DISPLAY}</a><a href={WA} className="block hover:text-pink">WhatsApp</a><a href={FB} target="_blank" rel="noreferrer" className="block hover:text-pink">Facebook</a></div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
