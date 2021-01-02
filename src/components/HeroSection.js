import React from "react"
import { Button } from "./ButtonElements"
import {
  HeroContainer,
  Tagline,
  HeroPara,
  ButtonWrap,
} from "./HeroSectionElements"
import { InnerWrap } from "./LayoutElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <InnerWrap>
        <Tagline>
          Queer / surreal / colourful portrait photography in East London
        </Tagline>

        <HeroPara>
          Hi there! My name’s Dan, and I do cute portraits of people with
          colourful lights, celebrating vulnerability, absurdity and joy.
        </HeroPara>
        <HeroPara></HeroPara>

        <ButtonWrap>
          <Button fontBig big primary>
            Get in touch
          </Button>
        </ButtonWrap>
      </InnerWrap>
    </HeroContainer>
  )
}

export default HeroSection
