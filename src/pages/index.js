import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import * as cssVars from "../const/constants"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Para from "../components/Para"
import HeroSection from "../components/HeroSection"
import { ExternalLink, InternalLink } from "../Elements/links"
import FadeInText from "../components/FadeInText"
import ImageCarousel from "../components/ImageCarousel"
import CoffeeButton from "../components/CoffeeButton"

const HomeWrapper = styled.div`
  min-height: ${cssVars.screenHeight};
  overflow: hidden;

  @media screen and (max-width: ${cssVars.breakPointM}) {
  }
`
const HomeContent = styled.div`
  max-width: 1000px;
  margin: 6rem auto 6rem;
  padding: 0 ${cssVars.deskPad} 0 410px;
  position: relative;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    padding: 0 ${cssVars.deskPad};
  }

  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`
const HomeIllus = styled.div`
  width: 340px;
  max-width: 50%;
  position: absolute;
  top: 0;
  left: 32px;
  max-height: 60vh;
  margin-bottom: 20px;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    width: 250px;
    position: static;
    float: left;
    margin-right: 20px;
  }
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query pickImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/pick/" }
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
      melol: file(relativePath: { eq: "dan-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      heroBG: file(relativePath: { eq: "header-kage.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        position="center top"
        button={<CoffeeButton />}
      >
        <FadeInText>
          <span>Queer</span>
          <span>Vivid</span>
          <span>Surreal</span>
          <span>Vibrant</span>
          <span>Gaudy</span>
        </FadeInText>
        <span>portrait</span> <span>photography</span>
      </HeroSection>
      <HomeWrapper>
        <ImageCarousel
          images={data.allFile.edges}
          alts="Lightbydan's portrait picks"
          aspect={1 / 1}
          maxSlides={8}
          minSlides={3}
        />

        <HomeContent>
          <div>
            <HomeIllus>
              <Img
                fluid={data.melol.childImageSharp.fluid}
                style={{ background: "#000" }}
                alt="Dan"
              />
            </HomeIllus>
            <Para>
              Hi there! My name’s Dan, and I do cute portraits of people with
              colourful lights in East London. I call it{" "}
              <strong>Light By Dan</strong>.
            </Para>
            <Para>
              My focus is{" "}
              <InternalLink target="/gallery" title="Gallery of subjects">
                portrait photography
              </InternalLink>{" "}
              now but before that I moonlighted in{" "}
              <InternalLink target="/nightlife" title="Photography background">
                documenting queer nightlife
              </InternalLink>{" "}
              for 10 years, and that's the root of my style: I strive to make my
              shoots bright and fun with no preconceptions,{" "}
              <InternalLink target="/prices" title="About my shoots">
                a safe space to discover more about yourself
              </InternalLink>
              , celebrating vulnerability, absurdity and joy.
            </Para>
            <Para>
              So welcome, and take a look around! Any questions or inquiries
              contact me at{" "}
              <ExternalLink
                target="mailto:lightbydan@gmail.com?subject=Site inquiry"
                title="Email me"
              >
                lightbydan@gmail.com
              </ExternalLink>
              . Also if you like my work and want to encourage more of it, you
              can tip me over at{" "}
              <ExternalLink
                target="//www.buymeacoffee.com/lightbydan"
                title="Tip me via Buy me A Coffee"
              >
                Buy me A Coffee
              </ExternalLink>
              !
            </Para>
          </div>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  )
}

export default IndexPage
