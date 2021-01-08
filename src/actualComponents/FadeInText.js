import React from "react"
import styled from "styled-components"
import * as cssVars from "../const/constants"

const StyledFadeInText = styled.span`
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

const FadeInText = ({ children }) => {
  return <StyledFadeInText>{children}</StyledFadeInText>
}

export default FadeInText
