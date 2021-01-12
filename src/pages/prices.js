import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import {
  Header,
  SubHeader,
  InnerWrap,
  InlineLink,
} from "../components/LayoutElements"
import Para from "../actualComponents/Para"
import SEO from "../components/seo"
import HeroSection from "../actualComponents/HeroSection"
import FullWidthSlider from "../actualComponents/FullWidthSlider"

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
      <SEO title="Book a shoot" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        position="center 30%"
      >
        Thinking of getting
        <br />
        lit by Dan?
      </HeroSection>

      <FullWidthSlider
        images={data.btsImages.edges}
        alts="Behind the scenes with Light by Dan"
        aspect={1 / 1}
        maxSlides={6}
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
          <InlineLink
            target="_blank"
            href="//www.google.com/maps/place/Mile+End+Station/@51.5251447,-0.0509267,14z/data=!4m5!3m4!1s0x48761d307352cb15:0xe6fed20d26c2bbf8!8m2!3d51.5251447!4d-0.0334172"
          >
            Mile End
          </InlineLink>
          , we'll work through a variety of lighting setups, colours and poses,
          and conferring over the shots as we go, deleting whatever doesn't
          work. Everyone gets vetos on everything, we only put out what we're
          both happy with.
        </Para>

        <SubHeader>Packages</SubHeader>

        <dl>
          <dt>
            Commission, £150, up to 1hr shoot, 6 final portraits included.
          </dt>
          <dt>
            If you know exactly what you want, we can quickly set it up, try a
            few variations, and get that look you’re after.
          </dt>
          <dt>
            Creative shoot, £250, 2hr, 8 portraits included, 1 or 2 people.
          </dt>
          <dt>
            For those that want to look great, but they're not sure how, this
            option gives us time to explore and experiment and find what works
            for you, with a wider range of poses and techniques.{" "}
          </dt>
        </dl>

        <Para>
          In either case if you need extra final shots, add £15 each. Headshots
          and drag shoots also available, for any of these email{" "}
          <InlineLink
            target="_blank"
            href="mailto:lightbydan@gmail.com?subject=Booking inquiry"
          >
            lightbydan@gmail.com
          </InlineLink>{" "}
          to discuss!
        </Para>

        <Header>Testimonials</Header>
      </InnerWrap>
      <FullWidthSlider
        type="testimonial"
        images={data.testimonialImages.edges}
        alts=""
        aspect={6 / 10}
        maxSlides={5}
      />
    </Layout>
  )
}

export default AboutShoots
