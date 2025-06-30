import { motion } from 'framer-motion';

const stats = [
  { value: '2020', label: 'Date de création de Terros' },
  { value: '+100', label: 'Projets réalisés' },
  { value: '+50', label: 'Clients' },
  { value: '+100k', label: 'Utilisateurs' },
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl mb-16">
          Terros en chiffres
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            onscreen: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-gray-50 p-8 rounded-lg text-center"
              variants={cardVariants}
            >
              <p className="text-5xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-2 text-lg font-medium text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
