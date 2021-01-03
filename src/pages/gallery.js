import React from "react"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import {
  ImageItem,
  InnerWrap,
  Header,
  Para,
} from "../components/LayoutElements"
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
