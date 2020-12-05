import React, {Component} from "react";
import IEEESBSocial from "../IEEESBSocial/IEEESBSocial";
import './IEEESBContactInfo.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faMapMarked, faMobile} from "@fortawesome/free-solid-svg-icons";

class IEEESBContactInfo extends Component {
    render() {
        const {sbSocialData: sbSocialItems} = this.props
        return (
            <div className="contact">
                <div className="title">Contact With Us</div>
                <div>
                    <Row>
                        <Col className="contact-icon">
                            <div>
                                <FontAwesomeIcon icon={faMapMarked}/>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <p>
                                IEEE Office, <br/>
                                Basement of School of Engineering,<br/>
                                International Hellenic University,<br/>
                                Terma Magnesias,<br/>
                                Serres, Greece
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="contact-icon">
                            <div>
                                <FontAwesomeIcon icon={faMailBulk}/>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <p>ieee@cm.ihu.gr</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="contact-icon">
                            <div>
                                <FontAwesomeIcon icon={faMobile}/>
                            </div>
                        </Col>
                        <Col sm={10}>
                            <p>
                                Chair: (+30) 6977 619 159 <br/>
                                Counselor: (+30) 2321 049 344
                            </p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col className="text-center">
                        <IEEESBSocial data={sbSocialItems}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default IEEESBContactInfo;
