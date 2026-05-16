import { useState } from "react";

function RegistrationName() {
  const [language, setLanguage] = useState("EN");

  return (
    <main className="min-h-screen bg-[#f3f4f4] font-sans text-[#071827]">
      {/* Top right language */}
      <div className="absolute right-5 top-5">
        <button className="flex items-center gap-1 text-[14px] font-medium text-black">
          {language}
          <span className="text-[12px]">⌄</span>
        </button>
      </div>

      {/* Center wrapper */}
      <section className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-[430px] rounded-[3px] border border-black/10 bg-transparent px-5 py-6 shadow-none sm:px-6">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src="/assets/logo-dark.svg"
              alt="Securitize"
              className="h-[28px] w-auto"
            />
          </div>

          {/* Heading */}
          <div className="mb-8 text-center">
            <h1 className="text-[18px] font-bold leading-tight text-[#071827]">
              Welcome! Let&apos;s Create Your Securitize ID
            </h1>
            <p className="mt-1 text-[14px] text-[#6b7280]">
              Please enter your first and last name
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="h-[50px] w-full rounded-[3px] border border-black/20 bg-transparent px-3 text-[15px] text-[#071827] outline-none placeholder:text-[#64748b] focus:border-[#00758a]"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="h-[50px] w-full rounded-[3px] border border-black/20 bg-transparent px-3 text-[15px] text-[#071827] outline-none placeholder:text-[#64748b] focus:border-[#00758a]"
            />

            <button
              type="submit"
              className="h-[38px] w-full rounded-[3px] bg-[#00758a] text-[14px] font-bold text-white transition hover:bg-[#00697b]"
            >
              Next
            </button>
          </form>

          {/* Login */}
          <p className="mt-4 text-center text-[14px] text-[#071827]">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-[#006b7f] underline underline-offset-2"
            >
              Log in
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default RegistrationName;