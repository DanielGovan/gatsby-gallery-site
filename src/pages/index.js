import React from "react"

import { Button } from "../components/ButtonElements"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { InnerWrap, Para } from "../components/LayoutElements"
import { ButtonWrap } from "../components/HeroSectionElements"
import HeroSection from "../components/HeroSection"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <InnerWrap>
        pixs go here
        <Para>
          Hi there! My name’s Dan, and I do cute portraits of people with
          colourful lights in East London. I call it Light By Dan
        </Para>
        <Para>
          Before portraits I took hundreds of thousands of photos of queer
          nightlife over 10 years (and deleting most of them), so I learned a
          lot about queer culture and how people see themselves.
        </Para>
        <Para>
          I try to keep a similar vibe in my shoots; fun, irreverant, maybe a
          little fantastical. Not getting too bogged down in preconceptions or
          the humdrum, instead focusing on the person and their character, and
          always celebrating vulnerability, absurdity and joy
        </Para>
        <ButtonWrap>
          <Button fontBig primary>
            Get in touch
          </Button>
          <Button>Get in touch</Button>
        </ButtonWrap>
      </InnerWrap>
    </Layout>
  </>
)

export default IndexPage
