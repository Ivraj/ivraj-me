/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import resume from "../assets/resume.pdf"

interface SocialLinkProps {
  to: string
  text: string
}

const SocialLink: React.FC<SocialLinkProps> = props => (
  <h3 css={{ marginRight: 16 }}>
    <a target="_blank" rel="noopener noreferrer" href={props.to}>
      {props.text}
    </a>
  </h3>
)

const SocialLinks: React.FC = () => (
  <div
    css={{
      display: "flex",
      flexDirection: "row",
      "@media(max-width: 420px)": {
        flexDirection: "column",
        h3: {
          marginTop: ".5rem",
          marginBottom: ".5rem",
        },
      },
    }}
  >
    <SocialLink to="https://www.linkedin.com/in/ivraj/" text="LinkedIn" />
    <SocialLink to="https://github.com/ivraj" text="Github" />
    <SocialLink to={resume} text="Resume" />
    <SocialLink
      to="https://profile.joinchanl.me/Zo6ljm4z3bdrKRcvFj9lvDU0WrI3"
      text="Chanl"
    />
  </div>
)

export default SocialLinks
