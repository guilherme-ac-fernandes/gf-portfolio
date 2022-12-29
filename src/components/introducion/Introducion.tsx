import './Introducion.css';

export default function Introducion() {
  return (
    <section id='introducion' className='introducion_container'>
      <div className='introducion_container_content'>
        <p>Prazer, meu nome é Guilherme Fernandes</p>
        <ul>
          <li>Nintendista</li>
          <li>Leitor / Colecionador de livros</li>
          <li>Wannabe photographer</li>
        </ul>
        <p>
          Sou Desenvolvedor Web Full Stack, de Contagem em Minas Gerais.
          Apaixonado por back-end e atualmente estudando Node.js, Typescript,
          MongoDB e Python.
        </p>
        <button>Currículo</button>
      </div>
    </section>
  );
}
