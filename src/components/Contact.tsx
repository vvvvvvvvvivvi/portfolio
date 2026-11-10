import { useState } from 'react';
import { personalInfo } from '../data/portfolio-data';

const THREADS = 'https://www.threads.com/@violetmyalterego?igshid=NTc4MTIwNjQ2YQ==';

const Contact = () => {
  const [label, setLabel] = useState('Copy');
  const copy = async () => {
    try { await navigator.clipboard.writeText(personalInfo.email); setLabel('Copied'); }
    catch { setLabel('Select and copy'); }
    setTimeout(() => setLabel('Copy'), 2500);
  };
  return (
    <section id="contact" className="contact"><div className="wrap">
      <h2>I would love to build a solution that you will use.</h2>
      <p className="ask">
        Reach out to me on <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>, or email me at{' '}
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        <button className="btn" type="button" onClick={copy}>{label}</button>
      </p>
      <p className="social">
        Visit my <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a> or <a href={THREADS} target="_blank" rel="noopener noreferrer">Threads</a>
      </p>
    </div></section>
  );
};
export default Contact;