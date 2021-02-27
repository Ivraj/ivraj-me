import React from "react"
import { Global, css } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"
import ThoughtLinks from "../components/ThoughtsLinks"

const CenterIndexContent = () => (
  <Global
    styles={css`
      #___gatsby {
        height: 100%;
      }
    `}
  />
)

interface BioLinkProps {
  to: string
}

const BioLink: React.FC<BioLinkProps> = props => (
  <a target="_blank" rel="noopener noreferrer" href={props.to}>
    {props.children}
  </a>
)

const IndexPage: React.FC = () => (
  <Layout>
    <CenterIndexContent />
    <SEO title="Home" />
    <div>
      <h1>Ivraj Seerha</h1>
      <h2>Hi. How's it been?</h2>
      <h3>
        I'm a 2019{" "}
        <BioLink to="https://ventureforamerica.org/">
          Venture for America
        </BioLink>{" "}
        Fellow.
        <br />I help with community at the{" "}
        <BioLink to="https://zeitgeist.fm/">
          Zeitgeist Broadcasting Collective
        </BioLink>
        .<br />
        I'm a Product Engineer at <BioLink to="https://airr.io">Airr</BioLink>.
      </h3>
      <ThoughtLinks />
      <SocialLinks />
    </div>
  </Layout>
)

export default IndexPage
