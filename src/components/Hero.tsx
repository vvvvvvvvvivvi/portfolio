import { Github, Linkedin, Youtube } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { personalInfo } from '../data/portfolio-data';

const IDENTITIES = [
  'fullstack data analyst',
  'map nerd',
  'over-engineer by choice',
  'data witch',
  'gis researcher',
];

const CURRENTLY = [
  { icon: '🔭', label: 'Building', value: 'Lucky Star Jar v2' },
  { icon: '📍', label: 'Based in', value: 'London' },
  { icon: '🌱', label: 'Learning', value: 'Three.js + shaders' },
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentWord = IDENTITIES[wordIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1);
        setDisplayText(next);
        if (next === currentWord) setIsPaused(true);
      } else {
        const next = displayText.slice(0, -1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % IDENTITIES.length);
        }
      }
    }, isDeleting ? 45 : 95);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, isPaused]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            {personalInfo.name}
          </h1>

          <div className="min-h-[2.25rem] md:min-h-[2.75rem] flex items-center justify-center mb-8">
            <p className="text-2xl md:text-3xl text-slate-600">
              {displayText}
              <span className="animate-pulse text-slate-400">|</span>
            </p>
          </div>

          {/* Currently block */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
            {CURRENTLY.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm text-slate-700 shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
              >
                <span role="img" aria-label={label}>{icon}</span>
                <span className="text-slate-400">{label}</span>
                <span className="font-medium text-slate-800">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-900 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Get in Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
