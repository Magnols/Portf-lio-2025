// src/App.jsx

import Header from './components/Header';
import Sobre from './components/Sobre';
import Skills from './components/Skills';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header /> {/* 2. Usamos nosso componente aqui */}
      <Sobre /> {/* <<-- 2. Use o componente aqui */}
       <Skills /> {/* <<-- 2. Use o componente aqui */}
      <Projetos /> {/* <<-- 2. Use aqui */}
      <Contato /> {/* <<-- 3. Use o Contato aqui */}
      <Footer /> 
    </div>
  )
}

export default App