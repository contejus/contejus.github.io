import React from "react";
import "../stylesheets/layout.scss"
import Navbar from "./navbar.js";
import Footer from "./footer.js"

class Layout extends React.Component {
    render() {
        return (
           <div>
               <Navbar />
               {this.props.children}
               <Footer />
           </div>
        )
    }
}

export default Layout