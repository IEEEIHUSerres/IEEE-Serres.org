import React, {Component} from "react";
import './Events.css'
import ieeeDay2020 from "../../resources/events/ieee-day-2020.webp";
import howILearnedToStopWorryingAboutGps from "../../resources/events/How-I-Learned-to-Stop-Worrying-About-GPS.webp";
import hashCode2020 from "../../resources/events/hashcode-2020.webp";
import ieeeXtremeCodeTalk2020 from "../../resources/events/ieeextreme-code-talk-2020.webp";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import CardGroup from "react-bootstrap/CardGroup";
import Event from "../Event/Event";

class Events extends Component {
    render() {
        const events = [
            {
                "title": "IEEE Day 2020",
                "content": "The IEEE Student Branch of the International Hellenic University " +
                    "in the city of Serres celebrates IEEE 2020 Day " +
                    "and the 50th anniversary of the IEEE Greece Section",
                "image": ieeeDay2020,
                "link": "https://forms.gle/urNZnfdvh27uovEq6",
                "buttonTitle": "Register Form",
                "date": "2020-10-11T13:00:00+00:00"
            },
            {
                "title": "IEEEXtreme Code Talks",
                "content": "The Xtreme Code Talks 2020 are organized, for the first time, on the initiative of the " +
                    "IEEE DUTh Student Branch, " +
                    "IEEE IHU Student Branch (Serres) and " +
                    "IEEE UoP Student Branch.",
                "image": ieeeXtremeCodeTalk2020,
                "link": "https://forms.gle/zbeDUiBcfp9prRwT6",
                "buttonTitle": "Register Form",
                "date": "2020-05-08T16:00:00+00:00"
            },
            {
                "title": "HashCode 2020",
                "content": "Hash Code is a team programming competition, organized by Google, for students " +
                    "and professionals around the world.",
                "image": hashCode2020,
                "link": "https://codingcompetitions.withgoogle.com/hashcode",
                "buttonTitle": "Register Form",
                "date": "2020-02-20T17:30:00+00:00"
            },
            {
                "title": "How I Learned to Stop Worrying About GPS",
                "content": "The IEEE VTS/AESS Greece Chapter in collaboration with " +
                    "the IEEE Student Branch of the International University of Greece invites you to " +
                    "Dr. George Schmidt IEEE Fellow",
                "image": howILearnedToStopWorryingAboutGps,
                "link": "https://www.facebook.com/events/769616456784864",
                "buttonTitle": "Facebook Event",
                "date": "2019-09-21T15:00:00+00:00"
            },
        ]

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
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <Event key={link}
                                           title={title}
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
