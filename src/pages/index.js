import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/HeroSection"
import Gallery from "../components/Gallery"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <Gallery />
    </Layout>
  </>
)

export default IndexPage
