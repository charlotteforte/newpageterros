import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const StrapiAgencyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container px-4 mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              Agence Strapi
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
            >
              Nous développons rapidement vos projets Web et Mobile en nous basant sur le CMS Headless Strapi.
            </motion.p>
          </div>
        </section>
        <section className="py-16 md:py-24 bg-white">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">Notre offre de développement Strapi</h2>
                    <p className="text-lg text-gray-700 mb-4 text-left">
                        Nous sommes une agence spécialisée dans le développement de solutions web basées sur Strapi, adaptées à vos besoins spécifiques.
                    </p>
                    <p className="text-lg text-gray-700 mb-4 text-left">
                        Grâce à Strapi, un puissant CMS headless, nous construisons rapidement des sites et des plateformes sur mesure qui permettent à vos visiteurs et utilisateurs d'accéder à vos services via l'un des supports les plus universels : le navigateur Web.
                    </p>
                    <p className="text-lg text-gray-700 mb-8 text-left">
                        Que vous ayez besoin d'un site internet pour valoriser votre marque ou d'une plateforme métier intégrant des fonctionnalités avancées d'automatisation de processus, notre équipe de développeurs experts est prête à transformer vos idées en interfaces web dynamiques, responsives, et intuitives, tout en optimisant l'expérience de gestion de contenu grâce à Strapi.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-6 text-left">Notre méthode de développement Strapi</h2>
                    <p className="text-lg text-gray-700 text-left">
                        Nous avons mis en place une méthode unique de développement Strapi, basée sur la méthode agile et le prototypage rapide.
                    </p>
                </motion.div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StrapiAgencyPage;
