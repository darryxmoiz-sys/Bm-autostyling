'use client';
import { useEffect, useState } from 'react';
export default function Gallery({ photos }) {
  const [i, setI] = useState(null);
  const n = photos.length;
  useEffect(() => {
    if (i === null) return;
    const k = (e) => { if (e.key === 'Escape') setI(null); if (e.key === 'ArrowRight') setI((i + 1) % n); if (e.key === 'ArrowLeft') setI((i + n - 1) % n); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [i, n]);
  return (
    <>
      <div className="columns-2 gap-3 md:columns-3">
        {photos.map(([src, alt], k) => (
          <button key={src} onClick={() => setI(k)} className="group mb-3 block w-full overflow-hidden rounded-md" aria-label={`Enlarge: ${alt}`}>
            <img src={src} alt={alt} loading="lazy" className="w-full transition duration-500 group-hover:scale-105" />
          </button>
        ))}
      </div>
      {i !== null && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/90 p-4" onClick={() => setI(null)} role="dialog" aria-label="Photo viewer">
          <img src={photos[i][0]} alt={photos[i][1]} className="max-h-[85vh] max-w-full rounded-md" onClick={(e) => e.stopPropagation()} />
          <button className="absolute right-4 top-4 rounded-sm bg-white px-4 py-2 text-ink" onClick={() => setI(null)}>Close</button>
          <button className="absolute left-3 top-1/2 rounded-sm bg-white/90 px-3 py-2 text-ink" onClick={(e) => { e.stopPropagation(); setI((i + n - 1) % n); }} aria-label="Previous">&lsaquo;</button>
          <button className="absolute right-3 top-1/2 rounded-sm bg-white/90 px-3 py-2 text-ink" onClick={(e) => { e.stopPropagation(); setI((i + 1) % n); }} aria-label="Next">&rsaquo;</button>
        </div>
      )}
    </>
  );
}
