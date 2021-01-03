import React from "react"

import {
  HeroContainer,
  SiteHeader,
  Context,
  HeroInner,
  FadeIn,
  ButtonWrap,
} from "../components/HeroSectionElements"
import { Button } from "../components/ButtonElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroInner>
        <SiteHeader>
          <FadeIn>
            <span>Queer</span>
            <span>Vivid</span>
            <span>Surreal</span>
            <span>Vibrant</span>
            <span>Gaudy</span>
          </FadeIn>
          <Context>
            <br />
            portrait photography
          </Context>
        </SiteHeader>
        <ButtonWrap>
          <Button fontBig big primary>
            Get in touch
          </Button>
        </ButtonWrap>
      </HeroInner>
    </HeroContainer>
  )
}

export default HeroSection
