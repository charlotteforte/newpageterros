const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white">Terros</h3>
            <p className="mt-2 text-gray-400">Développement numérique sur mesure.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="/methode" className="hover:text-white transition-colors">Méthode</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cas client</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Agence</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-2">
              <li><p>Paris, France</p></li>
              <li><a href="mailto:contact@terros.fr" className="hover:text-white transition-colors">contact@terros.fr</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Terros. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
