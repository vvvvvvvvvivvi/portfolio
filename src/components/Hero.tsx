import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            {personalInfo.name}
          </h1>
          <p className="text-2xl md:text-3xl text-slate-600 mb-4">
            {personalInfo.title}
          </p>
          <p className="text-lg text-slate-500 mb-12">
            {personalInfo.tagline}
          </p>

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
              href={personalInfo.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
