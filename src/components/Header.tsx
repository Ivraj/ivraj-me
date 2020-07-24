/** @jsx jsx */
import { Link } from "gatsby"
import { jsx } from "@emotion/core"
import React from "react"

const NAVLINKS: Array<NavLinkProps> = [
  { to: "work", text: "work" },
  { to: "bookshelf", text: "bookshelf" },
  { to: "thoughts", text: "thoughts" },
  { to: "about", text: "about" },
]
const HomeLink: React.FC = () => <Link to="/">home</Link>

interface NavLinkProps {
  to: string
  text: string
}

const NavLink: React.FC<NavLinkProps> = props => (
  <Link css={{ marginRight: 12 }} to={props.to}>
    {props.text}
  </Link>
)

interface NavLinksProps {
  navLinks: Array<NavLinkProps>
}

const NavLinks: React.FC<NavLinksProps> = props => (
  <div>
    {props.navLinks.map(navLink => (
      <NavLink to={navLink.to} text={navLink.text} key={navLink.to} />
    ))}
  </div>
)

const Header: React.FC = () => (
  <header
    css={{
      maxWidth: 860,
      margin: "12px auto 12px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    }}
  >
    {/* <HomeLink />
    <NavLinks navLinks={NAVLINKS} /> */}
  </header>
)

Header.defaultProps = {
  siteTitle: `ivraj.me`,
}

export default Header
