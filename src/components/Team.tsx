import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Augustin',
    role: 'CEO',
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Alexandre',
    role: 'Lead developer',
    imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jeremy',
    role: 'Product Manager',
    imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Léo',
    role: 'Développeur IA',
    imageUrl: 'https://images.unsplash.com/photo-1582158382329-652b43a00944?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
      name: 'Maxime',
      role: 'UI/UX Designer',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Team = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Team Terros
        </h2>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
            }}
            className="pb-16"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="h-full">
               <div className="text-center bg-white p-8 rounded-lg shadow-lg h-full flex flex-col justify-center items-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <img className="mx-auto mb-4 w-36 h-36 rounded-full object-cover ring-4 ring-gray-200" src={member.imageUrl} alt={member.name} />
                <h3 className="mb-1 text-xl font-bold tracking-tight text-gray-900">
                    {member.name}
                </h3>
                <p className="text-gray-500">{member.role}</p>
                <ul className="flex justify-center mt-4 space-x-4">
                    <li>
                        <a href="#" className="text-gray-400 hover:text-blue-500">
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-sky-500">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-400 hover:text-gray-900">
                            <FaGithub className="w-5 h-5" />
                        </a>
                    </li>
                </ul>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
