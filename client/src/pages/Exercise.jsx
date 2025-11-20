
import React, { useState, useEffect } from 'react';
import { ExerciseCard, SearchInput } from '../components';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { groupExercisesByBodyPart } from '../utils/quickSortAndHashMap';

const Exercise = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  const [groupedExercises, setGroupedExercises] = useState({});
  const [showGrouped, setShowGrouped] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (exercises.length > 0) {
      const grouped = groupExercisesByBodyPart(exercises);
      setGroupedExercises(grouped);
    }
  }, [exercises]);

  return (
    <section className='bg-gray-900'>
      <SearchInput
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        data-aos="fade-up"  
      />
      
      {exercises.length > 0 && (
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4'>
          <div className='flex justify-center items-center gap-4' data-aos="fade-up">
            <label className='text-white font-medium'>View:</label>
            <button
              onClick={() => setShowGrouped(false)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                !showGrouped
                  ? 'bg-gym-red text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              All Exercises
            </button>
            <button
              onClick={() => setShowGrouped(true)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                showGrouped
                  ? 'bg-gym-red text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              Grouped by Body Part
            </button>
          </div>
        </div>
      )}

      {showGrouped && exercises.length > 0 ? (
        <div className='pb-20'>
          {Object.entries(groupedExercises).map(([bodyPartName, bodyPartExercises], index) => (
            <div key={bodyPartName} className='mb-12' data-aos="fade-up" data-aos-delay={index * 100}>
              <ExerciseCard
                exercises={bodyPartExercises}
                heading={`${bodyPartName.charAt(0).toUpperCase() + bodyPartName.slice(1)} Exercises (${bodyPartExercises.length})`}
                bodyPart={bodyPart}
                setExercises={setExercises}
              />
            </div>
          ))}
        </div>
      ) : (
        <ExerciseCard
          exercises={exercises}
          bodyPart={bodyPart}
          setExercises={setExercises}
          data-aos="fade-up" 
        />
      )}
    </section>
  );
};

export default Exercise;
