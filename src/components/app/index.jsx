import React from "react";
import "./App.css";
import Carousel from "../promoSlider";

import imgFirs from '../../devImages/Rectangle4.png';
import imgSecond from '../../devImages/Rectangle6.png';
import imgThird from '../../devImages/Rectangle7.png';
import imgFourth from '../../devImages/Rectangle8.png';
import Header from "../header";

// import CarouselItem from '../promoSlider/promoSlide';

function App() {
    return (
        // <div className="App">
        //     <Carousel>
        //         <Carousel.CarouselItem>
        //             <div className="item item-1">
        //                 <span>item-1</span>
        //             </div>
        //         </Carousel.CarouselItem>
        //         <Carousel.CarouselItem>
        //             <div className="item item-2">
        //                 <span>item-2</span>
        //             </div>
        //         </Carousel.CarouselItem>
        //         <Carousel.CarouselItem>
        //             <div className="item item-3">
        //                 <span>item-3</span>
        //             </div>
        //         </Carousel.CarouselItem>
        //         <Carousel.CarouselItem>
        //             <div className="item item-4">
        //                 <span>item-4</span>
        //             </div>  
        //         </Carousel.CarouselItem>
        //     </Carousel>
        // </div>

        <div className="App">
            <Header/>
            <Carousel>
                <Carousel.CarouselItem>
                    <img className="carousel__image" src={imgFirs} alt="img"></img>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <img className="carousel__image" src={imgSecond} alt="img"></img>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <img className="carousel__image" src={imgThird} alt="img"></img>
                </Carousel.CarouselItem>
                <Carousel.CarouselItem>
                    <img className="carousel__image" src={imgFourth} alt="img"></img>
                </Carousel.CarouselItem>
            </Carousel>
        </div>
    )
}

export default App;
