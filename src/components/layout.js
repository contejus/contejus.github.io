import React from "react";
import { Helmet } from "react-helmet"

import "../stylesheets/layout.scss"
import Navbar from "./navbar.js";
import Footer from "./footer.js"

class Layout extends React.Component {
    render() {
        return (
           <div>
               <Helmet>
                    <meta charSet="utf-8" />
                    <title>Tejus Mathew</title>
                    <link rel="canonical" href="http://contejus.github.io" />
                </Helmet>
               <Navbar />
               {this.props.children}
               <Footer />
           </div>
        )
    }
}

export default Layout