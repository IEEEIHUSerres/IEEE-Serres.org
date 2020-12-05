import React, {Component} from "react";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import Button from "react-bootstrap/cjs/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class IEEESBSocial extends Component {
    render() {
        const {data: socialItems} = this.props

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
