export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-14"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="anim-glow absolute -right-48 -top-48 h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139,0,0,0.45) 0%, transparent 65%)",
          }}
        />
        <div className="anim-float absolute right-[12%] top-[20%] h-[320px] w-[320px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(224,32,32,0.25) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col justify-center lg:col-span-7">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-line-bright px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-dim">
              Training Platform
            </span>
          </div>

          <h1 className="font-display text-[clamp(2rem,5.5vw,4rem)] font-extrabold leading-[1.1] tracking-tight">
            Your Future in{" "}
            <span className="text-accent">Development</span>,
            <br />
            <span className="text-accent">Photoshoot</span>{" "}&{" "}
            <span className="text-accent">Modelling</span>
          </h1>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            Expert-led training that launches real careers. Learn online from anywhere
            or in-person at our studio. Your choice, your pace.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#courses"
              className="inline-flex items-center rounded-[8px] bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              Explore Courses
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-[8px] border border-line-bright bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:border-accent hover:bg-accent/5"
            >
              Learn More
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { stat: "500+", label: "Students Trained" },
              { stat: "96%", label: "Success Rate" },
              { stat: "4.9", label: "Average Rating" },
            ].map((s) => (
              <div key={s.stat}>
                <span className="font-display text-3xl font-extrabold sm:text-4xl">
                  {s.stat}
                </span>
                <p className="text-sm text-dim mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center lg:col-span-5">
          <div className="relative w-full max-w-sm rounded-card border border-line bg-card p-6 sm:p-8 shadow-[0_0_60px_rgba(224,32,32,0.1)]">
            <div className="flex items-center justify-between mb-5">
              <span className="font-mono text-xs font-medium text-dim">
                CodivaCore
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
            </div>

            <span className="font-display text-5xl font-extrabold sm:text-6xl">
              50+
            </span>
            <p className="mt-1 text-sm text-muted">
              Expert instructors worldwide
            </p>

            <hr className="my-5 border-line" />

            <span className="font-display text-5xl font-extrabold sm:text-6xl">
              3
            </span>
            <p className="mt-1 text-sm text-muted">
              Core disciplines
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {["Development", "Photoshoot", "Modelling"].map((d) => (
                <span
                  key={d}
                  className="rounded-full border border-line-bright px-3 py-1 font-mono text-[11px] text-muted"
                >
                  {d}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-6 flex w-full items-center justify-center rounded-[8px] bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-4 lg:flex">
        <span className="font-mono text-[10px] tracking-[0.15em] text-dim vertical-rl [writing-mode:vertical-rl]">
          SOCIAL
        </span>
        {["f", "ig", "x"].map((s) => (
          <a
            key={s}
            href="#"
            className="text-xs text-muted transition-colors hover:text-accent"
          >
            {s}
          </a>
        ))}
      </div>

      <div className="absolute bottom-8 right-6 hidden flex-col items-end gap-1 lg:flex">
        {["DEVELOPMENT", "PHOTOSHOOT", "MODELLING"].map((d) => (
          <span
            key={d}
            className="font-mono text-[10px] tracking-[0.15em] text-dim"
          >
            {d}
          </span>
        ))}
      </div>
    </section>
  );
}
