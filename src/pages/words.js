import React from "react"
import BlogRoll from "../components/BlogRoll"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { InnerWrap } from "../Elements/wraps"

const words = () => {
  return (
    <Layout>
      <SEO title="Prices" />
      <InnerWrap>
        <BlogRoll />
      </InnerWrap>
    </Layout>
  )
}

export default words
