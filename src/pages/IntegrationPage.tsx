import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
    FiGitMerge,
    FiCreditCard, FiUsers, FiBriefcase, FiFileText, FiMail, 
    FiShoppingCart, FiCpu, FiMessageSquare, FiKey, FiTrendingUp 
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
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Intégration de Systèmes et d'APIs</h1>
                <p className="mt-6 text-lg text-gray-600">
                  Nous connectons vos applications à un écosystème de services pour automatiser et améliorer vos opérations.
                </p>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1614036125197-3b2d28574168?auto=format&fit=crop&w=1200&q=80"
                  alt="Illustration de connexions API et d'intégration de systèmes"
                  className="rounded-xl shadow-2xl w-full max-w-md"
                />
              </motion.div>
            </div>
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
                <div className="flex items-center text-primary mb-4">
                  <FiGitMerge className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Ne pas réinventer la roue</h2>
                </div>
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
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Galerie d'intégrations</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Explorez certaines des intégrations que nous maîtrisons pour construire des solutions puissantes et évolutives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className="bg-white rounded-xl shadow-lg group text-center p-8 flex flex-col items-center justify-center h-56 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
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

      </main>
      <Footer />
    </div>
  );
};

export default IntegrationPage;
