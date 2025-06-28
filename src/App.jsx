// src/App.jsx

import Header from './components/Header';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';

function App() {
  return (
    <div>
      <Header /> {/* 2. Usamos nosso componente aqui */}
      <Sobre /> {/* <<-- 2. Use o componente aqui */}
      <Projetos /> {/* <<-- 2. Use aqui */}
    </div>
  )
}

export default App