import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDatabase, FiLayout, FiZap, FiArrowRight, FiChevronDown, FiLayers, FiCode, FiCloud, FiTrendingUp } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const services = [
    {
        icon: <FiDatabase className="h-8 w-8 text-primary" />,
        title: "CMS Headless Puissant",
        description: "Nous utilisons Strapi pour découpler la gestion de contenu de sa présentation, offrant une flexibilité maximale.",
    },
    {
        icon: <FiLayout className="h-8 w-8 text-primary" />,
        title: "Interfaces sur Mesure",
        description: "Des designs dynamiques, responsives et intuitifs qui valorisent votre marque et engagent vos utilisateurs.",
    },
    {
        icon: <FiZap className="h-8 w-8 text-primary" />,
        title: "Développement Rapide",
        description: "Construisez et lancez vos projets web et mobiles plus vite grâce à notre expertise et la puissance de Strapi.",
    },
];

const methodSteps = [
    {
        icon: <FiLayers className="h-10 w-10 text-primary" />,
        title: "Analyse et Maquettage",
        description: "Nous commençons par une analyse approfondie de vos besoins pour concevoir des wireframes et des maquettes qui définissent la structure et l'expérience utilisateur de votre projet."
    },
    {
        icon: <FiCode className="h-10 w-10 text-primary" />,
        title: "Développement Back-end avec Strapi",
        description: "Notre équipe met en place une API robuste et scalable avec Strapi, en modélisant vos contenus pour une gestion simple et intuitive."
    },
    {
        icon: <FiCloud className="h-10 w-10 text-primary" />,
        title: "Développement Front-end et Déploiement",
        description: "Nous développons l'interface utilisateur avec les dernières technologies front-end et la connectons à Strapi. Nous assurons ensuite un déploiement sécurisé et optimisé."
    },
    {
        icon: <FiTrendingUp className="h-10 w-10 text-primary" />,
        title: "Évolution et Maintenance",
        description: "Nous vous accompagnons après le lancement pour faire évoluer votre projet, ajouter de nouvelles fonctionnalités et assurer sa maintenance technique."
    }
];

const faqData = [
    {
      question: "Qu'est-ce que Strapi et pourquoi l'utiliser ?",
      answer: "Strapi est un CMS (Content Management System) headless open-source. Il permet de créer des API de contenu rapidement. Nous l'utilisons pour découpler la gestion de contenu de l'interface utilisateur (front-end), ce qui offre une grande liberté pour construire des sites web et des applications modernes et performants."
    },
    {
      question: "Quels types de projets peut-on réaliser avec Strapi ?",
      answer: "Strapi est très polyvalent. Nous l'utilisons pour construire des sites vitrines, des blogs, des sites e-commerce, des applications mobiles, et des plateformes complexes. Sa nature headless le rend idéal pour tout projet nécessitant de distribuer du contenu sur différents canaux."
    },
    {
      question: "Comment se déroule un projet de développement avec Strapi ?",
      answer: "Notre approche est agile. Nous commençons par définir vos besoins, puis nous concevons les maquettes. Ensuite, nous développons un prototype avec Strapi pour le back-end et une technologie front-end moderne (React, Vue.js). Cela permet de valider le projet rapidement avant le déploiement."
    }
  ];

const StrapiAgencyPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    return (
    <div className="bg-white text-accent-DEFAULT font-sans">
        <Header />

        <main className="bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
                <div className="container mx-auto px-4 relative">
                    <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
                    >
                    Agence Strapi
                    </motion.h1>
                    <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
                    >
                    Nous développons rapidement vos projets Web et Mobile en nous basant sur le CMS Headless Strapi pour des solutions performantes et sur mesure.
                    </motion.p>
                </div>
            </section>

            {/* "Notre offre" Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Notre offre de développement Strapi</h2>
                            <div className="space-y-4 text-lg text-gray-600">
                                <p>
                                Nous sommes une agence spécialisée dans le développement de solutions web basées sur Strapi, adaptées à vos besoins spécifiques.
                                </p>
                                <p>
                                Grâce à Strapi, nous construisons rapidement des sites et des plateformes qui permettent à vos utilisateurs d'accéder à vos services via le navigateur Web.
                                </p>
                                <p>
                                Que vous ayez besoin d'un site pour valoriser votre marque ou d'une plateforme métier, notre équipe transforme vos idées en interfaces web dynamiques, responsives, et intuitives.
                                </p>
                            </div>
                        </motion.div>
                        <div className="grid grid-cols-1 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-start border border-gray-100"
                                >
                                    <div className="flex-shrink-0 mr-5">{service.icon}</div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* "Notre méthode" Section */}
            <section className="py-24 bg-gray-50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-secondary"
                  >
                    Notre méthode de développement Strapi
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
                  >
                    Une approche agile et transparente pour des résultats concrets, rapides et évolutifs.
                  </motion.p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {methodSteps.map((step, index) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col text-center items-center"
                    >
                      <div className="p-4 bg-primary-light rounded-full mb-6">{step.icon}</div>
                      <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                      <p className="text-gray-600 flex-grow">{step.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary">Questions fréquentes sur nos développements Strapi</h2>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:bg-primary-light transition-colors"
                      >
                        <span className="text-lg font-semibold text-secondary">{faq.question}</span>
                        <FiChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-gray-600">
                                <p>{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary">Prêt à lancer votre projet avec Strapi ?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider.</p>
                <Link
                  to="#"
                  className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-primary-focus shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contactez-nous
                  <FiArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </section>
        </main>
        <Footer />
    </div>
    );
};

export default StrapiAgencyPage;
