import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaPencilRuler, FaCode, FaRocket, FaSyncAlt } from 'react-icons/fa';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const processSteps = [
  {
    id: "01",
    icon: <FaPencilRuler className="h-8 w-8 text-primary" />,
    title: "Conception & Stratégie",
    description: "Nous transformons votre vision en une stratégie produit concrète. En collaboration étroite, nous définissons les objectifs, le périmètre et la feuille de route pour créer une solution qui répond parfaitement à vos besoins métier.",
    details: [
      "Ateliers de co-création",
      "Analyse des besoins utilisateurs",
      "Spécifications fonctionnelles",
      "Maquettage et prototypage (UI/UX)"
    ]
  },
  {
    id: "02",
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Développement Agile",
    description: "Nos équipes développent votre solution par itérations courtes et rapides. Cette approche nous permet de nous adapter aux changements, de vous livrer de la valeur en continu et de garantir une qualité de code irréprochable.",
    details: [
      "Sprints de 2 semaines",
      "Démos et retours réguliers",
      "Intégration et déploiement continus (CI/CD)",
      "Tests automatisés"
    ]
  },
  {
    id: "03",
    icon: <FaRocket className="h-8 w-8 text-primary" />,
    title: "Lancement & Déploiement",
    description: "Nous préparons et exécutons un lancement sans accroc. De la configuration de l'infrastructure à la mise en production, nous assurons une transition fluide pour vos utilisateurs.",
    details: [
      "Infrastructure cloud scalable",
      "Monitoring et alertes",
      "Plan de migration des données",
      "Formation des utilisateurs"
    ]
  },
  {
    id: "04",
    icon: <FaSyncAlt className="h-8 w-8 text-primary" />,
    title: "Évolution & Maintenance",
    description: "Un produit digital est un organisme vivant. Nous restons à vos côtés pour assurer sa pérennité, l'optimiser et l'enrichir de nouvelles fonctionnalités en fonction des retours utilisateurs et de vos objectifs.",
    details: [
      "Support technique réactif",
      "Maintenance corrective et préventive",
      "Optimisation des performances",
      "Feuille de route évolutive"
    ]
  }
];

const MethodePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-background text-foreground font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white">
                Notre Méthode : De l'Idée au Succès Digital
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Nous combinons agilité, expertise technique et vision produit pour construire des solutions sur-mesure qui génèrent un impact réel.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-secondary tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                Une approche structurée pour des résultats concrets
              </motion.h2>
              <motion.p 
                className="mt-6 text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Notre processus en 4 étapes garantit transparence, collaboration et excellence à chaque phase de votre projet.
              </motion.p>
            </div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {processSteps.map((step) => (
                <motion.div
                  key={step.id}
                  className="bg-primary-light p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-white ring-8 ring-primary/10">
                      {step.icon}
                    </div>
                    <span className="text-5xl font-bold text-primary/20 ml-auto">{step.id}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <FiCheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section className="py-20 md:py-32 bg-primary-light">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-secondary tracking-tight mb-6">
                  Plus qu'une méthode, un partenariat
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Notre accompagnement va au-delà de la simple exécution technique. Nous nous positionnons comme votre partenaire stratégique pour vous aider à prendre les bonnes décisions, à budgétiser intelligemment et à planifier chaque étape pour un succès durable.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Avec plus de 50 projets numériques à notre actif, nous mettons notre expérience à votre service pour anticiper les défis et maximiser votre retour sur investissement.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop" 
                  alt="Partenariat stratégique"
                  className="rounded-xl shadow-2xl object-cover w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-secondary">
                Prêt à donner vie à votre projet ?
              </h2>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                Discutons de vos ambitions. Notre première consultation est l'occasion d'explorer ensemble le potentiel de votre idée.
              </p>
              <a 
                href="#" 
                className="mt-10 inline-flex items-center bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Planifier un appel <FiArrowRight className="ml-3" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MethodePage;
