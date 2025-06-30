import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TrustedBy from '@/components/TrustedBy';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import LeoFeature from '@/components/LeoFeature';
import AgencyIntro from '@/components/AgencyIntro';

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <About />
        <Testimonials />
        <LeoFeature />
        <AgencyIntro />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
