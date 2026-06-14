export default function SplitCards() {
  return (
    <section className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
        <div className="rounded-card border border-line bg-card p-6 sm:p-8 flex flex-col">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 px-3 py-1 w-fit">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[10px] text-accent">
              Available worldwide
            </span>
          </div>

          <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
            Learn from{" "}
            <span className="text-accent">anywhere</span>
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            Join live online sessions or attend in-person workshops at our
            studio. Same world-class curriculum, your choice of setting.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex items-center rounded-[8px] border border-line-bright bg-transparent px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:border-accent hover:bg-accent/5 w-fit"
          >
            View Programs
          </a>
        </div>

        <div className="rounded-card border border-line bg-card p-6 sm:p-8 flex flex-col">
          <p className="text-sm leading-relaxed text-muted">
            Trusted by 120+ students across 12 countries &middot; launching
            careers from classroom to industry in 8&ndash;12 weeks.
          </p>

          <div className="mt-3 flex gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-lg text-yellow-500">
                &#9733;
              </span>
            ))}
          </div>

          <span className="font-display mt-4 text-7xl font-extrabold text-white sm:text-8xl leading-none">
            120+
          </span>

          <hr className="my-6 border-line" />

          <div className="flex items-start gap-4">
            <div className="h-[72px] w-[72px] shrink-0 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30">
              <span className="text-xl font-bold text-accent">A</span>
            </div>
            <div>
              <p className="text-2xl leading-none text-muted mb-1 font-serif">
                &ldquo;
              </p>
              <p className="text-sm leading-relaxed text-muted italic">
                CodivaCore didn&apos;t just teach me skills — they gave me the
                confidence to walk into my first shoot and own the room.
              </p>
              <p className="mt-3 text-sm font-medium text-white">
                Ananya Sharma
              </p>
              <p className="text-xs text-dim">
                Brand Photoshoot Graduate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
