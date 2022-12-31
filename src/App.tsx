import React from 'react'
import Header from './components/header/Header'
import Introducion from './components/introducion/Introducion'
import About from './components/about/About'
import Tools from './components/tools/Tools'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

import './App.css'

// Referências:
// Portfólio construído baseado nos sequintes criações de colegas de profissão:
// 1. Luá Octaviano (source: https://luaoctaviano.dev/)
// 2. João Pedro Oliveira (source: https://jpoliveiramateus.vercel.app/)
// 3. Ícaro Harry (source: https://icaro.io)
function App() {
  return (
    <div>
      <Header />
      <main>
        <Introducion />
        <About />
        <Tools />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
