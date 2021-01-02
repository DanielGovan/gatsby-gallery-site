import React from "react"
import { FaInstagram, FaTwitter } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

import {
  FooterContainer,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIcon,
  SocialIconLink,
  WebsiteRights,
} from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <WebsiteRights>
            © Light by Dan {new Date().getFullYear()}
            <SocialIcon />
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
            <SocialIconLink href="mailto:lightbydan@gmail.com?subject=Site inquiry">
              <HiOutlineMail />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  )
}

export default Footer
