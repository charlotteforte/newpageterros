import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
              Vos projets numériques, de la conception au déploiement
            </h2>
            <p className="mt-6 text-lg text-accent leading-relaxed">
              Nous sommes une agence de développement spécialisée dans la construction de produits numériques sur mesure. Nous développons des plateformes web dynamiques, des applications mobiles et des algorithmes de Scraping et automatisation en nous basant sur les technologies les plus adaptées.
            </p>
            <p className="mt-4 text-lg text-accent leading-relaxed">
              Notre philosophie : le code est au service du projet, et non l'inverse.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop" alt="Digital products" className="rounded-xl shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
