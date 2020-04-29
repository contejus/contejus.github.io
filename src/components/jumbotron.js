import React from "react";
import "../stylesheets/styles.scss";

class Jumbotron extends React.Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <section class="hero is-link">
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        Primary title
                    </h1>
                    <h2 class="subtitle">
                        Primary subtitle
                    </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Jumbotron