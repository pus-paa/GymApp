
import React from 'react';

const Review = ({ img, alt, name, description }) => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-center gap-4 p-8 h-full border border-gray-700 hover:border-gym-primary">
      <div className="relative">
        <img 
          src={img} 
          alt={alt} 
          className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gym-primary shadow-lg group-hover:scale-110 transition-transform duration-300" 
        />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gym-primary text-white px-3 py-1 rounded-full text-xs font-bold">
          ⭐ 5.0
        </div>
      </div>
      <h3 className="text-2xl font-bold text-white mt-2">{name}</h3>
      <div className="flex gap-1 mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-lg">★</span>
        ))}
      </div>
      <p className='text-gray-300 text-base leading-relaxed italic max-w-md'>
        "{description}"
      </p>
    </div>
  );
};

export default Review;
