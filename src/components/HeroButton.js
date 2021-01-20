import React from "react"
import { SiBuymeacoffee } from "react-icons/si"
import styled from "styled-components"
import * as cssVars from "../const/constants"

const StyledHeroButton = styled.a`
  display: block;
  position: absolute;
  bottom: 32px;
  right: 10vw;
  font-size: 1.6rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
  color: inherit;
  background: rgba(0, 0, 0, 0.6);
  border: solid 1px rgba(255, 255, 255, 0.6);
  text-decoration: none;
  opacity: 0.9;
  transition: all 0.5s ease;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(0, 0, 0, 1);
    border: solid 1px rgba(255, 255, 255, 1);
    opacity: 1;
  }

  svg {
    margin-right: 0.5rem;
  }
`

const HeroButton = () => {
  return (
    <StyledHeroButton
      href="//www.buymeacoffee.com/lightbydan"
      target="_blank"
      title="Tip me via Buy Me A Coffee!"
    >
      <SiBuymeacoffee />
      Buy me a coffee
    </StyledHeroButton>
  )
}

export default HeroButton
