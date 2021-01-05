import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Button } from "../components/ButtonElements"
import Layout from "../components/layout"
import SEO from "../components/seo"

import {
  InnerWrap,
  HomeContent,
  HomeIllus,
  Para,
  ImageItem,
} from "../components/LayoutElements"
import { ButtonWrap } from "../components/HeroSectionElements"
import HeroSection from "../components/HeroSection"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      melol: file(relativePath: { eq: "dan-2.png" }) {
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
      <SEO title="Home" />
      <HeroSection />
      <HomeContent>
        <HomeIllus>
          <ImageItem fluid={data.melol.childImageSharp.fluid} alt="Dan" />
        </HomeIllus>
        <Para>
          Hi there! My name’s Dan, and I do cute portraits of people with
          colourful lights in East London. I call it{" "}
          <strong>Light By Dan</strong>.
        </Para>
        <Para>
          I learned a lot about how people see themselves taking hundreds of
          thousands of photos of queer nightlife over 10 years (and deleting
          most of them).
        </Para>
        <Para>
          That still informs my style and vibe with shoots: bright and fun with
          no preconceptions, a safe space to get to know yourself, and always
          celebrating vulnerability, absurdity and joy.
        </Para>
      </HomeContent>

      <InnerWrap>
        <i>XOXOX Need a specific CTAs, and maybe alternative links.XOXOX</i>
        <Para>
          If you're thinking about getting Lit by Dan, check out the booking
          page.
        </Para>
        <Para>You can see some testimonials, find out more about </Para>
        <Para>(I also make websites, and I made this one, with Gatsby.)</Para>
        <ButtonWrap>
          <Button fontBig primary>
            Get in touch
          </Button>
          <Button>Get in touch</Button>
        </ButtonWrap>
      </InnerWrap>
    </Layout>
  )
}

export default IndexPage
