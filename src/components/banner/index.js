import React from 'react';
//Components
import Header from '../header';
import Carousel from './Carousel';
//css
import './banner.scss';

const Banner = () => {
    return (
        <div className={'banner-container'}>
            <div className={'carousel-container'}>
                <Carousel/>
            </div>
            <div className={'banner-content-wrapper'}>
                <div className={'white-border'}>
                    <Header />
                </div>
            </div>
        </div>
    )
};

export default Banner;