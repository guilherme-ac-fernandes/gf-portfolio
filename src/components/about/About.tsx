import about_me from '../../data/about_me';
import SectionTitle from '../section_title/SectionTitle';

import './About.css';

export default function About() {
  return (
    <section id='about' className='about_container'>
      <SectionTitle title='Sobre Mim' />
      <div className='about_container_content'>
        <img src='./profile/profile.png' alt='Guilherme Fernandes' />
        <div>
          <p>
            Sou Desenvolvedor Web Full Stack, morando em Contagem/MG. Através
            dos meus estudos na Trybe, apaixonei por back-end e atualmente
            estou estudando sobre Node.js, Typescript, MongoDB e Python.
            <br />
            Algumas curiosidades sobre mim:
          </p>
          <ul>
            {about_me.map((item, index) => (
              <li key={index}>
                <img src={item.imageUrl} alt={item.description} />
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
