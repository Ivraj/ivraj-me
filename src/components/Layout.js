/** @jsx jsx */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"
import Header from "./Header"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div
      css={{
        height: "100%",
        margin: `0 auto`,
        maxWidth: 860,
        padding: `0 1.0875rem 1.45rem`,
        display: "flex",
        flexDirection: "column",
        "@media(min-width: 420px)": {
          justifyContent: "center",
        },
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Header siteTitle={data.site.siteMetadata.title || "ivraj.me"} />
          <main
            css={{
              flex: "1 0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            {children}
          </main>
          <Footer css={{ flexShrink: 0 }} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
