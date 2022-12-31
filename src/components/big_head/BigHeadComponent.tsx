import React from 'react'

import { BigHead } from '@bigheads/core'
import './BigHeadComponent.css'

export default function BigHeadComponent() {
  return (
    <div className="bighead">
      <BigHead
        accessory="roundGlasses"
        body="chest"
        circleColor="blue"
        clothing="vneck"
        clothingColor="white"
        eyebrows="raised"
        eyes="happy"
        facialHair="mediumBeard"
        graphic="react"
        hair="buzz"
        hairColor="black"
        hat="none"
        mouth="openSmile"
        skinTone="brown"
      />
    </div>
  )
}
