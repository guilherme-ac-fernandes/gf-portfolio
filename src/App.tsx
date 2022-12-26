import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Introducion from './components/introducion/Intro';
import About from './components/about/About';
import Projects from './components/projects/Projects';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Introducion />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
