const brands = [
  "TechCorp",
  "PixelStudio",
  "VogueLearn",
  "DevMaster",
  "LensCraft",
  "ModelPro",
  "TechCorp",
  "PixelStudio",
  "VogueLearn",
  "DevMaster",
  "LensCraft",
  "ModelPro",
];

export default function Marquee() {
  return (
    <section className="border-b border-line py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-sm text-muted">
          Trusted by 100+ top-tier brands &amp; agencies.
        </p>

        <div className="relative overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-16">
            {brands.map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-sm font-medium tracking-[0.15em] uppercase text-dim/60 select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
