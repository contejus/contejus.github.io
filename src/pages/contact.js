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
                            <svg className="bi bi-chat-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <title>Email</title>
                                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"/>
                            </svg>
                            <h3 className="subtitle">
                                Email
                            </h3>
                        </a>
                        </div>
                        <div className="column is-3">
                        <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1UF3lEhhazeLtPX7F0nHyFXuvd_WYmOqk/view?usp=sharing" target="_blank">
                            <svg className="bi bi-file-earmark" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <title>Resume</title>
                                <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z"/>
                                <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z"/>
                            </svg>
                            <h3 className="subtitle">
                                Resume
                            </h3>
                        </a>
                        </div>
                    </div>
                    <a className="button is-light is-outline" href="/" >Go home</a>
                </div>
            </div>
            </section>
        </div>
  )
}

export default ContactPage