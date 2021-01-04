import React, { useEffect, useState } from "react"

import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import { GALLERY_IMAGES } from "../const/GalleryList"
import { useStaticQuery, graphql } from "gatsby"
import {
  GalleryWrap,
  GalleryItem,
  GalleryImageWrap,
  GalleryImageInfo,
  Filters,
  ImageItem,
} from "./LayoutElements"

const Gallery = () => {
  const [imageArray, setImageArray] = useState([])

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

  useEffect(() => {
    const displayImages = []
    GALLERY_IMAGES.map(({ name, date, images }) => {
      const img = data.allFile.edges.find(
        ({ node }) => node.relativePath === images[0]
      ).node
      //parse dates for human and js
      const dateType = Date.parse(date)
      var parts = date.split(" ")
      let humanDate = parts[1] + " '" + parts[2].substring(2)
      displayImages.push({ img, name, dateType, humanDate })
    })
    // sort images by date
    const sortedImages = displayImages.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return a.dateType > b.dateType ? -1 : 1
    })
    setImageArray(sortedImages)
  }, [])

  const handleDateFilter = e => {
    e.preventDefault()
    const sortedImages = imageArray.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return a.dateType > b.dateType ? -1 : 1
    })
    setImageArray(sortedImages)
    console.log(sortedImages, imageArray)
  }

  const handleNameFilter = e => {
    e.preventDefault()
    const sortedImages = imageArray.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return a.name < b.name ? -1 : 1
    })
    setImageArray(sortedImages)
    console.log(sortedImages, imageArray)
  }

  return (
    <>
      <Filters>
        <a href="/" onClick={handleDateFilter}>
          Order by date
        </a>

        <a href="/" onClick={handleNameFilter}>
          Order by Name
        </a>
      </Filters>
      <GalleryWrap>
        {imageArray.map(({ img, name, humanDate }) => (
          <GalleryItem key={img.relativePath}>
            <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.6)">
              <GalleryImageWrap>
                <GalleryImageInfo>
                  {name} / {humanDate}
                </GalleryImageInfo>
                <ImageItem
                  style={{ width: "200px" }}
                  key={img.relativePath}
                  fluid={img.childImageSharp.fluid}
                />
              </GalleryImageWrap>
            </Zoom>
          </GalleryItem>
        ))}
      </GalleryWrap>
    </>
  )
}

export default Gallery
