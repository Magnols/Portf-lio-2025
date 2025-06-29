// src/components/Footer.jsx
import './Footer.css';

function Footer() {
  const anoAtual = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className="footer">
      <p>&copy; {anoAtual} Magno Silva. Todos os direitos reservados.</p>
      <p>Desenvolvido com ❤️ e React.</p>
    </footer>
  );
}

export default Footer;