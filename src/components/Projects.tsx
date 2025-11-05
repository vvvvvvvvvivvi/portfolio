import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { projects, type Project } from '../data/portfolio-data';

// Treat missing or "WIP" URLs as work-in-progress
const isWip = (url?: string) => !url || url === 'WIP';

// Discriminated union for the extra card
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
      {/* ...snip... */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {visibleItems.map((item) =>
          item.isMoreCard ? (
            <div key={item.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden hover:shadow-lg transition-all group flex items-center justify-center p-8 min-h-[400px]">
              {/* ...And More card... */}
            </div>
          ) : (
            <div key={item.id} className="bg-slate-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group">
              {/* item is narrowed to Project here */}
              {/* ...project card... including WIP pills using isWip(item.liveUrl) ... */}
            </div>
          )
        )}
      </div>
      {/* ...rest unchanged... */}
    </section>
  );
};

const Code2 = ({ size, className }: { size: number; className?: string }) => (
  <svg /* ... */ />
);

export default Projects;
