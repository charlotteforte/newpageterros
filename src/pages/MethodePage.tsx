import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FaPencilRuler, FaCode, FaRocket, FaSyncAlt, FaUsers, FaListAlt, FaBullseye } from 'react-icons/fa';

const steps = [
  {
    icon: <FaPencilRuler className="h-8 w-8 text-primary" />,
    title: "Conception",
    description: "Nous imaginons et planifions avec vous les fonctionnalités les plus à mêmes de répondre à vos problématiques métier."
  },
  {
    icon: <FaCode className="h-8 w-8 text-primary" />,
    title: "Développement agile",
    description: "Applications web, mobile, outils d'automatisation... Nous mettons nos nombreux savoirs faire à votre service en itérant de manière agile tout au long du processus de développement."
  },
  {
    icon: <FaRocket className="h-8 w-8 text-primary" />,
    title: "Déploiement",
    description: "Votre projet mis en ligne en un temps record, sur votre propre infrastructure ou nos serveurs dédiés sécurisés."
  },
  {
    icon: <FaSyncAlt className="h-8 w-8 text-primary" />,
    title: "Évolution",
    description: "Un bon produit est un produit qui évolue. Nous demeurons à vos côtés sur toute la durée de votre projet pour assurer la maintenance et l'ajout de nouvelles fonctionnalités."
  }
];

const questions = [
  {
    icon: <FaUsers className="h-6 w-6 text-primary" />,
    text: "S'agit-il d'un projet à destination du grand public ou de vos équipes métiers ?"
  },
  {
    icon: <FaListAlt className="h-6 w-6 text-primary" />,
    text: "Quelles seront les principales fonctionnalités du projet ?"
  },
  {
    icon: <FaBullseye className="h-6 w-6 text-primary" />,
    text: "Quel sera l'usage type de cette plateforme ?"
  }
];

const MethodePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <section className="pt-40 pb-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-secondary tracking-tighter">
                Méthode de développement agile
              </h1>
              <p className="mt-6 text-xl md:text-2xl text-accent">
                Prototyper. Développer. Itérer.
              </p>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Notre méthode de développement Web et Mobile agile vise à concevoir des produits de manière efficace et pragmatique.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                Développer une plateforme ou application sur mesure : mode d’emploi
              </motion.h2>
              <motion.p 
                className="mt-6 text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Notre méthode de développement agile se découpe en 4 étapes successives : conception, développement, déploiement, évolution. Ces 4 étapes visent à atteindre un objectif précis : lancer une première version de votre projet dans un délai restreint, afin de le confronter dès que possible à vos utilisateurs cibles et mettre à profit leurs retours pour itérer efficacement sur le produit.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary">{step.title}</h3>
                    <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                Comprendre le besoin
              </motion.h2>
              <motion.p 
                className="mt-6 text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                La phase de conception vise avant tout à déterminer avec précision l'objectif du projet en préparation.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="space-y-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                {questions.map((q, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {q.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-semibold text-secondary">{q.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Nous mettons à profit notre expertise, acquise à travers plus de 50 projets numériques, pour vous aider à répondre à ces questions.
                </p>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop" 
                  alt="Team brainstorming"
                  className="rounded-lg shadow-xl object-cover w-full"
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Prêt à démarrer votre projet ?
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contactez-nous pour discuter de vos idées et voir comment nous pouvons vous aider à les concrétiser.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#" 
                className="mt-8 inline-block bg-primary text-white font-bold py-4 px-8 rounded-lg text-lg hover:bg-primary-dark transition-colors duration-300"
              >
                Nous contacter
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
