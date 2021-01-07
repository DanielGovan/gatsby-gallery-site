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
          <Context>portrait photography</Context>
        </SiteHeader>
        <ButtonWrap>
          <Button
            fontBig
            big
            primary
            href="mailto:lightbydan@gmail.com?subject=Site inquiry"
          >
            Inquire now
          </Button>
        </ButtonWrap>
      </HeroInner>
    </HeroContainer>
  )
}

export default HeroSection
