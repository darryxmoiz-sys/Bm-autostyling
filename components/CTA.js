import { PHONE_DISPLAY, TEL, WA } from '@/lib/data';
export default function CTA() {
  return (
    <section className="px-5 py-14 text-white" style={{ background: 'linear-gradient(90deg, #1b6fa8, #a3227e)' }}>
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 md:flex-row md:items-center">
        <div><h2 className="h text-2xl md:text-3xl">Let's build something unique.</h2><p className="mt-2 text-white/85">Message us for a free quote.</p></div>
        <div className="flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-white px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-white">Call {PHONE_DISPLAY}</a>
          <a href={WA} className="rounded-sm border border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-pink">WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
