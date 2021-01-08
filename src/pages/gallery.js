import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Para from "../actualComponents/Para"
import { InnerWrap, Header } from "../components/LayoutElements"
import Gallery from "../components/Gallery"

const Testimonials = () => {
  return (
    <Layout>
      <SEO title="Portrait Gallery" />
      <InnerWrap>
        <Header>Portrait Gallery</Header>
        <Para>
          Here's (almost) everyone I've ever shot! Both for easy reference, and
          as an antidote for my imposter syndrome.
        </Para>
      </InnerWrap>
      <Gallery />
    </Layout>
  )
}

export default Testimonials
