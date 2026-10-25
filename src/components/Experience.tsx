import { experiences } from '../data/portfolio-data';
const Experience = () => (
  <section id="experience"><div className="wrap"><h2>Where I’ve been</h2>
    <ol className="exp">{experiences.map(e => <li key={e.id}><div className="when">{e.period}</div><div><h3>{e.title}, {e.company}</h3><p>{e.description}</p></div></li>)}</ol>
  </div></section>
);
export default Experience;
