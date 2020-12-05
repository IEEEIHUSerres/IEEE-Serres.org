import React, {Component} from "react";
import Col from "react-bootstrap/cjs/Col";
import './Officer.css'
import Row from "react-bootstrap/cjs/Row";

class Officer extends Component {
    render() {
        const {name, roles, image} = this.props;
        return (
            <Col sm={4} className="officer">
                <Row>
                    <Col>
                        <img className="image img-fluid" src={image} alt={name}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <span className="name">{name}</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {
                            roles.map(roleArg => {
                                const {role, ou} = roleArg;
                                return (
                                    <Row key={role + "_" + ou}>
                                        <Col>
                                            <span className="role-ou">{role} at {ou}</span>
                                        </Col>
                                    </Row>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default Officer;
