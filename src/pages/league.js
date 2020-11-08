import React from "react"
import { StaticQuery, graphql } from "gatsby"
// components
import Layout from "../components/layout.js"
import Jumbotron from "../components/jumbotron.js"

// stylesheet
import "../stylesheets/league.scss"

import gold from "../images/GOLD.png"
import bronze from "../images/BRONZE.png"
import silver from "../images/SILVER.png"

class LeaguePage extends React.Component {
    render() {
        const profileUrl = "https://ddragon.leagueoflegends.com/cdn/10.22.1/img/profileicon/";
        const championUrl = "https://ddragon.leagueoflegends.com/cdn/10.22.1/img/champion/";

        return (
        <Layout>
            <Jumbotron 
                title="League of Legends Stats" 
                fullscreen="" 
                subtitle="Using the Riot API to access my match history"
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
                                            ranked {
                                                queueType
                                                tier
                                                wins
                                                losses
                                                rank
                                              }
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
                                        <div className="column is-4 center-col">
                                            <div className="columns wrap-info">
                                                <div className="column is-12 center-col">
                                                    <figure className="image is-128x128">
                                                        <img className="is-rounded" src={profileUrl + data.allSummonerData.edges[0].node.profileIconId + ".png"} />
                                                    </figure>
                                                </div>
                                                <div className="column is-12 center-col">
                                                    <h1 className="title"><a href="https://na.op.gg/summoner/userName=contejus">{data.allSummonerData.edges[0].node.name}</a></h1>  
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-4 center-col">
                                            <div className="columns wrap-info">
                                                <div className="column is-12 center-col" >
                                                    <strong>{data.allSummonerData.edges[0].node.ranked[0].queueType.replace(/_/g, " ")}</strong>
                                                </div>
                                                <div className="column is-12 center-col" >
                                                    <figure className="image is-96x96">
                                                        <img className="is-rounded" src={data.allSummonerData.edges[0].node.ranked[0].tier == "GOLD" ? gold: data.allSummonerData.edges[0].node.ranked[0].tier == "SILVER" ? silver: bronze} />
                                                    </figure>
                                                </div>
                                                <div className="column is-12 center-col" >
                                                    <h1 className="subtitle">{data.allSummonerData.edges[0].node.ranked[1].tier + " " + data.allSummonerData.edges[0].node.ranked[0].rank}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="column is-4 center-col">
                                            <div className="columns wrap-info">
                                                <div className="column is-12 center-col" >
                                                    <strong>{data.allSummonerData.edges[0].node.ranked[1].queueType.replace(/_/g, " ")}</strong>
                                                </div>
                                                <div className="column is-12 center-col" >
                                                    <figure className="image is-96x96">
                                                        <img className="is-rounded" src={data.allSummonerData.edges[0].node.ranked[1].tier == "GOLD" ? gold: data.allSummonerData.edges[0].node.ranked[1].tier == "SILVER" ? silver: bronze} />
                                                    </figure>
                                                </div>
                                                <div className="column is-12 center-col" >
                                                    <h1 className="subtitle">{data.allSummonerData.edges[0].node.ranked[1].tier + " " + data.allSummonerData.edges[0].node.ranked[1].rank}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="tile is-ancestor">
                                        <div className="tile is-parent is-vertical">
                                            {data.allLeagueMatch.edges.map((matchNode) => {
                                                const match = matchNode.node;
                                                return (
                                                    <article className={`allPadding tile is-child ${match.win? ' has-background-success' : 'has-background-danger'}`}>
                                                        <div className="content matchStat columns">
                                                            <div className="column is-4 is-full-mobile">
                                                                <div className="columns is-mobile">
                                                                    <div className="column is-6 is-flex centerFlex">
                                                                        <p className="winLoss">{`${match.win? 'Win' : 'Loss'}`}</p>
                                                                    </div>
                                                                    <div className="column is-6 is-flex centerFlex wrap flexCol">
                                                                        <figure className="image is-256x256">
                                                                            <img className="is-rounded" src={championUrl + match.champion + ".png"} />
                                                                        </figure>
                                                                        <p className="leagueTitle">{match.champion}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column is-4 is-full-mobile">
                                                                <div className="columns is-mobile">
                                                                    <div className="column is-6">
                                                                        <p className="leagueTitle">K/D/A</p>
                                                                        <p className="leagueSubtitle">{match.kda}</p>
                                                                    </div>
                                                                    <div className="column is-6">
                                                                        <p className="leagueTitle">Map</p>
                                                                        <p className="leagueSubtitle">{match.map}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column is-4 is-full-mobile">
                                                                <div className="columns is-mobile">
                                                                    <div className="column is-6">
                                                                        <p className="leagueTitle">Game Type</p>
                                                                        <p className="leagueSubtitle">{match.gameType}</p>
                                                                    </div>
                                                                    <div className="column is-6">
                                                                        <p className="leagueTitle">Game Length</p>
                                                                        <p className="leagueSubtitle">{String(Math.floor(match.length / 60)) + ":" + String('0' + Math.floor(match.length % 60)).slice(-2)}</p>
                                                                    </div>
                                                                </div>
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