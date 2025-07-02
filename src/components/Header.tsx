import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { Link } from 'react-router-dom';

type SubLink = {
  name: string;
  href: string;
};

type NavLink = {
  name: string;
  href?: string;
  subLinks?: SubLink[];
};

const navLinks: NavLink[] = [
  { name: 'Méthode', href: '/methode' },
  { name: 'Cas client', href: '/cas-clients' },
  {
    name: 'Agence',
    subLinks: [
      { name: 'L\'agence', href: '/agence' },
      { name: 'Agence IA', href: '/agence-ia' },
      { name: 'Agence de développement Web', href: '/agence-web' },
    ]
  },
  { name: 'Intégration', href: '/integration' },
  { name: 'Leo, développeur IA', href: '/leo' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-gray-200/50' : 'bg-transparent'}`}>
      <div className="container">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${hasScrolled ? 'text-secondary' : 'text-white'}`}>
              Terros
            </Link>
          </div>
          <nav className="hidden md:flex md:space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.subLinks && setOpenSubmenu(link.name)}
                onMouseLeave={() => link.subLinks && setOpenSubmenu(null)}
              >
                {link.href ? (
                  <Link
                    to={link.href}
                    className={`relative group text-base font-medium transition-colors duration-300 py-2 flex items-center ${hasScrolled ? 'text-accent-DEFAULT hover:text-primary-DEFAULT' : 'text-gray-200 hover:text-white'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 ${hasScrolled ? 'bg-primary' : 'bg-white'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out`}></span>
                  </Link>
                ) : (
                  <button className={`relative group text-base font-medium transition-colors duration-300 py-2 flex items-center ${hasScrolled ? 'text-accent-DEFAULT hover:text-primary-DEFAULT' : 'text-gray-200 hover:text-white'}`}>
                    {link.name}
                    <FiChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                )}

                <AnimatePresence>
                  {link.subLinks && openSubmenu === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute top-full left-0 mt-2 w-48 rounded-md shadow-lg ${hasScrolled ? 'bg-white' : 'bg-gray-800' } ring-1 ring-black ring-opacity-5`}
                    >
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {link.subLinks.map((subLink) => (
                          <Link
                            key={subLink.name}
                            to={subLink.href}
                            className={`block px-4 py-2 text-sm ${hasScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-gray-200 hover:bg-gray-700'}`}
                            role="menuitem"
                            onClick={() => setOpenSubmenu(null)}
                          >
                            {subLink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
          <div className="hidden md:flex items-center ml-4">
              <Link
                  to="#"
                  className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${hasScrolled ? 'bg-primary text-white hover:bg-primary-focus shadow-md' : 'bg-white text-primary hover:bg-gray-200'}`}
              >
                  Contactez-nous
              </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg focus:outline-none transition-colors duration-300 ${hasScrolled ? 'text-accent-DEFAULT hover:text-primary-DEFAULT' : 'text-gray-200 hover:text-white'}`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
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
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white border-b border-gray-200">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                        className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-semibold text-accent-DEFAULT hover:text-primary-DEFAULT hover:bg-primary-light transition-colors duration-200"
                      >
                        <span>{link.name}</span>
                        <FiChevronDown className={`h-5 w-5 transition-transform ${openMobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openMobileSubmenu === link.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-1 space-y-1"
                          >
                            {link.subLinks.map((subLink) => (
                              <Link
                                key={subLink.name}
                                to={subLink.href}
                                className="block px-4 py-2 rounded-lg text-base font-medium text-accent-light hover:text-primary-DEFAULT hover:bg-primary-light transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.href!}
                      className="block px-4 py-3 rounded-lg text-base font-semibold text-accent-DEFAULT hover:text-primary-DEFAULT hover:bg-primary-light transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="#"
                className="block w-full text-center mt-4 px-4 py-3 rounded-full text-base font-semibold text-white bg-primary hover:bg-primary-focus transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contactez-nous
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
