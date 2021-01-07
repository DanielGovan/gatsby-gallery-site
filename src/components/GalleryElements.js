import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"

export const Filters = styled.div`
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  max-width: 1000px;

  a {
    display: inline-block;
    text-decoration: none;
    margin: 10px;
    padding: 6px 12px;
    background-color: white;
    color: black;
    border-radius: 10px;
    cursor: pointer;
  }
`
export const Search = styled.input`
  padding: 4px 8px;
  font-size: 1.2rem;
`

export const GalleryWrap = styled(motion.div)`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
`

export const GalleryItem = styled(motion.div)`
  display: grid;
  position: relative;
  max-width: 50vh;
`

export const GalleryImageInfo = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 5px;
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
`

export const GalleryImage = styled(Img)`
  width: 100%;
`
