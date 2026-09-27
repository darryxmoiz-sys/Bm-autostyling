import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import Gallery from '@/components/Gallery';
import ReelEmbed from '@/components/ReelEmbed';
import CTA from '@/components/CTA';
import { photos, reels } from '@/lib/data';
export const metadata = { title: 'Gallery', description: 'Photos and reels of BM Autostyling work: starlight headliners, ambient lighting and interior restoration.' };

export default function GalleryPage() {
  return (
    <>
      <PageHead title="Our work" text="Real jobs, in photos and video. Tap a photo to enlarge it." />
      <Sec tone="light"><Gallery photos={photos} /></Sec>
      <Sec title="Reels" intro="A closer look at the finished work, straight from our Facebook page.">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {reels.map((url) => <ReelEmbed key={url} url={url} />)}
        </div>
      </Sec>
      <CTA />
    </>
  );
}
