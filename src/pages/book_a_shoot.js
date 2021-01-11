import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "../slick.css"

import Layout from "../components/layout"
import {
  ImageItem,
  Header,
  SubHeader,
  InnerWrap,
  // List,
  // ListItem,
  InlineLink,
} from "../components/LayoutElements"
import Para from "../actualComponents/Para"
import SEO from "../components/seo"
import HeroSection from "../actualComponents/HeroSection"

const slickSettingsPicks = {
  dots: true,
  autoplay: true,
  arrows: false,
  swipeToSlide: true,
  infinite: true,
  variableWidth: true,
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

const slickTestimonialSettings = {
  dots: true,
  infinite: true,
  swipeToSlide: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const AboutShoots = () => {
  const data = useStaticQuery(graphql`
    query {
      testimonialImages: allFile(
        filter: {
          sourceInstanceName: { eq: "testimonialImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      btsImages: allFile(
        filter: {
          sourceInstanceName: { eq: "siteImages" }
          extension: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { regex: "/bts/" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      heroBG: file(relativePath: { eq: "header-jason.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Book a shoot" />
      <HeroSection
        heroBG={data.heroBG.childImageSharp.fluid}
        position="center 30%"
      >
        Thinking of getting lit by Dan?
        {/* <FadeInText>
          <span>Queer</span>
          <span>Vivid</span>
          <span>Surreal</span>
          <span>Vibrant</span>
          <span>Gaudy</span>
        </FadeInText> */}
      </HeroSection>
      <Slider {...slickSettingsPicks}>
        {data.btsImages.edges
          //.sort(() => Math.random() - 0.5)
          .map((image, key) => (
            <ImageItem
              key={key}
              fluid={{
                ...image.node.childImageSharp.fluid,
              }}
              alt="Behind the scenes with Light by Dan"
            />
          ))}
      </Slider>
      <InnerWrap>
        <Header>Book a shoot</Header>
        {/* <SubHeader>Thinking of getting lit by Dan?</SubHeader> */}
        <Para>
          A professional shoot is great for self promotion if you’re a performer
          or brand, but where this shines is as an opportunity for exploring and
          improving self-image in a safe environment.
        </Para>

        <Para>
          At my home studio in{" "}
          <InlineLink
            target="_blank"
            href="//www.google.com/maps/place/Mile+End+Station/@51.5251447,-0.0509267,14z/data=!4m5!3m4!1s0x48761d307352cb15:0xe6fed20d26c2bbf8!8m2!3d51.5251447!4d-0.0334172"
          >
            Mile End
          </InlineLink>
          , we'll work through a variety of lighting setups, colours and poses,
          and conferring over the shots as we go, deleting whatever doesn't
          work.
        </Para>

        <SubHeader>Packages</SubHeader>

        <dl>
          <dt>Commission, £150, up to 1hr shoot6 final portraits included.</dt>
          <dt>
            If you know exactly what you want, we can quickly set it up, try a
            few variations, and get that look you’re after.
          </dt>
          <dt>
            Creative shoot, £250 , 2hr, 1 or 2 people, 8 portraits included.
          </dt>
          <dt>
            For those that want to look great, but they're not sure how, this
            option gives us time to explore and experiment and find what works
            for you, with a wider range of poses and techniques.{" "}
          </dt>
        </dl>

        <Para>
          In either case if you need extra final shots, add £15 each. Headshots
          and drag shoots also available, for any of these email{" "}
          <InlineLink
            target="_blank"
            href="mailto:lightbydan@gmail.com?subject=Booking inquiry"
          >
            lightbydan@gmail.com
          </InlineLink>{" "}
          to discuss!
        </Para>

        <Header>Testimonials</Header>

        <Slider {...slickTestimonialSettings}>
          {data.testimonialImages.edges.map((image, key) => (
            <ImageItem
              key={key}
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.relativePath.split(".")[0]}
            />
          ))}
        </Slider>
      </InnerWrap>
    </Layout>
  )
}

export default AboutShoots
