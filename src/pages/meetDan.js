import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const MeetDan = () => (
  <Layout>
    <SEO title="Meet Dan" />
    <h1>Hi from the meet dan page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default MeetDan
