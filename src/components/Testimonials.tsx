import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    quote: "Notre application mobile ne nous permettait pas de répondre à la demande de nos 18 000 convives quotidiens. Nous avons co-conçu avec Terros un dashboard sur mesure de pilotage de nos 70 restaurants, permettant d'administrer une app mobile totalement refondue. Je recommande la méthode et l'agilité de l'équipe mise à disposition !",
    author: "Victor Faubeau",
    title: "CTO - Serenest",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Terros nous a accompagné sur la création de plusieurs produits numériques de services aux occupants de bureaux. Leur méthode agile et pragmatique de développement nous a permis de déployer rapidement des prototypes pour valider la pertinence des services proposés.",
    author: "François Desgardin",
    title: "Directeur des nouvelles offres et de l'innovation groupe - Nexity",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "L'équipe de Terros a su parfaitement appréhender notre besoin, intégrer ses développements dans notre environnement tech, collaborer avec notre équipe interne, tout cela dans des délais courts et avec une communication efficace. Aucune ombre au tableau : à solliciter sans hésiter pour vos projets !",
    author: "Frédéric Lassara",
    title: "Directeur général - Akeoplus",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials = () => {
  return (
    <>
      <style>{`
        .testimonial-slider .swiper-button-next,
        .testimonial-slider .swiper-button-prev {
          color: #111827;
        }
        .testimonial-slider .swiper-button-next:after,
        .testimonial-slider .swiper-button-prev:after {
          font-size: 1.5rem;
          font-weight: 600;
        }
        .testimonial-slider .swiper-pagination-bullet {
          background: #9ca3af;
          width: 10px;
          height: 10px;
          opacity: 0.8;
        }
        .testimonial-slider .swiper-pagination-bullet-active {
          background: #1f2937;
          opacity: 1;
        }
        .testimonial-slider {
          padding-bottom: 3rem;
        }
      `}</style>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Ils parlent de nous</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">
              Nous accompagnons plus de 50 clients startups, PME et grands groupes dans la mise en place de projets numériques variés.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="text-center max-w-3xl mx-auto">
                    <FaQuoteLeft className="text-primary text-4xl mb-6 mx-auto" />
                    <p className="text-xl md:text-2xl italic text-gray-700 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-8">
                      <img src={testimonial.image} alt={testimonial.author} className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-lg" />
                      <p className="font-bold text-gray-900 text-xl">{testimonial.author}</p>
                      <p className="text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
