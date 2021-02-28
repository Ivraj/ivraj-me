import React from "react"
import { Global, css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import ThoughtLinks from "../components/ThoughtsLinks"
import PersonalDescriptors from "../components/PersonalDescriptors"

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
      <PersonalDescriptors />
      <ThoughtLinks />
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
