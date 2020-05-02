import React from "react"

// components
import Layout from "../components/layout.js"
import Jumbotron from "../components/jumbotron.js"

// assets
import profilePic from "../images/profile-pic.png"
// stylesheet
import "../stylesheets/about.scss"

class AboutPage extends React.Component {
  constructor(){
      super();
      this.state = {
          data: null,
          done: false
      }
  }

  componentDidMount(){
      fetch("https://tm-location.herokuapp.com/anime")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({
            data: result["anime"],
            done: true
        });
        console.log(result);
      })
  }

  render() {
    var isDone = this.state.done;
    var data = this.state.data;
    var section = <button class="button is-info is-large is-loading" />;

    if(isDone) {
        section = 
        <div>
            <h1 class="title">What I'm watching</h1>
            <p class="subtitle">{data[0]["title"]}</p>
            <img src={data[0]["image_url"]} width="160" height="220"/>
            <a class="button" href={data[0]["url"]}>Check it out</a>;
        </div>
    }

    return (
      <Layout>
        <Jumbotron 
            title="About Me" 
            fullscreen="" 
            subtitle=""
        />
        <section class="section">
            <div class="container">
                <div className="columns wrap-info">
                    <div class="column is-12 center-col">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src={profilePic} />
                        </figure>
                    </div>
                    <div class="column is-12 center-col">
                        <h1 class="title">I'm Tejus</h1>
                    </div>
                    <div class="column is-12 center-col">
                        <h2 class="subtitle">
                            A soon-to-be <strong>software developer</strong>, focusing on learning as much as I can. <br/>
                            I'm currently a graduating senior at The University of Texas at Austin, <br/>
                            majoring in <strong>Electrical and Computer Engineering</strong>.
                        </h2>
                    </div>
                </div>
            </div>
        </section>
        <hr />
        <section class="section">
            <div class="container">
                <div class="column is-12 tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-dark">
                            <div class="content">
                                <p class="title">Technologies I've worked with:</p>
                                <dl class="subtitle">
                                    <dt>Frontend:</dt>
                                    <dd>Gatsby, React, Bootstrap, JavaScript, HTML, CSS</dd>
                                </dl>
                                <dl class="subtitle">
                                    <dt>Backend:</dt>
                                    <dd>Node.js, Python (Flask + Django), Java</dd>
                                </dl>
                                <dl class="subtitle">
                                    <dt>Deployment (still new):</dt>
                                    <dd>Docker, Kubernetes, Helm</dd>
                                </dl>
                                <div className="tech-images">
                                    <svg role="img" width="6em" height="6em" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24">
                                        <title>Django</title>
                                        <path d="M11.146 0h3.924v18.165c-2.013.382-3.491.535-5.096.535-4.791 0-7.288-2.166-7.288-6.32 0-4.001 2.65-6.6 6.753-6.6.637 0 1.121.051 1.707.204V0zm0 9.143a3.894 3.894 0 0 0-1.325-.204c-1.988 0-3.134 1.223-3.134 3.364 0 2.09 1.096 3.236 3.109 3.236.433 0 .79-.025 1.35-.102V9.142zM21.314 6.06v9.097c0 3.134-.229 4.638-.917 5.937-.637 1.249-1.478 2.039-3.211 2.905l-3.644-1.733c1.733-.815 2.574-1.529 3.109-2.625.561-1.121.739-2.421.739-5.835V6.059h3.924zM17.39.021h3.924v4.026H17.39V.021z"/>
                                    </svg>
                                    <svg role="img" width="6em" height="6em" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>React</title>
                                        <path d="M12 9.861A2.139 2.139 0 1 0 12 14.139 2.139 2.139 0 1 0 12 9.861zM6.008 16.255l-.472-.12C2.018 15.246 0 13.737 0 11.996s2.018-3.25 5.536-4.139l.472-.119.133.468a23.53 23.53 0 0 0 1.363 3.578l.101.213-.101.213a23.307 23.307 0 0 0-1.363 3.578l-.133.467zM5.317 8.95c-2.674.751-4.315 1.9-4.315 3.046 0 1.145 1.641 2.294 4.315 3.046a24.95 24.95 0 0 1 1.182-3.046A24.752 24.752 0 0 1 5.317 8.95zM17.992 16.255l-.133-.469a23.357 23.357 0 0 0-1.364-3.577l-.101-.213.101-.213a23.42 23.42 0 0 0 1.364-3.578l.133-.468.473.119c3.517.889 5.535 2.398 5.535 4.14s-2.018 3.25-5.535 4.139l-.473.12zm-.491-4.259c.48 1.039.877 2.06 1.182 3.046 2.675-.752 4.315-1.901 4.315-3.046 0-1.146-1.641-2.294-4.315-3.046a24.788 24.788 0 0 1-1.182 3.046zM5.31 8.945l-.133-.467C4.188 4.992 4.488 2.494 6 1.622c1.483-.856 3.864.155 6.359 2.716l.34.349-.34.349a23.552 23.552 0 0 0-2.422 2.967l-.135.193-.235.02a23.657 23.657 0 0 0-3.785.61l-.472.119zm1.896-6.63c-.268 0-.505.058-.705.173-.994.573-1.17 2.565-.485 5.253a25.122 25.122 0 0 1 3.233-.501 24.847 24.847 0 0 1 2.052-2.544c-1.56-1.519-3.037-2.381-4.095-2.381zM16.795 22.677c-.001 0-.001 0 0 0-1.425 0-3.255-1.073-5.154-3.023l-.34-.349.34-.349a23.53 23.53 0 0 0 2.421-2.968l.135-.193.234-.02a23.63 23.63 0 0 0 3.787-.609l.472-.119.134.468c.987 3.484.688 5.983-.824 6.854a2.38 2.38 0 0 1-1.205.308zm-4.096-3.381c1.56 1.519 3.037 2.381 4.095 2.381h.001c.267 0 .505-.058.704-.173.994-.573 1.171-2.566.485-5.254a25.02 25.02 0 0 1-3.234.501 24.674 24.674 0 0 1-2.051 2.545zM18.69 8.945l-.472-.119a23.479 23.479 0 0 0-3.787-.61l-.234-.02-.135-.193a23.414 23.414 0 0 0-2.421-2.967l-.34-.349.34-.349C14.135 1.778 16.515.767 18 1.622c1.512.872 1.812 3.37.824 6.855l-.134.468zM14.75 7.24c1.142.104 2.227.273 3.234.501.686-2.688.509-4.68-.485-5.253-.988-.571-2.845.304-4.8 2.208A24.849 24.849 0 0 1 14.75 7.24zM7.206 22.677A2.38 2.38 0 0 1 6 22.369c-1.512-.871-1.812-3.369-.823-6.854l.132-.468.472.119c1.155.291 2.429.496 3.785.609l.235.02.134.193a23.596 23.596 0 0 0 2.422 2.968l.34.349-.34.349c-1.898 1.95-3.728 3.023-5.151 3.023zm-1.19-6.427c-.686 2.688-.509 4.681.485 5.254.987.563 2.843-.305 4.8-2.208a24.998 24.998 0 0 1-2.052-2.545 24.976 24.976 0 0 1-3.233-.501zM12 16.878c-.823 0-1.669-.036-2.516-.106l-.235-.02-.135-.193a30.388 30.388 0 0 1-1.35-2.122 30.354 30.354 0 0 1-1.166-2.228l-.1-.213.1-.213a30.3 30.3 0 0 1 1.166-2.228c.414-.716.869-1.43 1.35-2.122l.135-.193.235-.02a29.785 29.785 0 0 1 5.033 0l.234.02.134.193a30.006 30.006 0 0 1 2.517 4.35l.101.213-.101.213a29.6 29.6 0 0 1-2.517 4.35l-.134.193-.234.02c-.847.07-1.694.106-2.517.106zm-2.197-1.084c1.48.111 2.914.111 4.395 0a29.006 29.006 0 0 0 2.196-3.798 28.585 28.585 0 0 0-2.197-3.798 29.031 29.031 0 0 0-4.394 0 28.477 28.477 0 0 0-2.197 3.798 29.114 29.114 0 0 0 2.197 3.798z"/>
                                    </svg>
                                    <svg role="img" width="6em" height="6em" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Node.js</title>
                                        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                                    </svg>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="tile is-vertical is-8">
                        <div class="tile">
                            <div class="tile is-parent">
                                <article class="tile is-child notification is-primary">
                                    <p class="title">Coming soon...</p>
                                    <p class="subtitle">With an image</p>
                                    <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                    </figure>
                                </article>
                            </div>
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child notification is-info">
                                    {section}
                                </article>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child notification is-warning">
                                <p class="title">Coming soon...</p>
                                <p class="subtitle">Aligned with the right tile</p>
                                <div class="content">
                                    Hello
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </Layout>
    )
  }
}

export default AboutPage