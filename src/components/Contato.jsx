// src/components/Contato.jsx
import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato-secao">
      <h2>Entre em Contato</h2>
      <p>Estou disponível para novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!</p>
      <ul>
        <li>Email: <strong>seu.email@exemplo.com</strong></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer"><strong>/seu-usuario</strong></a></li>
        <li>GitHub: <a href="https://github.com/Magnols" target="_blank" rel="noopener noreferrer"><strong>/Magnols</strong></a></li>
      </ul>
    </section>
  );
}

export default Contato;