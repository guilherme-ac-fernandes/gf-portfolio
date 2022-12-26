import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='accounts_wrapper'>
        <a
          className='social-icon'
          href='https://github.com/guilherme-ac-fernandes'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithubAlt />
        </a>
        <a
          className='social-icon'
          href='https://www.linkedin.com/in/guilherme-ac-fernandes/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn />
        </a>
        <a
          className='social-icon'
          href='mailto:gfengquimica@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <FaEnvelope />
        </a>
      </div>
      <p className='references'>Desenvolvido por Guilherme Fernandes. © 2022</p>
    </footer>
  );
}
