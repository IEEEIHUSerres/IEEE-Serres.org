import React, {Component} from "react";
import CardGroup from 'react-bootstrap/CardGroup'

import './News.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import New from "../New/New";

import kotsovolosHermesImage from './../../resources/news/kotsovolos-hermes.webp'
import summerAcademyEnginneringImage from './../../resources/news/3rd-Summer-Engineering-Academy.webp'
import ieeeSbAwardImage2020 from '../../resources/news/ieee-sb-award-2020.webp'
import ieeeHsyp2019 from '../../resources/news/ieee-hsyp-2019.webp'
import tif2019 from '../../resources/news/tif-2019.webp'
import ieeeSbAwardImage2019 from '../../resources/news/ieee-sb-award-2019.webp'

class News extends Component {
    render() {
        const news = [
            {
                "title": "We earn the IEEE Regional Exemplary Student Branch Award 2020",
                "content": "Our branch, alongside with 6 other Greek branches, won the " +
                    "IEEE Exemplary Student Branch Award.",
                "image": ieeeSbAwardImage2020,
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
            {
                "title": "The 4th IEEE HSYP 2019 - Xanthi",
                "content": "Our branch, alongside with other branches participated in the " +
                    "5th IEEE Hellenic SYP Congress 2019 at Xanthi, " +
                    "organized by Democritus University of Thrace.",
                "image": ieeeHsyp2019,
                "link": "https://hsyp.duth.gr/5th/index.html",
                "buttonTitle": "Official Congress Site"
            },
            {
                "title": "IEEE IHU in … 84th TIF  HELEXPO 2019!",
                "content": "The IEEE Student Branches of the International Hellenic University participated at " +
                    "84th TIF - HELEXPO as exhibitors through the stand of the International Hellenic University.",
                "image": tif2019,
                "link": "https://www.youtube.com/watch?v=LdXAhq310zE",
                "buttonTitle": "Video"
            },
            {
                "title": "We earn the IEEE Regional Exemplary Student Branch Award 2019",
                "content": "Our branches (Thessaloni and Serres), alongside with 6 other Greek branches, won the " +
                    "IEEE Exemplary Student Branch Award.",
                "image": ieeeSbAwardImage2019,
                "link": "https://region8today.ieeer8.org/volunteer-news/41-exemplary-student-branches-in-region-8/",
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
                <CardGroup className="row">
                    {
                        news.map(newItem => {
                            const {title, content, image, link, buttonTitle} = newItem;
                            return (
                                <div className="col-sm-12 col-md-6 col-lg-4">
                                    <New key={link}
                                         title={title}
                                         content={content}
                                         image={image}
                                         link={link}
                                         buttonTitle={buttonTitle}
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

export default News;
