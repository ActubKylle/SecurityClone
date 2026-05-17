import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GetInTouchPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#f3f7fc] text-black">
      <Navbar />

      <section className="px-5 pt-[140px] pb-20 md:px-10 md:pt-[170px] md:pb-[120px]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-5 text-[13px] font-semibold text-[#285c92]">
              Contact Us
            </p>

            <h1 className="font-serif text-[56px] leading-[0.95] tracking-[-0.06em] text-black sm:text-[72px] md:text-[96px]">
              Get in Touch
            </h1>

            <p className="mt-8 max-w-[520px] text-[17px] leading-[1.65] text-black/60">
              Interested in tokenized investments, fund administration, or
              institutional tokenization? Send your details and the team will
              follow up.
            </p>
          </div>

          <form className="bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <input className="h-[52px] border border-black/10 px-4 outline-none focus:border-black" placeholder="First name" />
              <input className="h-[52px] border border-black/10 px-4 outline-none focus:border-black" placeholder="Last name" />
              <input className="h-[52px] border border-black/10 px-4 outline-none focus:border-black md:col-span-2" placeholder="Email address" />
              <input className="h-[52px] border border-black/10 px-4 outline-none focus:border-black md:col-span-2" placeholder="Company" />
              <select className="h-[52px] border border-black/10 px-4 outline-none focus:border-black md:col-span-2">
                <option>What are you interested in?</option>
                <option>Private Funds</option>
                <option>Tokenized Public Stocks</option>
                <option>Alternative Investments</option>
                <option>Institutional Tokenization</option>
              </select>
              <textarea className="min-h-[140px] border border-black/10 p-4 outline-none focus:border-black md:col-span-2" placeholder="Message" />
            </div>

            <button className="mt-6 inline-flex h-[52px] items-center rounded-full bg-black px-7 text-[15px] font-medium text-white hover:bg-black/80">
              Submit <span className="ml-2">→</span>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}