'use client';

import { useState, useEffect } from 'react';
import { Users, MessageSquare, Workflow, Terminal } from 'lucide-react';

const AI_LAB_PROJECTS = [
  {
    icon: 'Users',
    title: 'AI Employees',
    status: 'TRENDING',
    statusColor: 'text-emerald-400',
    description: 'Autonomous AI agents that handle customer support, data entry, and business operations with human-like intelligence.',
    tags: ['OpenAI', 'Claude', 'Automation'],
  },
  {
    icon: 'MessageSquare',
    title: 'RAG Chatbots',
    status: 'PRODUCTION',
    statusColor: 'text-green-400',
    description: 'Context-aware chatbots powered by retrieval-augmented generation for accurate, domain-specific responses.',
    tags: ['RAG', 'Vector DB', 'LangChain'],
  },
  {
    icon: 'Workflow',
    title: 'n8n Automations',
    status: 'WORKFLOWS',
    statusColor: 'text-cyan-400',
    description: 'Complex workflow automations connecting APIs, databases, and AI services for seamless business processes.',
    tags: ['n8n', 'Docker', 'APIs'],
  },
  {
    icon: 'Terminal',
    title: 'Claude Code Agents',
    status: 'TOOLING',
    statusColor: 'text-emerald-400',
    description: 'Specialized coding agents built with Claude Code skills for rapid development and intelligent automation.',
    tags: ['Claude', 'Agentic', 'Skills'],
  },
];

const iconMap = {
  Users,
  MessageSquare,
  Workflow,
  Terminal,
};

export default function AILab() {
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

    const section = document.getElementById('ai-lab');
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
    <section id="ai-lab" className="py-20 px-6 bg-gray-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Agents, employees & assistants
          </h2>
          <p className="text-gray-600 dark:text-slate-400 text-lg mb-12 max-w-3xl">
            Production-ready AI systems that automate workflows, handle customer interactions,
            and augment human capabilities with intelligent decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AI_LAB_PROJECTS.map((project, index) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 active:-translate-y-2 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/10 active:shadow-cyan-500/10 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 flex items-center justify-center transition-all duration-600 hover:scale-110 active:scale-110 hover:rotate-360 active:rotate-360">
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className={`text-xs font-mono ${project.statusColor} px-3 py-1 bg-gray-100 dark:bg-slate-900 rounded-full relative transition-transform duration-200 hover:scale-105 active:scale-105`}>
                    {project.status === 'TRENDING' && (
                      <span className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></span>
                    )}
                    <span className="relative z-10">{project.status}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700/50 rounded-full text-xs text-gray-600 dark:text-slate-400 transition-all duration-200 hover:scale-105 active:scale-105 hover:bg-cyan-100 dark:hover:bg-cyan-500/10 active:bg-cyan-100 dark:active:bg-cyan-500/10 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
