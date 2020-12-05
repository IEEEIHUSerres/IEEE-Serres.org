import React, {Component} from "react";
import Officer from "../Officer/Officer";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import './Officers.css'

class Officers extends Component {
    render() {
        const {data: officers} = this.props
        return (
            <div className="officers">
                <Row>
                    <Col className="title">Student Branch Officers</Col>
                </Row>
                <Row>
                    {
                        officers.map(officer => {
                            const {name, roles, ou, image} = officer;
                            return <Officer key={name} name={name} roles={roles} ou={ou} image={image}/>
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Officers;
