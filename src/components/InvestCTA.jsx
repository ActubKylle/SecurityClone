const InvestCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#557bb3] px-5 py-[110px] md:px-10 md:py-[150px]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col items-center justify-center text-center">
        <h2 className="max-w-[980px] font-serif text-[52px] leading-[0.92] tracking-[-0.06em] text-white sm:text-[72px] md:text-[96px] lg:text-[108px]">
          Tokenize Your Portfolio
          <br />
          with Securitize
        </h2>

        <a
          href="/registration/name"
          className="group mt-10 inline-flex h-[52px] items-center justify-center rounded-full bg-white px-7 text-[15px] font-medium text-[#03060d] transition hover:bg-white/90 md:mt-12"
        >
          Get in Touch
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
};

export default InvestCTA;