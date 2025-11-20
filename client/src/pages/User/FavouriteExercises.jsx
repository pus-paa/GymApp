import React, { useEffect, useState } from 'react';
import { useCart} from "../../context/cart";
import { ExerciseCard } from '../../components';
import { toast } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sortExercisesByName, sortExercisesByBodyPart, sortExercisesByTarget } from '../../utils/quickSortAndHashMap';

const FavouriteExercises = () => {
  const { cart, setCart } = useCart();
  const [sortedExercises, setSortedExercises] = useState(cart);
  const [sortBy, setSortBy] = useState('none');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 100,
      once: true
    });
  }, []);

  useEffect(() => {
    let sorted = [...cart];
    
    switch(sortBy) {
      case 'name':
        sorted = sortExercisesByName(cart);
        break;
      case 'bodyPart':
        sorted = sortExercisesByBodyPart(cart);
        break;
      case 'target':
        sorted = sortExercisesByTarget(cart);
        break;
      default:
        sorted = cart;
    }
    
    setSortedExercises(sorted);
  }, [cart, sortBy]);

  const removeExercises = (Eid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item.id === Eid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
      toast.success("Exercise removed from favourites");
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove exercise");
    }
  }

  if (cart.length === 0) {
    return (
      <section className='min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-50 via-white to-gray-50'>
        <div className='text-center px-4' data-aos="fade-up">
          <div className='text-8xl mb-6 animate-bounce'>💔</div>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gym-red via-gym-orange to-gym-red bg-clip-text text-transparent mb-4'>
            No Favourite Exercises Yet
          </h1>
          <p className='text-gray-600 text-lg sm:text-xl mb-8 max-w-md mx-auto'>
            Start exploring exercises and add them to your favourites to see them here!
          </p>
          <div className='w-32 h-1 bg-gradient-to-r from-gym-red to-gym-orange mx-auto rounded-full'></div>
        </div>
      </section>
    )
  }

  return (
    <section className='min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50'>
      {cart.length > 0 && (
        <div className='pt-32 pb-8'>
          <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-6' data-aos="fade-up">
              <h2 className='text-2xl sm:text-3xl font-bold text-gray-800'>
                Sort Exercises
              </h2>
              <div className='flex items-center gap-3'>
                <label className='text-gray-700 font-medium'>Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className='px-4 py-2 border-2 border-gym-red rounded-lg focus:outline-none focus:ring-2 focus:ring-gym-red focus:border-transparent bg-white text-gray-800 font-medium cursor-pointer transition-all'
                >
                  <option value="none">No Sorting</option>
                  <option value="name">Name (A-Z)</option>
                  <option value="bodyPart">Body Part</option>
                  <option value="target">Target Muscle</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      <ExerciseCard 
        exercises={sortedExercises} 
        heading={`You Have ${cart.length} Favourite Exercise${cart.length > 1 ? 's' : ''}`}
        onRemove={removeExercises}
        showRemoveButton={true}
        limit={sortedExercises.length}
      />
    </section>
  )
}

export default FavouriteExercises;