import React, {Component} from "react";
import './IEEESBAffiliates.css'
import Row from "react-bootstrap/cjs/Row";

import ieeeLogo from '../../resources/affiliates/ieee.webp'
import ieeeRasLogo from '../../resources/affiliates/ieee-ras.webp'
import ieeeWieLogo from '../../resources/affiliates/ieee-wie.webp'
import ihuLogo from '../../resources/affiliates/ihu.webp'
import ihuRoboticsLogo from '../../resources/affiliates/ihu-robotics.webp'
import Col from "react-bootstrap/cjs/Col";

class IEEESBAffiliates extends Component {
    render() {
        const partners = [
            {
                "title": "IEEE",
                "url": "https://ieee.org",
                "logo": ieeeLogo
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org",
                "logo": ieeeWieLogo
            },
            {
                "title": "IEEE RAS",
                "url": "https://ieee-ras.org",
                "logo": ieeeRasLogo
            },
            {
                "title": "IHU",
                "url": "https://ihu.gr",
                "logo": ihuLogo
            },
            {
                "title": "IHU MSc Robotics",
                "url": "http://robotics.ihu.gr",
                "logo": ihuRoboticsLogo
            },
        ]

        return (
            <div className="affiliates">
                <Row>
                    {
                        partners.map(partner => {
                            const {title, url, logo} = partner;

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
