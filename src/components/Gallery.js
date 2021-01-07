import React, { useEffect, useState } from "react"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

import { GALLERY_IMAGES } from "../const/GalleryList"
import LoadingRipple from "./LoadingRipple"
import { useStaticQuery, graphql } from "gatsby"
import {
  GalleryWrap,
  GalleryItem,
  GalleryImageInfo,
  GalleryImage,
  Filters,
  Search,
} from "./GalleryElements"

// TODO: combine order by date and name into a single toggle button
// OR make them both togglable and by direction!
// TODO: add another filtering by skin vs drag

const Gallery = () => {
  const [imagesSource, setImagesSource] = useState([])
  const [imageArray, setImageArray] = useState()
  const [searchValue, setSearchValue] = useState(null)
  // const [sortType, setSortType] = useState("date")
  // const [sortDirection, setSortDirection] = useState("down")
  // const [filter, setFilter] = useState("all")

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
              fluid(maxWidth: 800, maxHeight: 1000) {
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

  // Animation varients
  const galleryWrapAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const galleryItemAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
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
      </Filters>
      {imageArray ? (
        <GalleryWrap
          variants={galleryWrapAnimation}
          initial="hidden"
          animate="show"
        >
          {imageArray.map(({ img, name, humanDate }) => (
            <GalleryItem
              key={img.relativePath}
              layout
              variants={galleryItemAnimation}
            >
              <GalleryImageInfo>
                {name} / {humanDate}
              </GalleryImageInfo>

              <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.6)">
                <GalleryImage
                  key={img.relativePath}
                  fluid={img.childImageSharp.fluid}
                />
              </Zoom>
            </GalleryItem>
          ))}
        </GalleryWrap>
      ) : (
        <LoadingRipple />
      )}
    </>
  )
}

export default Gallery
