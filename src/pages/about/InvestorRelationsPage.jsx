import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const updates = [
  {
    date: "March 2026",
    title: "Securitize to Go Public Through Business Combination with Cantor Equity Partners II",
    desc: "Securitize, a leading platform for tokenized securities, announces a definitive agreement to combine with Cantor Equity Partners II (NASDAQ: CEPT).",
    href: "#",
  },
  {
    date: "February 2026",
    title: "Investor Presentation Available",
    desc: "View the latest investor presentation outlining strategy, market opportunity, and financial highlights.",
    href: "#",
  },
];

const documents = [
  { label: "Form S-4 Filing", href: "#" },
  { label: "Investor Presentation", href: "#" },
  { label: "Press Release: Business Combination", href: "#" },
  { label: "Frequently Asked Questions", href: "#" },
];

export default function InvestorRelationsPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative w-full h-[330px] md:h-[450px] lg:h-[546px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(8,8,24)" }} />
        <img
          src="/assets/about/header-image-investor.png"
          alt="Investor Relations"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06090F] to-transparent" />
        <div className="absolute inset-0 flex flex-col z-10 justify-end items-center max-w-[1000px] mx-auto pb-12 md:pb-[100px] pt-[100px] px-5 text-white text-center gap-5">
          
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal">Investor Relations</h1>
          <p className="text-lg md:text-2xl lg:text-3xl">
            Securitize to Go Public Through Business Combination with Cantor Equity Partners II (NASDAQ: CEPT)*
          </p>
        </div>
      </section>

      {/* Latest updates */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-sm text-[#4f74ab] mb-5">Latest Updates</p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">
            Investor News
          </h2>
          <div className="flex flex-col gap-6">
            {updates.map((u) => (
              <a
                key={u.title}
                href={u.href}
                className="flex flex-col md:flex-row gap-6 md:gap-10 p-6 md:p-10 bg-[#f3f7fc] hover:shadow-md transition-shadow"
              >
                <div className="md:w-1/3">
                  <p className="text-sm text-[#03060d] opacity-60">{u.date}</p>
                </div>
                <div className="md:w-2/3 flex flex-col gap-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-[#03060d]">{u.title}</h3>
                  <p className="text-base text-[#03060d]/70">{u.desc}</p>
                  <span className="text-sm font-semibold text-[#03060d] opacity-80">Read More →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]" style={{ backgroundColor: "#e9f0f9" }}>
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">
            Documents & Filings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documents.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="bg-white p-6 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <span className="font-serif text-lg text-[#03060d]">{d.label}</span>
                <span className="text-sm font-semibold text-[#03060d]/80">Download ↓</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px] bg-white">
        <div className="max-w-[1160px] mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-normal text-[#03060d] mb-6">
            Investor Inquiries
          </h2>
          <p className="text-base text-[#03060d]/70 mb-6">
            For investor relations inquiries, please contact us at
          </p>
          <a
            href="mailto:ir@securitize.io"
            className="font-serif text-2xl md:text-3xl text-[#4f74ab] underline"
          >
            ir@securitize.io
          </a>
          <p className="text-xs text-[#03060d]/50 mt-8 max-w-2xl mx-auto">
            *Subject to customary closing conditions, including approval by Cantor Equity Partners II's stockholders.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}