import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo } from '../data/portfolio-data';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            I love new challenges and I'm always open to chatting about new projects and opportunities!
          </p>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-lg mb-12"
          >
            <Mail size={24} />
            <span>{personalInfo.email}</span>
          </a>

          <div className="flex justify-center gap-6 pt-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 text-slate-900 rounded-full hover:bg-slate-200 transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
