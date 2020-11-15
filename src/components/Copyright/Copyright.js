import React, {Component} from "react";
import './Copyright.css'

class Copyright extends Component {
    render() {
        return (
            <div className="copyright">
                © 2011-2020,
                IEEE Student Branch - International Hellenic University - Serres Campus,
                All rights reserved.
                <hr/>
                A not-for-profit organization, IEEE is the world’s largest technical professional organization dedicated
                to advancing technology for the benefit of humanity.
            </div>
        );
    }
}

export default Copyright;
