import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { projects } from '../data/portfolio-data';

// Helper: treat missing or "WIP" URLs as work-in-progress
const isWip = (url?: string) => !url || url === 'WIP';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const allItems = [
    ...projects,
    {
      id: 'more',
      title: 'And More...',
      description:
        'Check out my GitHub profile to see more of my projects and contributions to open source.',
      technologies: [],
      isMoreCard: true,
    },
  ];

  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % allItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - itemsPerPage;
      return newIndex < 0 ? Math.max(0, allItems.length - itemsPerPage) : newIndex;
    });
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visibleItems = allItems.slice(currentIndex, currentIndex + itemsPerPage);

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

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {visibleItems.map((item) => {
                if ('isMoreCard' in item && item.isMoreCard) {
                  return (
                    <div
                      key={item.id}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition-all group flex items-center justify-center p-8 min-h-[400px]"
                    >
                      <div className="text-center">
                        <MoreHorizontal size={64} className="text-slate-300 mx-auto mb-6" />
                        <h3 className="text-2xl font-semibold text-white mb-4">
                          {item.title}
                        </h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {item.description}
                        </p>
                        <a
                          href="https://github.com/vvvvvvvvvivvi"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                        >
                          <Github size={20} />
                          <span>View GitHub</span>
                        </a>
                      </div>
                    </div>
                  );
                }

                const project = item as typeof projects[0];
                return (
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
                        {!isWip(project.liveUrl) ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors"
                          >
                            <ExternalLink size={18} />
                            <span className="text-sm">Live Demo</span>
                          </a>
                        ) : (
                          <span
                            className="flex items-center gap-2 text-slate-400/70 bg-slate-100 border border-slate-200 rounded px-2 py-1 cursor-not-allowed"
                            aria-disabled="true"
                            title="Work in progress"
                          >
                            <ExternalLink size={18} />
                            <span className="text-sm">Live Demo (WIP)</span>
                          </span>
                        )}

                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-slate-900 hover:text-slate-600 transition-colors"
                          >
                            <Github size={18} />
                            <span className="text-sm">Code</span>
                          </a>
                        ) : (
                          <span
                            className="flex items-center gap-2 text-slate-400/70 bg-slate-100 border border-slate-200 rounded px-2 py-1 cursor-not-allowed"
                            aria-disabled="true"
                            title="Work in progress"
                          >
                            <Github size={18} />
                            <span className="text-sm">Code (WIP)</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation buttons (desktop) */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden lg:block"
              aria-label="Previous projects"
            >
              <ChevronLeft size={24} className="text-slate-900" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-50 transition-colors hidden lg:block"
              aria-label="Next projects"
            >
              <ChevronRight size={24} className="text-slate-900" />
            </button>
          </div>

          {/* Page indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerPage) === index
                    ? 'bg-slate-900 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          {/* Mobile nav buttons */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              Next
            </button>
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
