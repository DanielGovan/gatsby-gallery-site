import React from "react"
import { Button } from "../ButtonElements"
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
        <Button fontBig big primary>
          Get started
        </Button>
      </ButtonWrap>
    </HeroContainer>
  )
}

export default HeroSection
