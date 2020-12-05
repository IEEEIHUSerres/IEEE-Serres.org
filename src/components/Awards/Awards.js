import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import CardGroup from 'react-bootstrap/CardGroup'
import Award from "../Award/Award";

import ieeeRegionalExemplaryStudentBranchAward2019 from './../../resources/awards/ieee-award-2019.webp'
import ieeeRegionalExemplaryStudentBranchAward2020 from './../../resources/awards/ieee-award-2020.webp'
import hermesBetterLifeChallenge2020 from './../../resources/awards/hermes-better-life-challenge-2020.webp'

import './Awards.css'

class Awards extends Component {
    render() {
        const awards = [
            {
                "title": "IEEE Exemplary 2020",
                "image": ieeeRegionalExemplaryStudentBranchAward2020,
                "content": "The purpose of IEEE Regional Exemplary Student Branch Award is to provide public " +
                    "recognition of exemplary IEEE Student Branch operations.",
            },
            {
                "title": "2nd Place - Better Life Challenge",
                "image": hermesBetterLifeChallenge2020,
                "content": "The ambition of the Better Life Challenge was to mobilize technology " +
                    "enthusiasts to create a better life through their work for people with disabilities.",
            },
            {
                "title": "IEEE Exemplary 2019",
                "image": ieeeRegionalExemplaryStudentBranchAward2019,
                "content": "The purpose of IEEE Regional Exemplary Student Branch Award is to provide public " +
                    "recognition of exemplary IEEE Student Branch operations.",
            },
        ]

        return (
            <div className="awards">
                <Row>
                    <Col className="title">
                        Awards
                    </Col>
                </Row>
                <CardGroup className="row">
                    {
                        awards.map(awardItem => {
                            const {title, image, content} = awardItem;
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <Award key={title}
                                           title={title}
                                           image={image}
                                           content={content}
                                    />
                                </div>
                            )
                        })
                    }
                </CardGroup>
            </div>
        );
    }
}

export default Awards;
