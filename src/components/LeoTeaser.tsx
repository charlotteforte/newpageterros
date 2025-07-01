import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LeoTeaser = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">
              Leo, le premier développeur IA 100% français 🇫🇷
            </h2>
            <p className="mt-4 text-lg font-bold text-primary">
              Faites gagner du temps à votre équipe de développement !
            </p>
            <p className="mt-6 text-accent-DEFAULT">
              En intégrant Léo à votre équipe, vous pourrez interagir directement avec lui et le faire participer dans vos projets.
            </p>
            <p className="mt-4 text-accent-DEFAULT">
              Leo peut corriger des bugs, coder de nouvelles fonctionnalités, déployer sur de nouvelles branches, et bien plus encore !
            </p>
            <Link
              to="/leo"
              className="mt-8 inline-flex items-center justify-center bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Découvrir Leo</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            className="relative h-80 md:h-96"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
              alt="AI Developer coding on a laptop" 
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
            />
             <div className="absolute inset-0 bg-primary/10 rounded-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeoTeaser;
