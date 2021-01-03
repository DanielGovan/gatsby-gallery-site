import styled from "styled-components"
import Img from "gatsby-image"
import { bplg, bpmd } from "../const/constants"

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

export const Illustration = styled.div`
  width: 400px;
  margin: 0 0 20px 40px;
  float: right;

  @media screen and (max-width: ${bpmd}) {
    width: auto;
    float: none;
    margin: 0 20px;
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
export const ImageItem = styled(Img)`
  display: block;

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
  margin-bottom: 44px;
`
export const SubHeader = styled.h2`
  margin: 2rem 0 0rem;
`
export const Para = styled.p`
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
