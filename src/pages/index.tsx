/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SocialLink = props => (
  <h3 css={{ marginRight: 16 }}>
    <a target="_blank" rel="noopener noreferrer" href={props.to}>
      {props.text}
    </a>
  </h3>
)

const SocialLinks = () => (
  <div css={{ display: "flex", flexDirection: "row" }}>
    <SocialLink to="https://www.linkedin.com/in/ivraj/" text="LinkedIn" />
    <SocialLink to="https://github.com/ivraj" text="Github" />
    <SocialLink
      to="https://drive.google.com/file/d/1TNmygoPm3Z5Ej1CehS-A78LQt2xDKMC4/view"
      text="Resume"
    />
  </div>
)

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Ivraj Seerha</h1>
      <h2>Hi. How's it been?</h2>
      <h3>
        I'm a 2019 Venture for America Fellow and am currently working as
        Director of Engineering at Bellwethr.
      </h3>
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
