
import React, { useEffect } from 'react';
import Heading from './Heading';
import { Trainer } from ".";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Trainers = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 2000, offset:-200, easing:"ease-in-out" }); // You can customize the duration and options here
  }, []);

  const trainers = [
    {
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
      id: "1",
      name: "Alexa",
      age: "48"
    },
    {
      img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&crop=face",
      id: "2",
      name: "Bella",
      age: "40"
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      id: "3",
      name: "Christina",
      age: "33"
    },
    {
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      id: "4",
      name: "Akon",
      age: "35"
    },
    {
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=face",
      id: "5",
      name: "Sarah",
      age: "28"
    }
  ];

  return (
    <section className='pt-10 relative'>
      <Heading name="Our Trainers" />
      <div className="container py-16 mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={trainer.id} 
              data-aos={index === 0 ? "fade-up" : index === 1 ? "fade-in" : index === 2 ? "fade-down" : index === 3 ? "zoom-in" : "fade-up"} 
              data-aos-delay={index * 200 + 100}
            >
              <Trainer 
                img={trainer.img} 
                alt={`trainer-${trainer.name.toLowerCase()}`} 
                id={trainer.id} 
                name={trainer.name} 
                age={trainer.age} 
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gym-darker via-gym-gray to-gym-darker opacity-100 pointer-events-none z-[-1]"></div>
    </section>
  );
};

export default Trainers;




