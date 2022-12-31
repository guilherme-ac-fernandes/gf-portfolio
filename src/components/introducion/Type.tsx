import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const PHRASE = 'Eu programo'
const SET_TIME = 2000

export default function Type() {
  return (
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
  )
}
