import styled from "styled-components"
import Img from "gatsby-image"

//Layout

export const MainWrap = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - 130px);
`

export const InnerWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 32px;
`

//Images

export const ImageContainer = styled.div`
  max-width: 1000px;
  padding: 0 32px;
  text-align: center;
  margin: 50px auto;
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
export const ImageItem = styled(Img)`
  display: block;

  img {
    transform: scale(1);
    transition: 0.2s all ease !important;
  }

  img:hover {
    transform: scale(1.1);
  }
`

//Typography
export const Header = styled.h1`
  margin-bottom: 44px;
`
export const SubHeader = styled.h2`
  margin: 1rem 0 0rem;
`
export const Para = styled.p`
  margin: 0.5rem 0 1.5rem;
`
