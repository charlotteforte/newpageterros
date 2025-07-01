import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

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
    <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-secondary tracking-tight">Ils parlent de nous</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-accent-DEFAULT">
              Nous accompagnons plus de 50 clients startups, PME et grands groupes dans la mise en place de projets numériques variés.
            </p>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-accent-DEFAULT">
              Applications Web et Mobile, outils d'automatisation et de prospection et APIs sur mesure font partie de nos spécialités.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-primary-light p-8 rounded-xl flex flex-col group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FaQuoteLeft className="text-primary/50 text-3xl mb-6 transform transition-transform duration-300 group-hover:scale-110" />
                <p className="text-accent-DEFAULT mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20" />
                  <div>
                    <p className="font-bold text-secondary text-base">{testimonial.author}</p>
                    <p className="text-accent-DEFAULT text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;
