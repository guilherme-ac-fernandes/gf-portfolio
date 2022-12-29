import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Introducion from './components/introducion/Intro';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Tools from './components/tools/Tools';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Introducion />
        <About />
        <Tools />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
