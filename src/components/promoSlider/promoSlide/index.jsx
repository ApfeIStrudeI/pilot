import React from 'react';
import { useContext } from 'react';
import { CarouselContext } from '../slider-context';

import './promoSlide.css';

export default function CarouselItem ({children}) {
    const { width } = useContext(CarouselContext)
    return (
        <div className='carouselItem__container' style={{
            minWidth: `${width}px`,
            maxWidth: `${width}px`
        }}>
            {children}
        </div>
    ) 
}