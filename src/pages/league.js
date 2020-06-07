import React from "react"
import { StaticQuery, graphql } from "gatsby"
// components
import Layout from "../components/layout.js"
import Jumbotron from "../components/jumbotron.js"

// stylesheet
import "../stylesheets/league.scss"

class LeaguePage extends React.Component {
    render() {
        return (
        <Layout>
            <Jumbotron 
                title="About Me" 
                fullscreen="" 
                subtitle=""
            />
            <section className="section">
            <StaticQuery
                query={graphql`
                    query {
                        allLeagueMatch {
                            edges {
                                node {
                                    id
                                    champion
                                }
                            }
                        }
                    }  
                `}
                render={data => (
                    data.allLeagueMatch.edges.map((matchNode) => {
                        const match = matchNode.node;
                        return (
                            <div>
                                <a>{match.id}</a>
                                <br></br>
                                <a>{match.champion}</a>
                            </div>
                        )
                    })
                )
                }
            />
            </section>
            <hr />
            <section className="section">
            
            </section>
        </Layout>
        )
    }
}

export default LeaguePage