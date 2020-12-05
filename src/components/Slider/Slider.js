import React, {Component} from "react";
import AliceCarousel from "react-alice-carousel";

import './Slider.css'

class Slider extends Component {

    render() {
        const {data: slides} = this.props;
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

