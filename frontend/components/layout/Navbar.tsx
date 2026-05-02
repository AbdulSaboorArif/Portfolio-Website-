'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

/**
 * Navigation Bar Component
 * 
 * Features:
 * - Sticky navbar with smooth scrolling to sections
 * - Dark/Light theme toggle with Sun/Moon icons
 * - Responsive mobile menu
 * - Smooth transitions between light and dark modes
 * - Stores user's theme preference in localStorage
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // Get current theme, toggle function, and mounted state from useTheme hook
  const { theme, toggleTheme, mounted } = useTheme();

  /**
   * Smoothly scroll to a section or top of page
   * @param id - Section ID to scroll to
   */
  const scrollToSection = (id: string) => {
    if (id === 'home') {
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Find element and scroll to it
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setIsOpen(false);
  };

  // Navigation links - add more sections as needed
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'AI Lab', id: 'ai-lab' },
    { name: 'Project', id: 'work' },
    { name: 'Contact me', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Home Button */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 group transition-transform duration-200 hover:scale-105"
          >
            {/* Gradient Avatar Circle */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
              AS
            </div>
            {/* Name - Hidden on mobile */}
            <span className="hidden sm:block text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">
              Abdul Saboor
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-400 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button - Only render after component mounts to prevent hydration issues */}

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
