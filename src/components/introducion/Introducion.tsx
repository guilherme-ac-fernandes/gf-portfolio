/* eslint-disable no-alert */
import React from 'react'
import { FaFileDownload, FaLinkedinIn } from 'react-icons/fa'
import { LINKEDIN_LINK } from '../../data/links'
import BigHeadComponent from '../big_head/BigHeadComponent'
import Type from './Type'

import './Introducion.css'

export default function Introducion() {
  const handleResume = () => {
    alert('Função não implementada')
  }

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
          <button
            onClick={handleResume}
            className="introducion_button"
            type="button"
          >
            Currículo
            <FaFileDownload />
          </button>
        </aside>
      </div>
    </section>
  )
}
