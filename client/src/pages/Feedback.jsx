import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/auth';
import { toast } from "react-hot-toast";
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/fetchData';
import { Heading, TextArea } from '../components';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(1);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { auth } = useAuth();

  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      offset: 200,
      once: true
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!auth.user) {
      toast.error('Please log in to submit feedback.');
      navigate('/login');
      return;
    }

    try {
      await axios.post(`${BASE_URL}/api/v1/feedback/create-feedback`, {
        message,
        rating,
      });
      toast.success('Feedback submitted successfully!');
      setFeedbackSubmitted(true);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError(err.response.data.message);
        toast.error(err.response.data.message);
      } else {
        console.error(err);
        setError('Error submitting feedback. Please try again.');
        toast.error('Error submitting feedback. Please try again.');
      }
    }
  };

  if (feedbackSubmitted) {
    return (
      <section className='pt-10 contact min-h-screen flex justify-center items-center'>
        <div data-aos="zoom-in" className='bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg text-center flex flex-col gap-5 max-w-md mx-4'>
          <h2 className='text-4xl sm:text-5xl underline text-white font-semibold'>Thank You!</h2>
          <p className='text-white text-lg font-medium'>Your feedback has been submitted successfully.</p>
          <Link 
            className='w-full border-2 px-4 py-3 text-white border-white text-center text-xl font-medium hover:bg-white transition-all ease-in hover:text-black rounded-md' 
            to="/"
          >
            Go Back Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className='pt-10 contact'>
      <Heading name="Submit Feedback" />

      <div className="container py-10">
        <form className='flex flex-col gap-8 justify-center items-center' onSubmit={handleSubmit}>

          {error && (
            <div data-aos="fade-up" className='w-full max-w-[750px] text-red-400 text-center font-medium text-lg bg-red-500/20 p-4 rounded-md border border-red-400'>
              {error}
            </div>
          )}

          <div data-aos="fade-up" className='w-full max-w-[750px]'>
            <TextArea
              value={message}
              name="message"
              placeholder="Write Your Feedback Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div data-aos="fade-up" className='w-full max-w-[750px]' data-aos-delay="100">
            <select
              id="rating"
              className='w-full max-w-[750px] px-7 py-3 rounded-md border-none outline-none bg-white text-gray-900 font-medium'
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            >
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>

          <div data-aos="zoom-in" className='w-full max-w-[750px]' data-aos-delay="200">
            <button
              className='w-full max-w-[750px] border-2 px-4 py-3 text-white border-white text-center text-xl font-medium hover:bg-white transition-all ease-in hover:text-black rounded-md'
              type='submit'
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
