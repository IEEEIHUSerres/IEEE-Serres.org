import React, {Component} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Button from "react-bootstrap/cjs/Button";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";

class IEEENavBar extends Component {
    render() {
        const items = [
            {
                "title": "IEEE",
                "url": "https://www.ieee.org/"
            },
            {
                "title": "IEEE RAS",
                "url": "https://www.ieee-ras.org/"
            },
            {
                "title": "IEEE WIE",
                "url": "https://wie.ieee.org/"
            },
            {
                "title": "IEEE Xplore Digital Library",
                "url": "https://ieeexplore.ieee.org/"
            },
            {
                "title": "IEEE Standards",
                "url": "https://standards.ieee.org/"
            },
            {
                "title": "IEEE Spectrum",
                "url": "https://spectrum.ieee.org/"
            },
            {
                "title": "More Sites",
                "url": "https://www.ieee.org/sitemap.html"
            },
        ]


        return (
            <Navbar bg="white" className="d-none d-lg-block">
                <Navbar.Collapse id="basic-navbar-nav">
                    <ButtonGroup className="mr-auto">
                        {
                            items.map(item => {
                                const {title, url} = item;
                                return (
                                    <Button key={url} variant="light" target="_blank" href={url}>{title}</Button>
                                )
                            })
                        }
                    </ButtonGroup>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default IEEENavBar;
