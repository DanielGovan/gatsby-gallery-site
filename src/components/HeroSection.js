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
import bgimage from "../images/siteimages/art-140427.jpg"

const HeroSection = () => {
  return (
    <HeroContainer
      style={{ backgroundImage: "url(" + bgimage + ")" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
    >
      <HeroInner>
        <SiteHeader
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FadeIn>
            <span>Queer</span>
            <span>Vivid</span>
            <span>Surreal</span>
            <span>Vibrant</span>
            <span>Gaudy</span>
          </FadeIn>
          <Context>portrait photography</Context>
        </SiteHeader>
        {/* <ButtonWrap>
          <Button
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6 }}
            fontBig
            big
            primary
            href="mailto:lightbydan@gmail.com?subject=Site inquiry"
          >
            Inquire now
          </Button>
        </ButtonWrap> */}
      </HeroInner>
    </HeroContainer>
  )
}

export default HeroSection
