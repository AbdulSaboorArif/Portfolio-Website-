'use client';

import { useState, useEffect } from 'react';
import { MapPin, Mail, Send, CheckCircle, XCircle } from 'lucide-react';

const PERSONAL_INFO = {
  email: 'contact@abdulsaboor.dev',
  location: 'Karachi, Sindh, Pakistan',
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

    const section = document.getElementById('contact');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8001';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Let&apos;s build something{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                intelligent
              </span>
              .
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-lg mb-8">
              Have a project in mind? Let&apos;s discuss how we can work together to bring your ideas to life.
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-4 flex items-center gap-4 group cursor-pointer transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/10 active:shadow-cyan-500/10">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-active:scale-110 group-hover:rotate-360 group-active:rotate-360">
                  <Mail size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-slate-500 mb-1">Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 transition-colors duration-200"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-4 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 active:-translate-y-1 hover:border-cyan-400 dark:hover:border-cyan-500/30 active:border-cyan-400 dark:active:border-cyan-500/30 hover:shadow-lg active:shadow-lg hover:shadow-cyan-500/10 active:shadow-cyan-500/10">
                <div className="w-10 h-10 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:scale-110 active:scale-110 hover:-translate-y-1 active:-translate-y-1">
                  <MapPin size={20} className="text-cyan-600 dark:text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-slate-500 mb-1">Location</div>
                  <div className="text-gray-900 dark:text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-lg text-gray-900 dark:text-white hover:border-cyan-400 dark:hover:border-cyan-500/50 active:border-cyan-400 dark:active:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-105"
              >
                <GithubIcon width={20} height={20} />
                GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-lg text-gray-900 dark:text-white hover:border-cyan-400 dark:hover:border-cyan-500/50 active:border-cyan-400 dark:active:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-400 active:text-cyan-600 dark:active:text-cyan-400 transition-all duration-300 hover:scale-105 active:scale-105"
              >
                <LinkedinIcon width={20} height={20} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800/50 rounded-2xl p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="w-full">
                    <input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-300 dark:border-slate-700/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-300 dark:border-slate-700/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-300 dark:border-slate-700/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
                />
                <textarea
                  name="message"
                  placeholder="Your message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-950 border border-gray-300 dark:border-slate-700/50 rounded-lg text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                />

                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-500 dark:text-green-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    <CheckCircle size={16} />
                    Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                    <XCircle size={16} />
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-medium transition-all duration-300 hover:scale-105 active:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/30"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin">
                        <Send size={18} />
                      </div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
