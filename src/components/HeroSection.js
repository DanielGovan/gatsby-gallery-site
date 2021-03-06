import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import * as cssVars from "../const/constants"

import FadeInWrap from "./animations/FadeInWrap"
import Img from "gatsby-image"

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`

const HeroImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    object-position: center 30% !important;
  }
`
const HeroStatic = styled.img`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  max-height: 100%;
  object-position: center 30% !important;
`

const HeroInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60vh 32px 0;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    padding: 50vh ${cssVars.mobPad} 0;
  }
`

const SiteHeader = styled(motion.h1)`
  font-family: "Ubuntu", sans-serif;
  display: flex;
  flex-direction: column;
  color: ${cssVars.nearWhite};
  font-size: 60px;
  text-shadow: 4px 4px 10px ${cssVars.justBlack};

  small {
    font-size: 1.5rem;
    display: block;
  }

  @media screen and (max-width: ${cssVars.breakPointL}) {
    font-size: 50px;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    font-size: 50px;
    max-width: 310px;
  }

  & > span {
    display: block;
    flex: auto;
    @media screen and (min-width: ${cssVars.breakPointM}) {
      display: inline;
    }
  }
`

const HeroSection = ({ heroBG, staticImg, children, button, position }) => {
  console.log("heroBG", heroBG)
  return (
    <FadeInWrap>
      <HeroContainer heroBG={heroBG} position={position}>
        {heroBG && <HeroImage fluid={heroBG} />}
        {staticImg && <HeroStatic src={"/" + staticImg} alt="" />}
        <HeroInner>
          <SiteHeader
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {children}
          </SiteHeader>
        </HeroInner>
        {/* <FadeInWrap after={2}>{button}</FadeInWrap> */}
      </HeroContainer>
    </FadeInWrap>
  )
}

export default HeroSection
