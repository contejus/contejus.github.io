import React from "react"
import { StaticQuery, graphql } from "gatsby"
// components
import Layout from "../components/layout.js"
import Jumbotron from "../components/jumbotron.js"

// stylesheet
import "../stylesheets/league.scss"

class LeaguePage extends React.Component {
    render() {
        const profileUrl = "http://ddragon.leagueoflegends.com/cdn/10.11.1/img/profileicon/";
        const championUrl = "http://ddragon.leagueoflegends.com/cdn/10.11.1/img/champion/";

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
                            query LeagueData {
                                allLeagueMatch {
                                    edges {
                                        node {
                                            id
                                            champion
                                            kda
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
                            <React.Fragment>
                                <div className="container">
                                    <div className="columns wrap-info">
                                        <div className="column is-12 center-col">
                                            <figure className="image is-128x128">
                                                <img className="is-rounded" src={profileUrl + data.allSummonerData.edges[0].node.profileIconId + ".png"} />
                                            </figure>
                                        </div>
                                        <div className="column is-12 center-col">
                                            <h1 className="title">{data.allSummonerData.edges[0].node.name}</h1>
                                        </div>
                                    </div>
                                    <hr />
                                    <div class="tile is-ancestor">
                                        <div class="tile is-parent is-vertical">
                                            {data.allLeagueMatch.edges.map((matchNode) => {
                                                const match = matchNode.node;
                                                return (
                                                    // TODO: Add component here
                                                    <article className={`leagueTile tile is-child is-12 ${match.win? ' has-background-success' : 'has-background-danger'}`}>
                                                        <div class="leagueContent content">
                                                            <div class="leagueContent">
                                                                <p class="leagueTitle">{`${match.win? 'Win' : 'Loss'}`}</p>
                                                            </div>
                                                            <div class="pb2pt2 flexCC">
                                                                <figure className="champImg image is-96x96">
                                                                    <img className="is-rounded" src={championUrl + match.champion + ".png"} />
                                                                </figure>
                                                                <p class="leagueTitle">{match.champion}</p>
                                                            </div>
                                                            <div class="pb2pt2">
                                                                <p class="leagueTitle">K/D/A</p>
                                                                <p class="leagueSubtitle">{match.kda}</p>
                                                            </div>
                                                            <div class="pb2pt2">
                                                                <p class="leagueTitle">Map</p>
                                                                <p class="leagueSubtitle">{match.map}</p>
                                                            </div>
                                                            <div class="pb2pt2">
                                                                <p class="leagueTitle">Game Type</p>
                                                                <p class="leagueSubtitle">{match.gameType}</p>
                                                            </div>
                                                            <div class="pb2pt2">
                                                                <p class="leagueTitle">Game Length</p>
                                                                <p class="leagueSubtitle">{String(Math.floor(match.length / 60)) + ":" + String('0' + Math.floor(match.length % 60)).slice(-2)}</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }
                />
            </section>
        </Layout>
        )
    }
}

export default LeaguePage