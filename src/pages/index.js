import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import HeroSection from "../components/HeroArea/HeroSection"
import Footer from "../components/Footer/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroSection />
    <Image />
    <Footer />
  </Layout>
)

export default IndexPage
