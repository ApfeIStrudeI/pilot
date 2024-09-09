import React, { Children, cloneElement, useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import CarouselItem from './promoSlide'
import './promoSlider.css'
import { CarouselContext } from "./slider-context";

export default function Carousel ({children}) {
    const [carouselItems, setCarouselItems] = useState([]);
    const [offset, setOffset] = useState(0);
    const [width, setWidth] = useState(450);

    const carouselWindowElRef = useRef();

    useEffect(() => {
        const resizeHandler = () => {
            const _width = carouselWindowElRef.current.offsetWidth;

            setWidth(_width);

            setOffset(0);
        }

        resizeHandler();

        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        }
    },[])


    const onLeft = () => {
        setOffset(currentOffset => {
            return Math.min( (currentOffset + width), 0 )
        })
    }
    const onRight = () => {
        setOffset(currentOffset => {
            const newOffset = Math.min( (currentOffset - width), 0 )
            const maxOffset = -(width * (carouselItems.length - 1))
            
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect( () => {
        setCarouselItems(
            Children.map(children, child => {
                return cloneElement(child)
            })
        );
    }, [])

    return (
        <CarouselContext.Provider value={{ width: width }}>
            <div className="carousel__container">
                <FaChevronLeft className="carousel__arrow" onClick={onLeft}/> 
                <div className="carousel__window" ref={carouselWindowElRef}>
                    <div 
                        className="carousel__allItemsContainer"
                        style={{
                            transform: `translateX(${offset}px)`
                        }}>
                        {carouselItems}
                    </div>
                </div>
                <FaChevronRight className="carousel__arrow" onClick={onRight}/> 
            </div>
        </CarouselContext.Provider>
    )
};

Carousel.CarouselItem = CarouselItem