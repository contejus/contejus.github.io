import React from "react";
import "../stylesheets/card.scss";

class Card extends React.Component {
    render() {
        return (
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={this.props.image} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{this.props.title}</p>
                            </div>
                        </div>
                        <div className="content">
                            {this.props.content}
                            <br />
                            <br />
                            <a className="button is-primary" href={this.props.url}>View on GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card