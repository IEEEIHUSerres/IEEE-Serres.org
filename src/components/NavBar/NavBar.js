import React, {Component} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import './NavBar.css'
import IEEENavBar from "../IEEENavBar/IEEENavBar";
import IEEESBLogo from "../IEEESBLogo/IEEESBLogo";
import IEEESBNavBarItems from "../IEEESBNavBarItems/IEEESBNavBarItems";

class NavBar extends Component {
    render() {
        const {
            ieeeNavBarItemsData: ieeeNavBarItems,
            sbNavBarItemsData: sbNavBarItems,
            sbSocialItemsData: sbSocialItems
        } = this.props;
        return (
            <span>
                <IEEENavBar data={ieeeNavBarItems}/>
                <Navbar bg="white" expand="lg" sticky={"top"}>
                    <IEEESBLogo/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <IEEESBNavBarItems sbNavBarItemsData={sbNavBarItems} sbSocialData={sbSocialItems}/>
                </Navbar>
            </span>
        );
    }
}

export default NavBar;
