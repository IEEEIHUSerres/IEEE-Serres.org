import React, {Component} from "react";
import Officer from "../Officer/Officer";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import Efstathiou from './../../resources/officers/Efstathiou.webp'
import Vologiannidis from './../../resources/officers/Vologiannidis.webp'
import Kostelidis from './../../resources/officers/Kostelidis.webp'
import Salpigkti from './../../resources/officers/Salpigkti.webp'
import Stasinou from './../../resources/officers/Stasinou.webp'
import Mitsopoulou from './../../resources/officers/Mitsopoulou.webp'
import Kokozidis from './../../resources/officers/Kokozidis.webp'

import './Officers.css'

class Officers extends Component {
    render() {
        const officers = [
            {
                "name": "Dr. Dimitrios Efstathiou",
                "roles": [
                    {
                        "role": "Counselor",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Counselor",
                        "ou": "WIE Affinity Group",
                    },
                    {
                        "role": "Counselor",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Efstathiou
            },
            {
                "name": "Dr. Stavros Vologiannidis",
                "roles": [
                    {
                        "role": "Advisor",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Vologiannidis
            },
            {
                "name": "Iordanis Kostelidis",
                "roles": [
                    {
                        "role": "Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Kostelidis
            },
            {
                "name": "Alexandra Salpigkti",
                "roles": [
                    {
                        "role": "Vice-Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Salpigkti
            },
            {
                "name": "Myrsini Stasinou",
                "roles": [
                    {
                        "role": "Secretary/Treasurer",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Chair",
                        "ou": "WIE Affinity Group",
                    },
                ],
                "image": Stasinou
            },
            {
                "name": "Aikaterini Mitsopoulou",
                "roles": [
                    {
                        "role": "Publicity Committee Chair",
                        "ou": "Student Branch",
                    }
                ],
                "image": Mitsopoulou
            },
            {
                "name": "Pavlos Kokozidis",
                "roles": [
                    {
                        "role": "Mentor",
                        "ou": "Student Branch",
                    },
                    {
                        "role": "Chair",
                        "ou": "RAS Chapter",
                    },
                ],
                "image": Kokozidis
            },
        ]

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
