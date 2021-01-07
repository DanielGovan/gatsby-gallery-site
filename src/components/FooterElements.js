import { GiDragonBalls } from "react-icons/gi"
import styled from "styled-components"
import * as cssVars from "../const/constants"

export const FooterContainer = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`
export const SocialMediaWrap = styled.div`
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

export const SocialIcon = styled(GiDragonBalls)`
  margin-left: 10px;
`
export const WebsiteRights = styled.span`
  color: #fff;
  margin-bottom: 10px;
  font-family: "Roboto" sans-serif;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`
