import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Méthode', href: '/methode' },
    { name: 'Cas client', href: '/cas-clients' },
    { name: 'Agence', href: '/agence' },
    { name: 'Leo, IA', href: '/leo' },
  ];

  const socialLinks = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
    { icon: FaLinkedin, href: '#' },
  ];

  return (
    <footer className="bg-secondary-light text-gray-300">
      <div className="container py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-white">Terros</h3>
            <p className="mt-2 text-gray-400 max-w-xs">Développement numérique sur mesure pour entreprises ambitieuses.</p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
             <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Navigation</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Légal</h4>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Confidentialité</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-sm font-semibold text-white tracking-wider uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-gray-400">
              <li>Paris, France</li>
              <li><a href="mailto:contact@terros.fr" className="hover:text-white transition-colors">contact@terros.fr</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {currentYear} Terros. Tous droits réservés.</p>
          <p className="mt-4 sm:mt-0">Design inspiré par l'excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
