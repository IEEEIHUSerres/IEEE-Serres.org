import React, {Component} from "react";
import Unit from "../Unit/Unit";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import './Units.css'

class Units extends Component {
    render() {
        const {data: units} = this.props
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
