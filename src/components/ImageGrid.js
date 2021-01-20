import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import * as cssVars from "../const/constants"

const StyledImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    div:nth-child(n + 5) {
      display: none;
    }
  }

  img {
    width: 100% !important;
  }
`

const ImageItem = styled(Img)`
  display: grid !important;
  min-width: 200px;
  width: 100%;

  img {
    background: black !important;
  }
`

const ImageGrid = ({ images, alt }) => {
  return (
    <StyledImageGrid>
      {images.map((image, key) => (
        <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.6)">
          <ImageItem
            key={key}
            fluid={image.node.childImageSharp.fluid}
            alt={alt}
          />
        </Zoom>
      ))}
    </StyledImageGrid>
  )
}

export default ImageGrid
