import { personalInfo, milestones } from '../data/portfolio-data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center mb-12">
            About Me
          </h2>

          <div className="mb-16">
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {milestone.value}
                </div>
                <div className="text-sm text-slate-600">
                  {milestone.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
