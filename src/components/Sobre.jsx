// src/components/Sobre.jsx

import './Sobre.css'; 

function Sobre() {
  return (
    <section id="sobre" className="sobre-secao">
      <h2>Sobre Mim</h2>
      <p>
        Olá! Sou Magno, um Desenvolvedor Front-End apaixonado por criar interfaces que não são apenas funcionais, mas também 
        <span 
          className="destaque-tooltip" 
          data-tooltip="Interfaces que podem ser utilizadas por todas as pessoas, incluindo aquelas com alguma deficiência."
        > acessíveis</span> a todos.
      </p>
      <p>
        Minha trajetória profissional me proporcionou uma perspectiva única. Como 
        <span 
          className="destaque-tooltip" 
          data-tooltip="Profissional que atua como ponte de comunicação entre pessoas surdas e ouvintes."
        > Intérprete de LIBRAS</span>, 
        desenvolvi uma profunda empatia e habilidade para construir pontes de comunicação — uma skill que aplico diretamente no desenvolvimento de interfaces intuitivas. Antes disso, como Técnico Agrícola responsável por 400 hectares de produção, aprendi sobre responsabilidade, resolução de problemas complexos e gerenciamento em grande escala. Hoje, aplico essa mesma dedicação para cultivar códigos limpos e projetos bem estruturados.
      </p>
      <p>
        Minha base técnica foi construída no curso Técnico de Informática para Internet no IFNMG e solidificada na certificação Full Stack com JavaScript da CooTEA. Tenho um ótimo domínio de HTML, CSS e JavaScript, e estou constantemente aprofundando meus conhecimentos em 
        <span 
          className="destaque-tooltip" 
          data-tooltip="Uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário rápidas e interativas."
        > React</span>. 
        Um exemplo prático da minha paixão é minha colaboração no projeto R-TEA, uma aplicação para registro de comportamentos de crianças autistas, onde utilizei 
        <span 
          className="destaque-tooltip" 
          data-tooltip="Um framework construído sobre o React, focado em performance e otimização para SEO."
        > Next.js</span> e 
        <span 
          className="destaque-tooltip" 
          data-tooltip="Um framework CSS que permite estilizar componentes de forma muito rápida com classes utilitárias."
        > Tailwind CSS</span> para ajudar a criar uma ferramenta de impacto social.
      </p>
      <p>
        Sou proativo, adoro aprender e estou em busca da minha primeira oportunidade para aplicar minhas habilidades em projetos reais, colaborar com equipes e continuar crescendo como desenvolvedor. Convido você a explorar meus projetos abaixo e a se conectar comigo.
      </p>
    </section>
  );
}

export default Sobre;