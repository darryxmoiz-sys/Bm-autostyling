import Checker from './Checker';
export default function PageHead({ title, text }) {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-16">
        <h1 className="h text-3xl md:text-5xl"><span className="glow-text">{title}</span></h1>
        <p className="mt-4 max-w-xl text-white/70">{text}</p>
      </div>
      <Checker />
    </section>
  );
}
