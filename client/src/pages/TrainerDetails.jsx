
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const TrainerDetails = () => {
    const { trainerId } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    const trainers = {
        "1": {
            img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop&crop=face",
            name: "Alexa",
            age: "48",
            address: "America, San Francisco",
            phone: "9876543210",
            description: "Very experienced coach."
        },
        "2": {
            img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop&crop=face",
            name: "Bella",
            age: "40",
            address: "Tokyo, Japan",
            phone: "67854368654",
            description: "New technique coach."
        },
        "3": {
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
            name: "Christina",
            age: "33",
            address: "Iran",
            phone: "7689756467",
            description: "Very strict coach."
        },
        "4": {
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
            name: "Akon",
            age: "35",
            address: "New Zealand",
            phone: "75758797759",
            description: "Focus and discipline."
        },
        "5": {
            img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop&crop=face",
            name: "Sarah",
            age: "28",
            address: "London, UK",
            phone: "9876543211",
            description: "Expert in yoga and pilates, passionate about holistic fitness."
        }
    };

    const trainer = trainers[trainerId];

    if (!trainer) {
        return (
            <section className='py-20 bg-gray-800'>
                <h2 className='text-center text-4xl text-white font-bold mb-8'>Trainer Not Found</h2>
                <Link to="/" className='text-white text-lg mx-auto flex justify-center items-center text-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300 max-w-[150px] w-full px-4 py-2 rounded-md'>
                    Go Back
                </Link>
            </section>
        );
    }

    return (
        <section className='py-20 bg-gray-800'>
            <h2 className='text-center text-4xl text-white font-bold mb-8 animate-fade-in'>Trainer Detail</h2>
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex justify-center items-center">
                        <img src={trainer.img} alt={`Trainer ${trainer.name}`} className='w-full max-w-[80%] rounded-lg shadow-lg transition-transform transform hover:scale-105' />
                    </div>
                    <div className='flex flex-col gap-4 p-6 bg-white rounded-lg shadow-lg'>
                        <p className='text-2xl text-gray-800 font-semibold'>Name: {trainer.name}</p>
                        <p className='text-lg text-gray-600'>Age: {trainer.age}</p>
                        <p className='text-lg text-gray-600'>Address: {trainer.address}</p>
                        <p className='text-lg text-gray-600'>Phone: {trainer.phone}</p>
                        <p className='text-lg text-gray-600'>Description: {trainer.description}</p>
                    </div>
                </div>
            </div>
            <Link to="/" className='text-white text-lg mx-auto flex justify-center items-center text-center bg-blue-500 hover:bg-blue-600 transition-colors duration-300 max-w-[150px] w-full px-4 py-2 rounded-md'>
                Go Back
            </Link>
        </section>
    );
};

export default TrainerDetails;
