import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FiDatabase, FiLayout, FiZap, FiChevronsRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const StrapiAgencyPage: React.FC = () => {
    const featureCards = [
        {
          icon: <FiDatabase className="h-8 w-8 text-primary" />,
          title: 'CMS Headless Puissant',
          description: 'Nous utilisons Strapi pour découpler la gestion de contenu de sa présentation, offrant une flexibilité maximale.',
        },
        {
          icon: <FiLayout className="h-8 w-8 text-primary" />,
          title: 'Interfaces sur Mesure',
          description: 'Des designs dynamiques, responsives et intuitifs qui valorisent votre marque et engagent vos utilisateurs.',
        },
        {
          icon: <FiZap className="h-8 w-8 text-primary" />,
          title: 'Développement Rapide',
          description: 'Construisez et lancez vos projets web et mobiles plus vite grâce à notre expertise et à la puissance de Strapi.',
        },
      ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 pt-32 pb-20 md:pt-48 md:pb-32">
        <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-primary font-semibold uppercase tracking-wider">Agence Strapi</span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mt-2 mb-6">
                Développement Web et Mobile avec Strapi
                </h1>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600">
                Nous développons rapidement vos projets en nous basant sur le CMS Headless Strapi pour des solutions performantes et sur mesure.
                </p>
            </motion.div>
            </div>
        </div>
        </section>

        {/* Offer Section */}
        <section className="py-20 md:py-28">
            <div className="container px-4 mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Notre offre de développement Strapi
                  </h2>
                  <div className="space-y-4 text-lg text-gray-700">
                    <p>
                      Nous sommes une agence spécialisée dans le développement de solutions web basées sur Strapi, adaptées à vos besoins spécifiques.
                    </p>
                    <p>
                      Grâce à Strapi, un puissant CMS headless, nous construisons rapidement des sites et des plateformes sur mesure qui permettent à vos visiteurs et utilisateurs d'accéder à vos services via l'un des supports les plus universels : le navigateur Web.
                    </p>
                    <p>
                      Que vous ayez besoin d'un site internet pour valoriser votre marque ou d'une plateforme métier intégrant des fonctionnalités avancées d'automatisation de processus, notre équipe de développeurs experts est prête à transformer vos idées en interfaces web dynamiques, responsives, et intuitives, tout en optimisant l'expérience de gestion de contenu grâce à Strapi.
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="space-y-6"
                >
                  {featureCards.map((card, index) => (
                    <div key={index} className="flex items-start p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300">
                      <div className="flex-shrink-0 mr-6">{card.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                        <p className="text-gray-600">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

        {/* Method Section */}
        <section className="py-20 md:py-28 bg-gray-50">
        <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Notre méthode de développement Strapi
            </h2>
            <p className="text-lg text-gray-600">
                Nous avons mis en place une méthode unique de développement Strapi, basée sur la méthode agile et le prototypage rapide.
            </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-4">1. Méthode Agile</h3>
                <p className="text-gray-700">
                Nous travaillons par itérations courtes (sprints) pour vous livrer de la valeur rapidement et en continu. Cette approche flexible permet d'ajuster le projet en fonction de vos retours et des évolutions du marché.
                </p>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 bg-white rounded-xl shadow-md border border-gray-100">
                <h3 className="text-2xl font-bold text-primary mb-4">2. Prototypage Rapide</h3>
                <p className="text-gray-700">
                Nous créons des prototypes interactifs pour valider les concepts et l'expérience utilisateur avant le développement. Cela permet de visualiser le produit final et de s'assurer qu'il répond parfaitement à vos attentes.
                </p>
            </motion.div>
            </div>
        </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-20">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Prêt à lancer votre projet avec Strapi ?</h2>
                <p className="text-lg md:text-xl text-primary-light mb-8 max-w-2xl mx-auto">
                  Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à construire une solution web performante.
                </p>
                <Link
                  to="#"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-full text-lg hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105"
                >
                  Contactez-nous <FiChevronsRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default StrapiAgencyPage;
