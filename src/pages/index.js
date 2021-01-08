import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "../slick.css"

import { Button } from "../components/ButtonElements"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Para from "../actualComponents/Para"

import {
  InlineLink,
  InnerWrap,
  HomeContent,
  HomeIllus,
  HomeWrapper,
  ImageItem,
  InteriorLink,
} from "../components/LayoutElements"
import { ButtonWrap } from "../components/HeroSectionElements"
import HeroSection from "../components/HeroSection"

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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query pickImages {
      allFile(
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/pick/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 800, maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      melol: file(relativePath: { eq: "dan-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <HomeWrapper>
        <Slider {...slickSettingsPicks}>
          {data.allFile.edges
            //.sort(() => Math.random() - 0.5)
            .map((image, key) => (
              <ImageItem
                key={key}
                fluid={{
                  ...image.node.childImageSharp.fluid,
                  aspectRatio: 1 / 1,
                }}
                alt="Light by Dan picks"
              />
            ))}
        </Slider>

        <HomeContent>
          <HomeIllus>
            <ImageItem fluid={data.melol.childImageSharp.fluid} alt="Dan" />
          </HomeIllus>
          <Para>
            Hi there! My name’s Dan, and I do cute portraits of people with
            colourful lights in East London. I call it{" "}
            <strong>Light By Dan</strong>.
          </Para>
          <Para>
            My focus is{" "}
            <InteriorLink to="/gallery" title="Gallery of subjects">
              portrait photography
            </InteriorLink>{" "}
            now but before that I moonlighted in{" "}
            <InteriorLink to="/background" title="Photography background">
              documenting queer nightlife
            </InteriorLink>{" "}
            for 10 years, and that's the root of my style: I strive to make my
            shoots bright and fun with no preconceptions,{" "}
            <InteriorLink to="/book_a_shoot" title="About my shoots">
              a safe space to discover more about yourself
            </InteriorLink>
            , celebrating vulnerability, absurdity and joy.
          </Para>
          <Para>
            So welcome, and take a look around! Any questions or inquiries
            contact me at{" "}
            <InlineLink
              target="_blank"
              href="mailto:lightbydan@gmail.com?subject=Site inquiry"
              title="Email me"
            >
              lightbydan@gmail.com
            </InlineLink>
            .
          </Para>
        </HomeContent>
      </HomeWrapper>
    </Layout>
  )
}

export default IndexPage
