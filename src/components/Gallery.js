import React, { useEffect, useState } from "react"

import "react-medium-image-zoom/dist/styles.css"

import { GALLERY_IMAGES } from "../const/GalleryList"
import { useStaticQuery, graphql } from "gatsby"
import {
  GalleryWrap,
  GalleryItem,
  GalleryImageWrap,
  GalleryImageInfo,
  Filters,
  GalleryImage,
  Search,
} from "./LayoutElements"

const Gallery = () => {
  const [imagesSource, setImagesSource] = useState([])
  const [imageArray, setImageArray] = useState([])
  const [galleryRender, setGalleryRender] = useState()
  const [searchValue, setSearchValue] = useState(null)
  const [sortType, setSortType] = useState("date")
  const [sortDirection, setSortDirection] = useState("down")
  const [filter, setFilter] = useState("all")

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
              fluid(maxWidth: 500, maxHeight: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // Sorting

  const sortImages = (type, direction) => {
    // if type == type, change direction
    // if not, change type & reset direction
    let sortedImages = [...imageArray].sort((a, b) => {
      if (a === b) {
        return 0
      }
      if (direction === "up") {
        return a[type] > b[type] ? -1 : 1
      } else {
        return a[type] < b[type] ? -1 : 1
      }
    })
    setImageArray(sortedImages)
  }

  // Images init
  useEffect(() => {
    const displayImages = []
    // map data array to image query
    GALLERY_IMAGES.map(({ name, date, images }) => {
      const img = data.allFile.edges.find(
        ({ node }) => node.relativePath === images[0]
      ).node
      //parse dates for human and js
      const dateType = Date.parse(date)
      var parts = date.split(" ")
      let humanDate = parts[1] + " '" + parts[2].substring(2)
      displayImages.push({ img, name, dateType, humanDate })
      return null
    })
    // sort images by date
    const sortedImages = displayImages.sort((a, b) => {
      if (a === b) {
        return 0
      }
      return a.dateType > b.dateType ? -1 : 1
    })
    setImageArray(sortedImages)
    setImagesSource(sortedImages)
  }, [data.allFile.edges])

  useEffect(() => {
    setGalleryRender(
      <>
        {imageArray.map(({ img, name, humanDate }) => (
          <GalleryItem
            key={img.relativePath}
            overlayBgColorEnd="rgba(0, 0, 0, 0.6)"
          >
            <GalleryImageInfo>
              {name} / {humanDate}
            </GalleryImageInfo>
            <GalleryImageWrap>
              <GalleryImage
                key={img.relativePath}
                fluid={img.childImageSharp.fluid}
              />
            </GalleryImageWrap>
          </GalleryItem>
        ))}
      </>
    )
  }, [imageArray, data.allFile.edges])

  // Filtering

  useEffect(() => {
    if (searchValue === null) return
    if (searchValue === "") {
      return setImageArray(imagesSource)
    }
    let filteredImages = [...imagesSource].filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setImageArray(filteredImages)
    console.log("Search attempt", searchValue, filteredImages)
  }, [searchValue, imagesSource])

  const handleDateFilter = e => {
    e.preventDefault()
    sortImages("dateType", "up")
  }

  const handleNameFilter = e => {
    e.preventDefault()
    sortImages("name", "down")
  }

  const searchHandler = e => {
    setSearchValue(e.target.value)
  }

  const handleReset = e => {
    e.preventDefault()
    setImageArray(imagesSource)
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

        <Search placeholder="Search" onChange={searchHandler} />

        {/* <a href="/" onClick={handleReset}>
          Reset
        </a> */}
      </Filters>
      <GalleryWrap>{galleryRender}</GalleryWrap>
    </>
  )
}

export default Gallery
