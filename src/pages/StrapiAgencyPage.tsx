import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const StrapiAgencyPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-20 md:py-32">
          <div className="container px-4 mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              Agence Strapi
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600"
            >
              Nous développons rapidement vos projets Web et Mobile en nous basant sur le CMS Headless Strapi.
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StrapiAgencyPage;
