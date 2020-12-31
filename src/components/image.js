import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const ImageContainer = styled.div`
  text-align: center;
  margin: 150px 0;
`
export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-full, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 32px;
`
export const ImageHeader = styled.h1`
  margin-bottom: 64px;
`
export const ImageItem = styled(Img)`
  display: block;
  &:nth-child(5) {
    grid-column-end: span 2;
  }
  &:nth-child(9) {
    grid-row-start: 4;
    grid-column-end: span 2;
  }

  img {
    transform: scale(1);
    transition: 0.2s all ease !important;
  }

  img:hover {
    transform: scale(1.1);
  }
`

const Image = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: {
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
      <ImageHeader>View our Destinations</ImageHeader>
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

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
//         childImageSharp {
//           fluid(maxWidth: 300) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `)

//   if (!data?.placeholderImage?.childImageSharp?.fluid) {
//     return <div>Picture not found</div>
//   }

//   return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
// }
