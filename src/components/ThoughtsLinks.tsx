/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

import { ListHeader, ListLink, ListWrapper } from "./List"

const ThoughtLinks: React.FC = () => (
  <React.Fragment>
    <ListHeader text="Some links to what I've been thinking/feeling:" />
    <ListWrapper>
      <ListLink
        to="https://profile.joinchanl.me/Zo6ljm4z3bdrKRcvFj9lvDU0WrI3"
        text="Chanl &#9723;&#65039;
        "
        newTab
      />
      <ListLink
        to="https://www.are.na/ivraj-seerha"
        text="Are.na &#10024;
"
        newTab
      />
      <ListLink
        to="tf"
        text="Thoughts and Feelings &#128173; + &#10084;&#65039;"
        newTab={false}
      />
    </ListWrapper>
  </React.Fragment>
)

export default ThoughtLinks
