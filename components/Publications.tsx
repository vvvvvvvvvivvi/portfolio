import { FileText, ExternalLink } from 'lucide-react';
import { publications } from '../data/portfolio-data';

const Publications = () => {
  const getTypeBadgeColor = (type: string) => {
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

          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((publication) => (
              <div
                key={publication.id}
                className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <FileText className="text-slate-900 flex-shrink-0" size={24} />
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeBadgeColor(publication.type)}`}>
                      {publication.type}
                    </span>
                  </div>
                  <span className="text-slate-500 text-sm">{publication.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  {publication.title}
                </h3>

                <p className="text-sm text-slate-600 mb-3">
                  {publication.authors.join(', ')}
                </p>

                <p className="text-sm font-medium text-slate-700 mb-4">
                  {publication.venue}
                </p>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {publication.description}
                </p>

                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                >
                  <span>Read Publication</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
