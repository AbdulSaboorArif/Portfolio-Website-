'use client';

import { useState, useEffect } from 'react';
import { Code, Bot, Workflow, Database } from 'lucide-react';
import Image from 'next/image';
import image from '../../public/images/image.png';
const PERSONAL_INFO = {
  name: 'Abdul Saboor',
  education: 'Computer Science Student at SMIU',
  bio: 'I am a passionate Computer Science student at Sindh Madressatul Islam University (SMIU), specializing in Frontend development and AI agents. With expertise in modern web technologies and artificial intelligence, I build production-ready applications that combine elegant user interfaces with intelligent automation.',
  expertise: [
    'Building responsive and performant web applications with Next.js and React',
    'Developing intelligent AI agents and Agentic AI systems that automate complex workflows',
    'Creating scalable backend services with FastAPI and Python',
    'Designing seamless user experiences with modern frontend technologies'
  ]
};

const SERVICES = [
  {
    icon: 'Code',
    title: 'Full-Stack Engineering',
    description: 'End-to-end web applications with Next.js, React, TypeScript, and Python backends.',
  },
  {
    icon: 'Bot',
    title: 'Agentic AI',
    description: 'Intelligent AI agents, employees, and assistants that automate complex workflows.',
  },
  {
    icon: 'Workflow',
    title: 'Automation',
    description: 'n8n workflows, Python scripts, and custom automation solutions that save time.',
  },
  {
    icon: 'Database',
    title: 'Backends & Data',
    description: 'FastAPI services, database design, and scalable backend architectures.',
  },
];

const iconMap = {
  Code,
  Bot,
  Workflow,
  Database,
};

export default function About() {
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

    const section = document.getElementById('about');
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
    <section id="about" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Get to know{' '}
            <span className="bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Bio */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                  {PERSONAL_INFO.education}
                </h3>
                <p className="text-lg text-gray-600 dark:text-slate-400 leading-relaxed">
                  {PERSONAL_INFO.bio}
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full"></span>
                  Core Expertise
                </h4>
                <ul className="space-y-3">
                  {PERSONAL_INFO.expertise.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-start gap-3 text-gray-600 dark:text-slate-400 transition-all duration-500 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 100 + 200}ms` }}
                    >
                      <span className="text-emerald-500 dark:text-emerald-400 mt-1 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                  I specialize in creating seamless digital experiences that combine cutting-edge frontend technologies
                  with powerful AI-driven backends. My work focuses on building intelligent systems that not only look
                  great but also solve real-world problems through automation and smart decision-making.
                </p>
              </div>
            </div>
          </div>
          {/* Right Side - Image */}
          <div className={`transition-all duration-1000 delay-200 flex items-center justify-center ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden">
              <Image 
                src={image}
                alt="Abdul Saboor Profile" 
                width={400} 
                height={500}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Services Grid - Below the two columns */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            What I Offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className={`bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-6 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 hover:border-emerald-400 dark:hover:border-emerald-500/30 active:border-emerald-400 dark:active:border-emerald-500/30 hover:shadow-lg active:shadow-lg hover:shadow-emerald-500/10 active:shadow-emerald-500/10 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 hover:opacity-100 active:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center mb-4 transition-all duration-300 hover:bg-cyan-200 dark:hover:bg-cyan-500/20 active:bg-cyan-200 dark:active:bg-cyan-500/20 hover:scale-110 active:scale-110">
                      <Icon size={24} className="text-cyan-600 dark:text-cyan-400 transition-transform duration-600 hover:rotate-360 active:rotate-360" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-slate-400 text-sm">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
