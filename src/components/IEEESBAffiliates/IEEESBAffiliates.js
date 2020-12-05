import React, {Component} from "react";
import './IEEESBAffiliates.css'
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";

class IEEESBAffiliates extends Component {
    render() {
        const {data: affiliates} = this.props
        return (
            <div className="affiliates">
                <Row>
                    {
                        affiliates.map(affiliate => {
                            const {title, url, logo} = affiliate;

                            return (
                                <Col key={url} sm className="affiliate">
                                    <a target="_blank" rel="noopener noreferrer" href={url}>
                                        <img src={logo} alt={title}/>
                                    </a>
                                </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default IEEESBAffiliates;
