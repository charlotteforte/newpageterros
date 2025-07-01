import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

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
    <div className="bg-white py-20">
      <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: #58739c;
          }
          .swiper-pagination-bullet-active {
            background: #58739c;
          }
        `}
      </style>
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
            <SwiperSlide key={index} className="h-full pb-4">
               <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col group transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="relative pt-[100%]">
                    <img className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={member.imageUrl} alt={member.name} />
                </div>
                <div className="p-6 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-sm text-[#58739c] font-semibold uppercase tracking-wider mt-1">{member.role}</p>
                </div>
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
