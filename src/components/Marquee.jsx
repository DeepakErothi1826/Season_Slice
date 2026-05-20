const Marquee = ({ text = 'SEASON SLICE', repeat = 6, reverse = false, className = '', textColor = 'text-cream', dotColor = 'text-gold' }) => {
  const items = Array(repeat).fill(text);
  const content = items.map((t, i) => (
    <span key={i} className="flex items-center gap-6 mx-3">
      <span className={textColor}>{t}</span>
      <span className={dotColor}>✦</span>
    </span>
  ));

  return (
    <div className={`overflow-hidden py-5 ${className}`}>
      <div className={`flex whitespace-nowrap ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        <div className={`flex items-center font-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide ${textColor}`}>
          {content}
        </div>
        <div className={`flex items-center font-display text-xl sm:text-2xl lg:text-3xl font-medium tracking-wide ${textColor}`} aria-hidden="true">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Marquee;