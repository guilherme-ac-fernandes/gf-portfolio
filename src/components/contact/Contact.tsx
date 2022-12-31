/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import SectionTitle from '../section_title/SectionTitle'

import './Contact.css'

// Estruturação do componente para envio através do canal RemyFamily
// source: https://www.youtube.com/watch?v=NgWGllOjkbs
export default function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isDisable, setIsDisable] = useState<boolean>(true)

  useEffect(() => {
    // Regex proveniente do projeto Delivery App do autor
    // source: https://github.com/guilherme-ac-fernandes/
    // delivery-app/blob/main/front-end/src/pages/Login.jsx
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if (name !== '' && email !== '' && message !== '' && email.match(regex)) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }, [name, email, message])

  // Tipagem do Evento proveniente do Stack OverFlow
  // source: https://stackoverflow.com/questions/6899
  // 1527/using-emailjs-in-typescript-for-a-contact-
  // form-argument-of-type-eventtarget-i
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_273gvok',
      'template_n9qgsl8',
      e.currentTarget,
      'U00LEqsFmiQKy8iqX',
    )
      .then((result) => {
        alert('Email enviado com sucesso!')
        console.log(result.text)
      }, (error) => {
        alert('Erro: entre em contato pelo LinkedIn')
        console.log(error.text)
      })

    e.currentTarget.reset()
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="contact_container">
      <SectionTitle
        title="Contato"
        text="Envie uma mensagem para meu email através do formulário abaixo"
      />
      <form onSubmit={sendEmail}>
        <input
          type="text"
          id="name"
          placeholder="Nome e Sobrenome"
          value={name}
          name="name"
          onChange={({ target: { value } }) => setName(value)}
        />
        <input
          type="email"
          id="email"
          placeholder="Email: guilherme@servidor.com"
          value={email}
          name="email"
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <textarea
          id="message"
          placeholder="Digite sua mensagem..."
          value={message}
          name="message"
          onChange={({ target: { value } }) => setMessage(value)}
        />
        <input
          disabled={!isDisable}
          type="submit"
          value="Enviar"
          className="submit_button"
        />
      </form>
    </section>
  )
}
