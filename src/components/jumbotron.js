import React from "react";
import "../stylesheets/jumbotron.scss";

class Jumbotron extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <section className={`hero is-jumbotron ${this.props.fullscreen} is-black ${this.props.background}`}>
                <div class="hero-body">
                    <div class="container">
                        <div>
                            <h1 class="title">
                                {this.props.title}
                            </h1>
                            <h2 class="subtitle">
                                {this.props.subtitle}
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Jumbotron