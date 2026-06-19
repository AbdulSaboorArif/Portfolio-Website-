'use client';

import { useState, useEffect, useRef } from 'react';

const SKILL_CATEGORIES = [
  {
    number: '01',
    title: 'Frontend',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    number: '02',
    title: 'Backend & Data',
    skills: ['Python', 'FastAPI', 'MySQL', 'Database Design', 'REST APIs'],
  },
  {
    number: '03',
    title: 'AI & Agents',
    skills: ['OpenAI Agents', 'Claude Agents', 'RAG Chatbots', 'n8n', 'OpenClaw'],
  },
  {
    number: '04',
    title: 'DevOps',
    skills: ['Docker', 'Deployment', 'CI/CD'],
  },
];

const SKILLS_WITH_PERCENTAGES = [
  { name: 'Next.js', percentage: 95 },
  { name: 'React', percentage: 92 },
  { name: 'TypeScript', percentage: 88 },
  { name: 'Python', percentage: 90 },
  { name: 'FastAPI', percentage: 85 },
  { name: 'MySQL', percentage: 82 },
  { name: 'Tailwind CSS', percentage: 95 },
  { name: 'OpenAI Agents', percentage: 88 },
  { name: 'Claude Agents', percentage: 90 },
  { name: 'Docker', percentage: 80 },
  { name: 'n8n', percentage: 85 },
];

const TECH_MARQUEE = [
  'Next.js', 'React', 'TypeScript', 'Python', 'FastAPI', 'MySQL',
  'Tailwind CSS', 'Framer Motion', 'Docker', 'OpenAI',
  'Claude', 'n8n', 'RAG', 'OpenClaw', 'GSAP'
];

function SkillBar({ skill, percentage, delay }: { skill: string; percentage: number; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            setTimeout(() => {
              setWidth(percentage);
            }, delay * 1000);
          }
        });
      },
      { threshold: 0.1, rootMargin: '-100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [percentage, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 dark:text-slate-400 font-medium">{skill}</span>
        <span className="text-cyan-600 dark:text-cyan-400 font-mono text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-slate-900 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${width}%` : '0%',
            boxShadow: '0 0 8px rgba(59, 130, 246, 0.4)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
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

    const section = document.getElementById('skills');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Proficiency Levels Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILLS_WITH_PERCENTAGES.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} percentage={skill.percentage} delay={index * 0.05} />
            ))}
          </div>
        </div>

        <div className={`relative overflow-hidden bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800/50 rounded-2xl py-6 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

          <div className="flex animate-marquee whitespace-nowrap">
            {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center mx-6 text-gray-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 hover:scale-125 active:scale-125 transition-all duration-200"
              >
                <span className="text-cyan-600 dark:text-cyan-400 mr-6 animate-spin-slow">✦</span>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
