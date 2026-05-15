import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const issuers = [
  {
    title: "WLFI DAR Maldives Limited Tokenized Asset Offering",
    description:
      "An investment opportunity offering economic exposure to the development of the Trump International Hotel & Resort, Maldives, an ultra-luxury hospitality asset developed by DarGlobal.*",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop",
    logoText: "TRUMP",
    assetClass: "Alternative Investment",
    investorType: "Accredited Investor",
    href: "/alternative-assets/MALD1",
  },
  {
    comingSoon: true,
  },
  {
    comingSoon: true,
  },
];

function IssuerCard({ issuer }) {
  if (issuer.comingSoon) {
    return (
      <div className="bg-white overflow-hidden flex flex-col h-full">
        {/* IMAGE */}
        <div className="h-[200px] relative bg-[#0D0F11] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at center, #2b3138 0%, transparent 70%)",
            }}
          />

          <p className="relative z-10 text-white text-[34px] font-serif">
            Coming Soon
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-[32px] flex flex-col gap-[40px] flex-1">
          <div className="flex flex-col gap-[20px]">
            <div className="h-[22px] bg-gray-200 rounded w-[80%]" />
            <div className="h-[14px] bg-gray-100 rounded w-full" />
            <div className="h-[14px] bg-gray-100 rounded w-[90%]" />
            <div className="h-[14px] bg-gray-100 rounded w-[75%]" />
          </div>

          <div className="flex flex-col gap-[14px]">
            <div>
              <div className="flex items-center gap-[4px]">
                <span className="text-sm text-[#03060d] w-[120px]">
                  Asset Class
                </span>

                <div className="h-[12px] w-[120px] rounded bg-gray-200" />
              </div>

              <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
            </div>

            <div>
              <div className="flex items-center gap-[4px]">
                <span className="text-sm text-[#03060d] w-[120px]">
                  Investor Type
                </span>

                <div className="h-[12px] w-[120px] rounded bg-gray-200" />
              </div>

              <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
            </div>

            <span className="text-[12px] text-[#03060d]">
              See disclosure **
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <a
      href={issuer.href}
      className="bg-white overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 no-underline"
    >
      {/* IMAGE */}
      <div className="h-[200px] relative overflow-hidden">
        <img
          src={issuer.image}
          alt={issuer.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-[40px] tracking-[6px] font-light">
              {issuer.logoText}
            </p>

            <p className="text-[11px] tracking-[3px] uppercase">
              International Hotel & Resort
            </p>

            <p className="text-[13px] tracking-[4px] uppercase mt-[4px]">
              Maldives
            </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-[32px] flex flex-col gap-[40px] flex-1">
        <div className="flex flex-col gap-[20px]">
          <h3 className="text-[34px] leading-[1.15] text-[#03060d] font-serif">
            {issuer.title}
          </h3>

          <p className="text-[15px] leading-[1.7] text-[#03060d] opacity-60">
            {issuer.description}
          </p>
        </div>

        <div className="flex flex-col gap-[14px]">
          <div>
            <div className="flex items-center gap-[4px]">
              <span className="text-sm text-[#03060d] w-[120px]">
                Asset Class
              </span>

              <span className="text-sm font-semibold text-[#03060d]">
                {issuer.assetClass}
              </span>
            </div>

            <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
          </div>

          <div>
            <div className="flex items-center gap-[4px]">
              <span className="text-sm text-[#03060d] w-[120px]">
                Investor Type
              </span>

              <span className="text-sm font-semibold text-[#03060d]">
                {issuer.investorType}
              </span>
            </div>

            <div className="h-[1px] bg-[#03060d] opacity-10 mt-[14px]" />
          </div>

          <span className="text-[12px] text-[#03060d]">
            See disclosure **
          </span>
        </div>
      </div>
    </a>
  );
}

export default function InvestPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <Navbar />

      {/* HERO */}
      <section className="relative h-[600px] overflow-hidden bg-[#081838]">
        {/* BG IMAGE */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(8,24,56,0.72), rgba(8,24,56,0.72)),
              url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-[1160px] mx-auto h-full px-[20px] flex items-end pb-[90px]">
          <h1 className="text-white text-[58px] md:text-[88px] leading-[0.95] font-serif">
            Alternative Investments
          </h1>
        </div>
      </section>

      {/* FEATURED */}
      <section className="bg-[#F3F7FC] py-[60px] md:py-[120px] px-[20px]">
        <div className="max-w-[1160px] mx-auto flex flex-col gap-[60px]">
          {/* TITLE */}
          <div className="flex justify-center">
            <h2 className="text-[48px] md:text-[76px] leading-none text-[#03060d] font-serif text-center">
              Featured Issuers
            </h2>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {issuers.map((issuer, index) => (
              <IssuerCard key={index} issuer={issuer} />
            ))}
          </div>

          {/* DISCLOSURES */}
          <div className="flex flex-col gap-[20px]">
            <p className="text-[12px] leading-[1.7] text-[#03060d] opacity-60">
              * DT Marks Defi LLC, an entity affiliated with Donald J. Trump and
              certain of his family members, has an indirect economic interest
              through approximately 38% beneficial ownership of an affiliate of
              WLFI DAR Maldives Limited ("WLFD"), which is entitled to earn a
              portion of the proceeds from the token issuance by virtue of its
              indirect economic interest in WLFD.
            </p>

            <p className="text-[12px] leading-[1.7] text-[#03060d] opacity-60">
              ** This material is intended for informational purposes only. This
              is not an offer or solicitation to buy or sell securities and is
              not intended as investment advice or recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}