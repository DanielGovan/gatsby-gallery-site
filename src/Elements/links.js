import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import * as cssVars from "../const/constants"

const StyledExternalLink = styled.a`
  font-weight: 700;
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export const ExternalLink = ({ children, target, title }) => {
  return (
    <StyledExternalLink href={target} target="_blank" title={title}>
      {children}
    </StyledExternalLink>
  )
}

const StyledInternalLink = styled(Link)`
  font-weight: 700;
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export const InternalLink = ({ children, target, title }) => {
  return (
    <StyledInternalLink to={target} title={title}>
      {children}
    </StyledInternalLink>
  )
}

const StyledExternalButton = styled.a`
  display: block;
  position: absolute;
  top: 85vh;
  right: 0;
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
    top: 70vh;
    right: 10vw;
  }

  @media screen and (max-width: ${cssVars.breakPointM}) {
    font-size: 1.2rem;
    position: static;
    margin-top: 1rem;
    float: right;
    /* top: 50vh;
    right: 0; */
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

export const ExternalButton = ({ icon, children, href, title }) => {
  return (
    <StyledExternalButton href={href} target="_blank" title={title}>
      {icon}
      {children}
    </StyledExternalButton>
  )
}
