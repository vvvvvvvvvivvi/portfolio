import { publications } from '../data/portfolio-data';
const copy: Record<string, [string, JSX.Element | string]> = {
  '1': ['Connecting London', 'The first version, built in R with r5r: a gravity-based measure of job access from travel times, compared across May 2022. Presented at GISRUK 2025 with Paul Longley and Justin van Dijk.'],
  '2': ['Connecting or dividing London?', <>Modelled public transport travel times to jobs before and after the line opened, then profiled the winners and losers by deprivation, car access, ethnicity and unemployment. <b>Some outer boroughs gained journeys over 40% faster to key hubs. The gains weren’t evenly shared.</b></>],
};
const Publications = () => (
  <section id="publications"><div className="wrap"><h2>Who does new infrastructure actually help?</h2>
    <p className="intro">Before product work, I spent a dissertation and two papers putting numbers on that question for London’s Elizabeth line. The same habit runs through my case studies: measure it, then check who it misses.</p>
    <div className="pubs">{[...publications].reverse().map(p => (
      <div className="pub" key={p.id}><div className="k">{p.type} · {p.year}</div><h3>{copy[p.id]?.[0] ?? p.title}</h3><p>{copy[p.id]?.[1] ?? p.description}</p>
        {p.url && p.url !== 'WIP' ? <a href={p.url} target="_blank" rel="noopener noreferrer">Read the paper</a> : <span>In progress</span>}</div>))}
    </div></div></section>
);
export default Publications;
