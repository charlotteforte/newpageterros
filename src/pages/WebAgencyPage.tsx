import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiTrendingUp, FiCheckCircle, FiMonitor, FiTerminal, FiUsers, FiArrowRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

const services = [
    {
        icon: <FiMonitor className="h-8 w-8 text-primary" />,
        title: "Sites internet sur mesure",
        description: "Nous créons des sites vitrines et e-commerce qui mettent en valeur votre marque et captivent votre audience."
    },
    {
        icon: <FiTerminal className="h-8 w-8 text-primary" />,
        title: "Plateformes Web métier",
        description: "Nous développons des applications Web complexes pour automatiser vos processus et améliorer votre productivité."
    },
    {
        icon: <FiUsers className="h-8 w-8 text-primary" />,
        title: "Interfaces dynamiques et intuitives",
        description: "Nous concevons des expériences utilisateur fluides et engageantes qui sont à la fois belles et fonctionnelles."
    }
];

const methodSteps = [
    {
        icon: <FiCheckCircle className="h-10 w-10 text-primary" />,
        title: "Compréhension du besoin",
        description: "Notre équipe de Product Management formée aux problématiques du développement Web analyse votre besoin et les différentes caractéristiques de votre activité pour proposer un Protocole Produit dynamique, vous permettant de comprendre et de contribuer aux différentes étapes du projet, son budget et son planning."
    },
    {
        icon: <FiLayers className="h-10 w-10 text-primary" />,
        title: "Maquettage du produit",
        description: "Nos designers conçoivent les maquettes et wireframes des interfaces les plus importantes du projet. Certaines interfaces nécessitent un design extrêmement précis pour assurer une expérience utilisateur millimétrée. D'autres doivent au contraire être plus générales pour ne pas ralentir inutilement le prototypage du projet. Nous mettons notre expertise de développement Web à disposition pour vous fournir le meilleur des deux mondes : précision et efficacité."
    },
    {
        icon: <FiCode className="h-10 w-10 text-primary" />,
        title: "Prototypage d’une première version",
        description: "Nous accordons une importance particulière au lancement rapide d'un prototype de votre plateforme Web. En effet, un prototype permet de recueillir rapidement les premiers retours de vos utilisateurs cibles et de les intégrer directement au développement, sans alourdir le budget du projet."
    },
    {
        icon: <FiCloud className="h-10 w-10 text-primary" />,
        title: "Déploiement",
        description: "Notre équipe DevOps assure le déploiement sécurisé et adapté de votre projet sur la configuration cloud la plus cohérente en fonction du type d'utilisation. Inutile de dépenser 10 000 euros de frais AWS pour une plateforme métier n'accueillant que 60 utilisateurs mensuels. A contrario, un passage de votre entreprise au JT de 20h pourrait mettre à mal votre pauvre VPS déjà surmené... Nous sommes là pour vous proposer l'architecture cloud aux paramètres spécifiques de votre plateforme Web."
    },
    {
        icon: <FiTrendingUp className="h-10 w-10 text-primary" />,
        title: "Évolution",
        description: "Votre application Web a vocation à évoluer en fonction des usages ! C'est tant mieux, car nos équipes d'experts Product managers et développeurs Web suivent en permanence les dernières actualités business et technologiques de votre secteur. D'une simple mise à jour de sécurité à l'ajout d'un nouveau module pour rester en adéquation avec les besoins de vos utilisateurs, nous restons à vos côté tout au long de la vie de votre projet de développement Web."
    }
];

const WebAgencyPage = () => {
  return (
    <div className="bg-white text-accent-DEFAULT font-sans">
      <Header />

      <main className="bg-white">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>
            <div className="container mx-auto px-4 relative">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
                >
                  Agence de développement Web
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
                >
                  Nous transformons vos idées en interfaces Web dynamiques et intuitives.
                </motion.p>
            </div>
        </section>

        {/* "Notre offre" Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Des plateformes sur mesure pour vos ambitions</h2>
                        <div className="space-y-4 text-lg text-gray-600">
                            <p>
                                Nous sommes une agence spécialisée dans la construction de sites et plateformes Web. Le navigateur est un support universel, nous l'utilisons pour créer des solutions qui valorisent votre marque et automatisent vos processus métier.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                            className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
                        >
                            <div className="p-4 bg-primary-light rounded-full mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                            <p className="text-gray-600 flex-grow">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
        
        {/* "Notre méthode" Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
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
                Une approche agile et transparente pour des résultats concrets, rapides et évolutifs.
              </motion.p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
              {methodSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                  className="relative mb-12 flex items-center"
                >
                  <div className={`flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                        <div className="flex items-center space-x-4 mb-3">
                          <div className="flex-shrink-0 bg-primary-light p-3 rounded-full">{step.icon}</div>
                          <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary ring-8 ring-white"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Un projet Web en tête ?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Donnons vie à vos idées. Contactez notre équipe pour une consultation gratuite et sans engagement.</p>
            <Link
              to="#"
              className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-primary-focus shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Démarrer mon projet
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebAgencyPage;
