import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolio-data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 text-center mb-16">
            A selection of my recent work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <Code2 size={64} className="text-slate-400" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white text-slate-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        <Github size={18} />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Code2 = ({ size, className }: { size: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export default Projects;
