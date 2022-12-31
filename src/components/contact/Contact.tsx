import React from 'react'

import SectionTitle from '../section_title/SectionTitle'

import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact_container">
      <SectionTitle
        title="Contato"
        text="Envie uma mensagem para meu email através do formulário abaixo"
      />
      <form>
        <input type="text" id="name" placeholder="Nome" />
        <input type="text" id="email" placeholder="Email" />
        <textarea id="message" placeholder="Digite sua mensagem..." />
      </form>
    </section>
  )
}
