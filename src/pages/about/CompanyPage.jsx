import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const leadership = [
  { name: "Carlos Domingo", role: "Co-Founder & CEO", img: "/assets/about/team/carlos-domingo.jpg" },
  { name: "Brett Redfearn", role: "President", img: "/assets/about/team/brett-redfearn.jpg" },
  { name: "Billy Miller", role: "Chief Operating Officer", img: "/assets/about/team/billy-miller.jpg" },
  { name: "Joe Nikolson", role: "CEO & COO, Securitize Markets", img: "/assets/about/team/joe-nikolson.jpg" },
  { name: "Jorge Serna", role: "C-3PO (CPO & CTO)", img: "/assets/about/team/jorge-serna.jpg" },
  { name: "Francisco Flores", role: "Chief Financial Officer", img: "/assets/about/team/francisco-flores.jpg" },
  { name: "Chongwu Du", role: "Chief Strategy Officer", img: "/assets/about/team/chongwu-du.jpg" },
  { name: "Jerome Roche", role: "General Counsel", img: "/assets/about/team/jerome-roche.jpg" },
  { name: "Suzy Singh", role: "Deputy Chief Operating Officer", img: "/assets/about/team/suzy-singh.jpg" },
  { name: "Giang Bui", role: "Vice President, Head of Issuer Growth", img: "/assets/about/team/giang-bui.jpg" },
  { name: "Mikhail Davidyan", role: "Head Of Securitize Fund Services", img: "/assets/about/team/mikhail-davidyan.jpg" },
];

const board = [
  { name: "Carlos Domingo", role: "Co-Founder & CEO", img: "/assets/about/team/carlos-domingo.jpg" },
  { name: "Brett Redfearn", role: "President", img: "/assets/about/team/brett-redfearn.jpg" },
  { name: "Jon Steel", role: "Managing Director At Blackrock", img: "/assets/about/team/jon-steel.jpg" },
  { name: "Tal Elyashiv", role: "Managing Partner & Co-Founder At Spice VC", img: "/assets/about/team/tal-elyashiv.jpg" },
  { name: "W Bradford Stephens", role: "Managing Partner & Co-Founder At Blockchain Capital", img: "/assets/about/team/bradford-stephens.jpg" },
  { name: "Pedro Teixeira", role: "Managing Director & Co Head Of Morgan Stanley Investment Management's Tactical Value", img: "/assets/about/team/pedro-teixeira.jpg" },
  { name: "Chris Bruner", role: "Chief Product Officer At Tradeweb", img: "/assets/about/team/chris-bruner.jpg" },
  { name: "Sunil Sabharwal", role: "Former US Board member to IMF", img: "/assets/about/team/sunil-sabharwal.jpg" },
];

const advisors = [
  { name: "Manolo Sanchez", img: "/assets/about/team/manolo-sanchez.jpg", roles: [
    { org: "Fannie Mae", title: "Board Member" },
    { org: "BBVA Compass", title: "Former Chairman & CEO" },
  ]},
  { name: "James Wallis", img: "/assets/about/team/james-wallis.jpg", roles: [
    { org: "Ripple", title: "VP Of Central Bank Engagements" },
    { org: "7e4, LLC", title: "Founder" },
    { org: "IBM", title: "Vice President, Blockchain" },
  ]},
  { name: "Donna Redel", img: "/assets/about/team/donna-redel.jpg", roles: [
    { org: "World Economic Forum", title: "Managing Director" },
    { org: "Prudential Securities", title: "CIO" },
    { org: "New York Commodities Exchange", title: "Former Chairwoman" },
  ]},
  { name: "Matthew Le Merle", img: "/assets/about/team/matthew-le-merle.jpg", roles: [
    { org: "Fifth Era & Blockchain Coinvestors", title: "Managing Partner" },
    { org: "SFOX", title: "Vice Chairman" },
  ]},
  { name: "Dick Costolo", img: "/assets/about/team/dick-costolo.jpg", roles: [
    { org: "Twitter", title: "Former CEO" },
    { org: "Google", title: "Group Product Manager" },
  ]},
  { name: "Chris Conetta", img: "/assets/about/team/chris-conetta.jpg", roles: [
    { org: "Nearwater Capital", title: "Senior Advisor" },
  ]},
];

const investors = [
  "ARK", "Aptos", "Ava Labs", "Blockchain Capital", "Blockchain.com",
  "Borderless Capital", "Circle", "Coinbase Ventures", "Fenbushi Capital",
  "Global Brain", "IDC", "Jump", "KKDI", "Kenetic", "MUFG",
  "Migration Capital", "Mitsui Fudosan", "Morgan Stanley", "Mouro Capital",
  "NXTP Labs", "Nomura", "OK Blockchain Capital", "ParaFi", "Paxos",
  "Ripio", "Ripple", "SBI Holdings", "SeedRocket", "Sony Financial Ventures",
  "Spice", "Sumitomo Mitsui Trust Bank", "Tezos", "Tradeweb",
];

const timeline = [
  { year: "2016", desc: "Carlos Domingo and his co-founders at SPiCE VC pioneer digital securities." },
  { year: "2017", desc: "Securitize is founded to bring blockchain to alternative assets." },
  { year: "2019", desc: "Launch of the DS Protocol for compliant digital securities." },
  { year: "2020", desc: "Securitize Markets ATS launches as registered broker-dealer." },
  { year: "2021", desc: "Acquired Distributed Technology Markets, expanding capabilities." },
  { year: "2022", desc: "Securitize Capital launches institutional fund offerings." },
  { year: "2023", desc: "Tokenized BlackRock Treasury Fund partnership announced." },
  { year: "2024", desc: "BUIDL fund reaches new tokenization milestones." },
  { year: "2025", desc: "Global expansion and new institutional partnerships." },
  { year: "2026", desc: "Securitize announces public listing through Cantor Equity Partners II." },
];

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <Navbar />

      {/* Hero quote */}
      <section className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(8,24,56)" }} />
        <img
          src="/assets/about/header-image.png"
          alt="Tokenization is unavoidable"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-5 z-10">
          <span className="text-white text-2xl md:text-3xl mb-4">“</span>
          <h1 className="font-serif text-white text-center mb-4 text-3xl md:text-6xl lg:text-7xl font-normal">
            Tokenization<br />is unavoidable
          </h1>
          <p className="text-white text-sm md:text-base">Carlos Domingo, Founder & CEO</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px] bg-white">
        <div className="max-w-[640px] mx-auto space-y-6">
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-12">Our Story</h2>
          <p className="text-lg md:text-2xl text-[#03060d]/80">
            In 2017, Carlos Domingo and Jamie Finn envisioned using blockchain technology to bring automation and liquidity potential to alternative asset classes. Recognizing the technology didn't exist, they built Securitize.
          </p>
          <p className="text-lg md:text-2xl text-[#03060d]/80">
            The first fully digital securities platform, Securitize enables issuers to raise capital and allows investors to access alternative investment opportunities in a fast and transparent way — bringing the two together like never before.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-[1160px] mx-auto mt-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {timeline.map((t) => (
              <div key={t.year}>
                <p className="font-serif text-4xl md:text-5xl text-[#03060d] opacity-90 mb-2">{t.year}</p>
                <p className="text-sm text-[#4f74ab] mb-2">{t.year.startsWith("2016") ? "December" : ""}</p>
                <p className="text-sm text-[#03060d]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City separator */}
      <div className="w-full h-[220px] md:h-[500px] overflow-hidden bg-gray-200">
        <img src="/assets/about/city-1.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Leadership */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]" style={{ backgroundColor: "#e9f0f9" }}>
        <div className="max-w-[1160px] mx-auto">
          <p className="text-sm text-[#4f74ab] mb-5">Driving The Vision</p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">Leadership Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[60px]">
            {leadership.map((p) => (
              <div key={p.name} className="flex flex-col items-start gap-5">
                <div className="w-full aspect-square bg-white overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg text-[#03060d]">{p.name}</h3>
                  <p className="text-sm text-[#03060d] opacity-60 capitalize">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]" style={{ backgroundColor: "#e9f0f9", marginTop: "4px" }}>
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">Board of Directors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-[60px]">
            {board.map((p) => (
              <div key={p.name} className="flex flex-col items-start gap-5">
                <div className="w-full aspect-square bg-white overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg text-[#03060d]">{p.name}</h3>
                  <p className="text-sm text-[#03060d] opacity-60 capitalize">{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]" style={{ backgroundColor: "#e9f0f9", marginTop: "4px" }}>
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[60px]">
            {advisors.map((a) => (
              <div key={a.name} className="flex flex-row items-start gap-5">
                <div className="flex-shrink-0 w-[160px] md:w-[272px] h-[160px] md:h-[272px] bg-white overflow-hidden">
                  <img src={a.img} alt={a.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg text-[#03060d]">{a.name}</h3>
                  <div className="w-full border-t border-[#03060d]/10 my-5" />
                  <div className="flex flex-col gap-5">
                    {a.roles.map((r) => (
                      <div key={r.org} className="flex flex-col gap-0.5">
                        <span className="text-sm font-medium text-[#03060d]">{r.org}</span>
                        <span className="text-sm text-[#03060d] opacity-60 capitalize">{r.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City separator 2 */}
      <div className="w-full h-[220px] md:h-[500px] overflow-hidden bg-gray-200">
        <img src="/assets/about/city-2.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Investors */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]" style={{ backgroundColor: "#f3f7fc" }}>
        <div className="max-w-[1160px] mx-auto">
          <p className="text-sm text-[#4f74ab] mb-5">Backed by the best</p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">Our Investors</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {investors.map((name) => (
              <div key={name} className="bg-white p-6 flex items-center justify-center aspect-[2/1]">
                <img
                  src={`/assets/about/investors/${name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "")}.png`}
                  alt={name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}