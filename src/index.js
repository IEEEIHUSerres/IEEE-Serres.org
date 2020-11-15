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

class App extends Component {
    render() {
        return <Container>
            <NavBar/>
            <div className="main-body">
                <Row id="slider" className="segment-slider">
                    <Col>
                        <Slider/>
                    </Col>
                </Row>
                <Row id={"news"} className="segment-container">
                    <Col>
                        <News/>
                    </Col>
                </Row>
                <Row id={"officers"} className="segment-container">
                    <Col>
                        <Officers/>
                    </Col>
                </Row>
                <Row id={"partners"} className="segment-container">
                    <Col>
                        <Partners/>
                    </Col>
                </Row>
                <Row id={"units"} className="segment-container">
                    <Col>
                        <Units/>
                    </Col>
                </Row>
                <Row id={"about"} className="segment-container">
                    <Col>
                        <About/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Footer/>
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

