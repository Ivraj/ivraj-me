/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import { ListHeader, ListWrapper } from "./List"

const timeLinks = [
  "https://www.youtube.com/watch?v=Kdq_eAqQor0&ab_channel=BADBADNOTGOOD-Topic",
  "https://www.youtube.com/watch?v=nfdEdE96En0&ab_channel=RoyKelly",
  "https://www.youtube.com/watch?v=YbgnlkJPga4&ab_channel=Kurzgesagt%E2%80%93InaNutshell",
  "https://www.youtube.com/watch?v=h6fcK_fRYaI&ab_channel=Kurzgesagt%E2%80%93InaNutshell",
  "https://www.youtube.com/watch?v=MAScJvxCy2Y&ab_channel=TheGreatCoursesSelects",
]

interface BioLinkProps {
  to: string
}

const BioLink: React.FC<BioLinkProps> = props => (
  <a target="_blank" rel="noopener noreferrer" href={props.to}>
    {props.children}
  </a>
)

const PersonalDescriptors = props => (
  <React.Fragment>
    <h3 css={{ marginBottom: "1rem" }}>
      Some statements that are{" "}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={timeLinks[Math.floor(Math.random() * timeLinks.length)]}
      >
        presently
      </a>{" "}
      true:
    </h3>
    <ListWrapper>
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
    </ListWrapper>
  </React.Fragment>
)

export default PersonalDescriptors
