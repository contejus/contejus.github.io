import React from "react"

// components
import Layout from "../components/layout.js"
import MainProject from "../components/mainProject.js"
import Card from "../components/card.js"

// images
import researchMatch from "../images/research-match-site.png"
import website from "../images/contejus-github-io.png"
import creditCard from "../images/credit-card.jpg"
import shirt from "../images/tshirt.jpg"
import car from "../images/cars.jpg"
import insurance from "../images/insurance.jpg"

let mainProjectData = [
  {
    title: "contejus.github.io",
    subtitle: "Updating this website from Bootstrap and jQuery to Bulma",
    text: 
      "When I first built my website, I was very inexperienced in web design/programming. I had never used React, and \
      my website had a lot of problems as a result. This project is aimed at slowly improving the code quality and \
      applying/learning new React techniques.",
    image: website,
    url: "https://contejus.github.io/",
    reverse: true
  },
  {
    title: "ResearchMatch",
    subtitle: "A tool for students to get matched to research projects",
    text: 
      "As part of my team's senior design project, I worked on updating a 5 year old website to be usable today. This \
      project was really informative on real-world practices versus best practices, and it was a great \
      learning experience to refactor spaghetti code.",
    image: researchMatch,
    url: "https://researchmatch.ece.utexas.edu/",
    reverse: false
  }
]

let cardData = [
  {
    image: creditCard,
    title: "Credit Card Fraud",
    content: "Using masked credit card credentials to identify fradulent \
    transactions using ML models.",
    url: "https://github.com/contejus/CreditCardFraud"
  },
  {
    image: shirt,
    title: "Fashion Review Analysis",
    content: "Predicting customer ratings and recommendations given \
    sentiment present in review text.",
    url: "https://github.com/contejus/FashionReviewAnalysis"
  },
  {
    image: car, 
    title: "Car MPG Prediction",
    content: "Using a car's weight, size, and engine type (ex. cylinder count) \
    to predict its fuel efficiency.",
    url: "https://github.com/contejus/CarMPGPrediction"
  },
  {
    image: insurance,
    title: "Insurance Call Success",
    content: "Predicting the success of insurance cold calls given parameters \
    about the person being called.",
    url: "https://github.com/contejus/InsuranceColdCallSuccess"
  }
]

class ProjectPage extends React.Component {
  render() {
    // convert data to mainproject objects
    var mainProjects = [];
    var cards = [];

    mainProjectData.forEach( card => {
      mainProjects.push(
        <MainProject 
          title={card.title}
          subtitle={card.subtitle}
          text={card.text}
          image={
            <figure className="image">
              <img className="has-ratio" src={card.image} />
            </figure>
          }
          url={card.url}
          reverse={card.reverse}
        />
    )})

    cardData.forEach( item => {
      cards.push(
        <Card
          image={item.image}
          title={item.title}
          content={item.content}
          url={item.url}
        />
    )})
    
    // return HTML
    return (
      <Layout>
          {mainProjects}
          <section className="section">
            <div className="container">
                <div className="columns">
                  <div className="column projects-column">
                    <h1 className="title">More Projects</h1>
                    <h3 className="subtitle">(Internship projects aren't included, <a href="mailto:tejusmathew@utexas.edu"
                    ><strong>email me</strong></a> to learn more)</h3>
                  </div>
                </div>
                <div className="columns">
                  {cards}
                </div>
            </div>
          </section>
      </Layout>
    )
  }
}

export default ProjectPage