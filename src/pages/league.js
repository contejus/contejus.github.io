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
                title="League Stats" 
                fullscreen="" 
                subtitle="Check out League of Legends matches I've played"
            />
            <section className="section">
                <StaticQuery
                    query= {
                        graphql`
                            query {
                                allLeagueMatch {
                                    edges {
                                        node {
                                            id
                                            champion
                                            map
                                            gameType
                                            win
                                            length
                                            lane
                                        }
                                    }
                                }
                                allSummonerData {
                                    edges {
                                        node {
                                            name
                                            profileIconId
                                        }
                                    }
                                }
                            }  
                        `
                    }
                    render= {
                        data => (
                            <div>
                                {data.allLeagueMatch.edges.map((matchNode) => {
                                    const match = matchNode.node;
                                    return (
                                        // TODO: Add component here
                                        <div>
                                            <a>{match.id}</a>
                                            <a>{match.champion}</a>
                                            <a>{match.map}</a>
                                            <a>{match.gameType}</a>
                                            <a>{String(match.win)}</a>
                                            <a>{match.length}</a>
                                            <a>{match.lane}</a>
                                        </div>
                                    )
                                })}
                                <a>{data.allSummonerData.edges[0].node.name}</a>
                                <a>{data.allSummonerData.edges[0].node.profileIconId}</a>
                            </div>
                        )
                    }
                />
            </section>
        </Layout>
        )
    }
}

export default LeaguePage