import React, {Component} from "react";
import Nav from "react-bootstrap/cjs/Nav";
import Navbar from "react-bootstrap/cjs/Navbar";
import IEEESBSocial from "../IEEESBSocial/IEEESBSocial";
import $ from 'jquery';

class IEEESBNavBarItems extends Component {
    toggleNavbar() {
        if (window.innerWidth <= 992) {
            $('.navbar-toggler-icon').click()
        }
    };

    render() {
        const {
            sbNavBarItemsData: data,
            sbSocialData: sbSocial
        } = this.props
        return (
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"/>
                <Nav className="mr-auto">
                    {
                        data.map(item => {
                            const {title, url} = item;
                            return <Nav.Link key={title} onSelect={this.toggleNavbar} href={url}>{title}</Nav.Link>
                        })
                    }
                </Nav>
                <span className="d-none d-lg-block">
                    <IEEESBSocial data={sbSocial}/>
                </span>

            </Navbar.Collapse>
        );
    }
}

export default IEEESBNavBarItems;
