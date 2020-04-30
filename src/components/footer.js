import React from "react";
import "../stylesheets/footer.scss";

class Footer extends React.Component {
    constructor(){
        super();
    }

    render() {
        return (
            <footer class="footer">
                <div class="content has-text-centered footer-text container">
                    <p>
                    Made by Tejus Mathew
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer