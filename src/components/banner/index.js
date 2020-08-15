import React from 'react';
//Components
import Header from '../header';
import Carousel from './Carousel';
//css
import './banner.scss';

const Banner = () => {
    return (
        <div className={'banner-container'}>
            <div className={'carousel'}>
                <Carousel/>
            </div>
            <div className={'white-border large-section-container'}>
                <Header />
            </div>
        </div>
    )
};

export default Banner;