// src/components/Header.jsx

import './Header.css'; // <<-- ADICIONE ESTA LINHA

// src/components/Header.jsx

function Header() {
  return (
    <header>
      <h1>Magno Silva</h1>
      <nav>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;