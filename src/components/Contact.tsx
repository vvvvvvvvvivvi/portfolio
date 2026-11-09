import { personalInfo } from '../data/portfolio-data';

const Contact = () => (
  <section id="contact" className="contact">
    <div className="wrap">
      <h2>Got a messy workflow?</h2>

      <p className="intro">
        I’d like to hear about it. Email is quickest.
      </p>

      <a
        className="mail"
        href={`mailto:${personalInfo.email}`}
        style={{
          display: 'inline-block',
          boxSizing: 'border-box',
          maxWidth: '100%',
          minWidth: 0,
          whiteSpace: 'normal',
          overflowWrap: 'anywhere',
        }}
      >
        {personalInfo.email}
      </a>

      <p style={{ marginTop: 28 }}>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        {' \u00A0·\u00A0 '}
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  </section>
);

export default Contact;