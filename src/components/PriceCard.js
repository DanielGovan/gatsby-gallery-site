import React from "react"
import styled from "styled-components"
import * as cssVars from "../const/constants"

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    display: block;
  }
`

const StyledPriceCard = styled.div`
  background: ${cssVars.justBlack};
  width: 50%;
  margin: 0 1rem 2rem 0;
  vertical-align: top;
  padding: 1rem 2rem;

  &:nth-child(2) {
    margin: 0 0rem 2rem 0;
  }

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  div {
    /* display: flex; */
  }

  ul {
    padding: 1rem 1rem 0 1rem;
    font-size: 1.2rem;
  }

  p {
    font-size: 1.2rem;
    padding: 1rem 0 0 0rem;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    width: 100%;
    ul,
    p {
      padding-top: 0;
    }
  }
`

const PriceCard = ({ children }) => {
  return <StyledPriceCard>{children}</StyledPriceCard>
}

export default PriceCard
