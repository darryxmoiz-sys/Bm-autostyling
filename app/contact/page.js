import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, TEL, WA, FB, LOCATION } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Call, WhatsApp or message BM Autostyling for a free quote on your custom interior.' };

export default function Contact() {
  return (
    <>
      <PageHead title="Let's build something unique" text="Call, WhatsApp, or send us a message below." />
      <Sec tone="light">
        <a href={TEL} className="h block text-4xl text-pink transition hover:text-ink md:text-6xl">{PHONE_DISPLAY}</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-pink px-6 py-3 font-semibold text-white transition hover:bg-blue hover:text-ink">Call now</a>
          <a href={WA} className="rounded-sm border border-ink px-6 py-3 font-semibold transition hover:bg-ink hover:text-white">WhatsApp</a>
        </div>
      </Sec>
      <Sec tone="light" title="Send a message">
        <ContactForm />
      </Sec>
      <Sec title="Other details">
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="h text-lg">Facebook</h3><a href={FB} target="_blank" rel="noreferrer" className="mt-2 block text-white/70 hover:text-pink">BM Autostyling</a></Card>
          <Card><h3 className="h text-lg">Based in</h3><p className="mt-2 text-white/70">{LOCATION}</p></Card>
          <Card><h3 className="h text-lg">Vehicles</h3><p className="mt-2 text-white/70">Cars, vans and tractor cabs all welcome.</p></Card>
        </div>
      </Sec>
    </>
  );
}
