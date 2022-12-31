import React from 'react'

import { FaEnvelope, FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import { GITHUB_LINK, LINKEDIN_LINK, MAILTO_EMAIL_LINK } from '../../data/links'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="accounts_wrapper">
        <a
          className="accounts_link"
          href={LINKEDIN_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="accounts_link"
          href={GITHUB_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt />
        </a>
        <a
          className="accounts_link"
          href={MAILTO_EMAIL_LINK}
          target="_blank"
          rel="noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
      <p className="references">Desenvolvido por Guilherme Fernandes. © 2023</p>
    </footer>
  )
}
