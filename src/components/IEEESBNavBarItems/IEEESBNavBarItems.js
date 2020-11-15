import React, {Component} from "react";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import IEEESBSocial from "../IEEESBSocial/IEEESBSocial";

class IEEESBNavBarItems extends Component {
    render() {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="mr-auto">
                    <Nav.Link href="/#">Home</Nav.Link>
                    <Nav.Link href="/#news">News</Nav.Link>
                    <Nav.Link href="/#officers">Officers</Nav.Link>
                    <Nav.Link href="/#partners">Partners</Nav.Link>
                    <Nav.Link href="/#units">Units</Nav.Link>
                    <Nav.Link href="/#about">About</Nav.Link>
                </Nav>
                <span className="d-none d-lg-block">
                    <IEEESBSocial/>
                </span>

            </Navbar.Collapse>
        );
    }
}

export default IEEESBNavBarItems;
