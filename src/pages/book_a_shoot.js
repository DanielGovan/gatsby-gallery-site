import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "../slick.css"

import Layout from "../components/layout"
import {
  Illustration,
  ImageItem,
  Header,
  SubHeader,
  Para,
  InnerWrap,
  Column,
  List,
  ListItem,
  InlineLink,
} from "../components/LayoutElements"
import SEO from "../components/seo"

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
  ],
}

const AboutShoots = () => {
  const data = useStaticQuery(graphql`
    query {
      bts_n_1: file(relativePath: { eq: "bts-7172018.jpg" }) {
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
      bts_w_1: file(relativePath: { eq: "bts-7090896.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_w_2: file(relativePath: { eq: "bts-4043958.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bts_w_3: file(relativePath: { eq: "bts-8110347.jpg" }) {
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

        <Column>
          <SubHeader>Thinking of getting lit by Dan?</SubHeader>
          <Para>
            It’s great for promotion if you’re a performer or brand, but more
            than that it’s a great experience for exploring and improving
            self-image in a safe environment.
          </Para>

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
              We’ll work through a variety of lighting setups, colours, props
              and poses. I’ll show you some of the photos as we go, so you can
              get a sense of how things are turning out and we can change
              direction as needed.
            </ListItem>
            <ListItem>
              Later I’ll work through the photos, editing down from hundreds to
              dozens, then I'll sending you a gallery so you can select the ones
              you want (and also which you want deleted for all time).
            </ListItem>
            <ListItem>
              Finally I spruce the chosen ones up and send them to you in high
              resolution. If you give the go ahead I might use some on my
              Instagram or websites too!
            </ListItem>
          </List>
        </Column>

        <Illustration>
          <Slider {...slickSettingsNarrow}>
            <div>
              <ImageItem
                fluid={data.bts_n_1.childImageSharp.fluid}
                alt="Living Vivid Exhibition at Dalston Superstore"
              />
            </div>
            <div>
              <ImageItem
                fluid={data.bts_n_2.childImageSharp.fluid}
                alt="Living Vivid Exhibition at Dalston Superstore"
              />
            </div>
            <div>
              <ImageItem
                fluid={data.bts_n_3.childImageSharp.fluid}
                alt="Living Vivid Exhibition at Dalston Superstore"
              />
            </div>
          </Slider>
        </Illustration>

        <SubHeader>Prices</SubHeader>

        <strong>£150 Commission, up to 1hr shoot</strong>
        <Para>
          If you know exactly what you want, we can quickly set it up, try a few
          variations, and get that look you’re after. 6 final portraits included
        </Para>
        <strong> £250 Creative shoot, 2hr, 1 or 2 people</strong>
        <Para>
          Alternatively for those that want to look great, but they're not sure
          how, this option gives us time to explore in a safe space what works
          for you, with a wider range of poses and techniques. 8 portraits
          included.
        </Para>
        <Para>
          (If you can't quite pick and want extra final shots, £15 per capture.)
        </Para>

        <Slider {...slickSettingsWide}>
          <div>
            <ImageItem
              fluid={data.bts_w_1.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.bts_w_2.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
          <div>
            <ImageItem
              fluid={data.bts_w_3.childImageSharp.fluid}
              alt="Living Vivid Exhibition at Dalston Superstore"
            />
          </div>
        </Slider>
      </InnerWrap>
    </Layout>
  )
}

export default AboutShoots
