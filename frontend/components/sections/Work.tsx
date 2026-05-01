'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const PERSONAL_INFO = {
  github: 'https://github.com/AbdulSaboorArif',
};

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  featured?: boolean;
  github?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AI Employees & Advanced Agents',
    category: 'AGENTIC AI',
    description: 'Production-ready AI employees handling customer support, data processing, and business automation with autonomous decision-making.',
    tags: ['OpenAI', 'Claude', 'Python', 'Automation'],
    featured: true,
    github: 'https://github.com/AbdulSaboorArif',
  },
  {
    id: '2',
    title: 'Real Estate Platform with AI Chatbot',
    category: 'FULL-STACK + AI',
    description: 'Complete real estate platform with intelligent chatbot for property recommendations and customer inquiries.',
    tags: ['Next.js', 'FastAPI', 'RAG', 'MySQL'],
    featured: true,
    github: 'https://real-estate-website-snowy-eight.vercel.app/',
  },
  {
    id: '3',
    title: 'Claude Agent Todo App',
    category: 'FULL-STACK',
    description: 'Task management application powered by Claude agents with MySQL backend and Next.js frontend.',
    tags: ['Next.js', 'MySQL', 'Claude', 'TypeScript'],
    github: 'https://github.com/AbdulSaboorArif/Hackathon-Phase-II.git',
  },
  {
    id: '4',
    title: 'E-commerce Platform',
    category: 'FULL-STACK',
    description: 'Complete e-commerce solution with product management, cart, checkout, and payment integration.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://final-project-ecommerce-website.vercel.app/',
  },
  {
    id: '5',
    title: 'n8n Grocery Automation',
    category: 'AUTOMATION',
    description: 'Dockerized n8n workflow automating grocery inventory, orders, and supplier communication.',
    tags: ['n8n', 'Docker', 'APIs', 'Automation'],
    github: 'https://github.com/AbdulSaboorArif',
  },
  {
    id: '6',
    title: 'RAG-Powered Chatbots',
    category: 'AI',
    description: 'Multiple domain-specific chatbots using retrieval-augmented generation for accurate responses.',
    tags: ['RAG', 'LangChain', 'Vector DB', 'Python'],
    github: 'https://github.com/AbdulSaboorArif',
  },
  {
    id: '7',
    title: 'Business Websites',
    category: 'WEB DEVELOPMENT',
    description: 'Professional agency and business websites with modern design and performance optimization.',
    tags: ['Next.js', 'Tailwind', 'SEO', 'Performance'],
    github: 'https://github.com/AbdulSaboorArif',
  },
  {
    id: '8',
    title: 'Data Encryption Tool',
    category: 'SECURITY',
    description: 'Secure data encryption and decryption tool built with Streamlit and Python cryptography.',
    tags: ['Python', 'Streamlit', 'Cryptography', 'Security'],
    github: 'https://secure-data-encryption-system-qk6suuxmksdncfywneneq4.streamlit.app/#welcome',
  },
];

export default function Work() {
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

    const section = document.getElementById('work');
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
    <section id="work" className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Projects that{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                Build For Testing Purpose
              </span>
              .
            </h2>
          </div>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-blue-600 dark:hover:text-blue-400 active:text-blue-600 dark:active:text-blue-400 transition-colors duration-200"
          >
            All repos on GitHub
            <ExternalLink size={18} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                className={`${
                  isFeatured ? 'md:col-span-2 lg:col-span-1' : ''
                } ${index === 0 ? 'lg:col-span-2' : ''} ${index === 1 ? 'lg:col-span-1' : ''} transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
              >
                <a
                  href={project.github || project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-6 relative h-full group cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-2 active:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/10 active:shadow-cyan-500/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 px-3 py-1.5 bg-white dark:bg-slate-950/80 backdrop-blur-sm rounded-full uppercase tracking-wider transition-transform duration-200 group-hover:scale-105 group-active:scale-105 border border-gray-200 dark:border-slate-800">
                          {project.category}
                        </span>
                        <div className="transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-1 group-hover:-translate-y-1 group-active:-translate-y-1">
                          <ArrowUpRight size={20} className="text-gray-400 dark:text-slate-600 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-active:text-cyan-600 dark:group-active:text-cyan-400 transition-colors duration-200" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-active:text-cyan-600 dark:group-active:text-cyan-400 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-500/8 border border-gray-200 dark:border-slate-700/50 rounded-full text-xs text-gray-600 dark:text-slate-400 group-hover:border-cyan-400 dark:group-hover:border-cyan-500/30 transition-all duration-200 hover:scale-105 active:scale-105 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 active:bg-cyan-100 dark:active:bg-cyan-500/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
