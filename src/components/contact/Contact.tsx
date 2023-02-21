/* eslint-disable no-alert */
import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
import SectionTitle from '../section_title/SectionTitle'

import './Contact.css'

// Estruturação do componente para envio através do canal RemyFamily
// source: https://www.youtube.com/watch?v=NgWGllOjkbs
export default function Contact() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [isDisable, setIsDisable] = useState<boolean>(true)
  const recaptchaRef = useRef<ReCAPTCHA>()

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
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = e.currentTarget

    const {
      REACT_APP_EMAILJS_SERVICE,
      REACT_APP_EMAILJS_TEMPLATE,
      REACT_APP_EMAILJS_PUBLIC_KEY,
    } = process.env

    // Utilização do ReCAPTCHA proveniente da dica do instrutor
    // da Trybe Zambelli e aplicação baseada no exemplo presente
    // no Stack OverFlow
    // source: https://stackoverflow.com/questions/
    // 67385805/react-google-recaptcha-ref-type-err
    // or-in-react-typescript
    const token = await recaptchaRef?.current?.executeAsync()
    if (token) {
      emailjs.sendForm(
        REACT_APP_EMAILJS_SERVICE as string,
        REACT_APP_EMAILJS_TEMPLATE as string,
        data,
        REACT_APP_EMAILJS_PUBLIC_KEY as string,
      )
        .then((result) => {
          alert('Email enviado com sucesso!')
          console.log(result.text)
        }, (error) => {
          alert('Erro: entre em contato pelo LinkedIn')
          console.log(error.text)
        })
    }

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
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY as string}
          ref={recaptchaRef as React.RefObject<ReCAPTCHA>}
          size="invisible"
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
