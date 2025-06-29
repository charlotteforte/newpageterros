import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Vos projets numériques, de la conception au déploiement
            </h2>
          </motion.div>
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600">
              Nous sommes une agence de développement spécialisée dans la construction de produits numériques sur mesure. Nous développons des plateformes web dynamiques, des applications mobiles et des algorithmes de Scraping et automatisation en nous basant sur les technologies les plus adaptées.
            </p>
            <p className="text-lg font-semibold text-primary">
              Notre philosophie : le code est au service du projet, et non l'inverse.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
