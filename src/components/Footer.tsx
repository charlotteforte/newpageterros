const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-2xl font-bold text-primary">Terros</p>
            <p>Développement numérique sur mesure.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-primary">Méthode</a>
            <a href="#" className="hover:text-primary">Cas client</a>
            <a href="#" className="hover:text-primary">Agence</a>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
          <p>&copy; {currentYear} Terros. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
