import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { motion } from 'framer-motion';

const WebAgencyPage = () => {
  return (
    <div className="bg-white text-accent-DEFAULT">
      <Header />

      <main className="pt-24 bg-white">
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            >
              Agence de développement Web
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700"
            >
              Nous transformons vos idées en interfaces Web dynamiques et intuitives.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebAgencyPage;
