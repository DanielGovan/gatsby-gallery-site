import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import Layout from "../components/layout"
import {
  ImageItem,
  ImageGrid,
  InnerWrap,
  InteriorLink,
} from "../components/LayoutElements"
import { Header, SubHeader } from "../actualComponents/Headers"
import HeroSection from "../actualComponents/HeroSection"
import ImageCarousel from "../actualComponents/ImageCarousel"
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
      <SEO title="Night life" />
      <HeroSection heroBG={data.heroBG.childImageSharp.fluid}>
        Drawing on 10 years
        <br />
        of queer nightlife
      </HeroSection>
      <ImageCarousel
        images={data.clubPapsImages.edges}
        alts="Lightbydan's club photography days"
        aspect={5 / 4}
        maxSlides={7}
      />
      <InnerWrap>
        {/* <Header>Background</Header> */}
        <SubHeader>Club photography</SubHeader>

        <Para>
          I started documenting nights out with friends in 2008, capturing
          moments of unguarded joy while skipping some of the mess. It was nice
          showing people the fun they'd forgotten.
        </Para>
        <Para>
          After moving to east London I started club photography for a few of my
          favourite haunts like Shake Yer Dix, Douchebag and Push the Button.
          Even with practice I found it awkward asking randoms I could take
          their photo, but I developed a documentary style aiming for genuine
          fun moments, and I definitely take that forward.
        </Para>

        <SubHeader>Performers and performances</SubHeader>
        <Para>
          Having learned as much as I could from clubs and crowds, my focus
          moved towards drag and cabaret, club kids and performers, especially
          those I was lucky enough to call friends at the time.
        </Para>
        <Para>
          When I started dabbling in portraiture, I embarked on a collaborative
          crusade to learn from, signal-boost and celebrate some of the local
          icons I knew from queer creative nights like Sink the Pink, The
          ShayShay Show, Sunday Funday, Cybil's House, Savage and Knickerbocker.
        </Para>
      </InnerWrap>
      <ImageCarousel
        images={data.nightLifeImages.edges}
        alts="Lightbydan's queer nightlife picks"
        aspect={8 / 5}
        maxSlides={5}
      />

      <InnerWrap>
        <Header>Living Vivid</Header>
        <Para>
          In autumn 2018, I had an opportunity to show an exhibition at Dalston
          Superstore; 40 portraits of kings and queens displayed for 2 months in
          the same scene that most of them came up in: The circle complete.
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
        <Header>Light By Dan</Header>
        <Para>
          But now it's all about portraits, which is, I hope, what you're here
          for! I love making real connections with people and maybe even
          changing the way they see themselves.
        </Para>
        <Para>
          Check out the <InteriorLink to="/gallery">gallery</InteriorLink> for
          everyone I've ever lit, or{" "}
          <InteriorLink to="/prices">Book a shoot</InteriorLink> to see about
          getting some of the magic for yourself.
        </Para>
      </InnerWrap>
    </Layout>
  )
}

export default Background
