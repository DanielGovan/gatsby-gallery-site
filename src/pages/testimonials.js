import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ImageContainer,
  ImageItem,
  ImageGrid,
  InnerWrap,
  Header,
  Para,
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
        <Header>Testimonials</Header>
        <Para>Some quick reviews taken from instagram...</Para>
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
