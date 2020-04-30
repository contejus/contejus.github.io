import React from "react"
import Navbar from "../components/navbar.js"
import Jumbotron from "../components/jumbotron.js"
import "../stylesheets/styles.scss"

const AboutPage = () => {
  return (
    <div>
        <Navbar />
        <Jumbotron title="Tejus Mathew" fullscreen="is-fullheight" subtitle="ECE senior at The University of Texas">
        </Jumbotron>
    </div>
  )
}

export default AboutPage