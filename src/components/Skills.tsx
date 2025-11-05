import { Code2, Database, Wrench, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolio-data';

const Skills = () => {
  const categoryIcons = {
    Frontend: Code2,
    Backend: Database,
    Tools: Wrench,
    Other: Sparkles,
  };

  const categories = ['Frontend', 'Backend', 'Data', 'GIS'] as const;

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-4">
            My Deck
          </h2>
          <p className="text-lg text-slate-600 text-center mb-16">
            At work and beyond work
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              if (categorySkills.length === 0) return null;

              const Icon = categoryIcons[category];

              return (
                <div key={category} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="text-slate-900" size={24} />
                    <h3 className="text-xl font-semibold text-slate-900">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
