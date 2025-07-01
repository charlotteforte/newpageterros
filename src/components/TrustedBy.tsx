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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-medium text-accent uppercase tracking-widest mb-12">
          Ils nous font confiance
        </h3>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll">
            {duplicatedLogos.map((logo, index) => (
              <li key={index} className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-2xl font-semibold grayscale hover:grayscale-0 whitespace-nowrap">
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
