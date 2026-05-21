export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-ocean-light/20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-8 text-cyan">Get in Touch</p>
        <h2 className="font-display text-4xl font-bold text-pearl mb-8">Let's Create Something Amazing</h2>
        <form className="space-y-6 text-left">
          <div className="grid gap-6 sm:grid-cols-2">
            <input type="text" placeholder="Name" className="w-full rounded-xl border border-cyan/10 bg-ocean px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none" />
            <input type="email" placeholder="Email" className="w-full rounded-xl border border-cyan/10 bg-ocean px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none" />
          </div>
          <textarea rows={5} placeholder="Project Details" className="w-full rounded-xl border border-cyan/10 bg-ocean px-4 py-3 text-pearl placeholder:text-pearl/30 focus:border-cyan/50 focus:outline-none resize-none" />
          <button type="submit" className="w-full rounded-full bg-cyan py-4 text-sm font-semibold text-ocean hover:bg-cyan/90">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
