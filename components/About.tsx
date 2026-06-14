export default function About() {
  return (
    <section id="about" className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-4 md:pt-1">
          <div className="flex items-center gap-2 text-sm font-medium text-white/60">
            <span className="text-accent">&larr;</span>
            <span>About Us</span>
          </div>
        </div>

        <div className="md:col-span-8">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-tight">
            We <span className="text-accent">train</span> and{" "}
            <span className="text-accent">mentor</span> with people at the
            core — ensuring every{" "}
            <span className="text-accent">learner thrives</span> in their
            chosen craft.
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            CodivaCore Learning bridges the gap between passion and profession.
            Whether you&apos;re shipping your first app, directing a brand
            photoshoot, or walking the runway — our industry mentors give
            you the real-world skills that actually matter.
          </p>
        </div>
      </div>
    </section>
  );
}
