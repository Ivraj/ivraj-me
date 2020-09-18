/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import resume from "../assets/resume.pdf"

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
    <SocialLink to="https://profile.joinchanl.me/Zo6ljm4z3bdrKRcvFj9lvDU0WrI3" text="Chanl" />
    <SocialLink to={resume} text="Resume" />
  </div>
)

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1>Ivraj Seerha</h1>
      <h2>Hi. How's it been?</h2>
      <h3>
        I'm a 2019 Venture for America Fellow and am currently working on
        some personal projects.
      </h3>
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
