import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const apiCards = [
  {
    icon: "⌁",
    title: "Issuer API",
    text: "Create and manage digital securities, investors, compliance workflows, and lifecycle events through a regulated API layer.",
  },
  {
    icon: "▣",
    title: "Investor API",
    text: "Support investor onboarding, account creation, identity verification, wallet linking, and ownership records.",
  },
  {
    icon: "◎",
    title: "Transfer API",
    text: "Enable compliant transfers, token movements, whitelisting, and transaction controls across digital asset workflows.",
  },
  {
    icon: "▤",
    title: "Reporting API",
    text: "Access portfolio, investor, transaction, and compliance reporting data for operational visibility.",
  },
  {
    icon: "◇",
    title: "Wallet API",
    text: "Connect digital wallets and blockchain addresses to investor accounts while maintaining compliance controls.",
  },
  {
    icon: "↗",
    title: "Web3 Integrations",
    text: "Build applications that connect tokenized real-world assets with programmable Web3 infrastructure.",
  },
];

function APIsPage() {
  return (
    <main className="min-h-screen bg-[#e9f0f9] text-black">
      <Navbar />

      <section className="relative h-[600px] overflow-hidden">
        <img
          src="/assets/header-image-01.d15f3179aad88647a525.png"
          alt="API Offerings"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#081838]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-end px-5 pb-[100px] pt-[200px] md:px-10">
          <div>
            <h1 className="font-serif text-[58px] leading-[0.9] tracking-[-0.055em] text-white md:text-[88px]">
              API Offerings
            </h1>
            <p className="mt-5 max-w-[640px] text-[16px] leading-[1.5] text-white/80">
              Designed to unlock a wide range of applications for both traditional web environments and the Web 3.0 ecosystem.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-2 py-2 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {apiCards.map((card) => (
              <article key={card.title} className="flex min-h-[280px] flex-col gap-6 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center bg-[#4f74ab]/10 text-[24px]">
                  {card.icon}
                </div>

                <div>
                  <h2 className="font-serif text-[32px] leading-[0.95] tracking-[-0.045em]">
                    {card.title}
                  </h2>
                  <p className="mt-5 text-[15px] leading-[1.55] text-black/70">
                    {card.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-8 text-[13px] font-medium text-[#4f74ab]">Developer Infrastructure</p>
            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Build on regulated tokenization rails
            </h2>
          </div>

          <div className="space-y-8 text-[16px] leading-[1.6] text-black/75">
            <p>
              Securitize APIs are built to support regulated digital asset workflows across issuance, onboarding,
              transfers, investor management, and reporting.
            </p>
            <p>
              Developers can connect traditional applications and Web3 environments to tokenized real-world asset
              infrastructure without rebuilding core compliance and servicing systems from scratch.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px] text-center">
          <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
            Start building with Securitize
          </h2>
          <p className="mx-auto mt-8 max-w-[680px] text-[15px] leading-[1.5] text-white/70">
            Explore API access for regulated tokenized securities, investor workflows, and digital asset applications.
          </p>

          <a
            href="https://labs.securitize.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black transition hover:bg-white/80"
          >
            View Developer Sandbox →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default APIsPage;