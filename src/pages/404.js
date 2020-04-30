import React from "react"
import Layout from "../components/layout.js"
import "../stylesheets/404.scss"

const PageNotFound = () => {
  return (
    
      <section class="hero is-404 is-fullheight is-black">
          <div class="hero-body">
              <div class="container not-found-msg">
                      <h1 class="title">
                          Page not found
                      </h1>
                      <h2 class="subtitle">
                          That page doesn't exist!
                      </h2>
                      <a className="button is-light is-outline" href="/" >Go home</a>
              </div>
          </div>
        </section>

  )
}

export default PageNotFound