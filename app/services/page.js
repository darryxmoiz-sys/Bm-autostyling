import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { services } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Starlight headliners, ambient lighting, logo lights, dash trims and upholstery repair in Longford.' };

export default function Services() {
  return (
    <>
      <PageHead title="Our services" text="Interior work built around your vision, for cars, vans and machinery." />
      <Sec tone="light">
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-ink/15 py-6 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl transition group-hover:translate-x-2 group-hover:text-pink md:text-2xl">{t}</h2>
            <p className="text-ink/70">{d}</p>
          </div>
        ))}
      </Sec>
      <Sec title="Not just cars">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="h text-lg">Vans and tractors too</h3><p className="mt-2 text-white/70">We have fitted starlight headliners inside John Deere tractor cabs, not just cars, so if you spend long hours in a cab, we can transform it too.</p></Card>
          <Card><h3 className="h text-lg">Restoration work</h3><p className="mt-2 text-white/70">Sun and heat damaged door cards and panels can be restored back to looking new.</p></Card>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
