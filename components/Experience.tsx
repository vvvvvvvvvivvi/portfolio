import { Briefcase } from 'lucide-react';
import { experiences } from '../data/portfolio-data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            Experience
          </h2>
          <p className="text-lg text-slate-600 text-center mb-16">
            My journey
          </p>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-300 transform md:-translate-x-1/2"></div>

            {experiences.map((experience, index) => (
              <div key={experience.id} className="mb-12 last:mb-0">
                <div className={`flex flex-col md:flex-row gap-8 items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:text-right md:pr-8">
                    {index % 2 === 0 ? (
                      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <Briefcase className="text-slate-900 flex-shrink-0 md:hidden" size={20} />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-slate-600 font-medium mb-1">
                              {experience.company}
                            </p>
                            <p className="text-sm text-slate-500 mb-3">
                              {experience.period}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="hidden md:block">
                        <p className="text-slate-500 text-sm mb-2">{experience.period}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0">
                    <div className="w-4 h-4 bg-slate-900 rounded-full border-4 border-slate-50"></div>
                  </div>

                  <div className="flex-1 md:pl-8">
                    {index % 2 === 0 ? (
                      <div className="hidden md:block">
                        <p className="text-slate-500 text-sm mb-2">{experience.period}</p>
                      </div>
                    ) : (
                      <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-3 mb-3">
                          <Briefcase className="text-slate-900 flex-shrink-0 md:hidden" size={20} />
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-slate-900 mb-1">
                              {experience.title}
                            </h3>
                            <p className="text-slate-600 font-medium mb-1">
                              {experience.company}
                            </p>
                            <p className="text-sm text-slate-500 mb-3 md:hidden">
                              {experience.period}
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                              {experience.description}
                            </p>
                          </div>
                        </div>
                      </div>
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

export default Experience;
