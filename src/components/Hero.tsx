import { useState } from 'react';
// [id, x, label, labelY]
const eliz: [string, number, string, number][] = [['gateway',100,'Gateway',140],['nds',230,'National Data Store',72],['recibee',360,'Recibee',140],['npng',490,'No Pain No Game',72],['tracker',620,'Data Tracker',140],['crm',750,'180DC CRM',72]];
const jub: [number, string, number][] = [[130,'Lucky Star Jar',197],[350,'Get home safe',265],[570,'Geospatial toolbox',197],[790,'Leerics',265]];
const stars = [['16','people interviewed for one dashboard, across eight teams.'],['4,700','reviews and posts read so I didn’t have to guess what annoys people.'],['30 → 3','minutes to produce a reporting figure, after automating it.'],['7% → 3%','hallucinations in my recipe app. Still not zero, and I say so.'],['40%+','faster travel to jobs for some outer London boroughs after the Elizabeth line.']];
const Hero = () => {
  const [i, setI] = useState(-1);
  return (
    <div className="wrap hero" id="top">
      <h1>Why is this so annoying? I’ll find out and make sure it gets fixed.</h1>
      <p className="lead">I’m Vivian, a graduate GIS analyst in London turning messy workflows into useful products through user research, honest trade-offs and hands-on building. I’m looking for Product Owner and Associate Product Manager roles.</p>
      <div className="cta"><a className="btn fill" href="#work">Read the case studies</a><a className="btn" href="#contact">Say hello</a></div>
      <div className="map">
        <svg viewBox="0 0 880 330" role="img" aria-label="Two-line map: case studies on the Elizabeth line, side projects on the Jubilee line">
          <text className="t" x="40" y="28">ELIZABETH LINE · CASE STUDIES</text><text className="t" x="40" y="318">JUBILEE LINE · SIDE PROJECTS</text>
          <path d="M40 100H840" stroke="#6950a1" strokeWidth="14" strokeLinecap="round" /><path d="M40 225H840" stroke="#7f8c97" strokeWidth="14" strokeLinecap="round" />
          {eliz.map(([id, x, l, y]) => <g key={id}><circle cx={x} cy="100" r="9" fill="#fff" stroke="#26233a" strokeWidth="4" /><a href={`#${id}`}><text x={x} y={y} textAnchor="middle">{l}</text></a></g>)}
          {jub.map(([x, l, y]) => <g key={l}><circle cx={x} cy="225" r="9" fill="#fff" stroke="#26233a" strokeWidth="4" /><a href="#side"><text x={x} y={y} textAnchor="middle">{l}</text></a></g>)}
        </svg>
        <div className="star-box"><button className="btn fill" type="button" onClick={() => setI(i + 1)}>Draw a lucky star</button>
          <div id="starOut" aria-live="polite">{i < 0 ? 'A nod to my Lucky Star Jar app: each star holds a real number from my work.' :
            <span className="star" key={i} style={{ display: 'block' }}><b>★ {stars[i % stars.length][0]}</b>{stars[i % stars.length][1]}</span>}</div></div>
      </div>
    </div>
  );
};
export default Hero;