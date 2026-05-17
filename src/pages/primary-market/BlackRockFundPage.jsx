import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InfoRow = ({ label, value }) => (
  <div className="grid grid-cols-[44%_1fr] gap-4 border-b border-black/10 py-4">
    <span className="text-[13px] text-black/50">{label}</span>
    <strong className="text-[14px] font-semibold leading-snug text-black">
      {value}
    </strong>
  </div>
);

const StepCard = ({ number, title, desc }) => (
  <div className="bg-white p-7 md:p-8">
    <span className="font-serif text-[54px] leading-none text-black/20">
      {number}
    </span>
    <h3 className="mt-8 font-serif text-[28px] leading-tight tracking-[-0.04em] text-black">
      {title}
    </h3>
    <p className="mt-4 text-[14px] leading-relaxed text-black/55">{desc}</p>
  </div>
);

const FeatureCard = ({ title, desc }) => (
  <div className="bg-white p-7 md:p-8">
    <h3 className="font-serif text-[30px] leading-tight tracking-[-0.045em] text-black">
      {title}
    </h3>
    <p className="mt-4 text-[15px] leading-relaxed text-black/55">{desc}</p>
  </div>
);

export default function BlackRockFundPage() {
  return (
    <main className="w-full overflow-x-hidden bg-[#f3f7fc] text-black">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#06101f] px-5 pt-[130px] pb-[90px] md:px-10 md:pt-[160px] md:pb-[125px]">
        <img
          src="/assets/blackrock-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f]/95 via-[#06101f]/75 to-[#06101f]/95" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1160px] gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-[13px] font-medium text-white/60">
              Private Funds
            </p>

            <h1 className="max-w-[780px] font-serif text-[54px] leading-[0.92] tracking-[-0.06em] text-white sm:text-[72px] md:text-[88px] lg:text-[96px]">
              BlackRock USD Institutional Digital Liquidity Fund
            </h1>

            <p className="mt-7 max-w-[640px] text-[17px] leading-[1.6] text-white/70">
              The first tokenized fund issued on a public blockchain by the
              world’s largest asset manager.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/get-in-touch"
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-[#03060d] transition hover:bg-white/90"
              >
                Get in Touch <span className="ml-2">→</span>
              </Link>

              <a
                href="#overview"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/25 px-7 text-[15px] font-medium text-white transition hover:border-white/50"
              >
                View Details
              </a>
            </div>
          </div>

          <aside className="bg-white/10 p-6 backdrop-blur-sm md:p-8">
            <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <div className="font-serif text-[46px] leading-none tracking-[-0.04em] text-white">
                  $5M
                </div>
                <p className="mt-2 text-[13px] text-white/60">
                  Minimum Investment
                </p>
              </div>

              <div>
                <div className="font-serif text-[46px] leading-none tracking-[-0.04em] text-white">
                  U.S.
                </div>
                <p className="mt-2 text-[13px] text-white/60">
                  Treasury Exposure
                </p>
              </div>

              <div>
                <div className="font-serif text-[46px] leading-none tracking-[-0.04em] text-white">
                  Instant
                </div>
                <p className="mt-2 text-[13px] text-white/60">Redemptions</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Overview */}
      <section
        id="overview"
        className="border-t border-white/70 px-5 py-20 md:px-10 md:py-[120px]"
      >
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 lg:grid-cols-[1fr_380px]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              At-A-Glance
            </p>

            <h2 className="max-w-[760px] font-serif text-[46px] leading-[0.98] tracking-[-0.055em] text-black md:text-[68px]">
              Institutional Liquidity, Tokenized Onchain
            </h2>

            <p className="mt-8 max-w-[780px] text-[17px] leading-[1.65] text-black/60">
              BUIDL provides qualified investors access to a tokenized money
              market-style fund that primarily invests in cash, U.S. Treasury
              bills, and repurchase agreements. It is designed to combine
              institutional-grade fund management with the efficiency and
              transferability of blockchain-based ownership.
            </p>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <FeatureCard
                title="Daily Accrual"
                desc="Investors can receive yield through daily accrued dividends represented onchain."
              />
              <FeatureCard
                title="Public Blockchain"
                desc="Tokenized fund ownership enables modern digital asset rails while maintaining regulated fund access."
              />
              <FeatureCard
                title="Institutional Manager"
                desc="Built with one of the world’s leading asset managers and distributed through Securitize."
              />
            </div>
          </div>

          <aside className="h-fit bg-white p-7 shadow-sm md:p-8">
            <h3 className="mb-6 font-serif text-[30px] tracking-[-0.04em] text-black">
              Fund Profile
            </h3>

            <InfoRow label="Asset Class" value="U.S. Treasury" />
            <InfoRow label="Minimum Investment" value="$5M" />
            <InfoRow label="Investor Type" value="Qualified Purchaser" />
            <InfoRow label="Redemptions" value="Instant" />
            <InfoRow label="Offered By" value="Securitize Markets Exclusive" />
            <InfoRow label="Fund Manager" value="BlackRock" />
            <InfoRow label="Structure" value="Tokenized Fund" />

            <p className="mt-6 text-[12px] leading-relaxed text-black/45">
              This page is for informational purposes only and is not an offer
              to sell or solicitation to purchase any security.
            </p>
          </aside>
        </div>
      </section>

      {/* Why BUIDL */}
      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 lg:grid-cols-[390px_1fr]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Fund Benefits
            </p>
            <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.055em] text-black md:text-[68px]">
              Built for Qualified Investors
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-black/60">
              BUIDL is designed for investors seeking efficient access to
              tokenized institutional liquidity products with blockchain-enabled
              operational advantages.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureCard
              title="Treasury-Backed Exposure"
              desc="Portfolio exposure primarily focused on cash, U.S. Treasury bills, and repo-style instruments."
            />
            <FeatureCard
              title="Onchain Ownership"
              desc="Digital tokens represent fund shares and enable streamlined transfer and servicing workflows."
            />
            <FeatureCard
              title="Modern Settlement"
              desc="Tokenized structure may improve operational efficiency compared with traditional fund workflows."
            />
            <FeatureCard
              title="Securitize Access"
              desc="Investors can access tokenized offerings through Securitize’s regulated market infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Subscription Process */}
      <section className="bg-[#f3f7fc] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 lg:grid-cols-[380px_1fr]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Getting Started
            </p>
            <h2 className="font-serif text-[46px] leading-[0.98] tracking-[-0.055em] text-black md:text-[68px]">
              Subscription Process
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-black/60">
              Investors complete onboarding, confirm eligibility, review
              documents, and proceed through the subscription process.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <StepCard
              number="01"
              title="Create Account"
              desc="Start your Securitize account and complete the required identity and investor profile steps."
            />
            <StepCard
              number="02"
              title="Confirm Eligibility"
              desc="Complete investor qualification requirements for the offering."
            />
            <StepCard
              number="03"
              title="Subscribe"
              desc="Review documents, select an investment amount, and follow funding instructions."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#557bb3] px-5 py-[110px] md:px-10 md:py-[150px]">
        <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center justify-center text-center">
          <h2 className="max-w-[980px] font-serif text-[52px] leading-[0.92] tracking-[-0.06em] text-white sm:text-[72px] md:text-[96px] lg:text-[108px]">
            Ready to explore
            <br />
            BUIDL?
          </h2>

          <Link
            to="/get-in-touch"
            className="group mt-10 inline-flex h-[52px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-[#03060d] transition hover:bg-white/90 md:mt-12"
          >
            Get in Touch
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}