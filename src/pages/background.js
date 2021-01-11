import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
        Drawing on 10 years of queer nightlife
        {/* <FadeInText>
          <span>Queer</span>
          <span>Vivid</span>
          <span>Surreal</span>
          <span>Vibrant</span>
          <span>Gaudy</span>
        </FadeInText> */}
      </HeroSection>
      <FullWidthSlider
        images={data.clubPapsImages.edges}
        alts="Lightbydan's club photography days"
        aspect={5 / 4}
        maxSlides={6}
      />
      <InnerWrap>
        {/* <Header>Background</Header> */}
        <SubHeader>Club photography: 2008 to 2016</SubHeader>

        <Para>
          I starting out documenting nights out with friends, my mission to
          capture moments of unguarded joy (whilst skipping some of the mess)
          from Popstarz to Sink the Pink. I started dabbling in club photography
          at a few of my favourite haunts like Shake Yer Dix, Douchebag, Push
          the Button,
        </Para>

        <SubHeader>Queer nightlife: 2015 to 2018</SubHeader>
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
        maxSlides={6}
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
