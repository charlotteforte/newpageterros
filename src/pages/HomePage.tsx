import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
