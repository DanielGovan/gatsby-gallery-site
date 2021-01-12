import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import Layout from "../components/layout"
import {
  ImageItem,
  ImageGrid,
  // Header,
  InnerWrap,
  SubHeader,
  InteriorLink,
} from "../components/LayoutElements"
import HeroSection from "../actualComponents/HeroSection"
import FullWidthSlider from "../actualComponents/FullWidthSlider"
import Para from "../actualComponents/Para"

import SEO from "../components/seo"

const Background = () => {
  const data = useStaticQuery(graphql`
    query exhibitionImages {
      exhibitionImages: allFile(
        sort: { fields: sourceInstanceName, order: ASC }
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/exhibition/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      nightLifeImages: allFile(
        sort: { fields: sourceInstanceName, order: ASC }
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/nightlife/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      clubPapsImages: allFile(
        sort: { fields: sourceInstanceName, order: ASC }
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/club/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      heroBG: file(relativePath: { eq: "header-kbryard.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Background" />
      <HeroSection heroBG={data.heroBG.childImageSharp.fluid}>
        Drawing on 10 years
        <br />
        of queer nightlife
      </HeroSection>
      <FullWidthSlider
        images={data.clubPapsImages.edges}
        alts="Lightbydan's club photography days"
        aspect={5 / 4}
        maxSlides={7}
      />
      <InnerWrap>
        {/* <Header>Background</Header> */}
        <SubHeader>Club photography</SubHeader>

        <Para>
          I starting out just documenting nights out with friends in 2008, my
          mission to capture moments of unguarded joy, whilst skipping some of
          the mess. After moving to east London I started club photography for a
          few of my favourite haunts like Shake Yer Dix, Douchebag and Push the
          Button. I always found it awkward going up to to randoms to ask if I
          could take their photo, but I developed a documentary style that was
          always trying to get genuine fun moments, and I definately take that
          forward.
        </Para>

        <SubHeader>Queer nightlife</SubHeader>
        <Para>
          Gradually my focus moved more towards drag and cabaret performers and
          perfomances, especally those I was lucky enough to call friends at the
          time. Drag became ubiquitous favs like Cybil's House and
          Knickerbocker, In each case my aim was always to capturing situations
          rather than things,
        </Para>
      </InnerWrap>
      <FullWidthSlider
        images={data.nightLifeImages.edges}
        alts="Lightbydan's queer nightlife picks"
        aspect={8 / 5}
        maxSlides={5}
      />

      <InnerWrap>
        <SubHeader>Living Vivid exhibition: 2018</SubHeader>
        <Para>
          After a year of a collaborative crusade to learn from, signal-boost
          and celebrate some of the local queer icons, I had an opportunity to
          show an exhibition at Dalston Superstore; 40 portraits of kings and
          queens displayed for 2 months in the same scene that most of them came
          up in. The circle complete.
        </Para>
      </InnerWrap>
      <ImageGrid>
        {data.exhibitionImages.edges.map((image, key) => (
          <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.6)">
            <ImageItem
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </Zoom>
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
