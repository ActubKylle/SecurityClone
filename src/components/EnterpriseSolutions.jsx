const EnterpriseSolutions = () => {
  const solutions = [
    {
      title: "Tokenization as a Service",
      desc: "Tokenize your investment products on our compliance-focused platform.",
      img: "./assets/3.png", // Placeholder matching the code
      link: "/solutions/institutional-tokenization"
    },
    {
      title: "Fund Administration",
      desc: "Manage your entire fund on a single integrated platform.",
      img: "/assets/2.png",
      link: "/solutions/fund-administration"
    },
    {
      title: "Digital Asset Reporting",
      desc: "Institutional-grade reporting for digital assets.",
      img: "/assets/1.png",
      link: "/solutions/digital-asset-reporting"
    }
  ];

  return (
    <section className="bg-white py-20 md:py-[160px] px-5 md:px-10 flex justify-center font-sans">
      <div className="w-full max-w-[1160px]">
        <div className="flex flex-col-reverse lg:flex-row gap-[60px] items-center lg:items-start">
          
          {/* Cards Area */}
          <div className="flex-1 flex flex-col md:flex-row gap-2 items-stretch w-full">
            {solutions.map((item, idx) => (
              <div key={idx} className="relative group overflow-hidden rounded-sm flex-1 min-h-[490px] flex flex-col justify-center items-center text-center p-6 transition-all">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-[250px]">
                  <h3 className="text-white text-2xl font-bold mb-4 leading-tight">{item.title}</h3>
                  <p className="text-white/80 text-sm mb-6">{item.desc}</p>
                  <a href={item.link} className="inline-flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
                    Learn More 
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 448 512" height="12" width="12">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Text Area */}
          <div className="lg:w-[322px] flex-shrink-0 text-center md:text-left">
            <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-5">Solutions</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">Built for Enterprise</h2>
            <p className="text-gray-600 leading-relaxed">
              We offer everything needed to launch, manage, and invest in onchain securities — all with the trust and transparency of a regulated platform.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;