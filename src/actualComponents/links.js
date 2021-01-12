import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
