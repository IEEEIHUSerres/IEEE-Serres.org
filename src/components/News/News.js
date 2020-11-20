import React, {Component} from "react";
import CardGroup from 'react-bootstrap/CardGroup'

import './News.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import New from "../New/New";

import kotsovolosHermesImage from './../../resources/news/kotsovolos-hermes.webp'
import summerAcademyEnginneringImage from './../../resources/news/3rd-Summer-Engineering-Academy.webp'
import ieeeSbAwardImage from './../../resources/news/ieee-sb-award.webp'

class News extends Component {
    render() {
        const news = [
            {
                "title": "We earn the IEEE Regional Exemplary Student Branch Award 2020",
                "content": "Our branch, alongside with 6 other Greek branches, won the " +
                    "IEEE Exemplary Student Branch Award.",
                "image": ieeeSbAwardImage,
                "link": "https://www.facebook.com/IEEEStudents/posts/3629135570478685",
                "buttonTitle": "Official Results"
            },
            {
                "title": "Our branch at the 3rd Summer Engineering Academy in Serres",
                "content": "The Presentation of IEEE Student Branch  IHU Serres at the 3rd Summer Engineering Academy " +
                    "in Serres.",
                "image": summerAcademyEnginneringImage,
                "link": "https://www.youtube.com/watch?v=5o9tYkAzZZE",
                "buttonTitle": "Presentation Video"
            },
            {
                "title": "We earn the 2nd place to the Better Life Challenge innovation contest",
                "content": "Our Joint Team with IEEE UTh SB Volos, HERMES Team won the 2nd place to the " +
                    "Better Life Challenge innovation contest held by Kotsovolos.",
                "image": kotsovolosHermesImage,
                "link": "https://thankstotech.kotsovolos.gr/#trophies",
                "buttonTitle": "Official Results"
            },
        ]

        return (
            <div className="news">
                <Row>
                    <Col className="title">
                        News
                    </Col>
                </Row>
                <CardGroup>
                    {
                        news.map(newItem => {
                            const {title, content, image, link, buttonTitle} = newItem;
                            return <New key={link} title={title} content={content} image={image} link={link}
                                        buttonTitle={buttonTitle}/>
                        })
                    }
                </CardGroup>
            </div>
        );
    }
}

export default News;
