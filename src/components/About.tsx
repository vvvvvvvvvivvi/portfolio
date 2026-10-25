import { milestones } from '../data/portfolio-data';
const About = () => (
  <section id="about"><div className="wrap about">
    <div><h2 style={{ marginBottom: 24 }}>About me</h2>
      <p>I like getting to the bottom of why something is frustrating, then building something that makes it easier. Sometimes that means writing Python; sometimes it means asking one more question before writing anything at all.</p>
      <p>I still get far too excited about maps. The question I keep coming back to: does this actually help someone?</p></div>
    <div className="nums">{milestones.map(m => <div key={m.label}><b>{m.value}</b><span>{m.label}</span></div>)}</div>
  </div></section>
);
export default About;
