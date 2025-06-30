import { motion } from 'framer-motion';
import { FiCode, FiGitBranch, FiZap } from 'react-icons/fi';

const features = [
  {
    icon: <FiZap className="w-6 h-6 text-primary" />,
    text: 'Corriger des bugs',
  },
  {
    icon: <FiCode className="w-6 h-6 text-primary" />,
    text: 'Coder de nouvelles fonctionnalités',
  },
  {
    icon: <FiGitBranch className="w-6 h-6 text-primary" />,
    text: 'Déployer sur de nouvelles branches',
  },
];

const LeoFeature = () => {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1620712943543-95fc69614534?q=80&w=1332&auto=format&fit=crop" 
              alt="AI Developer Robot"
              className="rounded-xl shadow-2xl object-cover w-full h-full max-h-[500px]"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl tracking-tight">
              HelloLeo, le premier développeur IA 100% français 🇫🇷
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Faites gagner du temps à votre équipe de développement !
            </p>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed">
              En intégrant Léo à votre équipe, vous pourrez interagir directement avec lui et le faire participer dans vos projets.
            </p>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Leo peut corriger des bugs, coder de nouvelles fonctionnalités, déployer sur de nouvelles branches, et bien plus encore !
            </p>
            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 bg-primary/10 text-primary rounded-lg p-2">
                    {feature.icon}
                  </div>
                  <span className="ml-4 text-lg font-medium text-gray-700">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LeoFeature;
