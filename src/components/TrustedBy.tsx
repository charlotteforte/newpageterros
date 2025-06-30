const logos = [
  { name: 'Nexity' },
  { name: 'Ami du Louvre' },
  { name: 'Mayer Brown' },
  { name: 'Serenest' },
  { name: 'Week\'In' },
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-lg font-medium text-accent uppercase tracking-widest mb-12">
          Ils nous font confiance
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="text-gray-400 hover:text-gray-600 transition-colors duration-300 text-2xl font-semibold grayscale hover:grayscale-0">
              {logo.name}
            </div>
          ))}
           <div className="text-gray-400 text-2xl font-semibold">
              Et bien d'autres...
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
