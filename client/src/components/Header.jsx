

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import toast from 'react-hot-toast';

const Header = () => {
  const { auth, setAuth } = useAuth();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    toast.success("Logout successfully");
    navigate("/login");
  };

  return (
    <header className="bg-gradient-to-r from-gym-darker via-gym-gray to-gym-darker shadow-lg border-b border-gym-red/30 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo (Stylized Text) */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl sm:text-4xl font-extrabold text-gym-red tracking-widest">
            Gym<span className="text-white">App</span>
          </span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 items-center">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/exercise" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Exercises
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Contact Us
              </Link>
            </li>
            {auth?.user?.name === "admin" && (
              <li>
                <Link to="/dashboard/admin/create-plane" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                  Create Plan
                </Link>
              </li>
            )}
          </ul>

          {auth?.user ? (
            <>
              <Link to={auth.user.name === "admin" ? "/dashboard/admin" : "/dashboard/user"} className="text-white font-semibold hover:text-gym-red transition-all duration-300 capitalize">
                {auth.user.name}
              </Link>
              <button onClick={handleLogout} className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/register" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Register
              </Link>
              <Link to="/login" className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                Login
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gym-gray border-t border-gym-red/30 py-4">
          <ul className="flex flex-col space-y-4 items-center text-lg">
            <li>
              <Link to="/" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/exercise" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Exercises
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Feedback
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            {auth?.user?.name === "admin" && (
              <li>
                <Link to="/dashboard/admin/create-plane" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Create Plan
                </Link>
              </li>
            )}
            {auth?.user ? (
              <>
                <Link to={auth.user.name === "admin" ? "/dashboard/admin" : "/dashboard/user"} className="text-white font-semibold hover:text-gym-red transition-all duration-300 capitalize" onClick={() => setMobileMenuOpen(false)}>
                  {auth.user.name}
                </Link>
                <button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} className="text-white hover:text-gym-red transition-all duration-300 font-medium">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/register" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Register
                </Link>
                <Link to="/login" className="text-white hover:text-gym-red transition-all duration-300 font-medium" onClick={() => setMobileMenuOpen(false)}>
                  Login
                </Link>
              </>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;



