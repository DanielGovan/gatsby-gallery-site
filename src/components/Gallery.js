import React from "react"
import { GALLERY_IMAGES } from "../const/GalleryList"
import { useStaticQuery, graphql } from "gatsby"
import { ImageItem } from "./LayoutElements"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query galleryImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "galleryImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
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

  const displayImages = GALLERY_IMAGES.map(({ name, date, images }) => {
    const img = data.allFile.edges.find(
      ({ node }) => node.relativePath === images[0]
    ).node
    console.log(img, name, date)
    return (
      <div
        style={{ display: "inline-block", maxWidth: "200px" }}
        key={img.relativePath}
      >
        {name} / {date}
        <ImageItem
          style={{ width: "200px" }}
          key={img.relativePath}
          fluid={img.childImageSharp.fluid}
        />
      </div>
    )
  })
  return <>{displayImages}</>
}

export default Gallery
