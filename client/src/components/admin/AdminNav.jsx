import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminNav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/dashboard/admin') {
      return location.pathname === path || location.pathname === path + '/';
    }
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const navItems = [
    { path: '/dashboard/admin', label: 'Dashboard', icon: '📊' },
    { path: '/dashboard/admin/create-plane', label: 'Create Plan', icon: '➕' },
    { path: '/dashboard/admin/plans', label: 'All Plans', icon: '📋' },
    { path: '/dashboard/admin/user-list', label: 'Users', icon: '👥' },
    { path: '/dashboard/admin/subscriber-list', label: 'Subscribers', icon: '💳' },
    { path: '/dashboard/admin/contact-us', label: 'Contact Queries', icon: '📧' },
    { path: '/dashboard/admin/feedbacks', label: 'Feedbacks', icon: '💬' },
    { path: '/dashboard/admin/profile', label: 'Profile', icon: '👤' },
  ];

  return (
    <>
      <button
        className="lg:hidden fixed top-20 left-4 z-50 bg-gym-red text-white p-2 rounded-md shadow-lg hover:bg-gym-red-dark transition-colors"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <aside 
        className={`
          fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white z-40 
          transform transition-transform duration-300 ease-in-out overflow-y-auto
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-6 border-b border-gray-700 pt-20">
          <h2 className="text-2xl font-bold text-gym-red">
            Admin Panel
          </h2>
          <p className="text-sm text-gray-400 mt-1">GymApp Management</p>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive(item.path)
                      ? 'bg-gym-red text-white font-semibold'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </aside>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default AdminNav;

