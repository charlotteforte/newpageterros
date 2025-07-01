import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
    FiGitMerge,
    FiCreditCard, FiUsers, FiBriefcase, FiFileText, FiMail, 
    FiShoppingCart, FiCpu, FiMessageSquare, FiKey, FiTrendingUp, FiArrowRight
} from 'react-icons/fi';

const integrations = [
    { name: 'Sellsy', category: 'CRM', icon: <FiBriefcase className="w-10 h-10 mx-auto" /> },
    { name: 'Stripe', category: 'Paiement', icon: <FiCreditCard className="w-10 h-10 mx-auto" /> },
    { name: 'DocuSign', category: 'Contrats', icon: <FiFileText className="w-10 h-10 mx-auto" /> },
    { name: 'Payfit', category: 'RH', icon: <FiUsers className="w-10 h-10 mx-auto" /> },
    { name: 'Eden AI', category: 'IA', icon: <FiCpu className="w-10 h-10 mx-auto" /> },
    { name: 'Mailjet', category: 'Emailing', icon: <FiMail className="w-10 h-10 mx-auto" /> },
    { name: 'Innovorder', category: 'Logiciel de caisse', icon: <FiShoppingCart className="w-10 h-10 mx-auto" /> },
    { name: 'Tactill', category: 'Logiciel de caisse', icon: <FiShoppingCart className="w-10 h-10 mx-auto" /> },
    { name: 'FlexAccess', category: 'Contrôle d\'accès', icon: <FiKey className="w-10 h-10 mx-auto" /> },
    { name: 'PiElectronique', category: 'Paiement', icon: <FiCreditCard className="w-10 h-10 mx-auto" /> },
    { name: 'SMSFactor', category: 'SMS', icon: <FiMessageSquare className="w-10 h-10 mx-auto" /> },
    { name: 'Sogecommerce', category: 'Paiement', icon: <FiCreditCard className="w-10 h-10 mx-auto" /> },
    { name: 'Pigment', category: 'Business Planning', icon: <FiTrendingUp className="w-10 h-10 mx-auto" /> },
];

const IntegrationPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative flex items-center justify-center text-center bg-cover bg-center min-h-[60vh] md:min-h-[70vh]"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-primary/70 to-secondary/80" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">
                Intégration de Systèmes et d'APIs
              </h1>
              <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
                Nous connectons vos applications à un écosystème de services pour automatiser et améliorer vos opérations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Informational Block */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <div className="uppercase text-primary font-bold tracking-wider mb-2">Notre Philosophie</div>
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">Ne pas réinventer la roue</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Le métier de développeur a beaucoup changé depuis les débuts d’internet. Dans les années 2000, il fallait quasiment tout créer soi-même pour atteindre le résultat escompté.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  De nos jours, il est au contraire primordial de ne pas réinventer la roue à chaque projet ! La capacité à intégrer des ressources déjà existantes est essentielle pour optimiser la délivrabilité, la performance et le budget. Découvrez les principales intégrations que nous avons déjà réalisées pour nos clients : paiements, contrats, emailing, ou encore logiciels de caisse.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                 <img 
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1169&auto=format&fit=crop" 
                    alt="Équipe collaborant sur un projet avec des graphiques"
                    className="rounded-lg shadow-2xl w-full max-w-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integration Gallery */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="uppercase text-primary font-bold tracking-wider mb-2">Nos Partenaires Technologiques</div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Galerie d'intégrations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Explorez certaines des intégrations que nous maîtrisons pour construire des solutions puissantes et évolutives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className="bg-white rounded-xl group text-center p-8 flex flex-col items-center justify-center h-56 transition-all duration-300 border border-gray-200/80 hover:shadow-xl hover:-translate-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                    {integration.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-secondary">Intégration {integration.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{integration.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Section — Call to Action */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              Prêt à connecter vos systèmes ?
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discutons de la manière dont nous pouvons intégrer les meilleurs outils pour optimiser vos processus.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a 
                href="#" 
                className="mt-10 inline-flex items-center bg-white text-primary font-bold py-4 px-10 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-xl"
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

export default IntegrationPage;
