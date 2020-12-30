import React from "react"

import {
  HeroContainer,
  HeroHeader,
  Para,
  ButtonWrap,
} from "./HeroSectionElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>Travel more</HeroHeader>
      <Para>Plan your next trip today</Para>
      <ButtonWrap>
        <button>Get started</button>
      </ButtonWrap>
    </HeroContainer>
  )
}

export default HeroSection
