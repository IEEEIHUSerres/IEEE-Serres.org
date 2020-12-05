import React, {Component} from "react";
import Button from "react-bootstrap/cjs/Button";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";
import './IEEESBFooterNavBar.css'

class IEEESBFooterNavBar extends Component {
    render() {
        const {data: items} = this.props

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
