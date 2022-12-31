import React from 'react'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Introducion from './components/introducion/Introducion'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Tools from './components/tools/Tools'

import './App.css'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div>
      <Header />
      <main className="main">
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
