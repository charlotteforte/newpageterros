import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AiAgencyPage = () => {
  return (
    <>
      <Header />
      <main className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Agence IA
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Nous utilisons l'IA dans vos outils et applications pour permettre à vos équipes de se concentrer sur leur coeur de métier.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AiAgencyPage;
