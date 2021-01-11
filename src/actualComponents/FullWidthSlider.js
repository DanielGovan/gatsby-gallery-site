// gather elements, slider settings and stylings
import React from "react"
import Slider from "react-slick"
import styled from "styled-components"
import "../slick.css"
import Img from "gatsby-image"

const StyledFullWidthSlider = styled(Slider)``

const SliderItem = styled(Img)`
  /* display: grid !important; */
  min-width: 200px;
  min-height: 200px;
  /* height: 200px;
  width: 100px; */
  button {
  }

  img {
    /* object-fit: contain !important; */
    height: 200px;
    background: black !important;
    object-fit: contain;
  }

  img:hover {
    /* transform: scale(1.1); */
  }
`

const slickSettingsPicks = {
  dots: true,
  autoplay: true,
  arrows: false,
  swipeToSlide: true,
  infinite: true,
  speed: 4000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplaySpeed: 0,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 3,
        speed: 2000,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 2,
        speed: 2000,
      },
    },
  ],
}

const slickSettingsTestimonials = {
  dots: true,
  infinite: true,
  swipeToSlide: true,
  speed: 200,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 2,
        speed: 2000,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        speed: 2000,
      },
    },
  ],
}

const FullWidthSlider = ({ images, alts = "", aspect = "auto", type }) => {
  let slickSettings = slickSettingsPicks
  if (type === "testimonial") {
    slickSettings = slickSettingsTestimonials
  }

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
