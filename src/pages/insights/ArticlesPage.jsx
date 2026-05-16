import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const ArrowIcon = () => (
  <svg viewBox="0 0 448 512" className="w-3 h-3 fill-current">
    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
  </svg>
);

const featured = {
  date: "4/15/2026",
  title: "Build Your Own dApp on Securitize Tokenized Assets in a Weekend",
  img: "/assets/insights/articles/build-dapp.jpg",
  href: "https://securitize.io/learn/blog/securitize-dapp-tokenized-assets-guide",
};

const articles = [
  {
    date: "3/23/2026",
    title:
      "The Agentic Future of Tokenization: From Securitize Vault Registrar to Autonomous Asset Managers",
    img: "/assets/insights/articles/agentic-future.jpg",
    href: "https://securitize.io/learn/blog/The-Agentic-Future-of-Tokenization-From-Securitize-Vault-Registrar-to-Autonomous-Asset-Managers",
  },
  {
    date: "3/19/2026",
    title: "Understanding the Delay in Private Equity Fund Tax Returns",
    img: "/assets/insights/articles/pe-tax-returns.jpg",
    href: "https://securitize.io/learn/blog/Understanding-the-Delay-in-Private-Equity-Fund-Tax-Returns",
  },
  {
    date: "2/19/2026",
    title: "An Open Door to Curated Lending: Euler Integrates the DS Protocol",
    img: "/assets/insights/articles/euler-ds-protocol.jpg",
    href: "https://securitize.io/learn/blog/euler-integrates-ds-protocol-curated-lending",
  },
  {
    date: "2/12/2026",
    title:
      "Securitize Launches Integration with UniswapX Technology to Bring Regulated Tokenized Assets into DeFi Trading",
    img: "/assets/insights/articles/uniswapx.jpg",
    href: "https://securitize.io/learn/blog/securitize-uniswapx-integration-tokenized-assets-defi-trading",
  },
  {
    date: "2/10/2026",
    title:
      "Vault Registrar: Bringing “Smart Escrow” and One-Click Looping to Regulated RWAs",
    img: "/assets/insights/articles/vault-registrar.jpg",
    href: "https://securitize.io/learn/blog/Vault-Registrar-Bringing-Smart-Escrow-and-One-Click-Looping-to-Regulated-RWAs",
  },
  {
    date: "2/5/2026",
    title:
      "Digital Competitiveness and the MISP: Timing Is What Matters - Why the EU Must Act Now on the DLT Pilot Regime",
    img: "/assets/insights/articles/eu-dlt.jpg",
    href: "https://securitize.io/learn/blog/Why-the-EU-Must-Act-Now-on-the-DLT-Pilot-Regime",
  },
];

export default function ArticlesPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgb(8,24,56)" }}
        />
        <img
          src="/assets/insights/header-image-01.png"
          alt="Articles"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-[40px] lg:pt-[200px] lg:pb-[100px] px-5 flex items-end">
          <h1 className="font-serif text-white font-normal text-5xl lg:text-7xl">
            Articles
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#f3f7fc" }}
      >
        <div className="w-full max-w-[1160px] mx-auto">
          {/* Featured */}
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
                Read More <ArrowIcon />
              </span>
            </div>
          </a>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {articles.map((a) => (
              <a
                key={a.href}
                href={a.href}
                className="flex flex-col bg-white w-full overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full object-cover aspect-[1.77] border-b border-[#03060d]/20"
                />
                <div className="flex flex-col items-start justify-start p-5 lg:p-8 gap-5 lg:gap-6 flex-grow">
                  <p className="text-sm text-[#03060d] opacity-60">{a.date}</p>
                  <h3 className="font-serif text-base md:text-2xl line-clamp-3 text-[#03060d]">
                    {a.title}
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
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}