import React from "react"
import { Global, css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

const CenterIndexContent = () => (
  <Global
    styles={css`
      #___gatsby {
        height: 100%;
      }
    `}
  />
)
const IndexPage: React.FC = () => (
  <Layout>
    <CenterIndexContent />
    <SEO title="Home" />
    <div>
      <h1>Ivraj Seerha</h1>
      <h2>Hi. How's it been?</h2>
      <h3>
        I'm a 2019 Venture for America Fellow and am currently working on some
        personal projects.
      </h3>
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
