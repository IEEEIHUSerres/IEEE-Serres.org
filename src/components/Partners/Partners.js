import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

import './Partners.css'
import Partner from "../Partner/Partner";

class Partners extends Component {
    render() {
        const {data: partners} = this.props
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
