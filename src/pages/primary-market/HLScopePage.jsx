import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const HLScopePage = () => {
  return (
    <div className="bg-[#edf1f5] text-[#041c4a] overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="pt-[120px] pb-[80px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid lg:grid-cols-[350px_1fr] gap-[60px] items-center">
            {/* LEFT */}
            <div className="bg-[#5879b3] h-[350px] flex items-end p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 text-[400px] leading-none font-black">
                E
              </div>

              <h2 className="text-white text-[58px] leading-none font-serif relative z-10">
                HLSCOPE
              </h2>
            </div>

            {/* RIGHT */}
            <div>
              <h1 className="font-serif text-[68px] leading-[0.95] tracking-[-2px] max-w-[900px]">
                Hamilton Lane Senior Credit Opportunities Securitize Fund
              </h1>

              <p className="mt-10 text-[22px] leading-[1.5] text-[#132b58] max-w-[900px]">
                Seeking consistent income with a fund that invests in senior
                credit opportunities. This fund primarily targets senior secured
                loans and credit instruments for stable, risk-adjusted returns.
              </p>

              <div className="flex gap-4 mt-10">
                <button className="bg-[#031b4e] text-white px-8 h-[52px] rounded-full text-[15px] font-medium hover:bg-[#08296d] transition">
                  Create Account →
                </button>

                <button className="border border-[#041c4a]/30 text-[#041c4a] px-8 h-[52px] rounded-full text-[15px] font-medium hover:bg-white transition">
                  Learn More →
                </button>
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-[90px]">
            {[
              {
                title: "AUM",
                value: "$4.28M",
              },
              {
                title: "1Y Return",
                value: "5.87%",
              },
              {
                title: "Minimum Investment",
                value: "$10,000",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#d6dce6] bg-white p-10 min-h-[210px]"
              >
                <p className="text-[#4d6fb2] text-[18px] font-medium">
                  {item.title}
                </p>

                <h3 className="font-serif text-[72px] leading-none mt-10 text-[#1d2433]">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-[120px] px-6">
        <div className="max-w-[1100px] mx-auto text-center">
          <p className="text-[#4d6fb2] text-[18px] mb-5">Overview</p>

          <h2 className="font-serif text-[74px] leading-[0.95] tracking-[-2px]">
            For Investors Seeking Steady Monthly Yield & Added Liquidity
          </h2>

          <p className="mt-10 text-[20px] leading-[1.6] text-[#1f355d] max-w-[900px] mx-auto">
            This Fund invests in senior secured loans made to top-tier
            borrowers in North America and Europe, targeting both stability and
            reliable returns.
          </p>

          <div className="mt-6 text-[18px] font-medium text-[#365da5]">
            Investor Type: Qualified Purchaser
          </div>

          {/* BOXES */}
          <div className="grid md:grid-cols-3 gap-6 mt-20 text-left">
            {[
              {
                title: "Fees",
                items: [
                  "Expense Ratio: 2.00%",
                  "Underlying Fund Expenses: 2.51%",
                  "Currency: USDC and USD",
                ],
              },
              {
                title: "Subscription",
                items: [
                  "Frequency: Instant",
                  "Deadline: 2:00 pm ET",
                  "Domicile: Delaware",
                ],
              },
              {
                title: "Redemptions",
                items: [
                  "Liquidity Pool: Instant",
                  "Frequency: Monthly",
                  "Hold Period: 1 day",
                ],
              },
            ].map((box, i) => (
              <div
                key={i}
                className="border border-[#d7dde7] bg-white p-10"
              >
                <h3 className="text-[#4d6fb2] text-[20px] font-medium mb-8">
                  {box.title}
                </h3>

                <div className="space-y-5 text-[18px] text-[#23385f]">
                  {box.items.map((item, idx) => (
                    <p key={idx}>{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CHART */}
          <div className="mt-20 bg-white border border-[#d6dce6] p-10">
            <h3 className="text-left text-[22px] font-medium mb-10">
              Performance Since Inception
            </h3>

            <div className="h-[420px] bg-[#5d80b9] rounded-t-[12px] relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_top,transparent_0%,white_100%)]"></div>

              <svg
                viewBox="0 0 1000 400"
                className="absolute bottom-0 left-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,350 C100,340 150,320 250,280 C350,240 420,190 500,170 C580,150 650,120 750,90 C820,70 900,50 1000,20 L1000,400 L0,400 Z"
                  fill="#5d80b9"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* DEFI FEATURES */}
      <section className="py-[120px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center">
            <p className="text-[#4d6fb2] text-[18px] mb-5">
              Blockchain Infrastructure
            </p>

            <h2 className="font-serif text-[72px] leading-none">
              DeFi Features
            </h2>

            <p className="mt-8 text-[20px] text-[#1f355d]">
              Capabilities aimed at increasing the utility of your tokenized
              assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {[
              {
                title: "Multi-chain Access",
                desc: "Assets available across multiple blockchains",
              },
              {
                title: "Cross-chain Interoperability",
                desc: "Move assets across multiple blockchains",
              },
              {
                title: "Stablecoin On & Off Ramps",
                desc: "Invest and redeem using stablecoins",
              },
              {
                title: "Oracle Pricing",
                desc: "Real-time NAV data",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white border border-[#d7dde7] rounded-[28px] p-10 min-h-[260px]"
              >
                <h3 className="text-[30px] font-medium">{card.title}</h3>

                <p className="mt-5 text-[18px] leading-[1.6] text-[#30456e]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION PROCESS */}
      <section className="bg-[#5f80ba] py-[140px] px-6 text-white">
        <div className="max-w-[1300px] mx-auto grid lg:grid-cols-[420px_1fr] gap-[120px]">
          <div>
            <p className="text-[18px] opacity-80">Getting Started</p>

            <h2 className="font-serif text-[84px] leading-[0.95] mt-6">
              Subscription Process
            </h2>

            <p className="mt-12 text-[20px] leading-[1.7] opacity-90">
              The Securitize subscription process is similar to other
              investment platforms.
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Create Account / Log In",
                desc: "Verify your identity and submit an accreditation application.",
              },
              {
                number: "02",
                title: "Choose Your Investment",
                desc: "Select the fund you wish to invest in.",
              },
              {
                number: "03",
                title: "Sign Documents",
                desc: "View and sign subscription documents.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border-b border-white/20 pb-14"
              >
                <div className="text-[20px] opacity-70">{step.number}</div>

                <h3 className="font-serif text-[52px] mt-3 leading-none">
                  {step.title}
                </h3>

                <p className="mt-8 text-[20px] max-w-[700px] opacity-90">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY FACTS */}
      <section className="py-[140px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <p className="text-[#4d6fb2] text-[18px]">Fund Details</p>

          <h2 className="font-serif text-[84px] leading-none mt-4">
            Key Facts
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {[
              ["Eligible Investors", "Qualified Purchasers"],
              ["General Partner", "Securitize Capital LLC"],
              ["Fund Administrator", "Securitize Fund Services, LLC"],
              ["Transfer Agent", "Securitize Transfer Agent, LLC"],
              ["Placement Agent", "Securitize Markets, LLC"],
              ["Auditor", "WithumSmith+Brown, PC"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#f5f7fa] border border-[#d7dde7] p-10 flex justify-between gap-10"
              >
                <h3 className="font-serif text-[32px]">{item[0]}</h3>

                <p className="text-[24px] text-[#394d73] text-right">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <section className="bg-[#02184b] text-white py-[140px] px-6">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center">
            <p className="text-[18px] opacity-70">
              Behind The Investment
            </p>

            <h2 className="font-serif text-[110px] mt-6 leading-none">
              Hamilton Lane
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-20 mt-24 text-center">
            {[
              ["$1.0T", "AUM"],
              ["34+", "Years in Business"],
              ["2,330+", "Clients & Investors"],
            ].map((item, i) => (
              <div key={i}>
                <div className="font-serif text-[86px] leading-none">
                  {item[0]}
                </div>

                <div className="mt-5 text-[24px] opacity-80">
                  {item[1]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt=""
          className="w-full h-[900px] object-cover"
        />
      </section>

      {/* DISCLAIMER */}
      <section className="py-[100px] px-6 text-[#7986a5] text-[14px] leading-[1.8]">
        <div className="max-w-[1280px] mx-auto">
          <p>
            This is neither an offer to sell nor a solicitation to purchase any
            security. This summary is qualified in its entirety by more detailed
            information included in the offering documents.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HLScopePage;