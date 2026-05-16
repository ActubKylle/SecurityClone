import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const matterCards = [
  ["◴", "Faster Settlement", "Transactions clear in minutes, not days."],
  ["⌘", "Greater Transparency", "Ownership and transfers are recorded on a public ledger."],
  ["%", "Fractional Ownership", "Investors can buy smaller portions of assets, lowering barriers to entry."],
  ["♢", "Improved Liquidity", "Tokenized assets can be traded more easily, creating potential secondary markets."],
];

const steps = [
  ["01", "Asset Selection", "A real-world asset—such as a treasury fund or loan portfolio—is identified for tokenization."],
  ["02", "Digital Representation", "The asset is divided into digital tokens on a blockchain, each representing a proportional share of ownership."],
  ["03", "Investor Access", "Investors can purchase and hold these tokens through a regulated digital platform, just like buying shares."],
  ["04", "Blockchain Record", "Every transaction and ownership change is securely recorded, reducing the need for intermediaries."],
];

const futureCards = [
  ["◎", "Broader Access to\nPrivate Markets"],
  ["◷", "Real-Time Settlement and\nYield Distribution"],
  ["⌘", "A More Inclusive, Efficient\nGlobal Financial System"],
];

function IntroToTokenizationPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />

      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/assets/digital-reporting-hero.png"
          alt="Intro to Tokenization"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#081838]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-end px-5 pb-[100px] pt-[200px] md:px-10">
          <h1 className="font-serif text-[58px] font-normal leading-[0.9] tracking-[-0.055em] text-white md:text-[88px]">
            Intro to Tokenization
          </h1>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
            What is RWA
            <br />
            Tokenization
          </h2>

          <p className="mx-auto mt-10 max-w-[600px] text-[15px] leading-[1.45] text-[#040f29]">
            RWA Tokenization is changing how we invest. It&apos;s the process of turning real-world
            assets (RWAs) — like treasuries, private credit and equity funds, real estate, or even
            art—into digital tokens that live on a blockchain.
            <br />
            <br />
            These tokens represent ownership in the underlying asset, but unlike traditional
            paper-based systems, they&apos;re faster to trade, easier to manage, accessible 24/7,
            and composable for DeFi investment strategies.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="text-center">
            <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[64px]">
              Why RWA
              <br />
              Tokenization Matters
            </h2>
            <p className="mx-auto mt-5 mb-[60px] max-w-[600px] text-[15px] leading-[1.45]">
              Traditionally, investing in assets like private credit and equity funds was limited to
              large institutions. Tokenization opens the door for more investors to participate—democratizing
              access while bringing more transparency and efficiency to financial markets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-[30px] md:grid-cols-4">
            {matterCards.map(([icon, title, text]) => (
              <article key={title} className="min-h-[225px] bg-[#f3f7fc] p-4">
                <div className="mb-10 flex h-10 w-10 items-center justify-center bg-[#e4ebf4] text-[16px]">
                  {icon}
                </div>
                <h3 className="font-serif text-[25px] leading-[0.95] tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-4 text-[13px] leading-[1.45] text-black/70">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-20 md:grid-cols-2">
          <div>
            <p className="mb-10 text-[13px] font-medium text-[#4f74ab]">Diving Deeper</p>
            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              How It Works
            </h2>
            <p className="mt-10 max-w-[500px] text-[15px] leading-[1.5]">
              Traditionally, investing in assets like private credit and equity funds was limited to large institutions.
              <br />
              <br />
              Tokenization opens the door for more investors to participate — democratizing access while bringing
              more transparency and efficiency to financial markets.
            </p>
          </div>

          <div className="space-y-10">
            {steps.map(([num, title, text]) => (
              <article key={title} className="border-b border-[#d7dce3] pb-8">
                <p className="mb-5 text-[13px] text-[#040f29]">{num}</p>
                <h3 className="font-serif text-[30px] leading-none tracking-[-0.04em]">{title}</h3>
                <p className="mt-5 text-[15px] leading-[1.45]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-10 text-[13px] font-medium text-[#4f74ab]">Tokenization In Action</p>
          <h2 className="mb-20 font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
            A Real-World Example
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-white p-10">
              <h3 className="font-serif text-[25px] leading-[1.1] tracking-[-0.04em]">
                Imagine a $100 million fund that invests in U.S. Treasuries.
              </h3>
              <p className="mt-8 text-[15px] leading-[1.45]">
                Instead of requiring a $1 million minimum investment, the fund is tokenized — allowing
                investors to buy tokens worth $100 or $1,000.
              </p>
              <p className="mt-5 text-[15px] leading-[1.45]">
                You still hold a stake in the same underlying assets, but now it&apos;s:
              </p>

              <div className="mt-10 space-y-4">
                {["Easier to Invest", "Easier to Trade", "Easier to Track"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center bg-[#e9f0f9] text-[14px]">✓</span>
                    <span className="font-serif text-[24px] leading-none">{item}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="bg-white p-10">
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex-1">
                  <div className="font-serif text-[42px] leading-none">$1M</div>
                  <p className="mt-4 text-[13px]">Apollo Diversified Credit Fund</p>
                </div>
                <div className="flex h-8 w-8 items-center justify-center bg-[#e9f0f9]">→</div>
                <div className="flex-1">
                  <div className="font-serif text-[42px] leading-none">$50k</div>
                  <p className="mt-4 text-[13px]">
                    Securitize Tokenized Apollo Diversified Credit Fund (ACRED)
                  </p>
                </div>
              </div>

              <div className="mt-10 border-t border-[#d7dce3] pt-10">
                <div className="space-y-5 text-[15px] leading-[1.45]">
                  <p>
                    Take the Apollo Diversified Credit Fund, a diversified global credit strategy investing
                    across corporate direct lending, asset-backed lending, and performing, dislocated and structured credit.
                  </p>
                  <p>The minimum investment for the fund is typically $1M.</p>
                  <p>
                    However, by tokenizing the fund on the blockchain, the fund, known as the Securitize
                    Tokenized Apollo Diversified Credit Fund (ACRED), is available to accredited investors starting at $50k.
                  </p>
                  <p>
                    It&apos;s the same institutional-quality investment — just delivered through a modern,
                    more efficient infrastructure.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="h-[220px] overflow-hidden bg-gray-200 md:h-[500px]">
        <img
          src="/assets/intro-tokenization-banner.png"
          alt="Banner separator"
          className="h-full w-full object-cover"
        />
      </div>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <h2 className="font-serif text-[48px] leading-[0.92] tracking-[-0.055em] md:text-[66px]">
            The Future
            <br />
            Of Investing
          </h2>
          <p className="mx-auto mt-10 max-w-[700px] text-[15px] leading-[1.45] text-white/60">
            RWA tokenization represents a fundamental shift in how assets are owned, traded, and accessed.
            As this technology matures, it has the potential to:
          </p>

          <div className="mx-auto mt-10 grid max-w-[950px] grid-cols-1 md:grid-cols-3">
            {futureCards.map(([icon, title]) => (
              <article key={title} className="flex min-h-[170px] flex-col items-center justify-center gap-10 border border-[#212121] p-8">
                <div className="flex h-12 w-12 items-center justify-center bg-white/10">{icon}</div>
                <h3 className="whitespace-pre-line font-serif text-[22px] leading-[1.05] tracking-[-0.04em]">
                  {title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="relative min-h-[500px]">
            <div className="grid grid-cols-1 gap-20 px-5 lg:grid-cols-2">
              <div className="relative z-10">
                <p className="mb-10 text-[13px] font-medium text-[#4f74ab]">Legal</p>
                <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
                  Trust And
                  <br />
                  Regulation
                </h2>

                <div className="mt-10 max-w-[540px] space-y-7 text-[16px] leading-[1.5]">
                  <p>
                    Securitize is a fully regulated digital asset securities firm and SEC-registered transfer
                    agent. We are also a MiFID II investment firm passported across major EU countries,
                    operating as a Transfer Agent with primary-market capabilities, and running a fully
                    regulated DLT Pilot Regime Trading and Settlement System (TSS) for digital asset securities.
                  </p>
                  <p>
                    We partner with leading financial institutions — including Apollo, BlackRock, Hamilton Lane,
                    and KKR — to ensure every tokenized investment meets the highest standards of regulation
                    and investor protection.
                  </p>
                  <p>
                    Your investments are secure, transparent, and verifiable on the blockchain — all within a
                    trusted, regulated environment.
                  </p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-screen lg:block">
              <img
                src="/assets/map.png"
                alt="Global map"
                className="h-full w-[200%] object-contain object-left opacity-70"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default IntroToTokenizationPage;