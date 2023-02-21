/* eslint-disable no-alert */
import React from 'react'
import { FaFileDownload, FaLinkedinIn } from 'react-icons/fa'
import BigHeadComponent from '../big_head/BigHeadComponent'
import { LINKEDIN_LINK, RESUME_LINK } from '../../data/links'
import Type from './Type'

import './Introducion.css'

export default function Introducion() {
  return (
    <section id="introducion" className="introducion_container">
      <BigHeadComponent />
      <div>
        <p>Oi, meu nome é</p>
        <p>Guilherme Fernandes</p>
        <p>Desenvolvedor Web Full Stack</p>
        <Type />
        <aside>
          <a
            className="introducion_button"
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
            <FaLinkedinIn />
          </a>

          <a
            className="introducion_button"
            href={RESUME_LINK}
            target="_blank"
            rel="noreferrer"
          >
            Currículo
            <FaFileDownload />
          </a>
        </aside>
      </div>
    </section>
  )
}
