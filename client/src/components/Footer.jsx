

import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-gym-darker pt-20 pb-10 text-white border-t border-gym-red/30'>
      <div className="container mx-auto px-6">
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16'>
          {/* About GymApp Section */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold text-gym-red'>
              Gym<span className="text-white">App</span>
            </h2>
            <p className='text-gray-300 font-medium text-base leading-relaxed'>
              Transform your body, transform your life. Join thousands of members achieving their fitness dreams with personalized workout plans, expert guidance, and comprehensive exercise tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Quick Links</h2>
            <ul className='space-y-3'>
              <li>
                <Link to="/" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/exercise" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  Exercises
                </Link>
              </li>
              <li>
                <Link to="/feedback" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  Feedback
                </Link>
              </li>
              <li>
                <Link to="/contact" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media & Support */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Connect With Us</h2>
            <ul className='space-y-3'>
              <li>
                <a href="#" className='flex items-center gap-3 text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  <FaFacebook className='text-xl' />
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center gap-3 text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  <FaInstagram className='text-xl' />
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center gap-3 text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  <FaTwitter className='text-xl' />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className='flex items-center gap-3 text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  <FaYoutube className='text-xl' />
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl font-semibold'>Contact & Support</h2>
            <div className='flex flex-col gap-3'>
              <div className='flex items-start gap-3'>
                <svg className="w-5 h-5 text-gym-red mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:support@gymapp.com" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  support@gymapp.com
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <svg className="w-5 h-5 text-gym-red mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium'>
                  +1 (234) 567-890
                </a>
              </div>
              <div className='flex items-start gap-3 mt-2'>
                <Link to="/contact" className='text-lg text-gray-300 hover:text-gym-red transition-all duration-300 font-medium underline underline-offset-2'>
                  Send us a message
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='border-t border-gray-700 mt-10 pt-6 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} <span className='text-gym-red font-semibold'>Gym</span><span className='text-white font-semibold'>App</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
