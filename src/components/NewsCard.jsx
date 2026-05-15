const NewsCard = ({ date, title, logo }) => {
  return (
    <div className="group border-t border-white/10 pt-8 pb-12 flex flex-col h-full cursor-pointer">
      {/* Brand Logo */}
      <div className="h-8 mb-8">
        <img src={logo} alt="brand" className="h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
      </div>
      
      {/* Date */}
      <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 font-sans">
        {date}
      </p>
      
      {/* Title - Serif Font */}
      <h3 className="text-2xl md:text-3xl font-serif italic leading-tight text-white/90 group-hover:text-white transition-colors">
        {title}
      </h3>
      
      {/* CTA */}
      <div className="mt-8 flex items-center gap-2 text-sm font-medium">
        <span>Read More</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </div>
  );
};

export default NewsCard;