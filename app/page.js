import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ParallaxImg from '@/components/ParallaxImg';
import Sec, { Card, Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, WA, services, faqs, photos } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="bg-ink px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <Reveal delay={0.1}><p className="mb-3 font-semibold text-blue">Longford, Ireland</p></Reveal>
            <Reveal delay={0.25}><h1 className="h text-3xl sm:text-4xl md:text-5xl">Custom car interiors, <span className="glow-text">done your way.</span></h1></Reveal>
            <Reveal delay={0.4}><p className="mt-4 max-w-md text-lg text-white/70">Starlight headliners, ambient lighting, logo lights, dash trims and more. No limits, just creativity.</p></Reveal>
            <Reveal delay={0.55} className="mt-7 flex flex-wrap gap-3">
              <a href={TEL} className="rounded-sm bg-pink px-6 py-3 font-semibold text-white transition hover:bg-blue hover:text-ink">Call {PHONE_DISPLAY}</a>
              <a href={WA} className="rounded-sm border border-white/30 px-6 py-3 transition hover:border-blue hover:text-blue">WhatsApp us</a>
            </Reveal>
          </div>
          <ParallaxImg src="/gallery/p7.jpg" alt="Starlight headliner fitted by BM Autostyling" />
        </div>
      </section>

      <section className="text-white" style={{ background: 'linear-gradient(90deg,#1b6fa8,#a3227e)' }}>
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Cars, vans & tractors', 'Custom colours available', 'Free quotes', 'Longford based'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec tone="light" title="What we do" intro="From starlight skies to full interior restoration.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t} tone="light"><h3 className="h text-lg">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-pink hover:underline">See all services</Link>
      </Sec>

      <Sec title="Recent work" intro="Real jobs, from tractor cabs to saloon cars.">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[photos[1], photos[0], photos[5], photos[6]].map(([s, a]) => <img key={s} src={s} alt={a} loading="lazy" className="aspect-[3/4] w-full rounded-md object-cover" />)}
        </div>
        <Link href="/gallery" className="mt-8 inline-block font-semibold text-blue hover:underline">View the full gallery and reels</Link>
      </Sec>

      <Sec tone="light" title="Common questions">
        <Faq items={faqs.slice(0, 4)} />
        <Link href="/areas" className="mt-8 inline-block font-semibold text-pink hover:underline">More questions</Link>
      </Sec>
      <CTA />
    </>
  );
}
