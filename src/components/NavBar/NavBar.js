import React, {Component} from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import './NavBar.css'
import IEEENavBar from "../IEEENavBar/IEEENavBar";
import IEEESBLogo from "../IEEESBLogo/IEEESBLogo";
import IEEESBNavBarItems from "../IEEESBNavBarItems/IEEESBNavBarItems";

class NavBar extends Component {
    render() {
        return (
            <span>
                <IEEENavBar/>
                <Navbar bg="white" expand="lg" sticky={"top"}>
                    <IEEESBLogo/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <IEEESBNavBarItems/>
                </Navbar>
            </span>
        );
    }
}

export default NavBar;
