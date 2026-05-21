export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$2,500", desc: "Single-page website" },
    { name: "Professional", price: "$7,500", desc: "Multi-page website" },
    { name: "Enterprise", price: "Custom", desc: "Large-scale projects" },
  ];
  return (
    <section className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-12 text-cyan">Pricing</p>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="rounded-2xl border border-cyan/10 p-8 hover:border-cyan/30 transition-colors">
              <h3 className="text-xl font-semibold text-pearl">{plan.name}</h3>
              <div className="my-4 font-mono text-3xl font-bold text-cyan">{plan.price}</div>
              <p className="text-pearl/60">{plan.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
