import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            Vos projets numériques, de la conception au déploiement
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Nous sommes une agence de développement spécialisée dans la construction de produits numériques sur mesure. Nous développons des plateformes web dynamiques, des applications mobiles et des algorithmes de Scraping et automatisation en nous basant sur les technologies les plus adaptées.
          </motion.p>
          <motion.p 
            className="mt-4 text-lg font-semibold text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Notre philosophie : le code est au service du projet, et non l'inverse.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
