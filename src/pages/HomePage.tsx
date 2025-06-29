import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TrustedBy from '@/components/TrustedBy';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
