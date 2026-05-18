import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ArrowIcon = () => (
  <svg viewBox="0 0 448 512" className="w-3 h-3 fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

// TODO: Fill with actual press article entries from your saved page
const articles = [
  {
    date: "2026",
    outlet: "Bloomberg",
    title: "Securitize and NYSE Partner on Tokenized Equities",
    href: "#",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2026",
    outlet: "Reuters",
    title: "BlackRock's BUIDL Reaches New Milestone on Securitize",
    href: "#",
    img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2026",
    outlet: "CoinDesk",
    title: "Inside Securitize's Path to a Public Listing",
    href: "#",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2026",
    outlet: "Financial Times",
    title: "Wall Street Embraces Tokenization",
    href: "#",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2026",
    outlet: "The Block",
    title: "Securitize Expands DS Protocol Integrations",
    href: "#",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    date: "2026",
    outlet: "WSJ",
    title: "Tokenized Treasuries Cross $5B Milestone",
    href: "#",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MediaCoveragePage() {
  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(8,24,56)" }} />
        <img
          src="/assets/header-image.png"
          alt="Securitize In the News"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-10 lg:pt-[200px] lg:pb-[100px] px-5 flex items-end">
          <div className="flex flex-col gap-3 md:gap-5">
            <span className="text-white/70 text-xs uppercase tracking-wide">Media Coverage</span>
<h1 className="font-editorial text-[80px] leading-[80px] text-white tracking-[-0.04em]">
                Securitize In the News
            </h1>
          </div>
        </div>
      </section>

      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#f3f7fc" }}
      >
        <div className="w-full max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((a, i) => (
              <a
                key={i}
                href={a.href}
                className="flex flex-col bg-white w-full overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full object-cover aspect-[1.77] border-b border-[#03060d]/20"
                />
                <div className="flex flex-col items-start justify-start p-5 lg:p-8 gap-5 lg:gap-6 flex-grow">
                  <p className="text-sm text-[#03060d] opacity-60">{a.outlet} · {a.date}</p>
                  <h3 className="font-serif text-base md:text-2xl line-clamp-3 text-[#03060d]">
                    {a.title}
                  </h3>
                  <span className="mt-auto text-sm font-semibold flex items-center text-[#03060d] opacity-80 gap-1 hover:underline">
                    Read Article <ArrowIcon />
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