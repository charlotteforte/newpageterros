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
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-black/80"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[80vh] pt-40 pb-20">
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
                  Créateurs d'expériences numériques sur mesure.
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                  De la startup audacieuse à l'entreprise établie, nous transformons vos idées en plateformes, applications et sites web performants.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 1 — Une agence de développement sur mesure */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="uppercase text-primary font-bold tracking-wider mb-2">Notre approche</div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Un partenaire technologique, pas seulement un fournisseur</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nous répondons aux besoins de clients variés, des startups aux grandes entreprises internationales. Notre force réside dans notre capacité à fournir des solutions sur mesure qui génèrent une valeur commerciale tangible.
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
        <section className="py-6 bg-white/80 backdrop-blur-sm sticky top-24 z-40 shadow-sm hidden md:block border-y border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-center space-x-4">
                    {summaryLinks.map(link => (
                        <a 
                            key={link.name} 
                            href={link.href}
                            className="text-base font-medium text-gray-600 hover:text-primary transition-colors duration-300 px-4 py-2 rounded-full hover:bg-gray-200"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </section>

        {/* Section 3 — Notre champ d’action */}
        <section id="champ-action" className="py-24 bg-gray-50">
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
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1170&auto=format&fit=crop" 
                            alt="Espace de travail de développement web et mobile avec un ordinateur portable, un téléphone et une tablette"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Notre champ d’action dans la création de sites web et mobile</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            Nous sommes fiers de travailler dans de nombreux secteurs, notamment l'immobilier et les services, l'automobile, l'industrie, la culture, le luxe, l'hôtellerie, la robotique et la recherche.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            À propos de notre approche, nous mettons un accent particulier sur l'accompagnement, la recherche constante de l'excellence et une compréhension approfondie des besoins spécifiques de nos clients.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 4 — La Plateformisation */}
        <section id="plateformisation" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Notre Spécialité : La Plateformisation</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            L'une de nos spécialités distinctives est la plateformisation. Nous sommes des experts dans la création de supports sur mesure qui permettent à différentes parties prenantes (clients, utilisateurs, prestataires, administrateurs, etc.) d’interagir facilement.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed font-semibold text-primary">
                            Notre priorité : la scalabilité pour accompagner votre croissance.
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
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop" 
                            alt="Tableau de bord d'une application avec des graphiques et des données"
                            className="rounded-lg shadow-2xl object-cover max-w-lg w-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 5 — Ce qui nous différencie */}
        <section id="differentiation" className="py-24 bg-gray-50">
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
                        <div className="uppercase text-primary font-bold tracking-wider mb-2">Notre valeur ajoutée</div>
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">Ce qui nous différencie</h2>
                        <div className="space-y-6">
                            {differentiators.map(item => (
                                <div key={item.title} className="bg-white rounded-xl p-6 flex items-start transition-all duration-300 shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <FiCheckCircle className="h-6 w-6 text-primary" />
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                        <p className="mt-1 text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Section 6 — L’Évolution Technologique */}
        <section id="technologie" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">L’Évolution Technologique : IA, Blockchain et Réalité Augmentée</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-4">
                            En plus de nos compétences en création de site web et mobile, nous explorons les technologies de demain : IA, blockchain, réalité augmentée.
                        </p>
                        <p className="text-lg text-primary leading-relaxed font-semibold">
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
        <section id="expertises" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.h2 
                        className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
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
                                className="bg-white text-secondary font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer border hover:border-transparent border-gray-200 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1"
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
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Prêt à transformer votre vision en réalité ?
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
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
                className="mt-10 inline-flex items-center bg-primary text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-primary/40"
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
