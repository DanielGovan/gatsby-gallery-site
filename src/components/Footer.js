import React from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa"

import { GiDragonBalls } from "react-icons/gi"
import styled from "styled-components"
import * as cssVars from "../const/constants"

const FooterContainer = styled.div`
  background-color: ${cssVars.justBlack};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 10px auto;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    flex-direction: column;
  }
`

const SocialIcon = styled(GiDragonBalls)`
  margin-left: 10px;
`
const WebsiteRights = styled.span`
  color: ${cssVars.nearWhite};
  margin-bottom: 10px;
  font-family: "Roboto" sans-serif;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

const SocialIconLink = styled.a`
  color: ${cssVars.nearWhite};
  font-size: 24px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            © Light by Dan {new Date().getFullYear()} <SocialIcon />{" "}
            lightbydan@gmail.com
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.instagram.com/lightbydan"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink
              href="//www.twitter.com/lightbydan"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
