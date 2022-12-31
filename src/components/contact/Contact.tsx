import React, { useState } from 'react'
import SectionTitle from '../section_title/SectionTitle'

import './Contact.css'

export default function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const handleSubmit = () => {
    console.log(name, email, message)
  }

  return (
    <section id="contact" className="contact_container">
      <SectionTitle
        title="Contato"
        text="Envie uma mensagem para meu email através do formulário abaixo"
      />
      <form>
        <input
          type="text"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type="text"
          id="email"
          placeholder="Email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <textarea
          id="message"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />

        <button onClick={handleSubmit} type="button">Enviar</button>
      </form>
    </section>
  )
}
