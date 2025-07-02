import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
    FiTarget, FiShield, FiCode, FiDatabase, FiArrowRight, FiTrendingUp, FiZap, FiEye
} from 'react-icons/fi';
import { FaAmazon } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';


const useCasesData = [
    {
        icon: <FiEye className="h-6 w-6 text-primary" />,
        title: "Veille concurrentielle",
        description: "Surveillez automatiquement les prix et produits de vos concurrents en temps réel.",
    },
    {
        icon: <FiTrendingUp className="h-6 w-6 text-primary" />,
        title: "Analyse de marché",
        description: "Extraire des avis en ligne pour alimenter des modèles d’IA et analyser les sentiments.",
    },
    {
        icon: <FiTarget className="h-6 w-6 text-primary" />,
        title: "Génération de leads",
        description: "Constituez des bases de leads qualifiés pour alimenter votre prospection commerciale.",
    },
    {
        icon: <FiCode className="h-6 w-6 text-primary" />,
        title: "Intelligence technologique",
        description: "Identifiez les technologies et outils utilisés par des entreprises pour proposer des services adaptés.",
    },
];

const ourApproach = [
    {
        icon: <FiZap size={40} className="text-primary" />,
        title: "Performance et Scalabilité",
        description: "Nous développons des scrapers robustes capables de collecter des millions de points de données de manière rapide et efficace, avec une infrastructure qui s'adapte à vos besoins.",
    },
    {
        icon: <FiShield size={40} className="text-primary" />,
        title: "Conformité et Éthique",
        description: "Le respect de la vie privée et des réglementations comme le RGPD est au cœur de nos préoccupations. Nous opérons avec une déontologie stricte pour un scraping responsable.",
    },
];

const ScrapingAgencyPage = () => {
    const FADE_IN_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="bg-white text-accent-DEFAULT font-sans">
            <Header />

            <main className="overflow-x-hidden">
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-primary-light">
                    <div className="container mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight">
                                Agence Web Scraping
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-accent-light max-w-3xl mx-auto">
                                Transformez le web en données structurées. Nous mettons en place des programmes de scraping performants, éthiques et conformes au RGPD.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Data Sources Section */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={FADE_IN_VARIANTS}
                    transition={{ duration: 0.5 }}
                    className="py-16 bg-white"
                >
                    <div className="container">
                        <h3 className="text-center text-accent-light font-semibold">Extraction depuis n'importe quelle source, y compris :</h3>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-500">
                            <FaAmazon className="h-10 w-auto text-gray-400 hover:text-[#FF9900] transition-colors" title="Amazon" />
                            <SiTrustpilot className="h-8 w-auto text-gray-400 hover:text-[#00B67A] transition-colors" title="Trustpilot" />
                            <span className="text-2xl font-bold text-gray-400 hover:text-[#003580] transition-colors" title="Booking.com">Booking.com</span>
                        </div>
                    </div>
                </motion.section>

                {/* Why Scraping Section */}
                <section className="py-24 bg-gray-50/70">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Le Web Scraping, un avantage compétitif majeur</h2>
                            <p className="mt-4 text-lg text-accent-light">
                                Le Web Scraping consiste à extraire de manière automatisée des données issues d’une ou plusieurs sources sur internet. Les usages du scraping sont très nombreux et peuvent présenter de nombreux avantages pour les entreprises.
                            </p>
                        </div>
                        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={90} duration={3} enableScrollSpy />%</span>
                                <p className="mt-2 text-accent-light">de réduction du temps de collecte manuelle</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={100} duration={3} enableScrollSpy />%</span>
                                <p className="mt-2 text-accent-light">de précision dans les données collectées</p>
                            </div>
                            <div className="p-8 bg-white rounded-xl shadow-sm border border-gray-100">
                                <span className="text-5xl font-bold text-primary"><CountUp end={24} duration={3} enableScrollSpy />/7</span>
                                <p className="mt-2 text-accent-light">surveillance et extraction en continu</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Use Cases Section */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Des applications concrètes pour votre business</h2>
                            <p className="mt-4 text-lg text-accent-light">
                                Le scraping de données ouvre la voie à des stratégies basées sur la data pour de nombreux départements de votre entreprise.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {useCasesData.map((useCase, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={FADE_IN_VARIANTS}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center"
                                >
                                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-light/30 mb-4">
                                        {useCase.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary">{useCase.title}</h3>
                                    <p className="mt-2 text-accent-light text-sm flex-grow">{useCase.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Approach Section */}
                <section className="py-24 bg-gray-50/70">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={FADE_IN_VARIANTS}
                                className="space-y-8"
                            >
                                {ourApproach.map((item, index) => (
                                    <div key={index} className="flex items-start gap-6">
                                        <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-white shadow-md">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                                            <p className="mt-2 text-accent-light">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={FADE_IN_VARIANTS}
                            >
                                <div className="relative aspect-square bg-white rounded-2xl shadow-lg p-8">
                                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary-light/10 to-transparent"></div>
                                    <div className="relative h-full w-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col justify-center items-center">
                                        <FiDatabase className="h-20 w-20 text-primary opacity-50 mb-4" />
                                        <p className="text-center font-semibold text-secondary">Infrastructure robuste</p>
                                        <p className="text-center text-accent-light text-sm">pour des données fiables</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary">Prêt à transformer les données en opportunités ?</h2>
                        <p className="mt-4 text-lg text-accent-light max-w-2xl mx-auto">Discutons de votre projet et voyons comment le web scraping peut accélérer votre croissance.</p>
                        <div className="mt-8">
                            <Link
                                to="#"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-primary hover:bg-primary-focus transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Contactez-nous <FiArrowRight />
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ScrapingAgencyPage;
