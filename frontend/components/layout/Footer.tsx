'use client';

import { useState, useEffect } from 'react';
import { MapPin, Mail } from 'lucide-react';

const PERSONAL_INFO = {
  name: 'Abdul Saboor Arif',
  location: 'Karachi, Sindh, Pakistan',
  email: 'contact@abdulsaboor.dev',
  github: 'https://github.com/AbdulSaboorArif',
  linkedin: 'https://www.linkedin.com/in/abdulsaboor-arif/',
};

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector('footer');
    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  return (
    <footer className="border-t border-gray-200 dark:border-slate-800/50 bg-white dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 flex items-center justify-center text-lg font-bold flex-shrink-0 transition-all duration-600 hover:rotate-360 active:rotate-360 hover:scale-110 active:scale-110 text-white">
              AS
            </div>
            <div>
              <h3 className="text-gray-900 dark:text-white font-bold mb-1">{PERSONAL_INFO.name}</h3>
              <p className="text-gray-600 dark:text-slate-400 text-sm">
                Building intelligent systems with code and AI
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm transition-transform duration-200 hover:translate-x-1 active:translate-x-1">
              <MapPin size={16} className="text-cyan-600 dark:text-cyan-400" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 dark:text-slate-400 text-sm transition-transform duration-200 hover:translate-x-1 active:translate-x-1">
              <Mail size={16} className="text-cyan-600 dark:text-cyan-400" />
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 transition-colors duration-200">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 md:justify-end">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 active:border-cyan-400 dark:active:border-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-110 hover:rotate-6 active:rotate-6 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/20 active:shadow-cyan-500/20"
              aria-label="GitHub"
            >
              <GithubIcon width={18} height={18} />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 flex items-center justify-center text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 active:border-cyan-400 dark:active:border-cyan-500/50 transition-all duration-300 hover:scale-110 active:scale-110 hover:-rotate-6 active:-rotate-6 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/20 active:shadow-cyan-500/20"
              aria-label="LinkedIn"
            >
              <LinkedinIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div className={`text-center text-gray-500 dark:text-slate-500 text-sm pt-8 border-t border-gray-200 dark:border-slate-800/50 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          © 2026 Abdul Saboor Arif. Crafted with intent in Karachi.
        </div>
      </div>
    </footer>
  );
}
