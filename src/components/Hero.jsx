import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-securitize-dark font-sans">
      
      {/* Background Section (Video/Image) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-securitize-dark/80 z-10" />
        <video 
  autoPlay 
  loop 
  muted 
  playsInline 
  className="w-full h-full object-cover opacity-60"
>
  {/* Direkta na sa /assets/... */}
  <source src="/assets/hero/hero.mp4" type="video/mp4" />
</video>
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full max-w-[1160px] mx-auto px-6 flex flex-col justify-center lg:flex-row lg:items-end lg:pb-32 gap-12">
        
        {/* Left Stats Section - Gikuha ang style gikan sa imong gi-inspect */}
        <div className="flex flex-col border-l border-white/10 pl-8 lg:border-l-0 lg:border-r lg:pr-16 lg:pl-0">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-[50px] font-medium leading-none tracking-tighter">$4B+</h2>
            <p className="text-[12px] uppercase tracking-widest text-gray-400 mt-2">Tokenized Assets ¹</p>
          </div>
          <div>
            <h2 className="text-[50px] font-medium leading-none tracking-tighter">580,000+</h2>
            <p className="text-[12px] uppercase tracking-widest text-gray-400 mt-2">Investor Accounts ²</p>
          </div>
        </div>

        {/* Right Headline - Gamit ang Serif font (PP Editorial New) */}
        <div className="flex flex-col items-start lg:mb-4">
          <h1 className="font-serif italic text-6xl lg:text-[100px] leading-[0.9] tracking-tight mb-8">
            Tokenize the <br /> World.
          </h1>
          <button className="flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-gray-300 hover:text-white transition-all group">
            <span>Explore Offerings</span>
            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;