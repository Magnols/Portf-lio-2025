// src/components/Projetos.jsx

import ProjetoCard from './ProjetoCard';
import './Projetos.css';

function Projetos() {
  return (
    <section id="projetos" className="projetos-secao">
      <h2>Meus Projetos</h2>
      <div className="projetos-grid">

        <ProjetoCard
          imagem="/images/lumina-financeira.gif"
          titulo="Lumina Financeira"
          descricao="Sistema inteligente de gestão financeira pessoal que centraliza e organiza a vida financeira do usuário."
          linkGit="https://github.com/Magnols/Lumina-Financeira.git"
          linkVercel="https://lumina-financeira.vercel.app/"
        />

        <ProjetoCard
          imagem="/images/numero-secreto.gif"
          titulo="Acerte o número secreto"
          descricao="Adivinhe um número de 1 a 1000. Este projeto permite usar o microfone para jogar."
          linkGit="https://github.com/Magnols/numero_secreto.git"
          linkVercel="https://numero-secreto-tau-nine.vercel.app/"
        />

        <ProjetoCard
          imagem="/images/sistema-solar.gif"
          titulo="Sistema Solar"
          descricao="Ferramenta de auxílio para professores, com jogo e visualização do sistema solar para engajar os alunos."
          linkGit="https://github.com/Magnols/Sistema-Solar.git"
          linkVercel="https://sistema-solar-phi.vercel.app/"
        />

        <ProjetoCard
          imagem="/images/calculadora.gif"
          titulo="Calculadora"
          descricao="Uma calculadora funcional para praticar a lógica de programação e manipulação de eventos."
          linkGit="https://github.com/Magnols/Calculadora.git"
          linkVercel="https://calculadora-smoky-two.vercel.app/"
        />
        
        <ProjetoCard
          imagem="/images/pomodoro.gif"
          titulo="Pomodoro"
          descricao="Este projeto visa auxiliar no estudo com o método Pomodoro."
          linkGit="https://github.com/Magnols/pomodoro.git" 
          linkVercel="https://fokus-plum.vercel.app/"
        />

        <ProjetoCard
          imagem="/images/jogo-memoria-libras.gif"
          titulo="Jogo da Memória em Libras"
          descricao="Protótipo para auxiliar alunos surdos na aquisição da Libras e do Português como segunda língua."
          linkGit="https://github.com/Magnols/jogo_da_memoria.git" 
          linkVercel="https://jogo-da-memoria-one-gamma.vercel.app/"
        />

        <ProjetoCard
          imagem="/images/lista-de-compras.gif"
          titulo="Lista de Compras"
          descricao="Aplicação para criar e gerenciar uma lista de compras de forma simples e intuitiva."
          linkGit="https://github.com/Magnols/lista_de_compras.git"
          linkVercel="https://lista-de-compras-beta-ruby.vercel.app"
        />

        <ProjetoCard
          imagem="/images/mochila-de-viagem.gif"
          titulo="Mochila de Viagem"
          descricao="Um organizador de itens para viagens, onde é possível adicionar e remover itens da mochila."
          linkGit="https://github.com/Magnols/Mochila-de-Viagem.git"
          linkVercel="https://mochila-de-viagem-nine-sigma.vercel.app"
        />

        <ProjetoCard
          imagem="/images/portfolio-2023.gif"
          titulo="Portfólio 2023"
          descricao="Portfolio feito com auxílio das aulas da Alura no projeto da CooTEA."
          linkGit="https://github.com/Magnols/portfolio_alura2.git"
          linkVercel="https://portfolio-alura2.vercel.app"
        />

        <ProjetoCard
          imagem="/images/jogo-liard.gif"
          titulo="Jogo Genérico"
          descricao="Um projeto de jogo para praticar conceitos de lógica e interatividade no front-end."
          linkGit="https://github.com/Magnols/jogo.git"
          linkVercel="https://jogo-liard-one.vercel.app"
        />

        <ProjetoCard
          imagem="/images/mp-midi.gif"
          titulo="MP-midi"
          descricao="Criado no treinamento Alura no projeto CooTEA, permite interagir com sons MIDI."
          linkGit="https://github.com/Magnols/mp_midi.git"
          linkVercel="https://mp-midi.vercel.app"
        />

        <ProjetoCard
          imagem="/images/piano.gif"
          titulo="Piano"
          descricao="Uma versão do MP-midi, na qual transformei em um piano digital interativo."
          linkGit="https://github.com/Magnols/mp_piano.git"
          linkVercel="https://mp-piano.vercel.app"
        />

        <ProjetoCard
          imagem="/images/jogo-de-adivinha.gif"
          titulo="Jogo do Adivinha"
          descricao="Um jogo clássico de adivinhação de números para treinar lógica e manipulação do DOM."
          linkGit="https://github.com/Magnols/jogo_de_adivinha.git"
          linkVercel="https://jogo-de-adivinha-ten.vercel.app"
        />

      </div>
    </section>
  );
}

export default Projetos;