import React, {Component} from "react";
import CardGroup from 'react-bootstrap/CardGroup'

import './News.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import New from "../New/New";

class News extends Component {
    render() {
        const {data: news} = this.props
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
                                <div key={link} className="col-sm-12 col-md-6 col-lg-4">
                                    <New title={title}
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
