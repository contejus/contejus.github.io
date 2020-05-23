import React from "react"
import { Helmet } from "react-helmet"

import "../stylesheets/404.scss"

const PageNotFound = () => {
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tejus Mathew</title>
          <link rel="canonical" href="http://contejus.github.io" />
        </Helmet>
      <section className="hero is-404 is-fullheight is-black">
          <div className="hero-body">
              <div className="container not-found-msg">
                      <h1 className="title">
                          Page not found
                      </h1>
                      <h2 className="subtitle">
                          That page doesn't exist!
                      </h2>
                      <a className="button is-light is-outline" href="/" >Go home</a>
              </div>
          </div>
        </section>
    </div>
  )
}

export default PageNotFound