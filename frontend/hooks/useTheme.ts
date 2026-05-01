'use client';

import { useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

/**
 * Hook to manage dark/light theme with localStorage persistence
 * 
 * Features:
 * - Detects system preference on first load (prefers-color-scheme)
 * - Persists user's theme choice in localStorage
 * - Updates document.documentElement with 'dark' class
 * - Provides `mounted` state to prevent hydration mismatch
 * 
 * Usage:
 * const { theme, toggleTheme, mounted } = useTheme();
 * 
 * Only render UI that uses theme after mounted === true
 * to prevent hydration mismatches in Next.js
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Initialize theme on component mount
  // This runs only on the client side, preventing hydration issues
  useEffect(() => {
    // Mark component as mounted to prevent rendering mismatches
    setMounted(true);

    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);

    // Apply theme to HTML element
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  /**
   * Toggle between light and dark theme
   * - Updates state
   * - Updates HTML class
   * - Saves preference to localStorage
   */
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    // Toggle dark class on HTML element
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Save user's preference to localStorage (persists across sessions)
    localStorage.setItem('theme', newTheme);
  };

  return { theme, toggleTheme, mounted };
}
