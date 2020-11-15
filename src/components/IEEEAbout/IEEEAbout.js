import React, {Component} from "react";
import './IEEEAbout.css'

class IEEEAbout extends Component {
    render() {
        return (
            <div className="about">
                <div className="title">What is IEEE?</div>
                <p>
                    The Institute of Electrical and Electronics Engineers (IEEE) is the world's largest
                    association of technical professionals with more than 423,000 members in over 160 countries
                    around the world.
                </p>
                <p>
                    Its objectives are the educational and technical advancement of electrical and electronic
                    engineering, telecommunications, computer engineering and allied disciplines.
                </p>
            </div>
        );
    }
}

export default IEEEAbout;
