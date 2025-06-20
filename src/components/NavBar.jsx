import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const NavBar = () => {
  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
    { path: '/dataset', name: 'Dataset' }
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ rotate: 15 }} 
              whileTap={{ scale: 0.9 }}
            >
              <ShieldCheck size={28} className="text-indigo-600" />
            </motion.div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">
              ADD <span className="text-indigo-600">Detect</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.path} className="relative group">
                {item.subItems ? (
                  <div className="relative">
                    <button className="flex items-center px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-200 font-medium">
                      {item.name}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                      {item.subItems.map((subItem) => (
                        <NavLink
                          key={subItem.path}
                          to={subItem.path}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                        isActive 
                          ? 'text-indigo-600 font-semibold'
                          : 'text-gray-700 hover:text-indigo-600'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;