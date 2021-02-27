/** @jsx jsx */
import React from "react"
import { jsx, css } from "@emotion/core"
import resume from "../assets/resume.pdf"

import { ListHeader, ListLink, ListWrapper } from "./List"

const SocialLinks: React.FC = () => (
  <React.Fragment>
    <ListHeader text="Some links if you're here to vet me:" />
    <ListWrapper>
      <ListLink
        to="https://www.linkedin.com/in/ivraj/"
        text="LinkedIn"
        newTab
      />
      <ListLink to="https://github.com/ivraj" text="Github" newTab />
      <ListLink to={resume} text="Resume" newTab />
    </ListWrapper>
  </React.Fragment>
)

export default SocialLinks
