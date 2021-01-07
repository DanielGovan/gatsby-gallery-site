import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "../slick.css"

import Layout from "../components/layout"
import Para from "../actualComponents/Para"
import {
  Illustration,
  ImageItem,
  Header,
  SubHeader,
  Callout,
  InnerWrap,
  Column,
  List,
  ListItem,
  InlineLink,
} from "../components/LayoutElements"
import SEO from "../components/seo"
// import { Button } from "../components/ButtonElements"
// import { ButtonWrap } from "../components/HeroSectionElements"

const slickSettingsWide = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}

const slickSettingsNarrow = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 660,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 330,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
}

const AboutShoots = () => {
  const data = useStaticQuery(graphql`
    query {
      bts_n_1: file(relativePath: { eq: "bts-reflection.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_n_2: file(relativePath: { eq: "bts-220108.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_n_3: file(relativePath: { eq: "bts-205504.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_w_1: file(relativePath: { eq: "bts-wide1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_w_2: file(relativePath: { eq: "bts-wide2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_w_3: file(relativePath: { eq: "bts-wide3.jpg" }) {
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
      <SEO title="Book a shoot" />
      <InnerWrap>
        <Header>Book a shoot</Header>
        <SubHeader>Thinking of getting lit by Dan?</SubHeader>
        <Para>
          It’s ideal for promotion if you’re a performer or brand, but more than
          that it’s a great experience for exploring and improving self-image in
          a safe environment.
        </Para>

        <Column>
          <SubHeader>How does it work?</SubHeader>

          <List>
            <ListItem>
              At my home studio in{" "}
              <InlineLink
                target="_blank"
                href="//www.google.com/maps/place/Mile+End+Station/@51.5251447,-0.0509267,14z/data=!4m5!3m4!1s0x48761d307352cb15:0xe6fed20d26c2bbf8!8m2!3d51.5251447!4d-0.0334172"
              >
                Mile End
              </InlineLink>
              , we'll start with a chat about the shoot; your hopes, fears,
              expectations, and self image.
            </ListItem>
            <ListItem>
              We’ll work through a variety of lighting setups, colours and
              poses. I’ll show you some photos as we go, so we can confer and
              change direction if needed.
            </ListItem>
            <ListItem>
              Later I’ll carry out broad edits and whittle them down from
              hundreds to dozens, then I'll send you the set in a gallery so you
              can select which you want (and which you want deleted for all
              time!).
            </ListItem>
            <ListItem>
              Finally I edit the final pics and send them to you in full
              resolution to do with as you wish. If you give the go ahead I
              might use some on my Instagram or websites too!
            </ListItem>
          </List>
        </Column>

        <Illustration>
          <Slider {...slickSettingsNarrow}>
            <div>
              <ImageItem
                fluid={data.bts_n_1.childImageSharp.fluid}
                alt="Giani behind the scenes with Light By Dan"
              />
            </div>
            <div>
              <ImageItem
                fluid={data.bts_n_2.childImageSharp.fluid}
                alt="Richard behind the scenes with Light By Dan"
              />
            </div>
            <div>
              <ImageItem
                fluid={data.bts_n_3.childImageSharp.fluid}
                alt="Orlando behind the scenes with Light By Dan"
              />
            </div>
          </Slider>
        </Illustration>

        <SubHeader>Packages</SubHeader>

        <Callout>£150 Commission, up to 1hr shoot</Callout>
        <Para>
          If you know exactly what you want, we can quickly set it up, try a few
          variations, and get that look you’re after. 6 final portraits included
        </Para>
        <Callout> £250 Creative shoot, 2hr, 1 or 2 people</Callout>
        <Para>
          For those that want to look great, but they're not sure how, this
          option gives us time to explore and experiment and find what works for
          you, with a wider range of poses and techniques. 8 portraits included.
        </Para>
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
        {/* <ButtonWrap>
          <Button
            fontBig
            primary
            href="mailto:lightbydan@gmail.com?subject=Site inquiry"
          >
            Email now to discuss!
          </Button>
        </ButtonWrap> */}
        <Slider {...slickSettingsWide}>
          <div>
            <ImageItem
              fluid={data.bts_w_1.childImageSharp.fluid}
              alt="Jason behind the scenes with Light By Dan"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.bts_w_2.childImageSharp.fluid}
              alt="Vaneet behind the scenes with Light By Dan"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.bts_w_3.childImageSharp.fluid}
              alt="Harry behind the scenes with Light By Dan"
            />
          </div>
        </Slider>
      </InnerWrap>
    </Layout>
  )
}

export default AboutShoots
