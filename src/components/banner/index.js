import React from 'react';
//Components
import Header from '../header';
//css
import './banner.scss';

const Banner = () => {
    return (
        <div className={'banner-container'}>
            <div className={'white-border large-section-container'}>
                <Header />
            </div>
        </div>
    )
};

export default Banner;