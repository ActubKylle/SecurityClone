import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen bg-[#f9f9f9] font-sans text-[#0a1828]">
      <section className="flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-[430px] rounded-[3px] border border-black/10 bg-transparent px-5 py-7 sm:px-6">
          <div className="mb-8 flex justify-center">
            <img
              src="/assets/logo-dark.svg"
              alt="Securitize"
              className="h-[24px] w-auto"
            />
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-[18px] font-bold leading-tight text-[#0a1828]">
              Welcome Back!
            </h1>
            <p className="mt-1 text-[14px] text-[#48525e]">
              Please log in to access your account
            </p>
          </div>

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="h-[50px] w-full rounded-[3px] border border-black/25 bg-transparent px-3 text-[15px] text-[#0a1828] outline-none placeholder:text-[#48525e] focus:border-[#0283a8]"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="h-[50px] w-full rounded-[3px] border border-black/25 bg-transparent px-3 pr-11 text-[15px] text-[#0a1828] outline-none placeholder:text-[#48525e] focus:border-[#0283a8]"
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#48525e]"
              >
                👁
              </button>
            </div>

            <div>
              <a
                href="#"
                className="text-[12px] font-medium text-[#006a88] hover:underline"
              >
                Did you forget your password?
              </a>
            </div>

            <button
              type="submit"
              className="mt-5 h-[38px] w-full rounded-[3px] bg-[#006f86] text-[14px] font-bold text-white transition hover:bg-[#006278]"
            >
              Log In
            </button>
          </form>

          <p className="mt-4 text-center text-[14px] text-[#0a1828]">
            Don&apos;t have a Securitize iD account?{" "}
            <Link
              to="/registration/name"
              className="font-medium text-[#006a88] hover:underline"
            >
              Sign up
            </Link>
          </p>

          <p className="mx-auto mt-5 max-w-[330px] text-center text-[11px] leading-[1.45] text-[#48525e]">
            Securitize iD is property of Securitize, Inc., an issuance and
            lifecycle management platform for digital securities.{" "}
            <a href="#" className="underline">
              www.securitize.io
            </a>
          </p>
        </div>
      </section>

      <button className="fixed bottom-8 right-5 hidden rounded-full bg-[#004f78] px-5 py-3 text-[14px] font-bold text-white shadow-lg sm:block">
        ? Help
      </button>
    </main>
  );
}

export default LoginPage;