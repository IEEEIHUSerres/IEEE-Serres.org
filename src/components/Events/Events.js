import React, {Component} from "react";
import './Events.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Event from "../Event/Event";

class Events extends Component {
    render() {
        const {data: events} = this.props
        return (
            <div className="events">
                <Row>
                    <Col className="title">
                        Events
                    </Col>
                </Row>
                <CardGroup className="row">
                    {
                        events.map(eventItem => {
                            const {title, content, image, link, buttonTitle, date} = eventItem;
                            return (
                                <div key={link} className="col-sm-12 col-md-6 col-lg-4">
                                    <Event title={title}
                                           content={content}
                                           image={image}
                                           link={link}
                                           buttonTitle={buttonTitle}
                                           date={date}
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

export default Events;
