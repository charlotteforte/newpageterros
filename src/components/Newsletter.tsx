import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 md:p-16 text-center shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Restons en contact
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Recevez nos dernières actualités, articles de blog et offres spéciales directement dans votre boîte de réception.
          </p>
          <form className="mt-8 max-w-lg mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="w-full px-5 py-3 rounded-full border border-gray-300 focus:ring-primary focus:border-primary transition-colors duration-300"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-primary-focus transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/40 flex items-center justify-center"
            >
              <span>S'inscrire</span>
              <FiArrowRight className="ml-2" />
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-500">
            Nous respectons votre vie privée. Pas de spam.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
