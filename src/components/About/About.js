import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import ieeeTeiSerresLogo from './../../resources/about/serres-logo.webp';
import ieeeTeicm from './../../resources/about/sb-teicm.webp';
import ieeeIhu from './../../resources/about/sb-ihu.webp';

import './About.css'

class About extends Component {
    render() {
        return (
            <div className="about">
                <Row>
                    <Col className="title">About</Col>
                </Row>
                <Row>
                    <Col>
                        <div className="about-text">
                            The IEEE Student Branch of the International Hellenic University in Serres Campus,
                            was founded in 2011 (then as TEI of Serres) by students of the Department of Informatics,
                            Computers and
                            Communication Engineering, who wanted to do scientific research through the IEEE,
                            participate in competitions and organize lectures for all students.
                        </div>
                        <div className="image">
                            <img className="img-fluid" src={ieeeTeiSerresLogo} alt="IEEE Student Branch TEI Serres"/>
                        </div>
                        <div className="about-text">
                            The IEEE Student Branch organizes events (eg Arduino Day, Blockchain) and competitions (eg
                            IEEEXtreme, Google HashCode).
                            In addition, as a Student Research and Innovation Team, participates in scientific
                            competitions through research projects and papers (IEEE ComSoc Student Competition, IEEE
                            Region 8 Student Paper Contest).
                        </div>
                        <div className="image">
                            <img className="img-fluid" src={ieeeTeicm} alt="IEEE Student Branch TEI Central Macedonia"/>
                        </div>
                        <div className="about-text">
                            Due to the synergy of the 4 Universities (International Hellenic University, Alexander TEI
                            of Thessaloniki, TEI of Central Macedonia, TEI of Eastern Macedonia and Thrace), the IEEE
                            Student Branch - International Hellenic University in Serres Campus and
                            IEEE Student Branch - International Hellenic University in Thessaloniki Campus is
                            essentially one team as IEEE Student Branch - International Hellenic University.
                        </div>
                        <div className="image">
                            <img className="img-fluid" src={ieeeIhu}
                                 alt="IEEE Student Branches International Hellenic University"/>
                        </div>
                        <div className="about-text">
                            Due to the ease of operations and due to the large geographical distance
                            (Serres-Thessaloniki), the 2 IEEE Student Branches maintain their autonomy
                            as IEEE Student Branches.
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default About;
