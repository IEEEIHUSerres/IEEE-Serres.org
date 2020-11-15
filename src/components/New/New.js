import React, {Component} from "react";
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";

import './New.css'

class New extends Component {
    render() {
        const {title, content, image, link, buttonTitle} = this.props;

        return (
            <Card className="new">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Button target="_blank" href={link} variant="primary">{buttonTitle}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default New;
