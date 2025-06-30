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
          className="relative bg-cover bg-center text-white min-h-[60vh] flex items-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1678483747899-e4896253163e?auto=format&fit=crop&w=1600&q=80')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="relative container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Léo, le premier développeur IA made in France 🇫🇷
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
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
        <section className="py-24 bg-white">
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

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Comme un vrai développeur</h3>
                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                    <p>
                      La particularité de Léo est sa capacité à interagir directement avec votre base de code — comme un vrai développeur.
                    </p>
                    <p>
                      Il peut lire, écrire, et déployer du code à la demande pour accélérer votre cycle de développement.
                    </p>
                </div>
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
                    alt="AI developer workflow"
                    className="rounded-lg shadow-2xl w-full max-w-lg"
                />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
              <motion.div
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
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
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
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
                className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100"
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
      </main>
      <Footer />
    </div>
  );
};

export default LeoPage;
