import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Méthode', href: '/methode' },
  { name: 'Cas client', href: '/cas-clients' },
  { name: 'Agence', href: '/agence' },
  { name: 'Intégration', href: '/integration' },
  { name: 'Leo, développeur IA', href: '/leo' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-3xl font-extrabold tracking-tighter transition-colors duration-300 ${hasScrolled ? 'text-secondary' : 'text-white'}`}>
              Terros
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-base font-medium transition-colors duration-300 ${hasScrolled ? 'text-accent hover:text-primary' : 'text-gray-200 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${hasScrolled ? 'text-accent hover:text-primary' : 'text-gray-200 hover:text-white'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-4 space-y-2 sm:px-3 bg-white">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-3 rounded-md text-lg font-medium text-accent hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
