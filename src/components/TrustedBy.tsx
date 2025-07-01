const logos = [
  { name: 'Nexity' },
  { name: 'Ami du Louvre' },
  { name: 'Mayer Brown' },
  { name: 'Serenest' },
  { name: 'Week\'In' },
  { name: 'Louis Roederer' },
  { name: 'Checkout.com' },
  { name: 'Ocus' },
  { name: 'AkeoPlus' },
];

const TrustedBy = () => {
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-20 bg-primary-light">
      <div className="container">
        <h3 className="text-center text-sm font-bold text-accent-DEFAULT uppercase tracking-wider mb-12">
          Ils nous font confiance
        </h3>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 animate-infinite-scroll">
            {duplicatedLogos.map((logo, index) => (
              <li key={index} className="text-gray-400 hover:text-secondary transition-colors duration-300 text-3xl font-bold whitespace-nowrap opacity-75 hover:opacity-100">
                {logo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
