import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects, type Project } from '../data/portfolio-data';

// Treat missing or "WIP" URLs as work-in-progress
const isWip = (url?: string) => !url || url === 'WIP';

// Define type for the extra "More" card
type MoreCard = {
  id: 'more';
  title: string;
  description: string;
  technologies: [];
  isMoreCard: true;
};
type CarouselItem = Project | MoreCard;

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;

  // Extra card at the end
  const moreCard: MoreCard = {
    id: 'more',
    title: 'And More...',
    description:
      'Check out my GitHub profile to see more of my projects and contributions to open source.',
    technologies: [],
    isMoreCard: true,
  };

  const allItems: CarouselItem[] = [...projects, moreCard];
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  // Handle navigation
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerPage >= allItems.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerPage < 0
        ? Math.max(0, allItems.length - itemsPerPage)
        : prev - itemsPerPage
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  // Safe slicing so it never goes empty
  const visibleItems = allItems.slice(
    currentIndex,
    Math.min(currentIndex + itemsPerPage, allItems.length)
  );

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            Projects
          </h2>
          <p className="text-lg text-slate-600 text-center mb-16">
            A collection of my featured works — research, apps, and ideas.
          </p>

          {/* Project Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {visibleItems.map((item) =>
              item.isMoreCard ? (
                <div
                  key={item.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition-all group flex flex-col items-center justify-center p-8 min-h-[400px] text-white"
                >
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-center mb-4">
                    {item.description}
                  </p>
                  <a
                    href="https://github.com/vvvvvvvvvivvi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-semibold border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-slate-900 transition-colors"
                  >
                    <Github size={18} /> Visit GitHub
                  </a>
                </div>
              ) : (
                <div
                  key={item.id}
                  className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group flex flex-col justify-between"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-6 pt-0">
                    {item.liveUrl && !isWip(item.liveUrl) && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-900 hover:underline"
                      >
                        <ExternalLink size={16} /> Live
                      </a>
                    )}
                    {item.githubUrl && (
                      <a
                        href={item.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-slate-900 hover:underline"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === Math.floor(currentIndex / itemsPerPage)
                      ? 'bg-slate-900'
                      : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
