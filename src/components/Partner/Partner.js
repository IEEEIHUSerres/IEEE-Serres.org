import React, {Component} from "react";
import Col from "react-bootstrap/cjs/Col";
import './Partner.css'

class Partner extends Component {
    render() {
        const {name, image, url} = this.props;
        return (
            <Col sm className="partner">
                <a target="_blank" rel="noopener noreferrer" href={url}>
                    <img src={image} alt={name}/>
                </a>
            </Col>
        );
    }
}

export default Partner;
