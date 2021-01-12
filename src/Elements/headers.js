import React from "react"
import styled from "styled-components"

const StyledHeader = styled.h1`
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
  font-weight: 300;
  margin: 4rem 0 1rem 0;
  font-size: 3rem;
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
    text-align: center;
  }
`

export const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>
}

const StyledSubHeader = styled.h2`
  font-family: "Ubuntu", sans-serif;
  margin: 2rem 0 1rem 0;
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
  }
`
export const SubHeader = ({ children }) => {
  return <StyledSubHeader>{children}</StyledSubHeader>
}
