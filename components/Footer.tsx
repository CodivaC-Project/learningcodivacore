export default function Footer() {
  return (
    <footer className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <a href="#home" className="mb-4 block">
              <img src="/codivacode-logo.png" alt="CodivaCore" className="h-10 w-auto" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-dim">
              Expert-led training in Development, Brand Photoshoot, and
              Modelling. Online &amp; offline.
            </p>
          </div>

          {[
            {
              title: "Programs",
              links: ["Development", "Brand Photoshoot", "Modelling"],
            },
            {
              title: "Company",
              links: ["About", "Instructors", "Careers", "Blog"],
            },
            {
              title: "Support",
              links: ["Contact", "FAQ", "Terms", "Privacy"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-dim">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-10 border-line" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-dim">
            &copy; {new Date().getFullYear()} CodivaCore Learning. All rights
            reserved.
          </p>
          <div className="flex gap-5">
            {["TW", "IG", "FB", "LI"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-xs text-dim transition-colors hover:text-accent"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
