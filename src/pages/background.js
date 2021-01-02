import React from "react"

import Layout from "../components/layout"
import {
  Header,
  InnerWrap,
  Para,
  SubHeader,
} from "../components/LayoutElements"
import SEO from "../components/seo"

const Background = () => (
  <Layout>
    <SEO title="Background" />
    <InnerWrap>
      <Header>Background</Header>

      <SubHeader>Nightlife</SubHeader>
      <Para>
        I became a shutterbug in 2008, documenting nights out with friends, my
        mission to capture those beautiful moments of unguarded joy (whilst
        skipping some of the mess). I moved to "proper" club photography in
        2012, then gradually focused more on drag and cabaret performers and
        perfomances. Whatever thesubject, my aim was always about capturing
        situations rather than things, looking for people’s reactions and the
        fun in the moment.
      </Para>

      <SubHeader>Portraiture</SubHeader>
      <Para>
        In ten years of taking hundreds of thousands of photos of queer
        nightlife (and deleting most of them), I’ve learned a lot about queer
        culture, how people see themselves and FUN, that definitely informs my
        portraiture. I try to keep it irreverant, ridiculous and fantastical,
        not getting bogged down in preconceptions, focusing more on the person
        and their character.
      </Para>
    </InnerWrap>
  </Layout>
)

export default Background
