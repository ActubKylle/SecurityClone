const logos = [
  "VanEck",
  "BlackRock",
  "Apollo",
  "KKR",
  "Hamilton Lane",
  "BNY",
  "Morgan Stanley",
  "Blockchain Capital",
  "Science Blockchain",
  "ARCA",
  "Frictionless Capital",
  "Bitwise",
];

function TrustedInstitutions() {
  return (
    <section className="bg-[#f3f7fc] py-20 md:py-[120px] px-5 md:px-10 overflow-hidden">
      <div className="max-w-[1160px] mx-auto">
        <p className="text-center text-sm font-medium text-[#24507a] mb-10">
          Trusted By Leading Institutions
        </p>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#f3f7fc] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#f3f7fc] to-transparent" />

          <div className="trusted-marquee flex w-max items-center gap-12 md:gap-14">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex h-6 min-w-max items-center justify-center text-xl md:text-2xl font-semibold tracking-tight text-black"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedInstitutions;