import React, {Component} from "react";
import AliceCarousel from "react-alice-carousel";

import ourTeam from '../../resources/slider/sb.webp'
import programmingTeam from '../../resources/slider/programming.webp'
import networkingTeam from '../../resources/slider/networks.webp'
import hardwareTeam from '../../resources/slider/electronics.webp'
import roboticsTeam from '../../resources/slider/robotics.webp'
import socialMediaTeam from '../../resources/slider/social.webp'

import './Slider.css'

class Slider extends Component {

    render() {

        const slides = [
            {
                image: ourTeam,
                title: "Meet our team"
            },
            {
                image: programmingTeam,
                title: "Programming Team"
            },
            {
                image: networkingTeam,
                title: "Networks and Telecommunications Team"
            },
            {
                image: hardwareTeam,
                title: "Electronics and Hardware Design Team"
            },
            {
                image: roboticsTeam,
                title: "Robotics & Automation Team"
            },
            {
                image: socialMediaTeam,
                title: "Social Media and PR Team"
            },
        ]

        return (
            <AliceCarousel infinite autoPlay autoPlayInterval="4000">
                {slides.map(slide => {
                    const {image, title} = slide;
                    return (
                        <div key={image} className="sliderimg">
                            <p>{title}</p>
                            <img src={image} alt={title}/>
                        </div>
                    )
                })}
            </AliceCarousel>
        )
    }
}

export default Slider;

