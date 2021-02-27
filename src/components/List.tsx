/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"

interface ListHeaderProps {
  text: string
}

export const ListHeader: React.FC<ListHeaderProps> = props => (
  <h3 css={{ marginBottom: "1rem" }}>{props.text}</h3>
)

interface ListLinkProps {
  to: string
  text: string
  newTab: boolean
}

export const ListLink: React.FC<ListLinkProps> = props => (
  <h3 css={{ marginRight: 24 }}>
    <a
      target={props.newTab && "_blank"}
      rel={props.newTab && "noopener noreferrer"}
      href={props.to}
    >
      {props.text}
    </a>
  </h3>
)

export const ListWrapper: React.FC = props => (
  <div
    css={{
      display: "flex",
      flexDirection: "row",
      h3: {
        marginTop: ".5rem",
        marginBottom: ".5rem",
      },
      "@media(max-width: 420px)": {
        flexDirection: "column",
        h3: {
          marginTop: ".25rem",
          marginBottom: ".25rem",
        },
      },
    }}
  >
    {props.children}
  </div>
)
