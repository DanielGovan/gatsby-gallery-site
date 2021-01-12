import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import * as cssVars from "../const/constants"

import FadeInWrap from "./FadeInWrap"
import Img from "gatsby-image"

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  margin-top: -80px;
  overflow: hidden;
`

const HeroImage = styled(Img)`
  position: absolute;
  top: -80px;
  left: 0;
  width: "100vw";
  height: "100vh";
`

const HeroInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1000px;
  margin: 0 auto;
  padding: 60vh 32px 0;
`

const SiteHeader = styled(motion.h1)`
  font-family: "Ubuntu", sans-serif;
  display: flex;
  color: ${cssVars.nearWhite};
  font-size: 60px;
  text-shadow: 4px 4px 10px ${cssVars.justBlack};

  @media screen and (max-width: ${cssVars.breakPointL}) {
    font-size: 50px;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    font-size: 30px;
    flex-direction: column;
  }
`

const HeroSection = ({ heroBG, children, position }) => {
  return (
    <FadeInWrap>
      <HeroContainer heroBG={heroBG} position={position}>
        <HeroImage fluid={heroBG} />
        <HeroInner>
          <SiteHeader
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            {children}
          </SiteHeader>
        </HeroInner>
      </HeroContainer>
    </FadeInWrap>
  )
}

export default HeroSection
