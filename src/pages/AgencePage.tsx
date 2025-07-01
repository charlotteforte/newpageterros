import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const summaryLinks = [
  { name: "Notre champ d'action", href: '#champ-action' },
  { name: 'La Plateformisation', href: '#plateformisation' },
  { name: 'Ce qui nous différencie', href: '#differentiation' },
  { name: 'Évolution technologique', href: '#technologie' },
  { name: 'Nos expertises', href: '#expertises' },
];

const differentiators = [
    { title: 'Méthode de Gestion de Projet', description: 'Suivi rigoureux, supports internes dédiés.' },
    { title: 'Modularisation', description: 'Composants réutilisables pour une mise en œuvre rapide.' },
    { title: 'Agilité', description: 'Accompagnement client sur toute la durée du projet.' },
];

const expertises = [
    'Développement Web', 'Développement Mobile', 'Applications sur mesure', 'Data & Scraping', 'Automatisation', 'Conseil & Stratégie'
];

const AgencePage = () => {
  return (
    <div className="bg-secondary text-base-content font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[70vh] pt-40 pb-20">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  À propos de Terros
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                  Nous sommes une agence de création de sites, plateformes et applications Web, Mobile et Data.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 1 — Une agence de développement sur mesure */}
        <section className="py-32 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">Une agence de développement sur mesure</h2>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            Notre expertise en création de solutions technologiques sur mesure nous permet de répondre aux besoins diversifiés de nos clients, allant des startups en pleine croissance aux grandes entreprises générant plus de 1 milliard d'euros de revenus. Nous collaborons également avec des entreprises internationales pour fournir des solutions de classe mondiale.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1170&auto=format&fit=crop" 
                            alt="Maquette de l'application mobile Terros sur un smartphone"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 2 — Sommaire */}
        <section className="py-6 bg-secondary/80 backdrop-blur-sm sticky top-24 z-40 shadow-lg hidden md:block border-y border-gray-700">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-center space-x-8">
                    {summaryLinks.map(link => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-base font-medium text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </section>

        {/* Section 3 — Notre champ d’action */}
        <section id="champ-action" className="py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1559028006-44a36b17c365?q=80&w=1200&auto=format&fit=crop" 
                            alt="Capture d'écran d'un article de blog sur un ordinateur portable"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">Notre champ d’action dans la création de sites web et mobile</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            Nous sommes fiers de travailler dans de nombreux secteurs, notamment l'immobilier et les services, l'automobile, l'industrie, la culture, le luxe, l'hôtellerie, la robotique et la recherche.
                        </p>
                        <p className="text-lg text-gray-400 leading-relaxed">
                            À propos de notre approche, nous mettons un accent particulier sur l'accompagnement, la recherche constante de l'excellence et une compréhension approfondie des besoins spécifiques de nos clients.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 4 — La Plateformisation */}
        <section id="plateformisation" className="relative py-40 bg-secondary overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop" 
                    alt="Plateformisation background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">Notre Spécialité : La Plateformisation</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-4">
                        Nous sommes experts dans la création de supports sur mesure qui permettent à différentes parties prenantes (clients, utilisateurs, prestataires, administrateurs, etc.) d’interagir facilement.
                    </p>
                    <p className="text-xl text-accent leading-relaxed font-bold">
                        Notre priorité : la scalabilité pour accompagner votre croissance.
                    </p>
                </motion.div>
            </div>
        </section>

        {/* Section 5 — Ce qui nous différencie */}
        <section id="differentiation" className="py-32 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1170&auto=format&fit=crop" 
                            alt="Page d'accueil du site web Domaines Ott par Terros affichée sur un écran"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-8">Ce qui nous différencie</h2>
                        <div className="space-y-6">
                            {differentiators.map(item => (
                                <div key={item.title} className="bg-secondary rounded-xl p-6 flex items-start transition-all duration-300 hover:bg-secondary/50 hover:-translate-y-2 border-l-4 border-primary">
                                    <FiCheckCircle className="h-8 w-8 text-accent mt-1 flex-shrink-0" />
                                    <div className="ml-4">
                                        <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                        <p className="mt-2 text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 6 — L’Évolution Technologique */}
        <section id="technologie" className="py-32 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">L’Évolution Technologique : IA, Blockchain et Réalité Augmentée</h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-4">
                            En plus de nos compétences en création de site web et mobile, nous explorons les technologies de demain : IA, blockchain, réalité augmentée.
                        </p>
                        <p className="text-lg text-accent leading-relaxed font-semibold">
                            Notre mission reste la même : rendre simple ce qui est compliqué.
                        </p>
                    </motion.div>
                    <motion.div
                        className="flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img 
                            src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=1170&auto=format&fit=crop" 
                            alt="Illustration abstraite de connexions neuronales symbolisant l'IA"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Nos expertises */}
        <section id="expertises" className="py-32 bg-base-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-white tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        Nos expertises
                    </motion.h2>
                    <motion.div 
                        className="mt-12 flex flex-wrap justify-center gap-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {expertises.map((expertise, index) => (
                            <motion.div
                                key={expertise}
                                className="bg-secondary text-gray-300 font-semibold px-5 py-3 rounded-full transition-colors duration-300 hover:bg-primary hover:text-white cursor-pointer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                {expertise}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Final Section — Call to Action */}
        <section className="py-32 bg-secondary">
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
              className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Chez Terros, nous croyons en la collaboration, l'innovation et l'excellence technologique. Contactez-nous dès aujourd'hui pour discuter de votre projet.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#" 
                className="mt-8 inline-flex items-center bg-primary text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/30"
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

export default AgencePage;
