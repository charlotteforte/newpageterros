import { motion } from 'framer-motion';

const AgencyIntro = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            Terros est une agence de développement spécialisée dans la construction d’interfaces dynamiques web et mobiles ainsi que de modules de Scraping et d'automatisation.
          </h2>
          <p className="mt-6 text-xl text-gray-600">
            Notre philosophie : le code est au service du projet, et non l’inverse.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyIntro;
