import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FiTarget, FiShield, FiCode, FiCheckCircle } from 'react-icons/fi';
import { FaAmazon } from "react-icons/fa";
import { SiTrustpilot, SiBookingdotcom } from "react-icons/si";

const ScrapingAgencyPage = () => {
    return (
        <div className="bg-white text-accent-DEFAULT font-sans">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-primary-light">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight">
                            Agence Scraping
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-accent-light max-w-3xl mx-auto">
                            Nous mettons en place des programmes performants de Web Scraping en respectant les standards RGPD et déontologique.
                        </p>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <FiTarget className="mx-auto h-12 w-12 text-primary" />
                                <h3 className="mt-4 text-xl font-bold text-secondary">Scraping performant</h3>
                                <p className="mt-2 text-accent-light">
                                    Collecte de données à grande échelle rapide et efficace.
                                </p>
                            </div>
                            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <FiShield className="mx-auto h-12 w-12 text-primary" />
                                <h3 className="mt-4 text-xl font-bold text-secondary">Conformité RGPD</h3>
                                <p className="mt-2 text-accent-light">
                                    Respect des réglementations sur la protection des données.
                                </p>
                            </div>
                            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                                <FiCode className="mx-auto h-12 w-12 text-primary" />
                                <h3 className="mt-4 text-xl font-bold text-secondary">Approche éthique</h3>
                                <p className="mt-2 text-accent-light">
                                    Une déontologie stricte pour un scraping responsable.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Data Sources Section */}
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Nos principales sources d’extraction</h2>
                        </div>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-500">
                            <FaAmazon className="h-12 w-12 md:h-16 md:w-16 text-[#FF9900]" title="Amazon" />
                            <SiTrustpilot className="h-12 w-12 md:h-16 md:w-16 text-[#00B67A]" title="Trustpilot" />
                            <SiBookingdotcom className="h-12 w-12 md:h-16 md:w-16 text-[#003580]" title="Booking.com" />
                        </div>
                    </div>
                </section>

                {/* Offer Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">Notre offre de Scraping</h2>
                            <p className="text-lg text-accent-light mb-8">
                                Le Web Scraping consiste à extraire de manière automatisée des données issues d’une ou plusieurs sources sur internet. Les usages du scraping sont très nombreux et peuvent présenter de nombreux avantages pour les entreprises.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <FiCheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-accent-light">Surveiller automatiquement les prix d’un ou plusieurs produits concurrents en temps réel</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-accent-light">Extraire des avis en ligne pour alimenter des modèles d’IA sur mesure</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-accent-light">Constituer des bases de leads qualifiés pour alimenter sa prospection</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-accent-light">Identifier les technologies et outils utilisés par des entreprises pour leur proposer des services adaptés</span>
                                </li>
                                <li className="flex items-start">
                                    <FiCheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                                    <span className="text-accent-light">Et de nombreux autres cas d’usages !</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ScrapingAgencyPage;
