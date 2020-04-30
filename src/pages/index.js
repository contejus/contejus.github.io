import React from "react"
import Navbar from "../components/navbar.js"
import Jumbotron from "../components/jumbotron.js"
import "../stylesheets/styles.scss"

const IndexPage = () => {
  return (
    <div>
        <Navbar />
        <Jumbotron 
          background="use-art" 
          title="Tejus Mathew" 
          fullscreen="is-fullheight" 
          subtitle="ECE senior at The University of Texas"
        />
    </div>
  )
}

export default IndexPage