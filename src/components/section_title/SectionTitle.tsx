import React from 'react'

import './SectionTitle.css'

interface SectionTitleProps {
  title: string;
  text?: string;
}

export default function SectionTitle({ title, text }: SectionTitleProps) {
  return (
    <div className="section_title">
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
