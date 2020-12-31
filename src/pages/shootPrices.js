import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from "../components/Footer/Footer"

const ShootPrices = () => (
  <Layout>
    <SEO title="Shoot Prices" />
    <h1>Prices</h1>
    <p>
      Thinking of booking your own shoot? It’s great for self-promotion if
      you’re a performer, creative or an online brand, but it’s also a fun
      experience for exploring and improving self-image in a safe environment.
    </p>

    <h3>Commission</h3>
    <p>
      If you know exactly what you want, we can quickly set it up, try a few
      variations, and get that look you’re after: £150, up to 1hr shoot, 6 final
      portraits included
    </p>
    <h3>Creative shoot (single or couple)</h3>
    <p>
      Alternatively for those that want to look great, but they're not sure how,
      this option gives us time to explore in a safe space what works for you,
      with a wider range of poses and techniques: £250, Up to 2hr shoot, 8
      portraits included
    </p>
    <p>If you can't quite pick and want extra final shots, £15 per capture.</p>
    <Footer />
  </Layout>
)

export default ShootPrices
