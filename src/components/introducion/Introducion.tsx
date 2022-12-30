import { TypeAnimation } from 'react-type-animation';
import './Introducion.css';

const PHRASE = 'Eu programo';
const SET_TIME = 2000;

export default function Introducion() {
  return (
    <section id='introducion' className='introducion_container'>
      <div>
        <p>Oi, meu nome é</p>
        <p>Guilherme Fernandes</p>
        <p>Desenvolvedor Web Full Stack</p>
        <TypeAnimation
          sequence={[
            `${PHRASE} em JavaScript..`,
            SET_TIME,
            `${PHRASE} em TypeScript..`,
            SET_TIME,
            `${PHRASE} em Python..`,
            SET_TIME,
            `${PHRASE} para você!!`,
            SET_TIME,
          ]}
          className='introducion_animation'
          wrapper='div'
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: '1.8rem' }}
        />
      </div>
      <button className='introducion_button'>Currículo</button>
    </section>
  );
}
