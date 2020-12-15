/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import SocialLinks from "../components/SocialLinks"

interface SkillProps {
  text: string
}

const Skill: React.FC<SkillProps> = props => (
  <h6 css={{ marginTop: 0, marginBottom: "0.5rem" }}>{props.text}</h6>
)

const HelpPage: React.FC = () => (
  <Layout>
    <SEO title="Tutoring" />
    <div>
      <h1>Ivraj Seerha</h1>
      <h2>Need help with CS coursework or web development?</h2>
      <h3>I'm now available for tutoring, coaching, and/or consulting.</h3>
      <h3>
        I can help with most CS coursework on intro to intermediate topics. I
        can also offer debugging and consulting help with most JavaScript or
        Python web development projects.
      </h3>
      <h4 css={{ marginBottom: "1rem" }}>Expertise</h4>
      <Skill text="JavaScript - 4 years - Intermediate to Advanced" />
      <Skill text="Python - 5 years - Intermediate to Advanced" />
      <Skill text="React - 3 years - Intermediate" />
      <Skill text="Node (Express) - 3 years - Intermediate" />
      <Skill text="Django - 3 years - Intermediate" />
      <Skill
        text="Other Technologies: TypeScript, Postgres, MongoDB, AWS, Firebase,
        Heroku, Docker"
      />
      <h4>
        You can read more about my background at the links below. If you'd like
        to book a time, check out my Chanl profile below.
      </h4>
      <SocialLinks />
    </div>
  </Layout>
)

export default HelpPage
