import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ArrowIcon = () => (
  <svg viewBox="0 0 448 512" className="w-3 h-3 fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const featured = {
  date: "4/28/2026",
  title: "Strategy’s STRC Dividend Move and Tokenizing the $70T U.S. Equity Market",
  img: "/assets/insights/videos/strc-dividend.jpg",
  href: "https://securitize.io/insights/videos/Dividend-move-and-tokenizing-the-70t",
};

const videos = [
  {
    date: "4/7/2026",
    title: "The Largest Securities Exchange in the World is Coming Onchain",
    img: "/assets/insights/videos/largest-exchange-onchain.jpg",
    href: "https://securitize.io/insights/videos/worlds-largest-securities-exchange-onchain",
  },
  {
    date: "4/3/2026",
    title: "Tokenization Meets Wall Street",
    img: "/assets/insights/videos/tokenization-wall-street.jpg",
    href: "https://securitize.io/insights/videos/Tokenization-Meets-Wal-Street-Securitize",
  },
  {
    date: "4/2/2026",
    title: "How Securitize is working with NYSE to bring equities onchain",
    img: "/assets/insights/videos/nyse-equities-onchain.jpg",
    href: "https://securitize.io/insights/videos/bringing-equities-onchain-securitize-nyse",
  },
  {
    date: "3/26/2026",
    title: "NYSE and Securitize Partner to Advance Tokenized Securities Markets",
    img: "/assets/insights/videos/nyse-partnership.jpg",
    href: "https://securitize.io/insights/videos/NYSE-and-Securitize-Partner-to-Advance-Tokenized-Securities-Markets",
  },
  {
    date: "3/11/2026",
    title: "Carlos Domingo Explains New Federal Guidance for Tokenized Securities",
    img: "/assets/insights/videos/carlos-federal-guidance.jpg",
    href: "https://securitize.io/insights/videos/carlos-domingo-federal-guidance-tokenized-securities",
  },
  {
    date: "3/4/2026",
    title: "The Future of Finance: Exploring Tokenization with Carlos Domingo",
    img: "/assets/insights/videos/future-of-finance.jpg",
    href: "https://securitize.io/insights/videos/the-future-of-finance-exploring-tokenization-with-carlos-domingo",
  },
];

export default function VideosPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgb(8,24,56)" }}
        />
        <img
          src="/assets/header-image.png"
          alt="Videos"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-[40px] lg:pt-[200px] lg:pb-[100px] px-5 flex items-end">
          <h1 className="font-serif text-white font-normal text-5xl lg:text-7xl">
            Videos
          </h1>
        </div>
      </section>

      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#f3f7fc" }}
      >
        <div className="w-full max-w-[1160px] mx-auto">
          <a
            href={featured.href}
            className="flex flex-col md:flex-row bg-white w-full overflow-hidden shadow-sm hover:shadow-md transition-shadow mb-5 md:gap-10"
          >
            <div className="md:flex-[1.1]">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full object-cover aspect-[1.77] border-b border-[#03060d]/20"
              />
            </div>
            <div className="flex flex-col items-start justify-start p-5 lg:p-10 gap-5 lg:gap-6 flex-grow md:flex-[0.9]">
              <p className="text-sm text-[#03060d] opacity-60">{featured.date}</p>
              <h2 className="font-serif text-2xl md:text-3xl line-clamp-3 text-[#03060d]">
                {featured.title}
              </h2>
              <span className="text-sm font-semibold flex items-center text-[#03060d] opacity-80 gap-1 hover:underline">
                Watch Video <ArrowIcon />
              </span>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {videos.map((v) => (
              <a
                key={v.href}
                href={v.href}
                className="flex flex-col bg-white w-full overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={v.img}
                  alt={v.title}
                  className="w-full object-cover aspect-[1.77] border-b border-[#03060d]/20"
                />
                <div className="flex flex-col items-start justify-start p-5 lg:p-8 gap-5 lg:gap-6 flex-grow">
                  <p className="text-sm text-[#03060d] opacity-60">{v.date}</p>
                  <h3 className="font-serif text-base md:text-2xl line-clamp-3 text-[#03060d]">
                    {v.title}
                  </h3>
                  <span className="mt-auto text-sm font-semibold flex items-center text-[#03060d] opacity-80 gap-1 hover:underline">
                    Watch Video <ArrowIcon />
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="py-2 px-5 rounded-full text-sm bg-[#03060d] text-white hover:bg-[#03060d]/80 transition-colors">
              Load More Videos
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}