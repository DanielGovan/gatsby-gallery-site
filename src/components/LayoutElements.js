import styled from "styled-components"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import { bpmd } from "../const/constants"
import { Link } from "gatsby"

//Layout

export const MainWrap = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - 130px);
`

export const InnerWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px;
  @media screen and (max-width: 350px) {
    padding: 0 10px 0 10px;
  }
`

export const Illustration = styled.div`
  /* max-width: 400px; */
  width: 48%;
  margin: 2rem 0 0;
  padding: 0 20px;
  display: inline-block;
  vertical-align: top;

  @media screen and (max-width: ${bpmd}) {
    width: auto;
    display: block;
    margin: 20px 0;
    max-width: ${bpmd};
    width: 100%;
  }
`

export const Column = styled.div`
  display: inline-block;
  width: 48%;
  margin: 0 3.8% 0 0;

  @media screen and (max-width: ${bpmd}) {
    display: block;
    width: 100%;
    margin-right: 0;
  }
`

export const HomeContent = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 32px 0 350px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 650px) {
    padding: 0 32px 0 32px;
  }

  @media screen and (max-width: 350px) {
    padding: 0 10px 0 10px;
  }
`

export const HomeIllus = styled.div`
  width: 350px;
  max-width: 50%;
  position: absolute;
  top: 0;
  left: 0;
  max-height: 60vh;
  margin-bottom: 40px;

  @media screen and (max-width: 650px) {
    width: 250px;
    position: static;
    float: left;
    margin-right: 20px;
  }
`

//Images

export const ImageContainer = styled.div`
  max-width: 1000px;
  padding: 0 32px;
  text-align: center;
  margin: 0 auto;
`
export const ImageGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
`

export const GalleryWrap = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  margin: 0 auto;
  width: 100%;
`
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

export const GalleryItem = styled(Zoom)`
  text-align: center;
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const GalleryImageWrap = styled.div`
  position: relative;
  text-align: center;
  width: 100%;
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

  button {
  }

  img {
    /* display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1);
    transition: 0.2s all ease !important; */
  }

  img:hover {
    /* transform: scale(1.1); */
  }
`

export const ImageItem = styled(Img)`
  display: block;

  button {
  }

  img {
    transform: scale(1);
    transition: 0.2s all ease !important;
  }

  img:hover {
    /* transform: scale(1.1); */
  }
`

//Typography
export const Header = styled.h1`
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 44px;
`
export const SubHeader = styled.h2`
  font-family: "Ubuntu", sans-serif;
  margin: 2rem 0 0rem;
`
export const Para = styled.p`
  font-size: 1.4rem;
  margin: 0.5rem 0 1.5rem;
`

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
`
export const ListItem = styled.li`
  /* max-width: 400px; */
  //min-width: 80%;
  margin: 0;
  padding: 10px 0 5px 0;
`
export const InlineLink = styled.a`
  font-weight: 700;
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export const InteriorLink = styled(Link)`
  font-weight: 700;
  color: inherit;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`
