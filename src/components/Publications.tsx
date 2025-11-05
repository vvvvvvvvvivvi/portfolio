// WIP: Publications Section
// -------------------------
// TODOs:
// - Add fade-in animation (Framer Motion)
// - Add filtering by type (optional)
// - Improve responsive card spacing

import { FileText, ExternalLink } from 'lucide-react';
import { publications, type Publication } from '../data/portfolio-data';

// Treat missing or "WIP" URLs as work-in-progress
const isWip = (url?: string) => !url || url === 'WIP';

// Utility to map publication type to badge color
const getTypeBadgeColor = (type: Publication['type'] | string) => {
  switch (type) {
    case 'Journal':
      return 'bg-blue-100 text-blue-800';
    case 'Conference':
      return 'bg-green-100 text-green-800';
    case 'Preprint':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-slate-100 text-slate-800';
  }
};

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Publications
          </h2>
          <p className="text-lg text-slate-300 text-center mb-16">
            Research and academic contributions
          </p>

          {/* Publication Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub) => (
              <div
                key={pub.id}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header: Icon + Type + Year */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-slate-900 flex-shrink-0" size={22} />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(
                        pub.type
                      )}`}
                    >
                      {pub.type}
                    </span>
                  </div>
                  <span className="text-slate-500 text-sm">{pub.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-2 leading-snug">
                  {pub.title}
                </h3>

                {/* Authors */}
                <p className="text-sm text-slate-600 mb-2">
                  {pub.authors?.join(', ') || 'Author list pending'}
                </p>

                {/* Venue */}
                <p className="text-sm font-medium text-slate-700 mb-3">
                  {pub.venue || 'Venue TBA'}
                </p>

                {/* Description */}
                {pub.description && (
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                    {pub.description}
                  </p>
                )}

                {/* External link or WIP pill */}
                {!isWip(pub.url) ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <span>Read Publication</span>
                    <ExternalLink size={16} />
                  </a>
                ) : (
                  <span
                    className="inline-flex items-center gap-2 px-6 py-2 bg-slate-100 text-slate-400/80 border border-slate-200 rounded-lg cursor-not-allowed"
                    aria-disabled="true"
                    title="Work in progress"
                  >
                    <span>Read Publication (WIP)</span>
                    <ExternalLink size={16} />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
