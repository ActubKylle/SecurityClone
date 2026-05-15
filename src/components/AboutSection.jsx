const AboutSection = () => {
  return (
    <section className="bg-[#f3f7fc] px-5 md:px-10 py-20 md:pt-[120px] md:pb-[160px] flex justify-center">
      <div className="w-full max-w-[1160px]">
        <div className="flex flex-col lg:flex-row gap-15 lg:gap-[60px]">
          {/* Left Side: Text Content */}
          <div className="flex-1 max-w-[650px]">
            <p
              className="text-blue-600 text-sm font-medium uppercase pb-5"
              style={{ fontFamily: "'Geist Sans', sans-serif" }}
            >
              About Securitize
            </p>
            <h2 className="text-5xl md:text-6xl leading-tight tracking-tight text-gray-900 mb-10 font-serif">
              From Wall Street to Web3
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Securitize is the leader in real-world asset tokenization,
              bridging traditional finance and DeFi with institutional-grade
              infrastructure.
            </p>
            <div className="flex">
              <a
                href="#"
                className="py-1 px-4 rounded-full flex items-center justify-center text-sm bg-black text-white hover:bg-gray-800 transition-all group"
              >
                Our Story
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Side: Image Cards */}
          <div className="flex flex-wrap md:flex-nowrap gap-2 w-full lg:w-[650px] shrink-0">
            {/* Card 1 */}
            <div className="relative w-full bg-blue-900 overflow-hidden min-w-[200px] h-[240px] md:h-[490px] flex flex-col justify-end p-6">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500"
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                alt="SEC"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-4 text-white">
                  {/* Icon Placeholder */}
                  <span className="text-xs">SEC</span>
                </div>
                <p className="text-white font-medium text-xl leading-tight">
                  SEC-Registered Transfer Agent
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative w-full bg-blue-800 overflow-hidden min-w-[200px] h-[240px] md:h-[490px] flex flex-col justify-end p-6">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500"
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                alt="SIPC"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-4 text-white">
                  <span className="text-xs">SIPC</span>
                </div>
                <p className="text-white font-medium text-xl leading-tight">
                  SIPC & FINRA Member
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative w-full bg-blue-700 overflow-hidden min-w-[200px] h-[240px] md:h-[490px] flex flex-col justify-end p-6">
              <img
                src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=500"
                className="absolute inset-0 w-full h-full object-cover opacity-50 z-0"
                alt="Partners"
              />
              <div className="relative z-10">
                <div className="w-12 h-12 border border-white/20 flex items-center justify-center mb-4 text-white">
                  <span className="text-xs">IPC</span>
                </div>
                <p className="text-white font-medium text-xl leading-tight">
                  Institutional Partners and Custodians
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
