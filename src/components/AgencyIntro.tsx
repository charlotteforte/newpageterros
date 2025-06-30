import { motion } from 'framer-motion';

const AgencyIntro = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto bg-gray-50 rounded-2xl shadow-sm overflow-hidden border border-gray-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8 lg:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Terros is a development agency specialized in building dynamic web and mobile interfaces, as well as custom scraping and automation modules.
            </h2>
            <blockquote className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xl text-gray-600 italic">
                “Our philosophy: Code should serve the project — not the other way around.”
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AgencyIntro;
