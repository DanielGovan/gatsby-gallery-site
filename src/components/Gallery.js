import React, { useEffect, useState } from "react"
import Zoom from "react-medium-image-zoom"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"
import "react-medium-image-zoom/dist/styles.css"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

import { GALLERY_IMAGES } from "../const/GalleryList"
import LoadingRipple from "./LoadingRipple"
import * as cssVars from "../const/constants"

// TODO: Export Gallery Item and Filter Toggles as UI components to reduce complexity here.

// Styling =====================

const Filters = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  padding: 0 ${cssVars.deskPad};

  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`
const Search = styled.input`
  padding: 4px 8px;
  font-size: 1.2rem;
`

const GalleryWrap = styled(motion.div)`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
`

const GalleryItem = styled(motion.div)`
  display: grid;
  position: relative;
  max-width: 50vh;
`

const GalleryImageInfo = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
`

const GalleryImage = styled(Img)`
  width: 100%;
`
const Gallery = () => {
  const FilterToggles = styled.a`
    display: inline-block;
    text-decoration: none;
    margin: 10px;
    padding: 6px 12px;
    border-radius: 10px;
    cursor: pointer;
    background: ${({ active }) =>
      active ? cssVars.nearWhite : cssVars.justBlack};
    color: ${({ active }) => (active ? cssVars.justBlack : cssVars.nearWhite)};

    &::after {
      display: block;
      width: 10px;
      content: ${({ direction }) => (direction === false ? "DOWN" : "UP")};
    }
  `

  const filterTypes = ["all", "drag", "skin", "other"]
  const [imagesSource, setImagesSource] = useState([])
  const [imageArray, setImageArray] = useState()
  const [searchValue, setSearchValue] = useState(null)
  const [sortType, setSortType] = useState("dateType")
  const [sortDirection, setSortDirection] = useState(false)
  const [picsFilter, setPicsFilter] = useState(filterTypes[0])

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

  // Images initialisation  =====================

  useEffect(() => {
    const displayImages = []
    // map data array to image query
    GALLERY_IMAGES.map(({ name, date, keyWords, images }) => {
      const img = data.allFile.edges.find(
        ({ node }) => node.relativePath === images[0]
      ).node
      //parse dates for human and js
      const dateType = Date.parse(date)
      var parts = date.split(" ")
      let humanDate = parts[1] + " '" + parts[2].substring(2)
      displayImages.push({ img, name, dateType, humanDate, keyWords })
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

  // Sorting =====================

  const handleSort = (e, type) => {
    e.preventDefault()
    if (sortType === type) {
      setSortDirection(!!!sortDirection)
    } else {
      setSortDirection(false)
    }
    setSortType(type)
    let sortedImages = [...imageArray].sort((a, b) => {
      if (a === b) {
        return 0
      }
      if (sortDirection === true) {
        return a[type] > b[type] ? -1 : 1
      } else {
        return a[type] < b[type] ? -1 : 1
      }
    })
    setImageArray(sortedImages)
    setSortType(type)
  }

  // Search =====================

  useEffect(() => {
    if (searchValue === null) return
    if (searchValue === "") {
      return setImageArray(imagesSource)
    }
    let filteredImages = [...imagesSource].filter(item =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    setImageArray(filteredImages)
  }, [searchValue, imagesSource])

  const searchHandler = e => {
    setSearchValue(e.target.value)
  }

  // Filter =====================

  useEffect(() => {
    if (picsFilter === null) return
    if (picsFilter === "all") {
      return setImageArray(imagesSource)
    }
    let filteredImages = [...imagesSource].filter(item =>
      item.keyWords.includes(picsFilter)
    )
    setImageArray(filteredImages)
  }, [picsFilter, imagesSource])

  const handleFilterToggle = e => {
    e.preventDefault()
    const currentPlace = filterTypes.indexOf(picsFilter)
    const newPlace =
      currentPlace == filterTypes.length - 1 ? 0 : currentPlace + 1
    setPicsFilter(filterTypes[newPlace])
  }

  // Animation (varients) =====================

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
        <Search placeholder="Search" onChange={searchHandler} />
        <FilterToggles
          active={sortType === "dateType" ? true : false}
          direction={sortDirection}
          href="/"
          onClick={e => handleSort(e, "dateType")}
        >
          Order by date{" "}
          {sortType === "dateType" &&
            (sortDirection === true ? <FaArrowDown /> : <FaArrowUp />)}
        </FilterToggles>
        <FilterToggles
          active={sortType === "name" ? true : false}
          direction={sortDirection}
          href="/"
          onClick={e => handleSort(e, "name")}
        >
          Order by Name{" "}
          {sortType === "name" &&
            (sortDirection === true ? <FaArrowDown /> : <FaArrowUp />)}
        </FilterToggles>
        <FilterToggles href="/" onClick={handleFilterToggle}>
          Toggle filter ({picsFilter})
        </FilterToggles>
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
