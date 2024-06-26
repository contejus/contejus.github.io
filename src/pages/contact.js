import React from "react"
import { Helmet } from "react-helmet"
import "../stylesheets/404.scss"

const ContactPage = () => {
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
                        Contact Me
                    </h1>
                    <div className="columns">
                        <div className="column is-3">
                            <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tgmathew" target="_blank">
                                <svg width="3em" height="3em" fill="white" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>LinkedIn</title>
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <h3 className="subtitle">
                                    LinkedIn
                                </h3>
                            </a>
                        </div>
                        <div className="column is-3">
                            <a rel="noopener noreferrer" href="https://github.com/contejus" target="_blank">
                                <svg role="img" width="3em" height="3em" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <h3 className="subtitle">
                                    GitHub
                                </h3>
                            </a>
                        </div>
                        <div className="column is-3">
                        <a href="mailto:tejusmathew@utexas.edu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="white" >
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <title>Email</title>
                                <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                            </svg>
                            <h3 className="subtitle">
                                Email
                            </h3>
                        </a>
                        </div>
                        <div className="column is-3">
                        <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1e2abGpyPNVG9GDh3t72ogOdMKpt17sNZ/view" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24" fill="white" >
                                <path d="M0 0h24v24H0V0z" fill="none"/>
                                <title>Resume</title>
                                <path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                            </svg>
                            <h3 className="subtitle">
                                Resume
                            </h3>
                        </a>
                        </div>
                    </div>
                    <a className="button is-light is-outline" href="/" >
                        <svg className="bi bi-house-door home-button" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5v-4H7v4a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                        </svg>
                        Go home
                    </a>
                </div>
            </div>
            </section>
        </div>
  )
}

export default ContactPage
