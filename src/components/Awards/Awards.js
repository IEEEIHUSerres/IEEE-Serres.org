import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import CardGroup from 'react-bootstrap/CardGroup'
import Award from "../Award/Award";

import './Awards.css'

class Awards extends Component {
    render() {
        const {data: awards} = this.props
        return (
            <div className="awards">
                <Row>
                    <Col className="title">
                        Awards
                    </Col>
                </Row>
                <CardGroup className="row">
                    {
                        awards.map(awardItem => {
                            const {title, image, content} = awardItem;
                            return (
                                <div key={title} className="col-sm-12 col-md-6 col-lg-4">
                                    <Award title={title}
                                           image={image}
                                           content={content}
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

export default Awards;
