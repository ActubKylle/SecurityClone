    import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const whitepapers = [
  {
    date: "July 2025",
    title: "Trusted Single Source Oracle (TSSO)",
    desc:
      "This whitepaper introduces a breakthrough solution for securely verifying Net Asset Value (NAV) data from a single source—typically a fund administrator—for use in DeFi. Unlike traditional oracles that rely on multiple price feeds, TSSO uses cryptographic chains and dual-key signing to ensure the authenticity, freshness, and integrity of NAV data for private, non-traded assets.\n\nReaders will gain insight into a novel architecture that enables secure DeFi integration of traditionally opaque financial instruments.",
    image: "/assets/whitepaper-tsso.png",
  },
  {
    date: "June 2018",
    title: "DS Protocol",
    desc:
      "The DS Protocol by Securitize is a blockchain-based framework for the regulated issuance, management, and trading of digital securities and tokenized assets. It integrates ERC-20 compatible security tokens, smart contract-based DS Apps, and onchain services for identity, regulation, and communication.\n\nBuilt for issuers, investors, and exchanges, the protocol enables scalable, secure, and regulation-ready digital asset operations.",
    image: "/assets/whitepaper-ds-protocol.png",
  },
];

const research = [
  {
    date: "April 2026",
    title: "From Wrappers to Venues. Unlocked by Securitize.",
    image: "/assets/research-wrappers.png",
    button: "Read the Research",
  },
  {
    date: "March 2026",
    title: "The $400T Future of Tokenised Assets.",
    image: "/assets/research-400t.png",
    button: "Download PDF",
  },
  {
    date: "September 2025",
    title: "Wall Street Needs a Blockchain. That Blockchain is Ethereum.",
    image: "/assets/research-ethereum.png",
    button: "Download PDF",
  },
];

function WhitepapersResearchPage() {
  return (
    <main className="min-h-screen bg-[#f3f7fc] text-black">
      <Navbar />

      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/assets/digital-reporting-hero.png"
          alt="Whitepapers & Research"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#081838]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-end justify-center px-5 pb-[100px] pt-[200px] text-center md:px-10">
          <div>
            <h1 className="font-serif text-[54px] font-normal leading-[0.9] tracking-[-0.055em] text-white md:text-[82px]">
              Whitepapers & Research
            </h1>
            <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.5] text-white/80">
              In-depth analysis and thought leadership on building the future of finance.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="mx-auto flex max-w-[800px] flex-col gap-6">
            <p className="text-[14px] font-medium capitalize tracking-tight text-[#4f74ab]">
              Whitepapers
            </p>

            {whitepapers.map((item, index) => (
              <article
                key={item.title}
                className={`grid overflow-hidden bg-white md:grid-cols-[1.05fr_.95fr] ${
                  index > 0 ? "mt-6" : ""
                }`}
              >
                <div className="flex flex-col justify-between p-8 md:p-10">
                  <div>
                    <p className="mb-6 text-[14px] font-medium text-[#4f74ab]">
                      {item.date}
                    </p>
                    <h2 className="font-serif text-[42px] leading-[0.95] tracking-[-0.055em] md:text-[58px]">
                      {item.title}
                    </h2>
                    <p className="mt-8 whitespace-pre-line text-[15px] leading-[1.5] text-black/70">
                      {item.desc}
                    </p>
                  </div>

                  <a href="#" className="mt-10 w-fit">
                    <button className="group rounded-full bg-[#03060d] px-5 py-2 text-[14px] font-medium text-white hover:bg-[#03060d]/80">
                      Download PDF{" "}
                      <span className="inline-block transition-transform group-hover:translate-y-0.5">
                        ↓
                      </span>
                    </button>
                  </a>
                </div>

                <div className="relative min-h-[360px] overflow-hidden bg-[#03060d]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}

            <p className="mt-12 text-[14px] font-medium capitalize tracking-tight text-[#4f74ab]">
              Research Reports
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {research.map((item) => (
                <article key={item.title} className="bg-white">
                  <div className="h-[250px] overflow-hidden bg-[#dfe7f1]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-h-[280px] flex-col p-8">
                    <p className="mb-6 text-[14px] font-medium text-[#4f74ab]">
                      {item.date}
                    </p>

                    <h3 className="font-serif text-[30px] leading-[1] tracking-[-0.05em]">
                      {item.title}
                    </h3>

                    <a href="#" className="mt-auto pt-10">
                      <button className="group rounded-full bg-[#03060d] px-5 py-2 text-[14px] font-medium text-white hover:bg-[#03060d]/80">
                        {item.button}{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1">
                          →
                        </span>
                      </button>
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <article className="mt-6 grid overflow-hidden bg-white md:grid-cols-[1fr_.9fr]">
              <div className="min-h-[360px] overflow-hidden bg-[#dfe7f1]">
                <img
                  src="/assets/research-infrastructure.png"
                  alt="The Infrastructure of Tokenized Securities"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className="mb-6 text-[14px] font-medium text-[#4f74ab]">
                  September 2025
                </p>

                <h3 className="font-serif text-[38px] leading-[0.98] tracking-[-0.055em] md:text-[50px]">
                  The Infrastructure of Tokenized Securities: How Securitize Powers the RWA Market
                </h3>

                <div className="mt-10 flex flex-wrap gap-3">
                  <button className="rounded-full bg-[#03060d] px-5 py-2 text-[14px] font-medium text-white">
                    English Version →
                  </button>
                  <button className="rounded-full border border-black/30 px-5 py-2 text-[14px] font-medium text-black hover:bg-black/5">
                    Korean Version →
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default WhitepapersResearchPage;