import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ImageContainer,
  ImageItem,
  ImageGrid,
  InnerWrap,
} from "../components/LayoutElements"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query testimonialImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "testimonialImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 600, maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Testimonials" />
      <InnerWrap>
        <h1>Testimonials</h1>
        <p>A few quick reviews from instagram...</p>
      </InnerWrap>

      <ImageContainer>
        <ImageGrid>
          {data.allFile.edges.map((image, key) => (
            <ImageItem
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.relativePath.split(".")[0]}
            />
          ))}
        </ImageGrid>
      </ImageContainer>
    </Layout>
  )
}

export default Testimonials
