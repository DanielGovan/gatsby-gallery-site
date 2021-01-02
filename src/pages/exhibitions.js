import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ImageContainer,
  ImageItem,
  ImageGrid,
  Header,
  InnerWrap,
  Para,
  SubHeader,
} from "../components/LayoutElements"

const Exhibitions = () => {
  const data = useStaticQuery(graphql`
    query exhibitionImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "exhibitionImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            relativePath
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
    <Layout>
      <SEO title="Exhibitions" />
      <InnerWrap>
        <Header>Exhibitions</Header>
        <SubHeader>Living Vivid</SubHeader>
        <Para>
          After a year of shooting performer friends, I had an opportunity to
          show an exhibition at Dalston Superstore; 40 portraits of kings and
          queens displayed for 2 months in the same scene that most of them came
          up in. It was a collaborative crusade to learn from, signal-boost and
          celebrate some of the local queer icons.
        </Para>
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

export default Exhibitions
