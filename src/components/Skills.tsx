import React from 'react';
import { Monitor, Server, BarChart3, Map } from 'lucide-react';
import { skills } from '../data/portfolio-data';

const Skills = () => {
  const frontend = skills.filter((s) => s.category === 'Frontend');
  const backend  = skills.filter((s) => s.category === 'Backend');
  const data     = skills.filter((s) => s.category === 'Data');
  const gis      = skills.filter((s) => s.category === 'GIS');

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

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

            {/* Frontend — featured large tile */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-violet-100 rounded-xl group-hover:bg-violet-200 transition-colors">
                  <Monitor className="text-violet-600" size={22} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Frontend</h3>
                <span className="ml-auto text-xs text-slate-400 font-mono">{frontend.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-violet-50 text-violet-700 rounded-full text-sm font-medium hover:bg-violet-100 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* GIS — dark tall tile, spans 2 rows on lg */}
            <div className="md:col-span-2 lg:col-span-1 lg:row-span-2 bg-slate-900 text-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              {/* coordinate grid texture */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="relative flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">
                    <Map className="text-emerald-400" size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">GIS</h3>
                  <span className="ml-auto text-xs text-slate-500 font-mono">{gis.length} skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {gis.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 bg-white/10 text-slate-100 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm text-slate-400 leading-relaxed">
                  Where data meets geography. I geek out about spatial equity, transport networks, and maps that actually mean something.
                </p>
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-100 rounded-xl group-hover:bg-cyan-200 transition-colors">
                  <Server className="text-cyan-600" size={22} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Backend</h3>
                <span className="ml-auto text-xs text-slate-400 font-mono">{backend.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium hover:bg-cyan-100 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Data */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-slate-100 group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-xl group-hover:bg-amber-200 transition-colors">
                  <BarChart3 className="text-amber-600" size={22} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">Data</h3>
                <span className="ml-auto text-xs text-slate-400 font-mono">{data.length} skills</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full text-sm font-medium hover:bg-amber-100 transition-colors cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
