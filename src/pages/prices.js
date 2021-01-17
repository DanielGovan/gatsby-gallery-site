import React from "react"
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
import CoffeeButton from "../components/CoffeeButton"

const AboutShoots = () => {
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
  return (
    <Layout>
      <SEO title="Prices" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        position="center 30%"
        button={<CoffeeButton />}
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
          opportunity for exploring and improving self-image in a safe
          environment. Plus being art is fun!
        </Para>

        <Para>
          At my home studio in{" "}
          <ExternalLink
            title="Google Maps link"
            target="//www.google.com/maps/place/Mile+End+Station/@51.5251447,-0.0509267,14z/data=!4m5!3m4!1s0x48761d307352cb15:0xe6fed20d26c2bbf8!8m2!3d51.5251447!4d-0.0334172"
          >
            Mile End
          </ExternalLink>{" "}
          we'll work through a variety of lighting setups, colours and poses,
          conferring over the shots as we go and deleting whatever doesn't work.
          Everyone gets to veto everything, so we only put out what we're both
          happy with.
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
          In either case if you need extra final shots, add £15 each. Headshots
          and drag shoots also available, for any of these email{" "}
          <ExternalLink target="mailto:lightbydan@gmail.com?subject=Booking inquiry">
            lightbydan@gmail.com
          </ExternalLink>{" "}
          to discuss!
        </Para>

        <Header>Testimonials</Header>
      </InnerWrap>
      <ImageCarousel
        type="testimonial"
        images={data.testimonialImages.edges}
        alts=""
        aspect={6 / 10}
        maxSlides={5}
        minSlides={2}
      />
    </Layout>
  )
}

export default AboutShoots
