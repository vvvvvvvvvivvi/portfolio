import { useState } from 'react';
const W: Record<string, string[]> = {nds:['National Data Store','Jacobs','nds'],etb:['Efficiency Toolbox revival','Jacobs'],gw:['Gateway Training Dashboard','Jacobs','gateway'],dct:['Data Collection Tracker','Jacobs','tracker'],auto:['Automation & ETL','Jacobs'],ag:['AI agent for geospatial tools','Jacobs'],cl:['Client & stakeholder work','Jacobs'],rec:['Recibee','Independent','recibee'],npng:['No Pain No Game','Independent','npng'],dc:['180 Degrees Consulting','UCL','crm'],el:['Elizabeth line research','Published']};
const CATS: string[] = ['Product & discovery','Agile delivery','Business intelligence','AI & data science','Geospatial','Engineering'];
const SK: [number, string, Record<string, string>][] = [
[0,'User research & interviews',{gw:'16 stakeholders across 8 teams; 11 of 16 backed CSV exports over PDF-only.',etb:'Interviewed 20 analysts to estimate time saved per use.'}],
[0,'PRDs & requirements',{gw:'PRD behind a sponsor-facing business case.',npng:'PRD and proposed feature roadmap.'}],
[0,'Usability testing & UAT',{dct:'Moderated screen-share sessions led to hover guidance; a UAT pilot is being prepared.',rec:'Sessions with 15 participants refined the schemas and interface.'}],
[0,'Competitor research',{npng:'Pain points across five competing productivity apps.'}],
[0,'Prioritising competing requests',{cl:'Clarify the underlying objective, then demo alternatives live on client calls.'}],
[1,'Backlog & user stories',{nds:'Co-define the backlog and write stories with the Product Owner.'}],
[1,'Sprint planning',{nds:'Help decide what enters each fortnightly sprint.'}],
[1,'Acceptance criteria',{nds:'Write criteria in planning, then verify finished work before release.'}],
[1,'Stakeholder communication',{cl:'Coordinate fortnightly technical calls for 150+ colleagues across the European Geospatial team.',dc:'Client discovery with NGOs and B Corps.'}],
[1,'Azure DevOps & Git',{auto:'Used alongside Python and SQL for automation and web GIS work.'}],
[2,'Dashboards & reporting',{gw:'Built around the follow-up users actually needed.',dct:'Iterated after moderated usability testing.',dc:'Dashboards and reporting workflows for engagement, marketing and donor acquisition.',auto:'25+ figure reporting packages automated: about 30 min to 3 min per figure.'}],
[2,'Value & ROI measurement',{etb:'£41.7k estimated efficiency savings, cumulative since 2021, from analyst interviews and usage. Estimates, not audited.',nds:'Contributing to a value capture tool for benefits and customer cost savings.'}],
[2,'SQL',{auto:'Used alongside Python in automation work.',rec:'PostgreSQL behind the app.'}],
[3,'AI agent (GitHub Copilot)',{ag:'Built an agent that creates custom tools for geospatial tasks at work.'}],
[3,'LLM evaluation',{rec:'Benchmarked against verified recipes: hallucinations 7% to 3% in project evaluation.'}],
[3,'Schema validation & fallbacks',{rec:'Confidence-gated extraction with fallback workflows.',nds:'Automated schema guardrails on a product serving about 300 datasets.'}],
[3,'NLP & topic modelling',{npng:'DistilBERT, BERTopic and aspect-based sentiment on about 4,700 reviews and posts.'}],
[3,'Python',{auto:'Reusable geospatial automation tools.',npng:'Sentiment and topic-modelling pipeline.'}],
[4,'ArcGIS Pro & ArcPy',{auto:'Python in Jupyter notebooks inside ArcGIS Pro, so colleagues need no separate IDE.',ag:'The geospatial tasks the agent’s tools are built for.'}],
[4,'Web GIS apps',{auto:'Three bespoke web GIS applications and interactive dashboards.'}],
[4,'Large-scale ETL',{auto:'50GB+ datasets: from over 3 hours to about 1 hour each.'}],
[4,'Spatial analysis in R',{el:'Travel-time and job-access modelling for the Elizabeth line, using r5r.'}],
[5,'React & Node.js',{rec:'Full-stack app: React front end, Node.js back end, LLM workflows.'}],
[5,'Data pipelines & scrapers',{nds:'15 scrapers feeding about 300 datasets, refreshed daily, used by 140+ staff in the UK and Poland.'}]];
const Skills = () => {
  const [mode, setMode] = useState<'skill' | 'work'>('skill');
  const [cat, setCat] = useState(0);
  const [sel, setSel] = useState(0);
  const ks = Object.keys(W);
  const list = SK.filter(s => s[0] === cat);
  const s = list[sel];
  const k = ks[sel];
  const link = (id?: string) => id ? <a href={`#${id}`}>Read the case study</a> : null;
  return (
    <section id="skills"><div className="wrap"><h2>Skills, with receipts</h2>
      <p className="intro">Pick a line, then a station, to see exactly where I’ve used a skill. Or start from a project and see what it proves.</p>
      <div className="chips" role="tablist" aria-label="View">
        {(['skill', 'work'] as const).map(m => <button key={m} className="chip" type="button" aria-pressed={mode === m} onClick={() => { setMode(m); setCat(0); setSel(0); }}>{m === 'skill' ? 'By skill' : 'By project'}</button>)}</div>
      <div className="sk">
        <div>
          {mode === 'skill' && <div className="chips" role="group" aria-label="Skill categories">
            {CATS.map((c, i) => <button key={c} className="chip" type="button" aria-pressed={i === cat} onClick={() => { setCat(i); setSel(0); }}>{c}</button>)}</div>}
          <ol className="stns">
            {mode === 'skill' ? list.map((x, i) => { const n = Object.keys(x[2]).length; return <li key={x[1]}><button type="button" aria-pressed={i === sel} onClick={() => setSel(i)}>{x[1]}<small>{n} proof{n > 1 ? 's' : ''}</small></button></li>; })
              : ks.map((x, i) => <li key={x}><button type="button" aria-pressed={i === sel} onClick={() => setSel(i)}>{W[x][0]}<small>{W[x][1]}</small></button></li>)}
          </ol>
        </div>
        <div className="board" aria-live="polite">
          {mode === 'skill' && s ? <><h3>{s[1]}</h3><div className="bd">{Object.entries(s[2]).map(([w, t]) => <div className="ev" key={w}><b>{W[w][0]}</b><span className="tag">{W[w][1]}</span><p>{t}</p>{link(W[w][2])}</div>)}</div></>
            : <><h3>{W[k][0]}</h3><div className="bd">{SK.filter(x => x[2][k]).map(x => <div className="ev" key={x[1]}><b>{x[1]}</b><span className="tag">{CATS[x[0]]}</span><p>{x[2][k]}</p></div>)}{link(W[k][2])}</div></>}
        </div>
      </div>
    </div></section>
  );
};
export default Skills;
