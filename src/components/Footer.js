import React from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { SiBuymeacoffee } from "react-icons/si"
import { GiDragonBalls } from "react-icons/gi"
import { IconContext } from "react-icons/lib"
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
  @media screen and (max-width: ${cssVars.breakPointM}) {
    text-align: center;
    margin-bottom: 20px;
  }
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
            © Light by Dan {new Date().getFullYear()} - lightbydan@gmail.com
          </WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="//www.instagram.com/lightbydan"
              target="_blank"
              aria-label="Instagram"
              rel="noopener noreferrer me"
              title="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href="//www.twitter.com/lightbydan"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer me"
              title="Twitter"
            >
              <FaTwitter />
            </SocialIconLink>

            <SocialIconLink
              href="//www.buymeacoffee.com/lightbydan"
              target="_blank"
              aria-label="Buy Me A Coffee"
              rel="me"
              title="Buy Me A Coffee"
            >
              <IconContext.Provider value={{ color: "#ff4040" }}>
                <SiBuymeacoffee />
              </IconContext.Provider>
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
