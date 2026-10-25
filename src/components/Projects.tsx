import { useEffect, useState } from 'react';
import { caseStudies } from '../data/case-studies';
const filters = ['All work', 'Discovery', 'Delivery', 'AI & UX'];
const Projects = () => {
  const [f, setF] = useState('All work');
  useEffect(() => {
    const h = () => { const id = location.hash.slice(1); if (caseStudies.some(c => c.id === id)) { setF('All work'); setTimeout(() => document.getElementById(id)?.scrollIntoView(), 0); } };
    window.addEventListener('hashchange', h); return () => window.removeEventListener('hashchange', h);
  }, []);
  return (
    <section id="work"><div className="wrap">
      <h2>The problem. The decision. The evidence.</h2>
      <p className="intro">Six pieces of work, with my role and how far each one got, stated plainly. Tap a station on the map to jump to it.</p>
      <div className="chips" role="group" aria-label="Filter case studies">
        {filters.map(x => <button key={x} type="button" className="chip" aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}</div>
      <div className="rail">
        {caseStudies.filter(c => f === 'All work' || c.category === f).map(c => (
          <article key={c.id} id={c.id} className="stop"><div className="grid">
            <div><div className="m">{c.metric}</div><div className="ml">{c.metricLabel}</div></div>
            <div><div className="proj">{c.project}</div><h3>{c.title}</h3><p>{c.summary}</p><p className="role"><b>My role:</b> {c.role}</p>
              <details><summary>Read case study</summary><div className="d">
                {([['The problem', c.problem], ['What I did', c.action], ['The decision', c.decision], ['Outcome and evidence', c.outcome], ['What this taught me', c.reflection]] as const).map(([l, t]) => <div key={l}><h4>{l}</h4><p>{t}</p></div>)}
              </div></details>
              <div className="tags">{c.skills.map(s => <span key={s}>{s}</span>)}</div></div>
          </div></article>))}
      </div>
    </div></section>
  );
};
export default Projects;
