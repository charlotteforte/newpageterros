const logos = [
  { name: 'Nexity' },
  { name: 'Ami du Louvre' },
  { name: 'Mayer Brown' },
  { name: 'Serenest' },
  { name: 'Week\'In' },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-12">
          Ils nous font confiance
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
          {logos.map((logo) => (
            <div key={logo.name} className="text-gray-500 font-medium text-lg grayscale hover:grayscale-0 transition-all duration-300">
              {logo.name}
            </div>
          ))}
           <div className="text-gray-500 font-medium text-lg">
              Et bien d'autres...
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
