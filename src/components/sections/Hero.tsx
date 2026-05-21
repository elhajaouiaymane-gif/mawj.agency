export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[100dvh] w-full items-center justify-center bg-ocean px-4 text-center">
      <div className="z-10 max-w-4xl">
        <p className="eyebrow mb-4 text-cyan">Casablanca → Global</p>
        <h1 className="font-display text-5xl font-bold leading-tight text-pearl sm:text-7xl md:text-8xl">
          We craft digital <span className="text-cyan">waves</span> that move the world.
        </h1>
        <p className="mt-6 text-lg text-pearl/70 sm:text-xl">
          Award-winning web design & development studio based in Morocco.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a href="#work" className="rounded-full bg-gold px-8 py-4 text-sm font-semibold text-ocean hover:bg-gold/90">
            View Our Work
          </a>
          <a href="#contact" className="rounded-full border border-cyan/30 px-8 py-4 text-sm font-semibold text-cyan hover:bg-cyan/10">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
