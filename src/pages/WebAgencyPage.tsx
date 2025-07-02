import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiTrendingUp, FiCheckCircle } from 'react-icons/fi';

const methodSteps = [
    {
        icon: <FiCheckCircle className="h-8 w-8 text-primary" />,
        title: "Compréhension du besoin",
        description: "Notre équipe de Product Management formée aux problématiques du développement Web analyse votre besoin et les différentes caractéristiques de votre activité pour proposer un Protocole Produit dynamique, vous permettant de comprendre et de contribuer aux différentes étapes du projet, son budget et son planning."
    },
    {
        icon: <FiLayers className="h-8 w-8 text-primary" />,
        title: "Maquettage du produit",
        description: "Nos designers conçoivent les maquettes et wireframes des interfaces les plus importantes du projet. Certaines interfaces nécessitent un design extrêmement précis pour assurer une expérience utilisateur millimétrée. D'autres doivent au contraire être plus générales pour ne pas ralentir inutilement le prototypage du projet. Nous mettons notre expertise de développement Web à disposition pour vous fournir le meilleur des deux mondes : précision et efficacité."
    },
    {
        icon: <FiCode className="h-8 w-8 text-primary" />,
        title: "Prototypage d’une première version",
        description: "Nous accordons une importance particulière au lancement rapide d'un prototype de votre plateforme Web.\n\nEn effet, un prototype permet de recueillir rapidement les premiers retours de vos utilisateurs cibles et de les intégrer directement au développement, sans alourdir le budget du projet."
    },
    {
        icon: <FiCloud className="h-8 w-8 text-primary" />,
        title: "Déploiement",
        description: "Notre équipe DevOps assure le déploiement sécurisé et adapté de votre projet sur la configuration cloud la plus cohérente en fonction du type d'utilisation. Inutile de dépenser 10 000 euros de frais AWS pour une plateforme métier n'accueillant que 60 utilisateurs mensuels. A contrario, un passage de votre entreprise au JT de 20h pourrait mettre à mal votre pauvre VPS déjà surmené...\n\nNous sommes là pour vous proposer l'architecture cloud aux paramètres spécifiques de votre plateforme Web."
    },
    {
        icon: <FiTrendingUp className="h-8 w-8 text-primary" />,
        title: "Évolution",
        description: "Votre application Web a vocation à évoluer en fonction des usages ! C'est tant mieux, car nos équipes d'experts Product managers et développeurs Web suivent en permanence les dernières actualités business et technologiques de votre secteur. D'une simple mise à jour de sécurité à l'ajout d'un nouveau module pour rester en adéquation avec les besoins de vos utilisateurs, nous restons à vos côté tout au long de la vie de votre projet de développement Web."
    }
];

const WebAgencyPage = () => {
  return (
    <div className="bg-white text-accent-DEFAULT">
      <Header />

      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            >
              Agence de développement Web
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
            >
              Nous transformons vos idées en interfaces Web dynamiques et intuitives.
            </motion.p>
          </div>
        </section>

        {/* "Notre offre" Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-6">Notre offre de développement Web</h2>
                        <div className="space-y-4 text-lg text-gray-600 text-left">
                            <p>
                                Nous sommes une agence de développement Web spécialisée dans la construction de sites et plateformes sur mesure.
                            </p>
                            <p>
                                Le développement Web permet d'accueillir vos visiteurs ou utilisateurs sur l'un des supports les plus universels du monde : le navigateur Web.
                            </p>
                            <p>
                                De la mise en place de sites internet pour mettre en valeur votre marque à la conception de plateformes Web métier d'automatisation de processus, notre équipe de développement Web est à votre disposition pour transformer vos idées en interfaces dynamiques, responsive et intuitives.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
        
        {/* "Notre méthode" Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-secondary"
              >
                Notre méthode de développement Web
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
              >
                Nous avons mis en place une méthode unique de développement Web, basée sur la méthode agile et le prototypage rapide.
              </motion.p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {methodSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">{step.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{step.description}</p>
                  </div>
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

export default WebAgencyPage;
