import React, {Component} from "react";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import IEEEAbout from "../IEEEAbout/IEEEAbout";
import IEEESBContactInfo from "../IEEEContactInfo/IEEESBContactInfo";
import Copyright from "../Copyright/Copyright";
import IEEESBFooterNavBar from "../IEEEFooterNavBar/IEEESBFooterNavBar";
import IEEESBAffiliates from "../IEEESBAffiliates/IEEESBAffiliates";

class Footer extends Component {
    render() {
        const {
            affiliatesData: affiliates,
            sbFooterNavBarData: sbFooterNavBar,
            sbSocialData
        } = this.props
        return (
            <span>
                <Row>
                    <Col sm><IEEEAbout/></Col>
                    <Col sm><IEEESBContactInfo sbSocialData={sbSocialData}/></Col>
                    <Col sm><IEEESBAffiliates data={affiliates}/></Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <IEEESBFooterNavBar data={sbFooterNavBar}/>
                        <Copyright/>
                    </Col>
                </Row>
            </span>
        );
    }
}

export default Footer;
