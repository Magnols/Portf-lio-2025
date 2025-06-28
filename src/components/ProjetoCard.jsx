// src/components/ProjetoCard.jsx

import './ProjetoCard.css';

function ProjetoCard({ imagem, titulo, descricao, linkGit, linkVercel }) {
  return (
    <div className="projeto-card">
      <img src={imagem} alt={`Imagem do projeto ${titulo}`} className="projeto-imagem" />
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <div className="card-botoes">
        <a href={linkGit} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={linkVercel} target="_blank" rel="noopener noreferrer" className="botao-vercel">
          Ver Online
        </a>
      </div>
    </div>
  );
}

export default ProjetoCard;