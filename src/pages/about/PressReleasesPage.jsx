import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ArrowIcon = () => (
  <svg viewBox="0 0 448 512" className="w-3 h-3 fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

// TODO: Replace with actual press releases from your saved page
const releases = [
  { date: "3/26/2026", title: "Securitize Announces Partnership with NYSE", img: "/assets/about/press/placeholder.jpg", href: "#" },
  { date: "3/15/2026", title: "Securitize to Combine with Cantor Equity Partners II", img: "/assets/about/press/placeholder.jpg", href: "#" },
  { date: "3/1/2026", title: "Vault Registrar General Availability Announced", img: "/assets/about/press/placeholder.jpg", href: "#" },
  { date: "2/19/2026", title: "Euler Integrates Securitize DS Protocol", img: "/assets/about/press/placeholder.jpg", href: "#" },
  { date: "2/12/2026", title: "Securitize Integrates UniswapX Technology", img: "/assets/about/press/placeholder.jpg", href: "#" },
  { date: "2/5/2026", title: "Securitize Comments on EU DLT Pilot Regime", img: "/assets/about/press/placeholder.jpg", href: "#" },
];

export default function PressReleasesPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(8,24,56)" }} />
        <img
          src="/assets/header-image.png"
          alt="Company Announcements"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-10 lg:pt-[200px] lg:pb-[100px] px-5 flex items-end">
          <div className="flex flex-col gap-3 md:gap-5">
            <span className="text-white/70 text-xs uppercase tracking-wide">Press Release</span>
            <h1 className="font-serif text-white text-5xl lg:text-7xl font-normal">
              Company Announcements
            </h1>
            <p className="text-white/70 text-xs">
              To get in touch with our press team, please contact{" "}
              <a href="mailto:press@securitize.io" className="underline">press@securitize.io</a>
            </p>
          </div>
        </div>
      </section>

      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#f3f7fc" }}
      >
        <div className="w-full max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {releases.map((r, i) => (
              <a
                key={i}
                href={r.href}
                className="flex flex-col bg-white w-full overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full object-cover aspect-[1.77] border-b border-[#03060d]/20"
                />
                <div className="flex flex-col items-start justify-start p-5 lg:p-8 gap-5 lg:gap-6 flex-grow">
                  <p className="text-sm text-[#03060d] opacity-60">{r.date}</p>
                  <h3 className="font-serif text-base md:text-2xl line-clamp-3 text-[#03060d]">
                    {r.title}
                  </h3>
                  <span className="mt-auto text-sm font-semibold flex items-center text-[#03060d] opacity-80 gap-1 hover:underline">
                    Read More <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="py-2 px-5 rounded-full text-sm bg-[#03060d] text-white hover:bg-[#03060d]/80 transition-colors">
              Load More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}