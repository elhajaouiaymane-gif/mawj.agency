export default function Stats() {
  const stats = [
    { value: "150+", label: "Projects" },
    { value: "98%", label: "Satisfaction" },
    { value: "12", label: "Countries" },
    { value: "25+", label: "Awards" },
  ];
  return (
    <section className="py-24 px-6 border-y border-cyan/10">
      <div className="mx-auto max-w-5xl grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-mono text-4xl font-bold text-cyan">{stat.value}</div>
            <div className="mt-2 text-sm text-pearl/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
