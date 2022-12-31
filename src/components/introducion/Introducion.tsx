/* eslint-disable no-alert */
import React from 'react'

import { TypeAnimation } from 'react-type-animation'
import { FaFileDownload, FaLinkedinIn } from 'react-icons/fa'
import BigHeadComponent from '../big_head/BigHeadComponent'

import './Introducion.css'
import { LINKEDIN_LINK } from '../../data/links'

const PHRASE = 'Eu programo'
const SET_TIME = 2000

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
          className="introducion_animation"
          wrapper="div"
          cursor
          repeat={Infinity}
          style={{ fontSize: '1.2rem' }}
        />
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
