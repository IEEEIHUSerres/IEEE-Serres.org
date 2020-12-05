import React, {Component} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Button from "react-bootstrap/cjs/Button";
import ButtonGroup from "react-bootstrap/cjs/ButtonGroup";

class IEEENavBar extends Component {
    render() {
        const {data: items} = this.props

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
