import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { LOCATION } from '@/lib/data';
export const metadata = { title: 'About', description: 'BM Autostyling is a custom car interior specialist based in Longford, Ireland.' };

const values = [['No limits', 'Custom builds shaped around your vision, not a fixed menu.'], ['Every vehicle', 'Cars, vans and even tractor cabs have all had the BM Autostyling treatment.'], ['Real craftsmanship', 'From starlight skies to full panel restoration.']];

export default function About() {
  return (
    <>
      <PageHead title="About BM Autostyling" text="Custom car interiors, done your way." />
      <Sec tone="light">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-lg text-ink/75">
            <h2 className="h text-2xl text-ink md:text-3xl">Built on creativity</h2>
            <p>BM Autostyling brings interior visions to life: starlight headliners, upholstery, ambient lights, logo lights, dash trims and more. Based in {LOCATION}, no two jobs look the same.</p>
            <p>The work does not stop at cars. Starlight headliners have been fitted inside tractor cabs as well as saloons, hatchbacks and SUVs.</p>
          </div>
          <img src="/gallery/p3.jpg" alt="BM Autostyling workshop wall with customer plates" loading="lazy" className="aspect-[4/5] w-full max-w-sm rounded-md object-cover" />
        </div>
      </Sec>
      <Sec title="What we stand for">
        <div className="grid gap-4 md:grid-cols-3">{values.map(([t, d]) => <Card key={t}><h3 className="h text-lg">{t}</h3><p className="mt-2 text-white/70">{d}</p></Card>)}</div>
      </Sec>
      <CTA />
    </>
  );
}
