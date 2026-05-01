'use client';

import { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  side: 'left' | 'right';
}

const TIMELINE: TimelineItem[] = [
  {
    id: '1',
    title: 'Freelance & Personal Projects',
    subtitle: 'Full-Stack Developer & AI Solutions Architect',
    period: '2023 – Present',
    description: 'Building production-ready web applications, intelligent AI agents, and automated workflows. Specializing in Next.js, Python, FastAPI, and agentic AI systems.',
    side: 'right',
  },
  {
    id: '2',
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Currently Pursuing',
    period: '2022 – Present',
    description: 'Studying computer science fundamentals while actively building real-world projects and gaining professional development experience.',
    side: 'left',
  },
];

export default function Journey() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
          const progress = Math.min(100, (visibleHeight / sectionHeight) * 150);
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="journey" className="py-20 px-6 bg-white dark:bg-slate-900 transition-colors" ref={sectionRef}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 leading-tight">
            From{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              first commit
            </span>{' '}
            to{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
              autonomous agents
            </span>
            .
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-slate-700/50 hidden md:block" />

          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 hidden md:block origin-top transition-all duration-300"
            style={{ height: `${scrollProgress}%` }}
          />

          <div className="space-y-12">
            {TIMELINE.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${
                  item.side === 'right' ? 'md:flex-row' : 'md:flex-row-reverse'
                } transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : `opacity-0 ${item.side === 'right' ? '-translate-x-8' : 'translate-x-8'}`
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 dark:bg-cyan-400 rounded-full border-4 border-white dark:border-slate-900 hidden md:block z-10 transition-all duration-300 hover:scale-150 active:scale-150">
                  <div className="absolute inset-0 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping opacity-75"></div>
                </div>

                <div className={`w-full md:w-5/12 ${item.side === 'right' ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-gray-50 dark:bg-slate-950 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/10 active:shadow-cyan-500/10">
                    <div className="text-cyan-600 dark:text-cyan-400 text-sm font-mono mb-2 transition-transform duration-200 hover:scale-105 active:scale-105">
                      {item.period}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <div className="text-cyan-600 dark:text-cyan-400 font-medium mb-3">{item.subtitle}</div>
                    <p className="text-gray-600 dark:text-slate-400">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
