import { personalInfo } from '../data/portfolio-data';
const Contact = () => (
  <section id="contact" className="contact"><div className="wrap">
    <h2>I would love to build a solution that you will use.</h2>
    <p className="ask">Reach out to me on <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>, or via <a href={`mailto:${personalInfo.email}`}>email</a>.</p>
    <p style={{ marginTop: 28 }}><a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a></p>
  </div></section>
);
export default Contact;
