import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ImageContainer, ImageItem, ImageGrid } from "./LayoutElements"

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "galleryImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { nin: ["background", "background2"] }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ImageContainer>
      <ImageGrid>
        {data.allFile.edges.map((image, key) => (
          <ImageItem
            key={key}
            fluid={image.node.childImageSharp.fluid}
            alt={image.node.base.split(".")[0]}
          />
        ))}
      </ImageGrid>
    </ImageContainer>
  )
}
export default Image
