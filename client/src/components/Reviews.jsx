

import React, { useEffect } from 'react';
import { Review, Heading } from "./";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Reviews = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: -100,
      easing: 'ease-in-back',
    });
  }, []);

  const reviews = [
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
      name: "Sarah Johnson",
      description: "Amazing fitness journey! The trainers are incredibly supportive and the programs are tailored perfectly. I've achieved results I never thought possible."
    },
    {
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      name: "Emily Chen",
      description: "Best gym experience ever! The community here is welcoming and the facilities are top-notch. I feel stronger and more confident every day."
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      name: "Jessica Martinez",
      description: "The personalized training plans have transformed my fitness routine. I love how the trainers push me to reach new goals while keeping it fun and motivating."
    },
    {
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      name: "Olivia Williams",
      description: "Incredible results in just a few months! The nutrition guidance combined with the workout programs has completely changed my lifestyle for the better."
    }
  ];

  return (
    <section className='pt-10 relative py-16'>
      <Heading name="Our Reviews" />
      <div className="container mx-auto px-6 py-8" data-aos="fade-up">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="reviews-swiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <div className="px-4 py-8">
                <Review 
                  img={review.img} 
                  alt={`review-${index + 1}`} 
                  name={review.name} 
                  description={review.description} 
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gym-darker via-gym-gray to-gym-darker opacity-100 pointer-events-none z-[-1]"></div>
      
      <style>{`
        .reviews-swiper .swiper-button-next,
        .reviews-swiper .swiper-button-prev {
          color: #f97316;
          background: rgba(255, 255, 255, 0.1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        .reviews-swiper .swiper-button-next:hover,
        .reviews-swiper .swiper-button-prev:hover {
          background: rgba(249, 115, 22, 0.2);
          transform: scale(1.1);
        }
        .reviews-swiper .swiper-button-next::after,
        .reviews-swiper .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
        .reviews-swiper .swiper-pagination-bullet {
          background: #f97316;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 10px;
        }
        .reviews-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        .reviews-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Reviews;




