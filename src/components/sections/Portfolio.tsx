import Image from "next/image";

const projects = [
  { title: "Atlas Ventures", category: "Fintech", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&q=80" },
  { title: "Oasis Hotels", category: "Hospitality", image: "https://images.unsplash.com/photo-1566073771259-6a92545d43e3?w=600&h=500&q=80" },
  { title: "Sahara Energy", category: "Energy", image: "https://images.unsplash.com/photo-1466611653911-95285515e62f?w=600&h=700&q=80" },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow mb-12 text-cyan">Selected Work</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/5] relative bg-ocean-light">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean to-transparent">
                <p className="text-xs uppercase tracking-widest text-cyan font-mono">{project.category}</p>
                <h3 className="text-xl font-bold text-pearl">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
