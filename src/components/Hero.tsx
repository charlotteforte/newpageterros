import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-secondary tracking-tighter"
          >
            Développement numérique sur mesure
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl max-w-3xl mb-10 text-accent"
          >
            Nous transformons vos idées en solutions numériques performantes, innovantes et adaptées à vos ambitions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#"
              className="bg-primary hover:brightness-95 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
