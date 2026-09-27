export default function Sec({ tone = 'dark', title, intro, id, children }) {
  const dark = tone === 'dark';
  return (
    <section id={id} className={`${dark ? 'bg-ink text-white' : 'bg-paper text-ink'} px-5 py-16 md:py-20`}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-8 max-w-2xl">
            <h2 className="h text-2xl md:text-3xl">{title}</h2>
            {intro && <p className={`mt-3 ${dark ? 'text-white/70' : 'text-ink/70'}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Card({ tone = 'dark', className = '', children }) {
  return <div className={`rounded-md border-t-4 border-pink p-6 ${tone === 'dark' ? 'bg-panel' : 'bg-white shadow-sm'} ${className}`}>{children}</div>;
}

export function Faq({ items, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className={`max-w-3xl border-t ${dark ? 'border-white/15' : 'border-ink/15'}`}>
      {items.map(([q, a]) => (
        <details key={q} className={`group border-b ${dark ? 'border-white/15' : 'border-ink/15'}`}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold">{q}<span className="text-xl text-pink transition group-open:rotate-45">+</span></summary>
          <p className={`pb-5 ${dark ? 'text-white/70' : 'text-ink/70'}`}>{a}</p>
        </details>
      ))}
    </div>
  );
}
