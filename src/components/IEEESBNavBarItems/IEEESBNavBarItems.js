import React, {Component} from "react";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import IEEESBSocial from "../IEEESBSocial/IEEESBSocial";
import $ from 'jquery';

class IEEESBNavBarItems extends Component {
    toggleNavbar() {
        if(window.innerWidth <= 992) {
            $('.navbar-toggler-icon').click()
        }
    };

    render() {
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="mr-auto">
                    <Nav.Link onSelect={this.toggleNavbar} href="/#">Home</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#news">News</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#events">Events</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#officers">Officers</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#awards">Awards</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#partners">Partners</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#units">Units</Nav.Link>
                    <Nav.Link onSelect={this.toggleNavbar} href="/#about">About</Nav.Link>
                </Nav>
                <span className="d-none d-lg-block">
                    <IEEESBSocial/>
                </span>

            </Navbar.Collapse>
        );
    }
}

export default IEEESBNavBarItems;
