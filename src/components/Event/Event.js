import React, {Component} from "react";
import './Event.css'
import Card from "react-bootstrap/cjs/Card";
import Button from "react-bootstrap/cjs/Button";
import moment from "moment";

class Event extends Component {
    render() {
        const {title, content, image, link, buttonTitle, date} = this.props;
        return (
            <Card className="event">
                <Card.Img variant="top" src={image}/>
                <Card.Body>
                    <Card.Title>
                        <span>
                            {title}
                        </span>
                    </Card.Title>
                    <div className="title">
                        {
                            moment(date).format('MMMM Do YYYY, h:mm:ss a')
                        }
                    </div>
                    <Card.Text>
                        {content}
                    </Card.Text>
                    <Button target="_blank" href={link} variant="primary">{buttonTitle}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default Event;
