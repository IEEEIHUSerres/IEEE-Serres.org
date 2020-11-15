import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import './Partners.css'
import Partner from "../Partner/Partner";

import ieeeIhuThessalonikiLogo from './../../resources/partners/ieee-ihu-thessaloniki.webp'
import ieeeUthVolosLogo from './../../resources/partners/ieee-uth-volos.webp'

class Partners extends Component {
    render() {
        const partners = [
            {
                "name": "IEEE IHU Thessaloniki",
                "image": ieeeIhuThessalonikiLogo,
                "url": "https://www.facebook.com/ieee.ihuthess/"
            },
            {
                "name": "IEEE UTh Volos",
                "image": ieeeUthVolosLogo,
                "url": "https://ieee.e-ce.uth.gr/"
            }
        ]

        return (
            <div className="partners">
                <Row>
                    <Col className="title">Partners</Col>
                </Row>
                <Row>
                    {
                        partners.map(partner => {
                            const {name, image, url} = partner;
                            return (
                                <Partner key={url} name={name} image={image} url={url}/>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Partners;
