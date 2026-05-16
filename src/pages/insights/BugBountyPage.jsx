import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const scopeItems = [
  "Authentication and authorization vulnerabilities",
  "Sensitive data exposure",
  "Smart contract or blockchain integration issues",
  "Trading, wallet, investor, or transaction security issues",
  "Business logic vulnerabilities",
  "Cross-site scripting, injection, and access-control flaws",
];

const rewards = [
  ["Critical", "$5,000+"],
  ["High", "$1,000 – $5,000"],
  ["Medium", "$250 – $1,000"],
  ["Low", "Recognition"],
];

const rules = [
  "Do not access, modify, or destroy user data.",
  "Do not perform denial-of-service testing.",
  "Do not use social engineering, phishing, spam, or physical attacks.",
  "Report vulnerabilities responsibly and give Securitize time to remediate.",
  "Only the first reporter of a unique valid issue is eligible for a reward.",
];

const steps = [
  {
    title: "Step 1",
    text: "Prepare a clear and concise report including:",
    bullets: [
      "A detailed description of the vulnerability.",
      "Steps to reproduce the issue.",
      "Any supporting evidence, such as screenshots, PoC code, or logs.",
    ],
  },
  {
    title: "Step 2",
    text: "Submit the report to bugbounty@securitize.io or through the designated form on our website.",
  },
  {
    title: "Step 3",
    text: "Once submitted, a member of the Securitize security team will review the report, and you will be notified of the status within two weeks.",
  },
];

function BugBountyPage() {
  return (
    <main className="min-h-screen bg-[#e9f0f9] text-black">
      <Navbar />

      <section className="relative h-[600px] min-h-[360px] overflow-hidden">
        <img
          src="/assets/header-image-01.d15f3179aad88647a525.png"
          alt="Bug Bounty Program"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#081838]/70" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1160px] items-end px-5 pb-[100px] pt-[200px] md:px-10">
          <div>
            <h1 className="font-serif text-[56px] leading-[0.9] tracking-[-0.055em] text-white md:text-[86px]">
              Bug Bounty Program
            </h1>

            <p className="mt-5 max-w-[640px] whitespace-pre-line text-[16px] leading-[1.5] text-white/80">
              {`The Securitize Bug Bounty Program aims to identify and remediate vulnerabilities in Securitize's systems, ensuring the highest levels of security and trust for our users and stakeholders. We encourage security researchers, developers, and ethical hackers to help us secure our platform by responsibly disclosing vulnerabilities.

The program offers financial rewards and recognition for responsible disclosures. The higher the severity of the identified vulnerability, the greater the reward.`}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-8 text-[13px] font-medium text-[#4f74ab]">Program Overview</p>
              <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
                Help secure the future of tokenized finance
              </h2>
            </div>

            <div className="space-y-7 text-[16px] leading-[1.6] text-black/75">
              <p>
                Security is central to Securitize. The Bug Bounty Program gives independent researchers a responsible
                way to report vulnerabilities and help protect users, issuers, investors, and digital asset systems.
              </p>
              <p>
                Submissions are reviewed based on severity, impact, reproducibility, and the quality of the report.
                Vulnerabilities in trading systems, investor data, or financial transactions may undergo additional review.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-[46px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Program Scope
            </h2>
            <p className="mx-auto mt-8 max-w-[640px] text-[15px] leading-[1.55] text-black/65">
              Focus on meaningful security issues that could affect platform integrity, investor protection, account
              access, transaction safety, or sensitive data.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scopeItems.map((item) => (
              <article key={item} className="min-h-[150px] bg-[#f3f7fc] p-8">
                <div className="mb-8 flex h-10 w-10 items-center justify-center bg-[#e4ebf4] text-[14px]">
                  ✓
                </div>
                <h3 className="font-serif text-[25px] leading-[1] tracking-[-0.045em]">
                  {item}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#03060d] px-5 py-20 text-white md:px-10 md:py-[120px]">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-16 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-8 text-[13px] font-medium text-[#9bb6df]">Rewards</p>
              <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
                Severity-based recognition
              </h2>
            </div>

            <div className="grid gap-0 border border-white/15">
              {rewards.map(([level, amount]) => (
                <div
                  key={level}
                  className="grid grid-cols-2 border-b border-white/15 p-6 last:border-b-0"
                >
                  <h3 className="font-serif text-[28px] leading-none tracking-[-0.04em]">
                    {level}
                  </h3>
                  <p className="text-right text-[16px] text-white/75">{amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f0f9] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-8 text-[13px] font-medium text-[#4f74ab]">Disclosure Rules</p>
            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Responsible testing only
            </h2>
            <p className="mt-8 max-w-[500px] text-[15px] leading-[1.55] text-black/70">
              Participants must avoid actions that could harm users, disrupt services, or compromise data.
            </p>
          </div>

          <div className="space-y-0">
            {rules.map((rule) => (
              <div key={rule} className="border-b border-[#d7dce3] py-7">
                <p className="text-[16px] leading-[1.5] text-black/75">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto grid max-w-[1160px] gap-16 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-8 text-[13px] font-medium text-[#4f74ab]">How To Submit</p>
            <h2 className="font-serif text-[48px] leading-[0.95] tracking-[-0.055em] md:text-[66px]">
              Submit a clear vulnerability report
            </h2>
          </div>

          <div>
            {steps.map((step, index) => (
              <article key={step.title}>
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                  <div className="shrink-0 font-serif text-[24px] leading-none text-black/45">
                    {step.title}
                  </div>

                  <div className="flex-1">
                    <p className="text-[16px] leading-[1.55] text-black/75">{step.text}</p>

                    {step.bullets && (
                      <ul className="mt-5 space-y-3">
                        {step.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3 text-[15px] leading-[1.5] text-black/70">
                            <span>•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {index !== steps.length - 1 && (
                  <div className="my-8 border-t border-[#e6e6e7] md:my-10" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[220px] overflow-hidden bg-gray-200 md:h-[500px]">
        <img
          src="/assets/banner-separator-stocks.png"
          alt="City separator"
          className="h-full w-full object-cover"
        />
      </div>

      <section className="bg-[#4f74ab] px-5 py-20 md:px-10 md:py-[120px]">
        <div className="mx-auto flex max-w-[1160px] flex-col items-center text-center">
          <h2 className="max-w-[900px] font-serif text-[44px] leading-[0.92] tracking-[-0.055em] text-white md:text-[64px]">
            Report a security vulnerability
          </h2>
          <p className="mt-8 max-w-[620px] text-[15px] leading-[1.5] text-white/85">
            Help us protect investors, issuers, and the regulated digital asset ecosystem.
          </p>
          <a
            href="mailto:bugbounty@securitize.io"
            className="mt-10 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-black transition hover:bg-white/80"
          >
            Submit Report →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default BugBountyPage;