import React, {Component} from "react";

import './Unit.css'
import Col from "react-bootstrap/cjs/Col";
import Button from "react-bootstrap/cjs/Button";

class Unit extends Component {
    render() {
        const {name, desc, logo, url} = this.props;

        return (
            <Col sm={12} className="unit">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={logo} alt={name}/>
                </a>
                <div>
                    {desc}
                </div>
                <Button href={url} target="_blank" rel="noopener norefferer">
                    Learn more...
                </Button>
            </Col>
        );
    }
}

export default Unit;
