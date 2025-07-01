import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCode, FiMessageCircle, FiZap, FiCheck } from 'react-icons/fi';
import { FaRobot, FaBook } from 'react-icons/fa';

const LeoPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
          className="relative bg-cover bg-center text-white" 
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center min-h-[60vh] pt-40 pb-20">
              <motion.div
                className="text-center max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
                  Leo, le premier développeur IA 100% français 🇫🇷
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-8 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                        Léo est un puissant assistant de génération de code qui rejoint votre équipe de développement en quelques minutes. Inscrivez-vous pour obtenir un accès anticipé et tester les capacités de Léo en avant-première !
                    </p>
                    <div className="mt-10">
                        <a
                            href="#"
                            className="inline-block bg-primary text-white font-bold py-4 px-10 rounded-lg text-lg hover:bg-primary-focus transition-transform duration-300 transform hover:scale-105"
                        >
                            Obtenir un accès anticipé
                        </a>
                        <p className="mt-4 text-sm text-gray-500 font-semibold">👉 Léo par Terros</p>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* How it works section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Comment fonctionne Léo ?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Léo est un générateur de code propulsé par des modèles de langage avancés tels que Mistral, OpenAI, et Claude.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Comme un vrai développeur</h3>
                <ul className="space-y-4">
                    <li className="flex items-start">
                        <FiCheck className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-600">
                            <strong>Interaction directe :</strong> Léo se connecte à votre base de code pour comprendre, modifier et déployer des fonctionnalités.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <FiCheck className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-lg text-gray-600">
                            <strong>Développement autonome :</strong> Il peut lire, écrire et soumettre du code sur demande, accélérant ainsi votre flux de travail.
                        </span>
                    </li>
                </ul>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                 <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
                    alt="Tableau de bord présentant des graphiques d'analyse de données"
                    className="rounded-lg shadow-2xl w-full max-w-lg"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
              <motion.div
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <FiCode className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Interaction Directe avec le Code</h3>
                <p className="mt-2 text-gray-600">Léo se connecte à votre dépôt Git pour lire et écrire du code, en comprenant l'ensemble du contexte de votre projet.</p>
              </motion.div>
              <motion.div
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <FiMessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Commandes en Langage Naturel</h3>
                <p className="mt-2 text-gray-600">Donnez vos instructions en français. Léo comprend vos exigences et les traduit en code.</p>
              </motion.div>
              <motion.div
                className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary mx-auto mb-4">
                  <FiZap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Flux de Travail Automatisé</h3>
                <p className="mt-2 text-gray-600">De la génération de code au déploiement, Léo accélère votre cycle de développement, permettant à votre équipe de se concentrer sur des défis plus importants.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12 items-center">
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1620712943543-95fc69634367?q=80&w=1300&auto=format&fit=crop"
                  alt="IA apprenant et évoluant"
                  className="rounded-xl shadow-2xl w-full max-w-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Fonctionnalités Clés</h2>
                <ul className="space-y-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                        <FaRobot className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-bold text-gray-900">Autonomie Complète</h4>
                      <p className="mt-2 text-base text-gray-600">
                        Léo prend en charge des tâches complexes, de la conception à l'implémentation, en suivant vos directives de haut niveau.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                        <FaBook className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg leading-6 font-bold text-gray-900">Apprentissage Continu</h4>
                      <p className="mt-2 text-base text-gray-600">
                        Léo apprend de votre base de code, de vos conventions et de vos retours pour s'améliorer continuellement.
                      </p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeoPage;
