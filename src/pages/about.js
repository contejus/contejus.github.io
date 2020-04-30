import React from "react"

import "../stylesheets/404.scss"
import github from "../images/github-logo.png"

const AboutPage = () => {
  return (
      <section class="hero is-404 is-fullheight is-black">
          <div class="hero-body">
              <div class="container not-found-msg">
                <h1 class="title">
                    Contact Me
                </h1>
                <div class="columns">
                    <div class="column is-3">
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tgmathew" target="_blank">
                            <svg class="bi bi-briefcase" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z" clip-rule="evenodd"/>
                            </svg>
                        </a>
                    </div>
                    <div class="column is-3">
                        <a rel="noopener noreferrer" href="https://github.com/contejus" target="_blank">
                            <img alt="View my GitHub" src={github} style={{width:"3rem",height:"3rem", color: "white"}} />
                        </a>
                    </div>
                    <div class="column is-3">
                    <a href="mailto:tejusmathew@utexas.edu">
                        <svg class="bi bi-chat-fill" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 008 15z"/>
                        </svg>
                    </a>
                    </div>
                    <div class="column is-3">
                    <a rel="noopener noreferrer" href="https://drive.google.com/file/d/1UF3lEhhazeLtPX7F0nHyFXuvd_WYmOqk/view?usp=sharing" target="_blank">
                        <svg class="bi bi-file-earmark" width="3em" height="3em" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 1h5v1H4a1 1 0 00-1 1v10a1 1 0 001 1h8a1 1 0 001-1V6h1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V3a2 2 0 012-2z"/>
                            <path d="M9 4.5V1l5 5h-3.5A1.5 1.5 0 019 4.5z"/>
                        </svg>
                    </a>
                    </div>
                </div>
                <a className="button is-light is-outline" href="/" >Go home</a>
              </div>
          </div>
        </section>
  )
}

export default AboutPage