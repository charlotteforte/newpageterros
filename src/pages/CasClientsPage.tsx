import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight } from 'react-icons/fi';

const caseStudies = [
  { title: 'Rythme', description: 'Module de scraping pour l’automatisation et l’optimisation des achats quotidiens', category: 'Scraping', image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1287&auto=format&fit=crop' },
  { title: 'EasyStiff', description: 'Plateforme d’analyse des données biomécaniques', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop' },
  { title: 'Hubby', description: 'Solution pour la gestion des espaces de bureaux', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1170&auto=format&fit=crop' },
  { title: 'Facturation Groupe Restauration', description: 'Automatiser la facturation client d’un groupe de restauration d’entreprise', category: 'Automatisation', image: 'https://images.unsplash.com/photo-1556742212-5b321f3c261b?q=80&w=1170&auto=format&fit=crop' },
  { title: 'Limonad', description: 'Outil marketing dédié aux plateformes de petites annonces', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1170&auto=format&fit=crop' },
  { title: 'Event by Serenest', description: 'Plateforme sur mesure d’évènementiel & Click and Collect', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1170&auto=format&fit=crop' },
  { title: 'Immo Fonctionnaire', description: 'Application web avec plus de 8 000 annonces immobilières', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1073&auto=format&fit=crop' },
  { title: 'Serenest', description: 'Application mobile pour accéder à ses services de restauration', category: 'Développement Mobile', image: 'https://images.unsplash.com/photo-1555774698-0b77e0ab232f?q=80&w=987&auto=format&fit=crop' },
  { title: 'GoServices', description: 'Plateforme sur mesure de conciergerie en ligne', category: 'Développement Web', image: 'https://images.unsplash.com/photo-1556740772-1a281a6e0f5b?q=80&w=1170&auto=format&fit=crop' },
];

const categories = ['All', 'Scraping', 'Automatisation', 'Développement Web', 'Développement Mobile'];

const CasClientsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredStudies = activeCategory === 'All'
    ? caseStudies
    : caseStudies.filter(study => study.category === activeCategory);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <section 
          className="relative bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/70 to-secondary/80"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[60vh] md:min-h-[70vh] pt-24 pb-20">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                  Cas Clients
                </h1>
                <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                  Nous accompagnons plus de 50 clients — startups, licornes, PME, grands groupes et institutions publiques — dans la mise en place de projets numériques variés.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center flex-wrap gap-4 mb-16">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 border-2 ${
                    activeCategory === category
                      ? 'bg-primary text-white border-primary shadow-lg'
                      : 'bg-transparent text-gray-600 border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group border border-gray-200/80"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative h-56">
                    <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute top-4 right-4 bg-primary/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 text-base">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Final Section — Call to Action */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Prêt à transformer votre vision en réalité ?
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discutons de la manière dont nous pouvons vous aider à atteindre vos objectifs avec une solution sur mesure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#" 
                className="mt-10 inline-flex items-center bg-white text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Nous contacter <FiArrowRight className="ml-2" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CasClientsPage;
