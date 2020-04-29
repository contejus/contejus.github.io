import React from "react";
import "../stylesheets/navbar.scss";

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            isOpen: true
        }
    }

    render() {
        return (
            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item nav-home" href="/">
                        <svg className="bi bi-house-door" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5H9.5a.5.5 0 01-.5-.5v-4H7v4a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v4h3.5V7.707L8 2.207l-5.5 5.5z" clip-rule="evenodd"/>
                            <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z" clip-rule="evenodd"/>
                        </svg>
                    </a>

                    <a role="button" className={`navbar-burger ${this.state.isOpen? ' is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navMenu" 
                    onClick={() => this.setState({ isOpen: !this.state.isOpen })} >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navMenu" className={`navbar-menu ${this.state.isOpen? ' is-active nav-dropdown' : ''}`}>
                    <div className="navbar-start">
                    <a className="navbar-item">
                        Coursework
                    </a>

                    <a className="navbar-item">
                        Projects
                    </a>

                    <a className="navbar-item">
                        Visitor Map
                    </a>
                    
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About Me
                        </a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-white is-outlined" href="https://github.com/contejus">
                                GitHub
                            </a>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar