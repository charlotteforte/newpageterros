import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FiTarget, FiShield, FiCode } from 'react-icons/fi';

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
            </main>

            <Footer />
        </div>
    );
};

export default ScrapingAgencyPage;
