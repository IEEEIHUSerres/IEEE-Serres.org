import React, {Component} from "react";
import Button from "react-bootstrap/cjs/Button";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import './IEEESBFooterNavBar.css'

class IEEESBFooterNavBar extends Component {
    render() {
        const items = [
            {
                "title": "Home",
                "url": "#"
            },
            {
                "title": "IEEE",
                "url": "https://ieee.org/"
            },
            {
                "title": "IEEE Greece Section",
                "url": "https://ieee.gr/"
            },
            {
                "title": "IEEE RAS",
                "url": "https://ieee-ras.org/"
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org/"
            },
            {
                "title": "IHU",
                "url": "https://ihu.gr/"
            },
            {
                "title": "ICT IHU",
                "url": "http://ict.ihu.gr/"
            },
            {
                "title": "ICT MSc Robotics",
                "url": "http://robotics.ihu.gr/"
            },
        ]


        return (
            <ButtonGroup className="flex-wrap footer-navbar d-none d-lg-block">
                {
                    items.map(item => {
                        const {title, url} = item;

                        return <Button key={url} variant="light" target="_blank" href={url}>{title}</Button>
                    })
                }
            </ButtonGroup>
        );
    }
}

export default IEEESBFooterNavBar;
