import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//Components
import { Carousel } from 'react-responsive-carousel';
//images
import { CAROUSEL_IMAGES } from './constants';

const MyCarousel = () => {
    return (
        <div className={'carousel'}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
            >
                {
                    CAROUSEL_IMAGES.map(item => (
                        <div key={item.id}>
                            <img
                                id={item.id}
                                alt={item.alt}
                                src={item.img}
                            />
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
};

export default MyCarousel
