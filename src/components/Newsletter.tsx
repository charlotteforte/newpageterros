import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
  return (
    <section className="py-24 bg-primary-light">
      <div className="container">
        <motion.div
          className="bg-white rounded-xl p-8 md:p-16 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-secondary tracking-tight">
            Prêt à transformer votre idée en réalité ?
          </h2>
          <p className="mt-4 text-lg text-accent-DEFAULT max-w-2xl mx-auto">
            Discutons de votre projet. Contactez-nous pour une consultation gratuite et sans engagement.
          </p>
          <div className="mt-8 max-w-md mx-auto">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
            >
              <span>Contactez-nous</span>
              <FiArrowRight className="ml-2" />
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Commençons à construire l'avenir, ensemble.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
