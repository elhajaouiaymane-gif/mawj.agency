export default function ProcessTimeline() {
  const steps = ["Discovery", "Strategy", "Design", "Development", "Launch", "Growth"];
  return (
    <section id="process" className="py-32 px-6 bg-ocean-light/20">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-12 text-cyan">Our Process</p>
        <div className="space-y-8">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/30 text-cyan font-mono font-bold">
                {i + 1}
              </div>
              <div className="flex-1 rounded-xl border border-cyan/10 bg-ocean p-6">
                <h3 className="text-2xl font-semibold text-pearl">{step}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
