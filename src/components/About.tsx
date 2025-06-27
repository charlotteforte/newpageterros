import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
              Vos projets numériques gérés en mode agile de la Conception au Déploiement
            </h2>
          </motion.div>
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-600"
          >
            <p>
              Nous sommes une agence de développement spécialisée dans la construction de produits numériques sur mesure.
            </p>
            <p>
              Nous développons des plateformes web dynamiques, des applications mobiles et des algorithmes de Scraping et automatisation en nous basant sur les technologies les plus adaptées.
            </p>
            <p className="font-semibold text-primary">
              Notre philosophie : le code est au service du projet, et non l'inverse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
