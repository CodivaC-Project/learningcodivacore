"use client";

export default function Contact() {
  return (
    <section id="contact" className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-line-bright px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-dim">
                Get in Touch
              </span>
            </div>

            <h2 className="font-display text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight tracking-tight">
              Ready to start
              <br />
              your{" "}
              <span className="text-accent">journey</span>?
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
              Whether you prefer online or in-person, we&apos;ll help you find
              the right path. Drop us a message and we&apos;ll get back to you
              within 24 hours.
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-[8px] border border-line bg-card px-4 py-3 text-sm text-white placeholder-dim outline-none transition-colors focus:border-accent"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-[8px] border border-line bg-card px-4 py-3 text-sm text-white placeholder-dim outline-none transition-colors focus:border-accent"
              />
            </div>

            <select className="w-full rounded-[8px] border border-line bg-card px-4 py-3 text-sm text-muted outline-none transition-colors focus:border-accent">
              <option value="">Select a program</option>
              <option value="development">Development</option>
              <option value="photoshoot">Brand Photoshoot</option>
              <option value="modelling">Modelling</option>
            </select>

            <fieldset>
              <legend className="text-sm text-dim mb-3">
                Learning preference
              </legend>
              <div className="flex gap-6">
                {["Online", "Offline", "Both"].map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 text-sm text-muted cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="mode"
                      defaultChecked={opt === "Both"}
                      className="h-4 w-4 accent-accent border-line-bright bg-card"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </fieldset>

            <textarea
              rows={4}
              placeholder="Tell us about your goals..."
              className="w-full rounded-[8px] border border-line bg-card px-4 py-3 text-sm text-white placeholder-dim outline-none transition-colors focus:border-accent resize-y"
            />

            <button
              type="submit"
              className="inline-flex items-center rounded-[8px] bg-accent px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.97]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
