import React from "react";
import "../stylesheets/jumbotron.scss";

class Jumbotron extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <section class="hero is-jumbotron is-black">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">
                            {this.props.title}
                        </h1>
                        <h2 class="subtitle">
                            {this.props.subtitle}
                        </h2>
                    </div>
                </div>
            </section>
        )
    }
}

export default Jumbotron