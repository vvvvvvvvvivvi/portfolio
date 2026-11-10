const items = [
  { k: 'Made as a gift', t: 'Lucky Star Jar', d: 'Digital lucky stars, each hiding a compliment. Built for someone whose love language is words of affirmation.', live: 'https://vvvvvvvvvivvi.github.io/star-jar/', code: 'https://github.com/vvvvvvvvvivvi/star-jar' },
  { k: 'Made for my partner', t: 'Get home safe (安心出行)', d: 'A home-screen widget with live TfL journey checks and a one-tap WhatsApp share, so getting home is something we can both see.' },
  { k: 'Made to save time', t: 'Geospatial toolbox', d: 'Reusable GIS tools that turn repeat tasks into one click. Born from doing the same steps one time too many.' },
  { k: 'Lyric writing, 2020–2025', t: 'Leerics', d: 'A portfolio of my Cantonese lyric writing (填詞).', live: 'https://vvvvvvvvvivvi.github.io/leerics/' },
];
const SideProjects = () => (
  <section id="side"><div className="wrap"><h2 style={{ ['--hc' as string]: 'var(--jub)' }}>Built on the side</h2>
    <p className="intro">Small things, each made for a reason.</p>
    <div className="pubs">{items.map(p => <div className="pub" key={p.t}><div className="k">{p.k}</div><h3>{p.t}</h3><p>{p.d}</p>
      {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Open it</a>}{p.live && p.code && ' · '}
      {p.code && <a href={p.code} target="_blank" rel="noopener noreferrer">Code</a>}</div>)}</div>
  </div></section>
);
export default SideProjects;