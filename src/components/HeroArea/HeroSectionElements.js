import styled from "styled-components"
import { bplg, bpmd } from "../../const/constants"

import bgimage from "../../images/background2.jpg"
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
  object-fit: contain;
  margin-top: -80px;
`

export const HeroHeader = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: 0px;

  @media screen and (max-width: ${bplg}) {
    font-size: 70px;
  }

  @media screen and (max-width: ${bpmd}) {
    font-size: 60px;
  }
`
export const Para = styled.p`
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
