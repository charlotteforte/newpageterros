import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { FiArrowRight, FiClipboard, FiCpu, FiFileText, FiGitMerge, FiShare2 } from "react-icons/fi";

const useCases = [
  {
    icon: <FiFileText className="h-8 w-8 text-primary" />,
    title: "Détection d’erreurs documentaires",
    description: "Identifiez automatiquement les anomalies et les incohérences dans vos documents pour garantir leur fiabilité.",
  },
  {
    icon: <FiGitMerge className="h-8 w-8 text-primary" />,
    title: "Parsing de documents",
    description: "Extrayez et structurez automatiquement les informations clés de divers types de documents.",
  },
  {
    icon: <FiClipboard className="h-8 w-8 text-primary" />,
    title: "Résumé de documents complexes",
    description: "Générez des résumés concis et pertinents de documents longs comme les contrats ou les rapports.",
  },
  {
    icon: <FiShare2 className="h-8 w-8 text-primary" />,
    title: "Génération de graphes d'analyse",
    description: "Visualisez vos données complexes avec des graphes dynamiques pour une meilleure prise de décision.",
  },
];

const llms = [
    { name: "Mistral", description: "développement ia" },
    { name: "Claude 3", description: "développement ia" },
    { name: "GPT-4", description: "développement ia" },
    { name: "Llama", description: "développement ia" },
];

const AiAgencyPage = () => {
  return (
    <div className="bg-white text-accent-DEFAULT">
      <Header />

      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            >
              Agence IA
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
            >
              Nous utilisons l'IA dans vos outils et applications pour permettre à vos équipes de se concentrer sur leur coeur de métier.
            </motion.p>
          </div>
        </section>

        {/* "Notre offre" Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-4">Notre offre de développement IA</h2>
                        <p className="text-lg text-gray-600">
                        Nous sommes une agence IA spécialisée dans le développement de solutions IA sur mesure. Grâce à Leo, notre moteur avancé développé en interne, nous offrons des prestations innovantes pour répondre à divers cas d’usage tels que la détection d’erreurs documentaires, le parsing ou encore le résumé de documents complexes comme les contrats, et la génération de graphes d’analyse de données dynamiques. Notre expertise en machine learning, deep learning, et NLP nous permet de transformer vos idées en solutions IA dynamiques, intuitives et à forte valeur ajoutée, optimisant ainsi vos processus métiers et améliorant votre efficacité opérationnelle.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="p-8 bg-gradient-to-br from-blue-500 to-teal-400 rounded-lg shadow-xl"
                    >
                        <FiCpu className="h-16 w-16 text-white mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white text-center">Solutions IA sur mesure</h3>
                        <p className="text-white text-center mt-2">Développées avec notre moteur propriétaire, Leo.</p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Des solutions pour chaque besoin</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Explorez comment notre expertise IA peut résoudre vos défis métiers les plus complexes.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">{useCase.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LLMs Section */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">Basé sur des grands modèles de langages</h2>
                    <p className="mt-4 text-lg text-gray-600">Nous intégrons les LLMs les plus performants du marché pour des résultats optimaux.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {llms.map((llm) => (
                        <motion.div
                            key={llm.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-2xl font-bold text-primary">{llm.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{llm.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary">Prêt à transformer votre entreprise avec l'IA ?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs.</p>
            <Link
              to="#"
              className="mt-8 inline-flex items-center px-8 py-3.5 rounded-full font-semibold text-white bg-primary hover:bg-primary-focus shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Contactez-nous
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AiAgencyPage;
