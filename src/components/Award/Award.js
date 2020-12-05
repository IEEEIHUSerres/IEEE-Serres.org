import React, {Component} from "react";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";

import './Award.css'

class Award extends Component {
    render() {
        const {title, image, content} = this.props;
        return (
            <Card className="award">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Award;
