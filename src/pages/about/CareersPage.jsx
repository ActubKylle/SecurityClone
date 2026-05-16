import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const values = [
  { title: "Build with Purpose", desc: "We ship tools that move regulated capital onchain. Real assets, real users." },
  { title: "Move Fast, Stay Compliant", desc: "Speed is a feature when regulation is in our DNA." },
  { title: "Own the Outcome", desc: "Small teams, high autonomy, end-to-end ownership of what you build." },
];

const openings = [
  { title: "Senior Software Engineer", dept: "Engineering", location: "Remote / NYC" },
  { title: "Smart Contract Engineer", dept: "Engineering", location: "Remote" },
  { title: "Product Designer", dept: "Design", location: "Remote / Tel Aviv" },
  { title: "Compliance Analyst", dept: "Legal & Compliance", location: "NYC" },
  { title: "Institutional Sales Director", dept: "Sales", location: "London" },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <Navbar />

      <section className="relative w-full h-[330px] md:h-[560px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "rgb(8,24,56)" }} />
        <img
          src="/assets/about/header-careers.png"
          alt="Join us on a mission to bring assets onchain"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative max-w-[1160px] mx-auto w-full h-full pt-[140px] pb-10 lg:pt-[200px] lg:pb-[100px] px-5 flex items-end">
          <div className="flex flex-col gap-3 md:gap-5">
            <span className="text-white/70 text-xs uppercase tracking-wide">Careers</span>
            <h1 className="font-serif text-white text-5xl lg:text-7xl font-normal max-w-3xl">
              Join us on a mission to bring assets onchain
            </h1>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px] bg-white">
        <div className="max-w-[1160px] mx-auto">
          <p className="text-sm text-[#4f74ab] mb-5">Why Securitize</p>
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">
            Build the future of finance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white border-t border-[#03060d]/10 pt-8">
                <h3 className="font-serif text-2xl text-[#03060d] mb-4">{v.title}</h3>
                <p className="text-base text-[#03060d]/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section
        className="px-5 md:px-10 pt-20 md:pt-[120px] pb-20 md:pb-[120px]"
        style={{ backgroundColor: "#f3f7fc" }}
      >
        <div className="max-w-[1160px] mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-normal text-[#03060d] mb-[60px]">
            Open Positions
          </h2>
          <div className="flex flex-col">
            {openings.map((j) => (
              <a
                key={j.title}
                href="#"
                className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_auto] items-center gap-4 py-6 border-t border-[#03060d]/10 hover:bg-white/60 transition-colors px-4"
              >
                <span className="font-serif text-xl md:text-2xl text-[#03060d]">{j.title}</span>
                <span className="text-sm text-[#03060d]/70">{j.dept}</span>
                <span className="text-sm text-[#03060d]/70">{j.location}</span>
                <span className="text-sm font-semibold text-[#03060d] flex items-center gap-1">
                  Apply →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}