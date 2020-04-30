import React from "react";
import "../stylesheets/card.scss";

class Card extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div className="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={this.props.image} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content">
                                <p class="title is-4">{this.props.title}</p>
                            </div>
                        </div>
                        <div class="content">
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