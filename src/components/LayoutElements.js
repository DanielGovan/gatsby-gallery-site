import styled from "styled-components"
import Img from "gatsby-image"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Zoom from "react-medium-image-zoom"
import * as cssVars from "../const/constants"
// ${cssVars}

//Layout

export const MainWrap = styled.main`
  margin: 0 auto;
  min-height: ${cssVars.screenHeight};
`

export const InnerWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${cssVars.deskPad};
  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`

export const Illustration = styled.div`
  width: 48%;
  margin: 2rem 0 0;
  padding: 0 20px;
  display: inline-block;
  vertical-align: top;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    width: auto;
    display: block;
    margin: 20px 0;
    max-width: ${cssVars.breakPointM};
    width: 100%;
  }
`

export const Column = styled.div`
  display: inline-block;
  width: 48%;
  margin: 0 3.8% 0 0;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    display: block;
    width: 100%;
    margin-right: 0;
  }
`

export const HomeContent = styled.div`
  max-width: 1000px;
  margin: 2rem auto 0;
  padding: 0 ${cssVars.deskPad} 0 410px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    padding: 0 ${cssVars.deskPad};
  }

  @media screen and (max-width: ${cssVars.breakPointS}) {
    padding: 0 ${cssVars.mobPad};
  }
`

export const HomeWrapper = styled.div`
  min-height: ${cssVars.screenHeight};

  @media screen and (max-width: ${cssVars.breakPointM}) {
  }
`

export const HomeIllus = styled.div`
  width: 340px;
  max-width: 50%;
  position: absolute;
  top: 0;
  left: 32px;
  max-height: 60vh;
  margin-bottom: 40px;

  @media screen and (max-width: ${cssVars.breakPointM}) {
    width: 250px;
    position: static;
    float: left;
    margin-right: 20px;
  }
`

//Images

export const ImageContainer = styled.div`
  max-width: 1000px;
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
  padding: 0 ${cssVars.deskPad};
  @media screen and (max-width: ${cssVars.breakPointM}) {
    padding: 0 10px;
  }
`
export const GridZoom = styled(Zoom)`
  display: grid;
  position: relative;
`

export const ImageItem = styled(Img)`
  button {
  }

  img {
    /* object-fit: contain !important; */
    background: black !important;
    object-fit: scale-down !important;
  }

  img:hover {
    /* transform: scale(1.1); */
  }
`

//Typography
export const Header = styled.h1`
  font-family: "Ubuntu", sans-serif;
  margin-bottom: 44px;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 3rem;
  @media screen and (max-width: 500px) {
    font-size: 2.2rem;
    text-align: center;
  }
`
export const SubHeader = styled.h2`
  font-family: "Ubuntu", sans-serif;
  margin: 2rem 0 1rem;
  font-size: 2rem;
  @media screen and (max-width: 500px) {
    font-size: 1.6rem;
    text-align: center;
  }
`
export const Callout = styled.h2`
  /* font-family: "Ubuntu", sans-serif; */
  margin: 0.5rem 0 0;
  font-size: 1.4rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
    text-align: center;
  }
`

export const List = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
`
export const ListItem = styled.li`
  margin: 0;
  padding: 0 0 1rem 0;
  font-size: 1.4rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
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
