// src/components/Skills.jsx

import './Skills.css';

function Skills() {
  return (
    <section className="skills-secao">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <i className="devicon-html5-plain-wordmark colored"></i>
          <p>HTML5</p>
        </div>
        <div className="skill-card">
          <i className="devicon-css3-plain-wordmark colored"></i>
          <p>CSS3</p>
        </div>
        <div className="skill-card">
          <i className="devicon-javascript-plain colored"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="devicon-react-original-wordmark colored"></i>
          <p>React</p>
        </div>
        <div className="skill-card">
          <i className="devicon-nextjs-original-wordmark"></i>
          <p>Next.js</p>
        </div>
        <div className="skill-card">
          <i className="devicon-tailwindcss-plain-wordmark colored"></i>
          <p>Tailwind CSS</p>
        </div>
        <div className="skill-card">
          <i className="devicon-git-plain-wordmark colored"></i>
          <p>Git</p>
        </div>
        <div className="skill-card">
          <i className="devicon-vitejs-plain colored"></i>
          <p>Vite</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;