import about_me from '../../data/about_me';
import './Introducion.css';

export default function Introducion() {
  return (
    <section id='introducion' className='introducion_container'>
      <div>
        <p>Prazer, meu nome é</p>
        <p>Guilherme Fernandes</p>
      </div>
      <ul>
        {about_me.map((item, index) => (
          <li key={index}>
            <img src={item.imageUrl} alt={item.description} />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <p>
        Sou Desenvolvedor Web Full Stack, de Contagem em Minas Gerais.
        Apaixonado por back-end e atualmente estudando Node.js, Typescript,
        MongoDB e Python.
      </p>
      <button>Currículo</button>
    </section>
  );
}
