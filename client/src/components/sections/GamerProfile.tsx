export default function GamerProfile() {
  return (
    <section className="py-20 bg-[#0f0f0f] border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-display font-black uppercase mb-8">
          🎮 About <span className="text-primary">AimXLoLYT</span>
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Professional BGMI content creator focused on intense rank pushes,
          insane clutches, and high-level gameplay. Bringing 80% BGMI content
          along with GTA 5 and other fun gaming experiences.
        </p>

        <div className="mt-10">
          <a
            href="mailto:vivekkumar23112019@zohomail.com"
            className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-lg font-bold shadow-[0_0_20px_rgba(255,0,60,0.6)]"
          >
            Contact for Business
          </a>
        </div>
      </div>
    </section>
  );
}