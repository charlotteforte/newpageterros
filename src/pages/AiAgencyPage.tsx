import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import { FiArrowRight, FiClipboard, FiCpu, FiFileText, FiGitMerge, FiShare2, FiChevronDown, FiZap, FiBrain, FiCode } from "react-icons/fi";

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
    { name: "Mistral", icon: <FiBrain className="h-10 w-10 text-primary-focus" /> },
    { name: "Claude 3", icon: <FiCpu className="h-10 w-10 text-primary-focus" /> },
    { name: "GPT-4", icon: <FiZap className="h-10 w-10 text-primary-focus" /> },
    { name: "Llama", icon: <FiCode className="h-10 w-10 text-primary-focus" /> },
];

const faqData = [
  {
    question: "Qu'est-ce qu'une agence IA ?",
    answer: "Une agence IA est une agence spécialisée dans le développement et l'implémentation de solutions basées sur l'IA afin d'optimiser les processus, améliorer les performances et offrir des analyses avancées. Chez Terros, nous utilisons des technologies de machine learning, deep learning, et traitement du langage naturel (NLP) pour répondre à des besoins variés.",
    list: []
  },
  {
    question: "Quels types de solutions IA proposez-vous ?",
    answer: "Nous proposons une gamme complète de solutions IA adaptées aux besoins spécifiques de chaque entreprise, notamment :",
    list: [
      "La détection d'erreurs documentaires : Identification et correction automatique des erreurs dans les documents.",
      "le parsing et résumé de documents complexes : Analyse et synthèse de documents tels que les contrats.",
      "La génération de graphes d'analyse de données : Création de visualisations dynamiques pour faciliter la compréhension des données."
    ]
  },
  {
    question: "Comment l'intelligence artificielle peut-elle bénéficier à mon entreprise ?",
    answer: "L'intelligence artificielle permet d'automatiser des processus, d'améliorer la précision des analyses ou encore de prendre des décisions basées sur des données robustes. Avec nos solutions de machine learning et deep learning, nous aidons les entreprises à optimiser leurs opérations, prévoir les tendances et améliorer l'efficacité globale.",
    list: []
  },
  {
    question: "Quelles sont les avantages de travailler avec Terros pour le développement IA ?",
    answer: "Chez Terros, nous offrons :",
    list: [
      "Expertise en IA : Une équipe de spécialistes en machine learning, deep learning, et NLP.",
      "Solutions sur mesure : Développement de solutions adaptées à vos besoins spécifiques.",
      "Performance et optimisation : Amélioration continue des solutions pour maximiser les résultats.",
      "Support continu : Assistance technique et conseils pour garantir l'efficacité."
    ]
  }
];

const AiAgencyPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
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
                  Agence IA
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
                >
                  Nous intégrons l'IA dans vos outils pour décupler les capacités de vos équipes.
                </motion.p>
            </div>
        </section>

        {/* "Notre offre" Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Développement IA sur mesure</h2>
                        <p className="text-lg text-gray-600 mb-4">
                        Nous sommes une agence spécialisée dans le développement de solutions IA. Grâce à Leo, notre moteur propriétaire, nous concevons des outils innovants qui répondent à vos cas d'usage : détection d'erreurs, parsing de documents, résumé de contrats, génération de graphes...
                        </p>
                        <p className="text-lg text-gray-600">
                        Notre expertise en machine learning, deep learning et NLP transforme vos idées en solutions dynamiques et à forte valeur ajoutée.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative p-8 rounded-xl aspect-square flex items-center justify-center bg-gray-50 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                        <div className="relative flex flex-col items-center text-center">
                            <div className="p-5 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full shadow-lg">
                                <FiCpu className="h-16 w-16 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-secondary mt-6">Leo, notre moteur IA</h3>
                            <p className="text-gray-600 mt-2 max-w-xs">Une technologie propriétaire pour des solutions performantes et adaptées.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Des solutions pour chaque besoin métier</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Explorez comment notre expertise IA peut résoudre vos défis les plus complexes et automatiser vos processus.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="p-4 bg-primary-light rounded-full self-start mb-6">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-secondary mb-3">{useCase.title}</h3>
                  <p className="text-gray-600 flex-grow">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LLMs Section */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary">Basé sur les meilleurs modèles de langage</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Nous intégrons les LLMs les plus performants du marché pour garantir des résultats à la pointe de la technologie.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {llms.map((llm) => (
                        <motion.div
                            key={llm.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="p-6 bg-gray-50 rounded-xl border border-gray-100"
                        >
                            <div className="flex justify-center items-center mb-4">{llm.icon}</div>
                            <h3 className="text-xl font-bold text-secondary">{llm.name}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary">Questions fréquentes sur nos développements IA</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left p-6 focus:outline-none focus:bg-primary-light transition-colors"
                  >
                    <span className="text-lg font-semibold text-secondary">{faq.question}</span>
                    <FiChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-600">
                            <p>{faq.answer}</p>
                            {faq.list && faq.list.length > 0 && (
                              <ul className="list-disc list-inside mt-4 pl-4 space-y-2">
                                {faq.list.map((item, i) => (
                                  <li key={i}>{item}</li>
                                ))}
                              </ul>
                            )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
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
