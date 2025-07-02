import { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    FiTarget, FiShield, FiCode, FiDatabase, FiArrowRight, FiTrendingUp, FiZap, FiEye, FiChevronDown
} from 'react-icons/fi';
import { FaAmazon, FaGoogle } from "react-icons/fa";
import { SiTrustpilot, SiLinkedin } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';

const useCasesData = [
    {
        icon: <FiEye className="h-8 w-8 text-primary" />,
        title: "Veille concurrentielle",
        description: "Surveillez automatiquement les prix et produits de vos concurrents en temps réel.",
    },
    {
        icon: <FiTrendingUp className="h-8 w-8 text-primary" />,
        title: "Analyse de marché",
        description: "Extraire des avis en ligne pour alimenter des modèles d’IA et analyser les sentiments.",
    },
    {
        icon: <FiTarget className="h-8 w-8 text-primary" />,
        title: "Génération de leads",
        description: "Constituez des bases de leads qualifiés pour alimenter votre prospection commerciale.",
    },
    {
        icon: <FiCode className="h-8 w-8 text-primary" />,
        title: "Intelligence technologique",
        description: "Identifiez les technologies et outils utilisés par des entreprises pour proposer des services adaptés.",
    },
];

const faqData = [
    {
        question: "Le web scraping est-il légal ?",
        answer: "Oui, le web scraping est légal lorsqu'il est pratiqué de manière éthique. Il consiste à collecter des données publiquement accessibles. Chez Terros, nous respectons les conditions d'utilisation des sites, le fichier robots.txt, et les réglementations comme le RGPD pour nous assurer que nos activités sont conformes."
    },
    {
        question: "Quelles données peut-on collecter ?",
        answer: "Nous pouvons extraire une grande variété de données : informations sur les produits, avis clients, offres d'emploi, données de marché, articles de presse, etc. Tant que l'information est publique, nous pouvons la structurer pour vous."
    },
    {
        question: "Comment garantissez-vous la qualité des données ?",
        answer: "Nous mettons en place des processus de validation et de nettoyage des données. Nos scrapers sont conçus pour être résilients aux changements de structure des sites, et nous effectuons des contrôles de qualité réguliers pour garantir la précision et la fraîcheur des données."
    }
];

const ScrapingAgencyPage = () => {
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
                            Agence Web Scraping
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
                        >
                            Transformez le web en données structurées. Nous développons des programmes de scraping performants, éthiques et conformes au RGPD.
                        </motion.p>
                    </div>
                </section>

                {/* Data Sources Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h3 className="text-center text-gray-500 font-semibold uppercase tracking-wider">Extraction depuis n'importe quelle source, y compris :</h3>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-500">
                            <FaAmazon className="h-10 w-auto text-gray-400 hover:text-gray-800 transition-colors" title="Amazon" />
                            <FaGoogle className="h-9 w-auto text-gray-400 hover:text-gray-800 transition-colors" title="Google" />
                            <SiLinkedin className="h-9 w-auto text-gray-400 hover:text-gray-800 transition-colors" title="LinkedIn" />
                            <SiTrustpilot className="h-8 w-auto text-gray-400 hover:text-gray-800 transition-colors" title="Trustpilot" />
                            <span className="text-2xl font-bold text-gray-400 hover:text-gray-800 transition-colors" title="Booking.com">Booking.com</span>
                        </div>
                    </div>
                </section>
                
                {/* Why Scraping Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Le Web Scraping, un avantage compétitif majeur</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Le Web Scraping consiste à extraire de manière automatisée des données issues de sources sur internet. Les usages sont très nombreux et peuvent présenter des avantages pour les entreprises.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={90} duration={3} enableScrollSpy />%</span>
                                <p className="mt-2 text-gray-600">de réduction du temps de collecte manuelle</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={100} duration={3} enableScrollSpy />%</span>
                                <p className="mt-2 text-gray-600">de précision dans les données collectées</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={24} duration={3} enableScrollSpy />/7</span>
                                <p className="mt-2 text-gray-600">surveillance et extraction en continu</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Use Cases Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Des applications concrètes pour votre business</h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Le scraping de données ouvre la voie à des stratégies basées sur la data pour de nombreux départements de votre entreprise.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {useCasesData.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                                    className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                                >
                                    <div className="p-4 bg-primary-light rounded-full mb-6">{useCase.icon}</div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">{useCase.title}</h3>
                                    <p className="text-gray-600 flex-grow">{useCase.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="py-24 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-6">Performance, Éthique et Conformité</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-primary">
                                            <FiZap size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary">Performance et Scalabilité</h3>
                                            <p className="mt-1 text-gray-600">Nous développons des scrapers robustes capables de collecter des millions de points de données, avec une infrastructure qui s'adapte à vos besoins.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary-light text-primary">
                                            <FiShield size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary">Conformité et Éthique</h3>
                                            <p className="mt-1 text-gray-600">Le respect du RGPD est au cœur de nos préoccupations. Nous opérons avec une déontologie stricte pour un scraping responsable.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative aspect-[4/3] bg-white rounded-2xl shadow-2xl p-8 flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                                <div className="relative text-center">
                                    <FiDatabase className="h-20 w-20 text-primary mx-auto opacity-80 mb-4" />
                                    <p className="font-semibold text-secondary text-lg">Infrastructure robuste</p>
                                    <p className="text-gray-600 text-sm">pour des données fiables et structurées</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-secondary">Questions fréquentes sur le Web Scraping</h2>
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
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">Prêt à transformer les données en opportunités ?</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Discutons de votre projet et voyons comment le web scraping peut accélérer votre croissance.</p>
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

export default ScrapingAgencyPage;
