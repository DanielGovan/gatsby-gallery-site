import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"
import { motion } from "framer-motion"
import * as cssVars from "../const/constants"

import FadeInWrap from "./FadeInWrap"

// styled-components nor motion work with gatsby-background-image
// maybe replace with some big image that skips the background plugin?
const HeroContainer = ({ heroBG, children, position = "center" }) => {
  return (
    <BackgroundImage
      Tag="div"
      fluid={heroBG}
      backgroundColor={`#000`}
      style={{
        backgroundPosition: position,
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.2)",
        backgroundSize: "cover",
        objectFit: "contain",
        marginTop: "-80px",
      }}
    >
      {children}
    </BackgroundImage>
  )
}

export const HeroInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40vh 32px 0;
`

export const SiteHeader = styled(motion.h1)`
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
