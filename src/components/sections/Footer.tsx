export default function Footer() {
  return (
    <footer className="border-t border-cyan/10 bg-ocean-deep py-12 px-6">
      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="font-display text-2xl text-cyan">مَوْج</span>
            <span className="text-xl font-bold text-pearl">Mawj</span>
          </div>
          <p className="text-sm text-pearl/60">Casablanca, Morocco</p>
        </div>
        <div className="flex gap-6 text-sm text-pearl/60">
          <a href="#" className="hover:text-cyan">Twitter</a>
          <a href="#" className="hover:text-cyan">Instagram</a>
          <a href="#" className="hover:text-cyan">LinkedIn</a>
        </div>
        <p className="text-xs text-pearl/40">© 2026 Mawj Digital Agency</p>
      </div>
    </footer>
  );
}
