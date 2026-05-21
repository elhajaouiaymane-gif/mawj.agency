import { Code, Palette, Smartphone, TrendingUp, Zap, Globe } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Next.js, React, fullstack." },
  { icon: Palette, title: "UI/UX Design", desc: "Pixel-perfect interfaces." },
  { icon: Smartphone, title: "Mobile Apps", desc: "React Native solutions." },
  { icon: TrendingUp, title: "Digital Marketing", desc: "Data-driven growth." },
  { icon: Zap, title: "Performance", desc: "Speed optimization." },
  { icon: Globe, title: "Branding", desc: "Brand identity strategy." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-ocean-light/20">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-12 text-cyan">Our Services</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-2xl border border-cyan/10 p-8 hover:border-cyan/30 transition-colors">
              <service.icon className="mb-4 h-10 w-10 text-cyan" />
              <h3 className="mb-2 text-xl font-semibold text-pearl">{service.title}</h3>
              <p className="text-pearl/60">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
