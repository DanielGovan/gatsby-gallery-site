import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "../slick.css"
import "react-medium-image-zoom/dist/styles.css"

import Layout from "../components/layout"
import {
  GridZoom,
  ImageContainer,
  ImageItem,
  ImageGrid,
  Header,
  InnerWrap,
  Para,
  SubHeader,
  InteriorLink,
} from "../components/LayoutElements"
import SEO from "../components/seo"

const slickSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Background = () => {
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
              fluid(maxHeight: 800, maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      imageOne: file(relativePath: { eq: "Context1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageOne: file(relativePath: { eq: "Context1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageTwo: file(relativePath: { eq: "Context2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageThree: file(relativePath: { eq: "Context3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFour: file(relativePath: { eq: "Context4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageFive: file(relativePath: { eq: "Context5.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      imageSix: file(relativePath: { eq: "Context6.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Background" />
      <InnerWrap>
        <Header>Background</Header>

        <SubHeader>Nightlife: 2008 to 2018</SubHeader>
        <Para>
          I starting out documenting nights out with friends, my mission to
          capture moments of unguarded joy (whilst skipping some of the mess). I
          didn't start official club photography until 2012, then gradually
          focused more on drag and cabaret performers and perfomances. My aim
          was always capturing situations rather than things, looking for
          people’s reactions in the moment.
        </Para>

        <Slider {...slickSettings}>
          <div>
            <ImageItem
              fluid={data.imageOne.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.imageTwo.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.imageThree.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.imageFour.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.imageFive.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.imageSix.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
        </Slider>

        <SubHeader>Living Vivid exhibition: Autumn 2018</SubHeader>
        <Para>
          After a year of shooting performer friends in a collaborative crusade
          to learn from, signal-boost and celebrate some of the local queer
          icons, I had an opportunity to show an exhibition at Dalston
          Superstore; 40 portraits of kings and queens displayed for 2 months in
          the same scene that most of them came up in. The circle complete.
        </Para>
      </InnerWrap>
      <ImageGrid>
        {data.allFile.edges.map((image, key) => (
          <ImageItem
            key={key}
            fluid={image.node.childImageSharp.fluid}
            alt="Living Vivid Exhibition at Dalston Superstore"
          />
        ))}
      </ImageGrid>
      <InnerWrap>
        <SubHeader>Light By Dan: 2017 onwards</SubHeader>
        <Para>
          But now it's all about portraits, making connections with people and
          changing the way they see themselves. Which is, I hope, what you're
          here for! Check out the{" "}
          <InteriorLink to="/gallery">gallery</InteriorLink> for just about
          everyone I've ever lit, or{" "}
          <InteriorLink to="/book_a_shoot">Book a shoot</InteriorLink> to see
          about getting some of the magic for yourself.
        </Para>
      </InnerWrap>
    </Layout>
  )
}

export default Background
