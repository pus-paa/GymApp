// import React, {useState, useEffect} from 'react'
// import { useParams } from "react-router-dom";
// import { GiGymBag } from "react-icons/gi";
// import { fetchData, exerciseOptions, youtubeExerciseOptions} from "../utils/fetchData";
// import {ExerciseCard, ExerciseVideos} from "../components";
// const ExerciseDetail = () => {
  
//   const {id} = useParams();
//   const [exercises, setExercises] = useState({});
//   const [youtubeVideo, setYoutubeVideo] = useState([]);
//   const [targetMuscle, setTargetMuscle] = useState([]);
//   const [equipmentExercise, setEquipmentExercise] = useState([]);


//   useEffect(() => {
//     const exerciseData = async () => {
//      const particularExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions );
//     //  console.log(particularExerciseData);
//      setExercises(particularExerciseData);

//      const youtubeExerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${particularExerciseData.name}`, youtubeExerciseOptions );
//     //  console.log(youtubeExerciseVideoData.contents);
//      setYoutubeVideo(youtubeExerciseVideoData.contents);

//      const targetMuscleData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${particularExerciseData.target}`, exerciseOptions );
//     //  console.log(targetMuscleData);
//      setTargetMuscle(targetMuscleData);

//      const equipmentExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${particularExerciseData.equipment}`, exerciseOptions);
//     //  console.log(equipmentExerciseData);
//      setEquipmentExercise(equipmentExerciseData);
//     }  

//     exerciseData();
//     window.scrollTo({top:0, left:0, behavior:"smooth"})

//   }, [id]);

//   if(exercises.length === 0){
//     return(
//       <h1 className='text-4xl flex justify-center items-center w-full h-screen text-center'>Loading.....</h1>
//     )
//   }

//   return (
//     <section className=''>
//       <div className="px-7 sm:px-14">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-white rounded-md">
//             <img src={exercises.gifUrl} className='w-full' alt="gym" loading='lazy' />
//           </div>                            
//           <div className="rounded flex flex-col gap-6 justify-center">
//             <h2 className='font-medium text-2xl md:text-4xl capitalize'>{exercises.name}</h2>
//             <p className='capitalize text-lg text-gray-500 font-medium'>exercises keep you strong {exercises.name} is one of the best exercises to target your {exercises.target} . it will help you improve your mood and energy</p>
//            <div className='flex flex-col md:flex-row gap-10'>
//             <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.equipment}</span></div>
//             <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.target}</span></div>
//             <div><GiGymBag className='rounded-full bg-orange-500 text-7xl p-2 md:p-3 lg:p-4 hover:bg-orange-600 text-white'/> <span className='capitalize text-xl'>{exercises.bodyPart}</span></div>
//            </div>
//           </div>
//         </div>
//       </div>


//   <ExerciseVideos youtubeVideo={youtubeVideo} name="related"/>
//   <ExerciseCard exercises={targetMuscle} heading="target muscle"/>
//   <ExerciseCard exercises={equipmentExercise} heading="equipment muscle"/>

//     </section>
//   )
// }

// export default ExerciseDetail;


// aos 

import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { GiGymBag } from "react-icons/gi";
import { fetchData, exerciseOptions, youtubeExerciseOptions } from "../utils/fetchData";
import { ExerciseCard, ExerciseVideos } from "../components";
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exercises, setExercises] = useState({});
  const [youtubeVideo, setYoutubeVideo] = useState([]);
  const [targetMuscle, setTargetMuscle] = useState([]);
  const [equipmentExercise, setEquipmentExercise] = useState([]);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({    duration: 1000, // Animation duration in milliseconds
      easing: 'ease-in-out', // Animation easing
      offset: 120, // Trigger animation before the element comes into view
      once: true });
  }, []);

  useEffect(() => {
    const exerciseData = async () => {
      const particularExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      setExercises(particularExerciseData);

      const youtubeExerciseVideoData = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${particularExerciseData.name}`, youtubeExerciseOptions);
      setYoutubeVideo(youtubeExerciseVideoData.contents);

      const targetMuscleData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${particularExerciseData.target}`, exerciseOptions);
      setTargetMuscle(targetMuscleData);

      const equipmentExerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${particularExerciseData.equipment}`, exerciseOptions);
      setEquipmentExercise(equipmentExerciseData);
    }

    exerciseData();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  if (Object.keys(exercises).length === 0) {
    return (
      <h1 className='text-4xl flex justify-center items-center w-full h-screen text-center'>Loading.....</h1>
    );
  }

  return (
    <section className=''>
      <div className="px-7 sm:px-14">
        <div className="grid grid-cols-1 gap-6">
          <div className="rounded flex flex-col gap-6 justify-center" data-aos="fade-up">
            <div className="flex flex-col gap-4">
              <h2 className='font-medium text-2xl md:text-4xl capitalize'>{exercises.name}</h2>
              
              {/* Difficulty and Category Badges */}
              <div className="flex gap-3 flex-wrap">
                {exercises.difficulty && (
                  <span className='px-4 py-2 rounded-full bg-blue-500 text-white font-semibold capitalize text-sm'>
                    {exercises.difficulty}
                  </span>
                )}
                {exercises.category && (
                  <span className='px-4 py-2 rounded-full bg-purple-500 text-white font-semibold capitalize text-sm'>
                    {exercises.category}
                  </span>
                )}
              </div>

              {/* Description */}
              {exercises.description && (
                <p className='text-lg text-gray-700 leading-relaxed'>
                  {exercises.description}
                </p>
              )}

              {/* Equipment, Target, Body Part */}
              <div className='flex flex-col md:flex-row gap-6 my-4'>
                <div className="flex items-center gap-3">
                  <GiGymBag className='rounded-full bg-orange-500 text-4xl p-2 md:p-3 hover:bg-orange-600 text-white' />
                  <div>
                    <p className='text-sm text-gray-500'>Equipment</p>
                    <span className='capitalize text-lg font-semibold'>{exercises.equipment}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GiGymBag className='rounded-full bg-red-500 text-4xl p-2 md:p-3 hover:bg-red-600 text-white' />
                  <div>
                    <p className='text-sm text-gray-500'>Target Muscle</p>
                    <span className='capitalize text-lg font-semibold'>{exercises.target}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <GiGymBag className='rounded-full bg-green-500 text-4xl p-2 md:p-3 hover:bg-green-600 text-white' />
                  <div>
                    <p className='text-sm text-gray-500'>Body Part</p>
                    <span className='capitalize text-lg font-semibold'>{exercises.bodyPart}</span>
                  </div>
                </div>
              </div>

              {/* Secondary Muscles */}
              {exercises.secondaryMuscles && exercises.secondaryMuscles.length > 0 && (
                <div className="mt-6" data-aos="fade-up">
                  <h3 className='text-xl font-semibold mb-4 text-gray-800'>Secondary Muscles</h3>
                  <div className="flex flex-wrap gap-3">
                    {exercises.secondaryMuscles.map((muscle, index) => (
                      <span 
                        key={index} 
                        className='px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white capitalize text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default'
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Instructions */}
              {exercises.instructions && exercises.instructions.length > 0 && (
                <div className="mt-8" data-aos="fade-up">
                  <h3 className='text-xl font-semibold mb-6 text-gray-800'>Instructions</h3>
                  <div className="space-y-4">
                    {exercises.instructions.map((instruction, index) => (
                      <div 
                        key={index} 
                        className='flex gap-4 p-4 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-200 border-l-4 border-orange-500 shadow-sm hover:shadow-md transition-all duration-300'
                      >
                        <div className='flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white font-bold flex items-center justify-center text-sm'>
                          {index + 1}
                        </div>
                        <p className='text-gray-700 leading-relaxed flex-1 pt-1'>
                          {instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Adding AOS to ExerciseVideos and ExerciseCard */}
      <ExerciseVideos youtubeVideo={youtubeVideo} name="related" data-aos="fade-up" />
    </section>
  );
}

export default ExerciseDetail;
