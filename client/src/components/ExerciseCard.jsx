import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useCart} from "../context/cart";
import {toast} from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExerciseCard = ({exercises, heading, onRemove, showRemoveButton = false, limit = 21}) => {
  const { cart, setCart } = useCart();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

if(exercises.length === 0){

return (
  <div className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100'>
    <div className='text-center'>
      <div className='text-6xl mb-4'>💪</div>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-2'>No Exercises Found</h1>
      <p className='text-gray-600 text-lg'>Start exploring exercises to add them here!</p>
    </div>
  </div>
)
}


const handleAddToCart = (exercise) => {
  const isExerciseInCart = cart.some(item => item.id === exercise.id);

  if (!isExerciseInCart) {
    setCart([...cart, exercise]);
    localStorage.setItem("cart", JSON.stringify([...cart, exercise]));
    toast.success("Exercise added to Favourite");
  } else {
    toast.error("Exercise is already in the Favourite");
  }
};

  return (
    <section className='pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen' id='exercises'>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {heading && (
      <div className='mb-12 text-center' data-aos="fade-up">
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-gym-red via-gym-orange to-gym-red bg-clip-text text-transparent mb-4'>
          {heading}
        </h2>
        <div className='w-24 h-1 bg-gradient-to-r from-gym-red to-gym-orange mx-auto rounded-full'></div>
      </div>
    )}
    <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
      {exercises?.slice(0, limit).map((exercise, id) => (
      <div 
        className='group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col' 
        key={id}
        data-aos="fade-up"
        data-aos-delay={id * 100}
      >
        <Link to={exercise.id ? `/exercise/${exercise.id}` : "" } className='no-underline flex-1 flex flex-col'>
          {/* Exercise Image */}
          {exercise.gifUrl && (
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-48">
              <img 
                src={exercise.gifUrl} 
                alt={exercise.name} 
                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-4' 
                loading="lazy" 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            </div>
          )}
          
          {/* Card Content */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Badges */}
            <div className="flex gap-2 items-center justify-center mb-4 flex-wrap">
              <span className='rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-700 shadow-md hover:shadow-lg transition-shadow'>
                {exercise.bodyPart?.slice(0, 12) || 'N/A'}
              </span>
              <span className='rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-gym-red to-gym-red-dark shadow-md hover:shadow-lg transition-shadow'>
                {exercise.target?.slice(0, 12) || 'N/A'}
              </span>
            </div>
            
            {/* Exercise Name */}
            <h2 className='text-lg sm:text-xl font-bold text-gray-800 text-center mb-4 capitalize line-clamp-2 min-h-[3rem] flex items-center justify-center'>
              {exercise.name || 'Exercise Name'}
            </h2>
          </div>
        </Link>
        
        {/* Action Button */}
        <div className='p-5 pt-0'>
          {showRemoveButton && onRemove ? (
            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" 
              onClick={() => onRemove(exercise.id)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove from Favourites
            </button>
          ) : (
            <button 
              type="button" 
              className="w-full bg-gradient-to-r from-gym-red to-gym-red-dark hover:from-gym-red-dark hover:to-gym-red text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" 
              onClick={() => handleAddToCart(exercise)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Add To Favourites
            </button>
          )}
        </div>
      </div>
      ))}
    </div>

    </div>
  </section>
  )
}

export default ExerciseCard;