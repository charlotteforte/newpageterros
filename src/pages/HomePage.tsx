import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TrustedBy from '@/components/TrustedBy';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
