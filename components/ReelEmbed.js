// Facebook blocks embedding for some reels (often licensed-music audio),
// showing its own "Unavailable" box. These are known to be blocked, so we
// show a clean fallback card that links out to the reel instead.
const BLOCKED = new Set([
  'https://www.facebook.com/reel/1763757448158478',
  'https://www.facebook.com/reel/1719069009397255',
]);

export default function ReelEmbed({ url }) {
  if (BLOCKED.has(url)) {
    return (
      <a href={url} target="_blank" rel="noreferrer"
        className="mx-auto flex aspect-[9/16] w-full max-w-[267px] flex-col items-center justify-center gap-3 rounded-md bg-panel p-6 text-center transition hover:opacity-90"
        style={{ border: '1px solid rgba(255,255,255,.12)' }}>
        <svg viewBox="0 0 24 24" className="h-10 w-10 fill-white/70"><path d="M8 5v14l11-7z" /></svg>
        <p className="text-sm font-semibold text-white">Watch this reel on Facebook</p>
        <p className="text-xs text-white/50">Opens in a new tab</p>
      </a>
    );
  }
  const src = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(url)}&show_text=false&width=267&t=0`;
  return (
    <div className="mx-auto aspect-[9/16] w-full max-w-[267px] overflow-hidden rounded-md bg-panel">
      <iframe src={src} width="267" height="476" style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
        loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen title="BM Autostyling reel" />
    </div>
  );
}
