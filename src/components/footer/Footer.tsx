import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className='accounts_wrapper'>
        <a
          className='accounts_link'
          href='https://www.linkedin.com/in/guilherme-ac-fernandes/'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedinIn />
        </a>
        <a
          className='accounts_link'
          href='https://github.com/guilherme-ac-fernandes'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithubAlt />
        </a>
        <a
          className='accounts_link'
          href='mailto:gfengquimica@gmail.com'
          target='_blank'
          rel='noreferrer'
        >
          <FaEnvelope />
        </a>
      </div>
      <p className='references'>Desenvolvido por Guilherme Fernandes. © 2023</p>
    </footer>
  );
}
