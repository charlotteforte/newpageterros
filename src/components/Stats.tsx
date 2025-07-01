import { motion } from 'framer-motion';

const stats = [
  { value: '2020', label: 'Date de création' },
  { value: '+100', label: 'Projets réalisés' },
  { value: '+50', label: 'Clients satisfaits' },
  { value: '10k+', label: 'Utilisateurs' },
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
    <section className="bg-white py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-secondary sm:text-5xl">
            L'impact de notre expertise
          </h2>
          <p className="mt-4 text-lg text-accent-DEFAULT max-w-2xl mx-auto">
            Des résultats concrets qui témoignent de notre engagement et de notre savoir-faire.
          </p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5"
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
              className="bg-primary-light p-8 text-center"
              variants={cardVariants}
            >
              <p className="text-5xl font-black text-primary">{stat.value}</p>
              <p className="mt-2 text-lg font-medium text-accent-DEFAULT">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
