import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Para from "../components/Para"
import SEO from "../components/seo"
import { InnerWrap } from "../Elements/wraps"
import HeroSection from "../components/HeroSection"

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query heroBG {
      heroBG: file(relativePath: { eq: "header-johnmax.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <HeroSection heroBG={data.heroBG.childImageSharp.fluid}>
        <span>404: Not Found</span>
      </HeroSection>
      <InnerWrap>
        <Para>
          Sorry, that page was not recognised, perhaps it was something on the
          old 2018 site?
        </Para>
        <Para>Welcome to the new 2021 site! </Para>
        <Para>
          Try one of the links in the navigation above, I know you'll love it.
        </Para>
      </InnerWrap>
    </Layout>
  )
}

export default NotFoundPage
