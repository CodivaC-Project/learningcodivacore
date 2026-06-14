const courses = [
  {
    title: "Development",
    description:
      "Full-stack web & mobile development — from frontend to backend, APIs to deployment. Build real projects for your portfolio.",
    tags: ["Web Dev", "Mobile Apps", "APIs & Backend", "DevOps Basics"],
  },
  {
    title: "Brand Photoshoot",
    description:
      "Product, fashion, and brand photography. Lighting, composition, editing — and how to tell a visual story that sells.",
    tags: ["Product Photography", "Lighting", "Post-Production", "Brand Story"],
  },
  {
    title: "Modelling",
    description:
      "Runway, print, and commercial modelling. Posing, portfolio building, industry etiquette, and agency readiness.",
    tags: ["Runway Walk", "Portfolio Prep", "Posing", "Agency Readiness"],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="border-b border-line py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-line-bright px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-widest text-dim">
            Programs
          </span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-bold leading-tight tracking-tight">
              Three disciplines.
              <br />
              One standard.
            </h2>

            <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-muted">
              Every program is built around hands-on projects, mentorship,
              and real-world outcomes. Whether online or in-person, the
              curriculum is the same — rigorous, current, and taught by
              people who do this work every day.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-7">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="group relative rounded-card border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_rgba(224,32,32,0.1)] sm:p-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-full bg-accent/0 transition-colors duration-300 group-hover:bg-accent" />

                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-4">
                  <span className="font-display text-4xl font-bold leading-none text-accent/30 sm:text-5xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                      {course.title}
                    </h3>
                    <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
                      {course.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-line-bright px-3.5 py-1.5 font-mono text-[11px] text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:bg-accent/[0.04]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
