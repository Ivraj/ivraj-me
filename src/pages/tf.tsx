/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const ThoughtsAndFeelings: React.FC = () => (
  <Layout>
    <SEO title="Thoughts and Feelings" />
    <div>
      <h4 css={{ marginTop: 0, marginBottom: 0 }}>
        <a href="/"> Back</a>
      </h4>
      <h1>Thoughts and Feelings &#128173; + &#10084;&#65039;</h1>
      <h2>No public pieces are posted at this time.</h2>
      <h6>
        If you were redirected here, I may have taken down the piece. Just
        message me.
      </h6>
    </div>
  </Layout>
)

export default ThoughtsAndFeelings
