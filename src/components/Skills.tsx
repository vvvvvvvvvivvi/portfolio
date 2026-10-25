const groups = [
 {title:'Discover the right problem',text:'Interviews and behavioural observation help me challenge assumptions before committing to a solution.',skills:['Stakeholder interviews','Product discovery','PRDs','Competitor research','Moderated usability testing']},
 {title:'Make the work deliverable',text:'I collaborate with a Product Owner to translate requirements into prioritised, verifiable development work.',skills:['Backlog co-definition','User stories','Sprint prioritisation','Acceptance criteria','Pre-release verification','Azure DevOps']},
 {title:'Evaluate value and quality',text:'I connect technical work to evidence: processing time, AI evaluation and product benefits.',skills:['Value capture','LLM benchmarking','Schema validation','Python / R / SQL','Power BI','ETL automation']},
 {title:'Build with technical depth',text:'Hands-on development helps me discuss constraints and trade-offs with engineering colleagues.',skills:['React / TypeScript','Node.js','PostgreSQL','APIs / LLM workflows','Git','ArcGIS Pro / QGIS / FME']},
];
const Skills = () => (
  <section id="skills"><div className="wrap"><div className="bay"><h2>How I contribute</h2>
    <div className="skills">{groups.map(g => <div key={g.title}><h3>{g.title}</h3><p>{g.text}</p>{g.skills.map(s => <span key={s}>{s}</span>)}</div>)}</div>
    <p className="edu">UCL · BA Geography with Social Data Science · First Class Honours (2022–2025). IBM Product Owner Professional Certificate. Accenture Digital Skills: User Experience.</p>
  </div></div></section>
);
export default Skills;
