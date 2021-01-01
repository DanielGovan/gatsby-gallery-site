import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import { GALLERY_IMAGES } from "../const/GalleryList"
import SEO from "../components/seo"
import { ImageItem } from "../components/Image"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(
        filter: { sourceInstanceName: { eq: "galleryImages" } }
        sort: { fields: relativePath, order: ASC }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300, maxHeight: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  useEffect(() => {
    console.log(GALLERY_IMAGES)
  }, [GALLERY_IMAGES])

  const oogabooga = GALLERY_IMAGES.map(({ name, date, images }) => {
    // Finds associated image from the array of images
    const img = data.allFile.edges.find(
      ({ node }) => node.relativePath === images[0]
    ).node

    return (
      <div style={{ display: "inline-block" }} key={img.relativePath}>
        {name}
        <ImageItem
          style={{ width: "150px" }}
          key={img.relativePath}
          fluid={img.childImageSharp.fluid}
        />
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Testimonials" />
      <h1>Testimonials</h1>
      <p>A few quick reviews from instagram...</p>

      {oogabooga}
      <div>All pics</div>
      {data.allFile.edges.map((image, key) => (
        <div style={{ display: "inline-block", maxWidth: "100px" }} key={key}>
          {image.node.relativePath}
          <ImageItem
            style={{ width: "100px" }}
            key={key}
            fluid={image.node.childImageSharp.fluid}
          />
        </div>
      ))}
    </Layout>
  )
}

export default Testimonials
