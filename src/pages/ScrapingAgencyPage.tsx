import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FiTarget, FiShield, FiCode, FiCheckCircle, FiDatabase, FiArrowRight } from 'react-icons/fi';
import { FaAmazon } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const featureCards = [
    {
        icon: <FiTarget className="h-8 w-8 text-primary" />,
        title: "Scraping Performant",
        description: "Collecte de données à grande échelle, rapide et efficace pour des insights pertinents.",
    },
    {
        icon: <FiShield className="h-8 w-8 text-primary" />,
        title: "Conformité RGPD",
        description: "Respect total des réglementations sur la protection des données personnelles.",
    },
    {
        icon: <FiCode className="h-8 w-8 text-primary" />,
        title: "Approche Éthique",
        description: "Une déontologie stricte pour un scraping web responsable et respectueux.",
    },
];

const useCases = [
    "Surveiller les prix concurrentiels en temps réel.",
    "Extraire des avis pour l'analyse de sentiment et l'IA.",
    "Constituer des bases de leads qualifiés pour la prospection.",
    "Identifier les technologies utilisées par des entreprises cibles.",
    "Et de nombreux autres cas d'usages sur mesure !"
];

const GridPattern = () => (
    <div className="absolute inset-0 h-full w-full overflow-hidden">
        <svg
            className="absolute h-full w-full fill-gray-400/5 [mask-image:radial-gradient(black,transparent_60%)]"
            aria-hidden="true"
        >
            <defs>
                <pattern
                    id="grid-pattern"
                    width="72"
                    height="72"
                    patternUnits="userSpaceOnUse"
                    x="50%"
                    y="50%"
                    patternTransform="translate(-36 -36)"
                >
                    <path d="M0 36V.5M36 .5V0"></path>
                </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#grid-pattern)"></rect>
        </svg>
    </div>
);


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
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="relative pt-40 pb-24 text-center bg-gradient-to-b from-primary-light/10 via-white to-white"
                >
                    <GridPattern />
                    <div className="container relative">
                        <motion.h1
                            variants={FADE_IN_VARIANTS}
                            className="text-4xl md:text-6xl font-bold text-secondary tracking-tighter"
                        >
                            Agence Web Scraping
                        </motion.h1>
                        <motion.p
                            variants={FADE_IN_VARIANTS}
                            className="mt-6 text-lg md:text-xl text-accent-light max-w-3xl mx-auto"
                        >
                            Nous mettons en place des programmes performants de Web Scraping en respectant les standards RGPD et déontologiques.
                        </motion.p>
                        <motion.div variants={FADE_IN_VARIANTS} className="mt-8">
                             <Link
                                to="#"
                                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-white bg-primary hover:bg-primary-focus transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                Démarrer un projet <FiArrowRight />
                            </Link>
                        </motion.div>
                    </div>
                </motion.section>

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
                        <h3 className="text-center text-accent-light font-semibold">Nos principales sources d’extraction</h3>
                        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-500">
                            <FaAmazon className="h-10 w-auto text-gray-400 hover:text-[#FF9900] transition-colors" title="Amazon" />
                            <SiTrustpilot className="h-8 w-auto text-gray-400 hover:text-[#00B67A] transition-colors" title="Trustpilot" />
                            <span className="text-2xl font-bold text-gray-400 hover:text-[#003580] transition-colors" title="Booking.com">Booking.com</span>
                        </div>
                    </div>
                </motion.section>

                {/* Features Section */}
                <section className="py-24 bg-gray-50/70">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">L'extraction de données, sans compromis.</h2>
                            <p className="mt-4 text-lg text-accent-light">
                                Notre expertise garantit une collecte de données web fiable, éthique et entièrement conforme aux réglementations en vigueur.
                            </p>
                        </div>

                        <div className="mt-16 grid md:grid-cols-3 gap-8">
                            {featureCards.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    variants={FADE_IN_VARIANTS}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                                >
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-light/30 mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary">{feature.title}</h3>
                                    <p className="mt-2 text-accent-light">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Offer Section */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={FADE_IN_VARIANTS}
                                transition={{ duration: 0.5 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight">Libérez le potentiel de vos données</h2>
                                <p className="mt-6 text-lg text-accent-light">
                                    Le Web Scraping automatise l'extraction de données depuis n'importe quelle source en ligne. Les cas d'usages sont infinis et offrent des avantages compétitifs majeurs pour votre entreprise.
                                </p>
                                <div className="mt-8 flex items-center justify-center h-48 w-48 rounded-full bg-primary-light/30 mx-auto lg:mx-0">
                                    <FiDatabase className="h-24 w-24 text-primary opacity-80" />
                                </div>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                variants={{
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.1
                                        }
                                    }
                                }}
                                className="space-y-6"
                            >
                                {useCases.map((useCase, index) => (
                                    <motion.div key={index} variants={FADE_IN_VARIANTS} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-sm transition-all">
                                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-light/40 flex items-center justify-center mt-0.5">
                                            <FiCheckCircle className="h-4 w-4 text-primary" />
                                        </div>
                                        <span className="text-accent-light">{useCase}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>
                
                {/* CTA Section */}
                <section className="py-24 bg-gray-50/70">
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
