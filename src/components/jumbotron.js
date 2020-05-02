import React from "react";
import "../stylesheets/jumbotron.scss";

class Jumbotron extends React.Component {
    render() {
        return (
            <section className={`hero is-jumbotron ${this.props.fullscreen} is-black ${this.props.background}`}>
                <div className="hero-body">
                    <div className="container">
                        <div>
                            <h1 className="title">
                                {this.props.title}
                            </h1>
                            <h2 className="subtitle">
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