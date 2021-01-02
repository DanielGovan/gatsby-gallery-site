import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"

import "../slick.css"

import Layout from "../components/layout"
import {
  ImageContainer,
  ImageItem,
  ImageGrid,
  Header,
  InnerWrap,
  Para,
  SubHeader,
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
              fluid(maxHeight: 600, maxWidth: 600) {
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

        <SubHeader>Nightlife</SubHeader>
        <Para>
          I've been a shutterbug since 2008, starting with documenting nights
          out with friends, my mission to capture moments of unguarded joy
          (whilst skipping some of the mess). I didn't start official club
          photography until 2012, then gradually focused more on drag and
          cabaret performers and perfomances. Whatever the subject, my aim was
          always about capturing situations rather than things, looking for
          people’s reactions and the fun in the moment.
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

        <SubHeader>Living Vivid exhibition</SubHeader>
        <Para>
          After a year of shooting performer friends in a collaborative crusade
          to learn from, signal-boost and celebrate some of the local queer
          icons, I had an opportunity to show an exhibition at Dalston
          Superstore; 40 portraits of kings and queens displayed for 2 months in
          the same scene that most of them came up in.
        </Para>
      </InnerWrap>
      <ImageContainer>
        <ImageGrid>
          {data.allFile.edges.map((image, key) => (
            <ImageItem
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          ))}
        </ImageGrid>
      </ImageContainer>
      <InnerWrap>
        <SubHeader>Portraiture</SubHeader>
        <Para>
          In ten years of taking hundreds of thousands of photos of queer
          nightlife (and deleting most of them), I’ve learned a lot about queer
          culture, and how people see themselves. I try to keep it irreverant,
          ridiculous and fantastical, not getting too bogged down in
          preconceptions, focusing more on the person and their character.
        </Para>
      </InnerWrap>
    </Layout>
  )
}

export default Background
