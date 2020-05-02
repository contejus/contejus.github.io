import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/navbar.js"
import Jumbotron from "../components/jumbotron.js"
import "../stylesheets/styles.scss"

const IndexPage = () => {
  return (
    <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tejus Mathew</title>
          <link rel="canonical" href="http://contejus.github.io" />
        </Helmet>
        <Navbar />
        <Jumbotron 
          background="use-art" 
          title="Tejus Mathew" 
          fullscreen="is-fullheight" 
          subtitle="ECE Senior at The University of Texas"
        />
    </div>
  )
}

export default IndexPage