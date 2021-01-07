import styled from "styled-components"
import * as cssVars from "../const/constants"
import { motion } from "framer-motion"

/* inline background image won't work with gatsby-plugin-styled-components*/

export const HeroContainer = styled(motion.div)`
  background-position: center;
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

export const HeroInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 30vh 32px 0;
`

export const SiteHeader = styled(motion.h1)`
  display: flex;
  color: #fff;
  font-size: 60px;
  text-shadow: 1px 1px 10px #000;

  @media screen and (max-width: ${cssVars.breakPointL}) {
    font-size: 40px;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    font-size: 30px;
    flex-direction: column;
  }
`

export const Context = styled.span``

export const ButtonWrap = styled.div`
  margin: 50px 0;
  text-align: center;
`

export const FadeIn = styled.span`
  width: 10rem;
  text-align: right;
  position: relative;

  span {
    animation: fadeEffect 12.5s linear infinite 0s;
    -ms-animation: fadeEffect 12.5s linear infinite 0s;
    -webkit-animation: fadeEffect 12.5s linear infinite 0s;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    right: 1rem;
    bottom: 0;
    @media screen and (max-width: ${cssVars.breakPointM}) {
      right: auto;
      left: 0;
    }
  }
  span:nth-child(2) {
    animation-delay: 2.5s;
    -ms-animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
  }
  span:nth-child(3) {
    animation-delay: 5s;
    -ms-animation-delay: 5s;
    -webkit-animation-delay: 5s;
  }
  span:nth-child(4) {
    animation-delay: 7.5s;
    -ms-animation-delay: 7.5s;
    -webkit-animation-delay: 7.5s;
  }
  span:nth-child(5) {
    animation-delay: 10s;
    -ms-animation-delay: 10s;
    -webkit-animation-delay: 10s;
  }

  /*FadeIn Animation*/
  @keyframes fadeEffect {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 0;
      -moz-transform: translateY(0px);
    }
    10% {
      opacity: 1;
      -moz-transform: translateY(0px);
    }
    25% {
      opacity: 1;
      -moz-transform: translateY(0px);
    }
    30% {
      opacity: 0;
      -moz-transform: translateY(0px);
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`
