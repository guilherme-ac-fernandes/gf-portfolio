import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Header.css';

// Estruturação do menu proveniente do código estruturado pela
// Luá Octaviano, colega de Turma na Trybe
// source: https://github.com/luacomacento/luacomacento.github.io/blob/main/src/components/header/Header.js
function Header() {
  const [menuState, setMenuState] = useState<boolean>(false);

  function toggleMenu() {
    setMenuState(!menuState);
  }

  useEffect(() => {
    const nav = document.querySelector<HTMLInputElement>('nav');

    if (nav != null) {
      if (menuState) {
        nav.style.maxHeight = '100vh';
      } else {
        nav.style.maxHeight = '';
      }
    }
  }, [menuState]);

  return (
    <header>
      <h1 id='title'>
        <a href='/'>Guilherme Fernandes</a>
      </h1>

      <div style={{ display: 'flex', gap: '16px' }}>
        <div onClick={toggleMenu}>
          {!menuState ? (
            <FaBars className='menu_hamburger' />
          ) : (
            <FaTimes className='menu_hamburger' />
          )}
        </div>
      </div>

      <nav>
        <ul>
          <li>
            <a onClick={toggleMenu} href='#about'>
              Sobre
            </a>
          </li>
          <li>
            <a onClick={toggleMenu} href='#projects'>
              Projetos
            </a>
          </li>
          <li>
            <a
              onClick={toggleMenu}
              href='https://www.linkedin.com/in/guilherme-ac-fernandes/'
              target='_blank'
              rel='noreferrer'
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
