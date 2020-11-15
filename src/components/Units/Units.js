import React, {Component} from "react";

import rasLogo from './../../resources/affiliates/ieee-ras.webp'
import wieLogo from './../../resources/affiliates/ieee-wie.webp'
import Unit from "../Unit/Unit";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import './Units.css'

class Units extends Component {
    render() {
        const units = [
            {
                "name": "RAS",
                "desc": "The IEEE Robotics and Automation Society’s objectives are scientific, literary and " +
                    "educational in character. The Society strives for the advancement of the theory and practice " +
                    "of robotics and automation engineering and science and of the allied arts and sciences, " +
                    "and for the maintenance of high professional standards among its members, all in consonance " +
                    "with the Constitution and Bylaws of the IEEE and with special attention to such aims within " +
                    "the Field of Interest of the Society.",
                "logo": rasLogo,
                "url": "https://ieee-ras.org",
                "id": "units/ras",
            },
            {
                "name": "WIE",
                "desc": "The IEEE Women in Engineering (WIE) is a global network of IEEE members " +
                    "and volunteers dedicated to promoting women engineers and scientists," +
                    " and inspiring girls around the world to follow their academic interests in a " +
                    "career in engineering and science. " +
                    "IEEE is the world’s largest technical professional organization dedicated to advancing " +
                    "technology for the benefit of humanity.",
                "logo": wieLogo,
                "url": "https://wie.ieee.org",
                "id": "units/wie"
            },
        ]

        return (
            <div className="units">
                <Row>
                    <Col className="title">Units</Col>
                </Row>
                <Row>
                    {
                        units.map(unit => {
                            const {name, desc, logo, url, id} = unit;
                            return (
                                <div id={id} key={id}>
                                    <Unit name={name} desc={desc} logo={logo} url={url}/>
                                </div>
                            )
                        })
                    }
                </Row>
            </div>
        )
    }
}

export default Units;
