import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//Components
import { Carousel } from 'react-responsive-carousel';
//images
import { CAROUSEL_IMAGES } from './constants';
//css
import style from './banner.module.scss';

const MyCarousel = () => {
    return (
        <div className={style.carousel}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
            >
                {
                    CAROUSEL_IMAGES.map(item => (
                        <div>
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
