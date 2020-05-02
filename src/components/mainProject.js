import React from "react";
import "../stylesheets/mainProject.scss"

class MainProject extends React.Component {
    render() {
        let left = 
            <div className="column">
                <h1 className="title">
                    {this.props.title}
                </h1>
                <h3 className="subtitle">
                    {this.props.subtitle}
                </h3>
                <p className="subtitle">
                    {this.props.text}
                </p>
                <a className="button is-primary" href={this.props.url}>Go to project</a>
            </div>
        let right = 
            <div className="column">
                {this.props.image}
            </div>

        if (this.props.reverse === true){
            left = 
                <div className="column">
                    {this.props.image}
                </div>
            right = 
                <div className="column">
                    <h1 className="title card-color">
                        {this.props.title}    
                    </h1>
                    <h3 className="subtitle card-color">
                        {this.props.subtitle}
                    </h3>
                    <p className="subtitle card-color">
                        {this.props.text}
                    </p>
                    <a className="button is-white" href={this.props.url}>Go to project</a>
                </div>
        }
        return (
            <section className={`section ${this.props.reverse? ` card-section` : `card-section-reverse`} `}>
                <div className="container">
                    <div className="columns">
                        {left}
                        {right}
                    </div>
                </div>
            </section>
        )
    }
}

export default MainProject