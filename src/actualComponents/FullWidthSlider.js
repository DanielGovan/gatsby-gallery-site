import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import "../slick.css"
import Img from "gatsby-image"
// import * as cssVars from "../const/constants"

const StyledFullWidthSlider = styled(Slider)`
  cursor: ew-resize;
`

const SliderItem = styled(Img)`
  img {
    background: black !important;
  }
`

const FullWidthSlider = ({
  images,
  alts = "",
  aspect = 1 / 1,
  type,
  maxSlides = 6,
}) => {
  const slickSettingsPicks = {
    dots: true,
    autoplay: true,
    arrows: false,
    swipeToSlide: true,
    infinite: true,
    speed: 4000,
    slidesToShow: maxSlides,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: maxSlides - 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: maxSlides - 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: maxSlides - 3 || 2,
          speed: 4000,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: maxSlides - 4 || 1,
          speed: 2000,
        },
      },
    ],
  }

  const slickSettingsTestimonials = {
    ...slickSettingsPicks,
    autoplaySpeed: 4000,
    speed: 500,
  }

  let slickSettings = slickSettingsPicks
  if (type === "testimonial") {
    slickSettings = slickSettingsTestimonials
  }

  console.log("HEYA", aspect)

  return (
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
  )
}

export default FullWidthSlider
