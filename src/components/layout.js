import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { MainWrap } from "../Elements/wraps"

const Layout = ({ children }) => {
  return (
    <>
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
