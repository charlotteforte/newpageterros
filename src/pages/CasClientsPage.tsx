import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const caseStudies = [
  { title: 'Rythme', description: 'Module de scraping pour l’automatisation et l’optimisation des achats quotidiens', category: 'Scraping' },
  { title: 'EasyStiff', description: 'Plateforme d’analyse des données biomécaniques', category: 'Développement Web' },
  { title: 'Hubby', description: 'Solution pour la gestion des espaces de bureaux', category: 'Développement Web' },
  { title: 'Facturation Groupe Restauration', description: 'Automatiser la facturation client d’un groupe de restauration d’entreprise', category: 'Automatisation' },
  { title: 'Limonad', description: 'Outil marketing dédié aux plateformes de petites annonces', category: 'Développement Web' },
  { title: 'Event by Serenest', description: 'Plateforme sur mesure d’évènementiel & Click and Collect', category: 'Développement Web' },
  { title: 'Immo Fonctionnaire', description: 'Application web avec plus de 8 000 annonces immobilières', category: 'Développement Web' },
  { title: 'Serenest', description: 'Application mobile pour accéder à ses services de restauration', category: 'Développement Mobile' },
  { title: 'GoServices', description: 'Plateforme sur mesure de conciergerie en ligne', category: 'Développement Web' },
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
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[60vh] pt-40 pb-20">
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
                  className={`px-6 py-2 font-semibold rounded-full transition-colors duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-primary/10'
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
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-8">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-secondary mb-3">{study.title}</h3>
                    <p className="text-gray-600">{study.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CasClientsPage;
