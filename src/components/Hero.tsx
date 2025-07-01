import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop')" }}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40" />
      <div className="relative container">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tighter"
          >
            Développement numérique sur mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mb-10 text-gray-200 mx-auto"
          >
            Nous transformons vos idées en solutions numériques performantes, innovantes et adaptées à vos ambitions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Découvrir nos services
              <FiArrowRight className="ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Nous contacter
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
