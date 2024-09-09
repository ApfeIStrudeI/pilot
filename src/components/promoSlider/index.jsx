import React, { Children, cloneElement, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import CarouselItem from './promoSlide'
import './promoSlider.css'

export default function Carousel ({children}) {
    const [carouselItems, setCarouselItems] = useState([]);
    const [offset, setOffset] = useState(0);

    const pageWidth = 450;

    const onLeft = () => {
        setOffset(currentOffset => {
            return Math.min( (currentOffset + pageWidth), 0 )
        })
    }
    const onRight = () => {
        setOffset(currentOffset => {
            const newOffset = Math.min( (currentOffset - pageWidth), 0 )
            const maxOffset = -(pageWidth * (carouselItems.length - 1))
            
            return Math.max(newOffset, maxOffset)
        })
    }

    useEffect( () => {
        setCarouselItems(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        width: `${pageWidth}px`,
                        minWidth: `${pageWidth}px`,
                    }
                })
            })
        );
    }, [])

    return (
        <div className="carousel__container">
            <FaChevronLeft className="carousel__arrow" onClick={onLeft}/> 
            <div className="carousel__window">
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
    )
};

Carousel.CarouselItem = CarouselItem