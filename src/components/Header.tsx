const nav = [['Case studies','#work'],['Side projects','#side'],['Experience','#experience'],['Skills','#skills'],['About','#about'],['Research','#publications'],['Contact','#contact']];
const Header = () => (
  <header><div className="wrap"><a className="logo" href="#top">
    <svg width="38" height="38" viewBox="0 0 38 38" aria-hidden="true"><circle cx="19" cy="19" r="14" fill="#fff" stroke="#dc241f" strokeWidth="6" /><rect x="2" y="14" width="34" height="10" rx="2" fill="#113b92" /><text x="19" y="22.5" textAnchor="middle" fontSize="9" fill="#fff" style={{ fontFamily: 'Hammersmith One,sans-serif' }}>VL</text></svg>Vivian Lee</a>
    <nav aria-label="Main">{nav.map(([l, h]) => <a key={l} href={h}>{l}</a>)}</nav></div></header>
);
export default Header;
