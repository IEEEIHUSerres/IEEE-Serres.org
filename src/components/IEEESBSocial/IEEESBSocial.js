import React, {Component} from "react";
import Button from "react-bootstrap/cjs/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";
import {faInstagram} from "@fortawesome/free-brands-svg-icons/faInstagram";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons/faLinkedin";
import {faGithub} from "@fortawesome/free-brands-svg-icons/faGithub";
import {faYoutube} from "@fortawesome/free-brands-svg-icons/faYoutube";

class IEEESBSocial extends Component {
    render() {
        const socialItems = [
            {
                "icon": faFacebook,
                "url": "https://facebook.com/ieee.ihuserres"
            },
            {
                "icon": faInstagram,
                "url": "https://instagram.com/ieee.ihuserres"
            },
            {
                "icon": faLinkedin,
                "url": "https://linkedin.com/company/ieee-ihuserres"
            },
            {
                "icon": faGithub,
                "url": "https://github.com/ieeeihuserres"
            },
            {
                "icon": faYoutube,
                "url": "https://www.youtube.com/channel/UCL5HBLikQJIAoKiyew8qx9Q"
            },
        ]


        return (
            <ButtonGroup className="mr-auto">
                {
                    socialItems.map(socialItem => {
                        const {icon, url} = socialItem;
                        return (
                            <Button key={url} variant="light" href={url}>
                                <FontAwesomeIcon icon={icon}/>
                            </Button>
                        )
                    })
                }
            </ButtonGroup>
        );
    }
}

export default IEEESBSocial;
