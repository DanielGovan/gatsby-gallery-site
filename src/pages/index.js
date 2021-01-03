import React from "react"

import { Button } from "../components/ButtonElements"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  HeroContainer,
  Tagline,
  ButtonWrap,
} from "../components/HeroSectionElements"
import { InnerWrap, Para, SubHeader } from "../components/LayoutElements"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <HeroContainer>
        <InnerWrap>
          <Tagline>
            Queer / surreal / colourful portrait photography in East London
          </Tagline>

          <ButtonWrap>
            <Button fontBig big primary>
              Get in touch
            </Button>
          </ButtonWrap>
        </InnerWrap>
      </HeroContainer>
      <InnerWrap>
        pixs go here
        <Para>
          Hi there! My name’s Dan, and I do cute portraits of people with
          colourful lights. I call it Light By Dan
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
