import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-medium-image-zoom/dist/styles.css"

import Layout from "../components/layout"
import { InnerWrap } from "../Elements/wraps"
import { InternalLink } from "../Elements/links"
import { Header, SubHeader } from "../Elements/headers"
import ImageGrid from "../components/ImageGrid"
import HeroSection from "../components/HeroSection"
import ImageCarousel from "../components/ImageCarousel"
import Para from "../components/Para"
import SEO from "../components/seo"
import HeroButton from "../components/HeroButton"

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
      <SEO title="Nightlife" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        button={<HeroButton />}
      >
        <span>Drawing on ten years</span>
        <span>of queer nightlife</span>
      </HeroSection>
      <ImageCarousel
        images={data.clubPapsImages.edges}
        alts="Lightbydan's club photography days"
        aspect={5 / 4}
        maxSlides={6}
        minSlides={2}
      />
      <InnerWrap>
        {/* <Header>Background</Header> */}
        <SubHeader>Club photography</SubHeader>
        <Para>
          I started documenting nights out with friends in 2008, capturing
          moments of unguarded joy (while skipping some of the mess), it was
          nice showing people the fun they'd forgotten!
        </Para>
        <Para>
          After moving to east London I started club photography for a few of my
          favourite haunts like Shake Yer Dix, Douchebag and Push the Button.
          Even with practice I found it awkward asking randoms if I could take
          their photo, but I developed a documentary style aiming for genuine
          fun moments, that I maintain still.
        </Para>
      </InnerWrap>
      <ImageCarousel
        images={data.nightLifeImages.edges}
        alts="Lightbydan's queer nightlife picks"
        aspect={8 / 5}
        maxSlides={5}
        minSlides={1}
      />
      <InnerWrap>
        <SubHeader>Performers and performances</SubHeader>
        <Para>
          Having learned as much as I could from clubs and crowds, my focus
          moved towards drag and cabaret, club kids and performers, especially
          those I was lucky enough to call friends at the time.
        </Para>
        <Para>
          My first real foray into portraiture was a collaborative crusade to
          learn from, signal-boost and celebrate some of the local icons I knew
          from queer creative nights like Sink the Pink, The ShayShay Show,
          Sunday Funday, Cybil's House, Savage and Knickerbocker.
        </Para>
      </InnerWrap>
      <InnerWrap>
        <Header>Living Vivid</Header>
        <Para>
          In autumn 2018, I had an opportunity to show an exhibition at Dalston
          Superstore; forty portraits of kings and queens displayed for two
          months in the same scene that most of them came up in: The circle
          complete.
        </Para>
        <ImageGrid
          images={data.exhibitionImages.edges}
          alt="Living Vivid Exhibition at Dalston Superstore"
        />
      </InnerWrap>
      <InnerWrap>
        <Header>Light By Dan</Header>
        <Para>
          But now it's all about the portraits; I love making real connections
          with people, finding out about them and maybe even changing the way
          they see themselves.
        </Para>
        <Para>
          Check out the <InternalLink target="/gallery">gallery</InternalLink>{" "}
          for everyone I've ever lit, or find out{" "}
          <InternalLink target="/prices">about shoots</InternalLink> if you're
          interested in getting some of the magic for yourself!
        </Para>
      </InnerWrap>
    </Layout>
  )
}

export default Background
