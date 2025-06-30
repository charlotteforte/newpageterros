import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCode, FiMessageCircle, FiZap } from 'react-icons/fi';

const LeoPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                  Leo, the first AI developer made in France 🇫🇷
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Leo is a powerful code generation assistant that can join your dev team in just minutes.
                </p>
                <div className="mt-8">
                  <p className="text-md text-gray-500 font-semibold">👉 Leo by Terros</p>
                  <p className="mt-2 text-lg text-gray-700">
                    Sign up now to get early access and test Léo’s capabilities firsthand!
                  </p>
                  <a
                    href="#"
                    className="mt-6 inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-focus transition-colors duration-300"
                  >
                    Get Early Access
                  </a>
                </div>
              </motion.div>
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1678483747899-e4896253163e?auto=format&fit=crop&w=1200&q=80"
                  alt="AI Developer Assistant"
                  className="rounded-xl shadow-2xl w-full max-w-md"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How it works section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How does Leo work?</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Léo is a code generator powered by advanced large language models like Mistral, OpenAI, and Claude.
              </p>
            </motion.div>
            <motion.div 
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-lg text-gray-600 leading-relaxed text-center bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <p>
                  What makes Leo unique is his ability to interact directly with your codebase — just like a real developer. He can read, write, and deploy code on demand to help accelerate your development workflow.
                </p>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <FiCode className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Direct Codebase Interaction</h3>
                <p className="mt-2 text-gray-600">Leo connects to your git repository to read and write code, understanding the full context of your project.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <FiMessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Natural Language Prompts</h3>
                <p className="mt-2 text-gray-600">Give instructions in plain English. Leo understands your requirements and translates them into code.</p>
              </motion.div>
              <motion.div 
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4">
                  <FiZap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Automated Workflow</h3>
                <p className="mt-2 text-gray-600">From code generation to deployment, Leo accelerates your development cycle, freeing up your team to focus on bigger challenges.</p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LeoPage;
