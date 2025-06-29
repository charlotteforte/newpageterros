import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const steps = [
  {
    title: "Conception",
    description: "Nous imaginons et planifions avec vous les fonctionnalités les plus à mêmes de répondre à vos problématiques métier."
  },
  {
    title: "Développement agile",
    description: "Applications web, mobile, outils d'automatisation... Nous mettons nos nombreux savoirs faire à votre service en itérant de manière agile tout au long du processus de développement."
  },
  {
    title: "Déploiement",
    description: "Votre projet mis en ligne en un temps record, sur votre propre infrastructure ou nos serveurs dédiés sécurisés."
  },
  {
    title: "Évolution",
    description: "Un bon produit est un produit qui évolue. Nous demeurons à vos côtés sur toute la durée de votre projet pour assurer la maintenance et l'ajout de nouvelles fonctionnalités."
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" 
                  alt="Hiptown screenshot outil par Terros"
                  className="rounded-lg shadow-2xl object-cover w-full"
                />
              </motion.div>
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center ring-8 ring-primary/5">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MethodePage;
