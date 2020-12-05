import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import NavBar from "./components/NavBar/NavBar";
import Row from "react-bootstrap/cjs/Row";
import Container from "react-bootstrap/cjs/Container";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Col from "react-bootstrap/cjs/Col";
import News from "./components/News/News";
import Officers from "./components/Officers/Officers";
import Partners from "./components/Partners/Partners";
import Units from "./components/Units/Units";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Awards from "./components/Awards/Awards";
import {Data} from "./data/Data";

class App extends Component {
    render() {
        const data = new Data()

        const ieeeNavBar = data.getIeeeNavBar();
        const sbNavBar = data.getSbNavBar()
        const sbSocial = data.getSbSocial()
        const slides = data.getSlides();
        const news = data.getNews()
        const events = data.getEvents()
        const officers = data.getOfficers()
        const awards = data.getAwards()
        const partners = data.getPartners()
        const units = data.getUnits()
        const affiliates = data.getAffiliates()
        const sbFooterNavBar = data.getSbFooterNavBar()

        return <Container>
            <NavBar
                ieeeNavBarItemsData={ieeeNavBar}
                sbNavBarItemsData={sbNavBar}
                sbSocialItemsData={sbSocial}
            />
            <div className="main-body">
                <Row id="slider" className="segment-slider">
                    <Col>
                        <Slider data={slides}/>
                    </Col>
                </Row>
                <Row id={"news"} className="segment-container">
                    <Col>
                        <News data={news}/>
                    </Col>
                </Row>
                <Row id={"events"} className="segment-container">
                    <Col>
                        <Events data={events}/>
                    </Col>
                </Row>
                <Row id={"officers"} className="segment-container">
                    <Col>
                        <Officers data={officers}/>
                    </Col>
                </Row>
                <Row id={"awards"} className="segment-container">
                    <Col>
                        <Awards data={awards}/>
                    </Col>
                </Row>
                <Row id={"partners"} className="segment-container">
                    <Col>
                        <Partners data={partners}/>
                    </Col>
                </Row>
                <Row id={"units"} className="segment-container">
                    <Col>
                        <Units data={units}/>
                    </Col>
                </Row>
                <Row id={"about"} className="segment-container">
                    <Col>
                        <About/>
                    </Col>
                </Row>
                <Row className="segment-container">
                    <Col>
                        <Footer
                            affiliatesData={affiliates}
                            sbFooterNavBarData={sbFooterNavBar}
                            sbSocialData={sbSocial}
                        />
                    </Col>
                </Row>
            </div>
        </Container>;
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);

