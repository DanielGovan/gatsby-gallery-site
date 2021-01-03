import styled from "styled-components"
import { bplg, bpmd } from "../const/constants"

import bgimage from "../images/siteimages/art-140427.jpg"
/* inline background image won't work with gatsby-plugin-styled-components*/

export const HeroContainer = styled.div`
  background: url(${bgimage});
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  background-size: cover;
  object-fit: contain;
  margin-top: -80px;
`

export const Tagline = styled.h1`
  color: #fff;
  font-size: 60px;
  margin-top: 0px;

  @media screen and (max-width: ${bplg}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${bpmd}) {
    font-size: 35px;
  }
`
export const HeroPara = styled.p`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: ${bpmd}) {
    font-size: 30px;
  }
`

export const ButtonWrap = styled.div`
  margin-top: 32px;
`
