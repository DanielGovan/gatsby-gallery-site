import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ImageItem,
  InnerWrap,
  Header,
  Para,
} from "../components/LayoutElements"

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

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
              fluid(maxHeight: 600, maxWidth: 350) {
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

        <Slider {...slickSettings}>
          {data.allFile.edges.map((image, key) => (
            <ImageItem
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.relativePath.split(".")[0]}
            />
          ))}
        </Slider>
      </InnerWrap>
    </Layout>
  )
}

export default Testimonials
