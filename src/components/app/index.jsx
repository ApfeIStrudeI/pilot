import React from "react";
import "./App.css";
import Carousel from "../promoSlider";

import CarouselItem from '../promoSlider/promoSlide';

function App() {
    return (
        <div className="App">
            <Carousel>
                <div className="item item-1">
                    <span>item-1</span>
                </div>
                <div className="item item-2">
                    <span>item-2</span>
                </div>
                <div className="item item-3">
                    <span>item-3</span>
                </div>
                <div className="item item-4">
                    <span>item-4</span>
                </div>
            </Carousel>

            <br></br>

            <Carousel>
                <Carousel.CarouselItem>
                    <div className="item item-1">
                        <span>item-1</span>
                    </div>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <div className="item item-2">
                        <span>item-2</span>
                    </div>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <div className="item item-3">
                        <span>item-3</span>
                    </div>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <div className="item item-4">
                        <span>item-4</span>
                    </div>  
                </Carousel.CarouselItem>
            </Carousel>
        </div>
    )
}

export default App;
