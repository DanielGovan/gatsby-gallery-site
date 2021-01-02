/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { MainWrap } from "./LayoutElements"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  console.log(data)
  return (
    <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: data.site.siteMetadata.description },
          { name: "keywords", content: "Photography, Portrait, London" },
        ]}
      ></Helmet>

      <NavBar />
      <MainWrap>{children}</MainWrap>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
