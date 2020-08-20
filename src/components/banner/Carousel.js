import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
    return (
        <div className={'carousel'}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showThumbs={false}
                showArrows={false}
            >
                {/*<div className={'carousel-image'} style={{backgroundImage: 'url(http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg)'}}></div>*/}
                <div>
                    <img alt={'first'} src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                </div>
                <div>
                    <img alt={'second'} src="http://conradarchitect.com/wp-content/uploads/2014/09/second.jpg"/>
                </div>
                <div>
                    <img alt={'third'} src="http://conradarchitect.com/wp-content/uploads/2014/09/sixth.jpg"/>
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel