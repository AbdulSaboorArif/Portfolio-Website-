'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const PERSONAL_INFO = {
  name: 'Abdul Saboor',
  skills: [
    'AI Employees Developer',
    'Personal FTE Agent Builder',
    'Full Stack Web Developer',
    'N8N Automation Specialist',
    'AI Agent Developer',
    'AI RAG Chatbot Creator',

  ],
  github: 'https://github.com/AbdulSaboorArif',
  linkedin: 'https://www.linkedin.com/in/abdulsaboor-arif/',
};

function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

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

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setCurrentSkillIndex((prev) => (prev + 1) % PERSONAL_INFO.skills.length);
        setIsTyping(true);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30 dark:opacity-40 bg-[radial-gradient(circle_at_30%_50%,rgba(168,85,247,0.15),transparent_50%),radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.15),transparent_50%)]"></div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-80 md:h-80 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 md:w-[28rem] md:h-[28rem] bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-emerald-500/8 dark:bg-emerald-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Code Symbols */}
      <div className="absolute top-1/4 left-[15%] text-5xl md:text-6xl lg:text-7xl font-mono text-purple-400/20 dark:text-purple-400/30 hidden md:block animate-bounce" style={{ animationDuration: '6s' }}>
        &lt;&gt;
      </div>
      <div className="absolute top-1/3 right-[12%] text-6xl md:text-7xl lg:text-8xl font-mono text-cyan-400/20 dark:text-cyan-400/30 hidden md:block animate-bounce" style={{ animationDuration: '8s', animationDelay: '1s' }}>
        &#123;&#125;
      </div>
      <div className="absolute bottom-1/3 left-[10%] text-4xl md:text-5xl lg:text-6xl font-mono text-emerald-400/20 dark:text-emerald-400/30 hidden md:block animate-bounce" style={{ animationDuration: '7s', animationDelay: '0.5s' }}>
        &lt;/&gt;
      </div>
      <div className="absolute bottom-1/4 right-[18%] text-5xl md:text-6xl lg:text-7xl font-mono text-purple-400/15 dark:text-purple-400/25 hidden md:block animate-bounce" style={{ animationDuration: '19s', animationDelay: '1.5s' }}>
        &#123; &#125;
      </div>

      <div className="max-w-7xl mx-auto w-full justify-center items-center gap-8 lg:gap-08 flex flex-col lg:flex-row">
        <div className="items-center">
          <div className={`text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-slate-800/70 backdrop-blur-sm border border-emerald-500/50 rounded-full mb-6 lg:mb-8 relative shadow-lg shadow-emerald-500/20">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-xs sm:text-sm text-gray-700 dark:text-slate-300 tracking-wide font-medium">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-4 lg:mb-6">
                Hello, I'm {PERSONAL_INFO.name} 
            </h1>
            <div className= "text-xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-4xl font-extrabold leading-tight mb-4 lg:mb-6">
              <span className={`block bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent drop-shadow-2xl bg-clip-text text-transparent transition-all duration-300 ${isTyping ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                {PERSONAL_INFO.skills[currentSkillIndex]}
              </span>
            </div>
              <p className="text-gray-700 dark:text-slate-300 text-lg sm:text-xl md:text-2xl lg:text-2xl leading-relaxed mb-12 max-w-2xl">
                Are you looking for a skilled AI specialist or an experienced developer? You’re in the right place.
              </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 lg:mb-10">
              <button
                onClick={() => scrollToSection('work')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-full font-medium shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 active:shadow-purple-500/50 transition-all duration-300 hover:scale-105 active:scale-105"
              >
                View selected work
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 border border-cyan-500/50 hover:border-cyan-400 active:border-cyan-400 hover:bg-cyan-500/10 active:bg-cyan-500/10 text-gray-900 dark:text-white rounded-full font-medium backdrop-blur-sm bg-gray-100/50 dark:bg-slate-900/50 transition-all duration-300 hover:scale-105 active:scale-105"
              >
                <Sparkles size={18} />
                Hire me
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800/70 border border-gray-300 dark:border-slate-600/70 flex items-center justify-center text-gray-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 active:text-emerald-500 dark:active:text-emerald-400 hover:border-emerald-400/70 active:border-emerald-400/70 hover:bg-gray-200 dark:hover:bg-slate-800 active:bg-gray-200 dark:active:bg-slate-800 transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-110 hover:shadow-lg active:shadow-lg hover:shadow-emerald-500/20 active:shadow-emerald-500/20"
                aria-label="GitHub"
              >
                <GithubIcon width={22} height={22} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-100 dark:bg-slate-800/70 border border-gray-300 dark:border-slate-600/70 flex items-center justify-center text-gray-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 active:text-cyan-500 dark:active:text-cyan-400 hover:border-cyan-400/70 active:border-cyan-400/70 hover:bg-gray-200 dark:hover:bg-slate-800 active:bg-gray-200 dark:active:bg-slate-800 transition-all duration-300 backdrop-blur-sm hover:scale-110 active:scale-110 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/20 active:shadow-cyan-500/20"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={22} height={22} />
              </a>
            </div>
          </div>
{/* 
          <div className={`order-1 lg:order-2 flex items-center justify-center px-4 sm:px-0 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/40 via-cyan-500/40 to-emerald-500/40 p-[3px] shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl flex items-center justify-center overflow-hidden border border-gray-200 dark:border-slate-700/50">
                  <div className="relative w-full h-full p-6 sm:p-8 flex items-center justify-center">
                    <div className="relative w-full h-full max-w-sm max-h-sm">
                      <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-emerald-500/10 dark:from-purple-500/20 dark:via-cyan-500/20 dark:to-emerald-500/20 flex items-center justify-center">
                          <Image
                            src="/images/image.png"
                            alt="Profile Picture Placeholder"
                            width={200}
                            height={200}
                            priority
                            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover object-top border-4 border-gray-200 dark:border-slate-800/50 shadow-lg shadow-emerald-500/20 transition-transform duration-300 hover:scale-105 active:scale-105 hover:shadow-emerald-500/40 active:shadow-emerald-500/40"
                          />
                        <div className="text-center">
                        </div>
                      </div>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-100/60 dark:from-slate-900/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/20 via-cyan-500/20 to-emerald-500/20 blur-2xl -z-10 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
