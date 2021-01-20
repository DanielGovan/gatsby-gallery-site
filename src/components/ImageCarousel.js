import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import "../slick.css"
import Img from "gatsby-image"
import { GiSideswipe } from "react-icons/gi"
import { IconContext } from "react-icons/lib"
// import * as cssVars from "../const/constants"

const SliderArea = styled.div`
  position: relative;
  border-top: 10px solid black;
  background: black;
  border-bottom: 5px solid black;
  svg {
    transition: opacity 0.5s ease;
    opacity: 0.7;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 99;
  }
  &:hover svg {
    opacity: 0;
  }
`

const StyledFullWidthSlider = styled(Slider)`
  cursor: ew-resize;

  svg {
    position: absolute;
    left: 10px;
    top: 40%;
  }
`

const SliderItem = styled(Img)`
  img {
    background: black !important;
  }
`

const ImageCarousel = ({
  images,
  alts = "",
  aspect = 1 / 1,
  type,
  maxSlides = 6,
  minSlides = 1,
}) => {
  const slickSettingsPicks = {
    dots: true,
    // autoplay: true,
    arrows: false,
    lazyLoad: "progressive",
    swipeToSlide: true,
    waitForAnimate: false,
    mobileFirst: true,
    infinite: true,
    speed: 500,
    slidesToShow: maxSlides,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: maxSlides - 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: Math.max(maxSlides - 2, minSlides),
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: Math.max(maxSlides / 2, minSlides),
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: Math.max(maxSlides - 6, minSlides),
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: Math.max(maxSlides - 7, minSlides),
        },
      },
    ],
  }

  console.log(Math.max(maxSlides - 2, minSlides), maxSlides - 2, minSlides)

  const slickSettingsTestimonials = {
    ...slickSettingsPicks,
    speed: 500,
  }

  let slickSettings = slickSettingsPicks
  if (type === "testimonial") {
    slickSettings = slickSettingsTestimonials
  }

  return (
    <SliderArea>
      <IconContext.Provider value={{ color: "white", size: "50px" }}>
        <GiSideswipe />
      </IconContext.Provider>
      <StyledFullWidthSlider {...slickSettings}>
        {images
          //.sort(() => Math.random() - 0.5)
          .map((image, key) => (
            <SliderItem
              key={key}
              fluid={{
                ...image.node.childImageSharp.fluid,
                aspectRatio: aspect,
              }}
              alt={alts}
            />
          ))}
      </StyledFullWidthSlider>
    </SliderArea>
  )
}

export default ImageCarousel
