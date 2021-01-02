import React from "react"
import { Button } from "./ButtonElements"
import {
  HeroContainer,
  HeroHeader,
  Para,
  ButtonWrap,
} from "./HeroSectionElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroHeader>A different light</HeroHeader>
      <Para>
        Hello and welcome! My name’s Dan, and I made this site and all the
        images on it. I create queer surreal portrait photography in East
        London, focusing on celebrating vulnerability, joy, and the sheer
        absurdity of the situation.
      </Para>

      <ButtonWrap>
        <Button fontBig big primary>
          Get started
        </Button>
      </ButtonWrap>
    </HeroContainer>
  )
}

export default HeroSection
