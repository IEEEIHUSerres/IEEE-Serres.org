import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import Navbar from "react-bootstrap/cjs/Navbar";
import IEEELogoIcon from '../../resources/ieee-ihu.webp'

class IEEESBLogo extends Component {
    render() {
        return (
            <Navbar.Brand href="/#">
                <Row>
                    <Col className="title-icon d-none d-md-block">
                        <img
                            alt=""
                            src={IEEELogoIcon}
                            className="d-inline-block align-top"
                        />
                    </Col>
                    <Col className="title-text">
                        <Row className={"title-sb"}>
                            IEEE Student Branch
                        </Row>
                        <Row className={"title-uni"}>
                            International Hellenic University
                        </Row>
                        <Row className={"title-campus"}>
                            Serres Campus
                        </Row>
                    </Col>
                </Row>
            </Navbar.Brand>
        );
    }
}

export default IEEESBLogo;
