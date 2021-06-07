import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { InnerWrap } from "../Elements/wraps"
import { ExternalLink } from "../Elements/links"
import { Header, SubHeader } from "../Elements/headers"
import Para from "../components/Para"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import ImageCarousel from "../components/ImageCarousel"
import PriceCard, { PriceWrap } from "../components/PriceCard"
import HeroButton from "../components/HeroButton"
import { TESTIMONIAL_COPY } from "../const/testimonials"

const AboutShoots = () => {
  const [imageArray, setImageArray] = useState()
  const data = useStaticQuery(graphql`
    query {
      testimonialImages: allFile(
        filter: {
          sourceInstanceName: { eq: "testimonialImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      btsImages: allFile(
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/bts-/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      heroBG: file(relativePath: { eq: "header-jason.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    const displayImages = []
    // map data array to image query
    TESTIMONIAL_COPY.map(({ name, quote, image }) => {
      const img = data.testimonialImages.edges.find(
        ({ node }) => node.relativePath === image
      ).node
      const altText = `${name}: ${quote}`

      displayImages.push({ img, altText })
      return null
    })
    setImageArray(displayImages)
    // console.log("displayImages", displayImages)
  }, [data])
  return (
    <Layout>
      <SEO title="Prices" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        position="center 30%"
        button={<HeroButton />}
      >
        <span>Thinking of getting</span>
        <span>lit by Dan?</span>
      </HeroSection>

      <ImageCarousel
        images={data.btsImages.edges}
        alts="Behind the scenes with Light by Dan"
        aspect={1 / 1}
        maxSlides={6}
        minSlides={2}
      />

      <InnerWrap>
        {/* <Header>Book a shoot</Header> */}
        <Para>
          A professional shoot is great for visual promotion if you’re a
          performer or brand, but where this experience shines is as an
          opportunity for exploring self-image in a safe environment. Plus being
          art is fun!
        </Para>

        <Para>
          At my home studio in{" "}
          <ExternalLink
            title="Google Maps link"
            target="//www.google.com/maps/place/Whitechapel+Station/@51.5194973,-0.0612018,15z/data=!4m5!3m4!1s0x0:0xfd131553558a271f!8m2!3d51.5194973!4d-0.0612018"
          >
            Whitechapel
          </ExternalLink>{" "}
          we'll work through a variety of lighting setups, colours and poses,
          conferring over the shots as we go. Everyone gets to veto everything,
          so we only put out what we're both happy with.
        </Para>

        <Header>Packages</Header>
        <PriceWrap>
          <PriceCard>
            <SubHeader>Commission</SubHeader>
            <div>
              <ul>
                <li>£150</li>
                <li>up to 1hr shoot</li>
                <li>6 final portraits included</li>
              </ul>
              <Para>
                If you know exactly what you want, we can quickly set it up, try
                a few variations, and get that look you’re after.
              </Para>
            </div>
          </PriceCard>
          <PriceCard>
            <SubHeader>Creative shoot</SubHeader>
            <div>
              <ul>
                <li>£250</li>
                <li>2hr shoot</li>
                <li>8 portraits included</li>
                <li>1 or 2 people</li>
              </ul>
              <Para>
                For those that want to look great, but they're not sure how,
                this option gives us time to explore and experiment and find
                what works for you, with a wider range of poses and techniques.
              </Para>
            </div>
          </PriceCard>
        </PriceWrap>

        <Para>
          Extra final shots are available for £15 each if you just can't decide.
          I do headshots and drag shoots too, so email{" "}
          <ExternalLink target="mailto:lightbydan@gmail.com?subject=Booking inquiry">
            lightbydan@gmail.com
          </ExternalLink>{" "}
          to discuss!
        </Para>

        <Header>Testimonials</Header>
      </InnerWrap>
      {imageArray && (
        <ImageCarousel
          type="testimonial"
          images={imageArray}
          alts=""
          aspect={6 / 10}
          maxSlides={5}
          minSlides={2}
        />
      )}
    </Layout>
  )
}

export default AboutShoots
