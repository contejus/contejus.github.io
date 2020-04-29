import React from "react"
import Navbar from "../components/navbar.js"
import Jumbotron from "../components/jumbotron.js"

const IndexPage = () => {
  return (
    <div>
        <Navbar>
        </Navbar>
        <Jumbotron title="Welcome" subtitle="Use the navigation bar to view other pages, or check out some things I'm working on below">
        </Jumbotron>
    </div>
  )
}

export default IndexPage