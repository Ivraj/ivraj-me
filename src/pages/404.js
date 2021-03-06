import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const errorPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist. Darn.{" "}
      <Link to="/">Let's head home.</Link>
    </p>
  </Layout>
)

export default errorPage
