import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { InnerWrap, Header, Para } from "../components/LayoutElements"
import Gallery from "../components/Gallery"

const Testimonials = () => {
  return (
    <Layout>
      <SEO title="Portrait Gallery" />
      <InnerWrap>
        <Header>Portrait Gallery</Header>
        <Para>Todo: sort by date or likes (?), filter by drag / skin </Para>
      </InnerWrap>
      <Gallery />
    </Layout>
  )
}

export default Testimonials
