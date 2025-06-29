// src/components/Contato.jsx
import './Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato-secao">
      <h2>Entre em Contato</h2>

      <div className="contato-container">
        {/* Coluna da Esquerda: Informações de Contato */}
        <div className="contato-info">
          <h3>Informações Diretas</h3>
          <p>Estou disponível para novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato!</p>
          <ul>
            <li><strong>Email:</strong> seu.email@exemplo.com</li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer">/seu-usuario</a></li>
            <li><strong>GitHub:</strong> <a href="https://github.com/Magnols" target="_blank" rel="noopener noreferrer">/Magnols</a></li>
          </ul>
        </div>

        {/* Coluna da Direita: Formulário */}
        <div className="contato-form">
          <h3>Envie uma Mensagem</h3>
          {/* O 'action' do formulário aponta para o seu link do Formspree */}
          <form action="https://formspree.io/f/xvgrlpjp" method="POST">
            <div className="form-grupo">
              <label htmlFor="name">Seu Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-grupo">
              <label htmlFor="email">Seu Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-grupo">
              <label htmlFor="message">Sua Mensagem:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="botao-enviar">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;