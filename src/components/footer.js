import React from "react";
import "../stylesheets/footer.scss";

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered footer-text container">
                    <p>
                        Made by Tejus Mathew
                    </p>
                    <p className="footer-text">
                        Built with
                        <a className="footer-image" href="https://www.gatsbyjs.org/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 28 28" focusable="false">
                                <title>
                                    Gatsby
                                </title>
                                <circle cx="14" cy="14" r="14" fill="#639"/>
                                <path fill="#fff" d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"/>
                            </svg>
                        </a> Gatsby and
                        <a className="footer-image" href="https://bulma.io/">
                            <svg width="1.5em" height="1.5em" viewBox="0 0 220 320" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g fill="#00D1B2">
                                        <polygon id="Path" points="0 220 20 80 100 0 200 100 140 160 220 240 100 320"></polygon>
                                    </g>
                                </g>
                            </svg>
                        </a> Bulma
                    </p>
                    <p className="footer-text">
                        Hosted on 
                        <a className="footer-image" href="https://pages.github.com/">
                            <svg role="img" width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub Pages</title>
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                            </svg>
                        </a>
                        GitHub Pages
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer