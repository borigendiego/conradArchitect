import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//Components
import { Carousel } from 'react-responsive-carousel';
//css
import style from './banner.module.scss';
import { getHomeBannerImages } from '../../API/index';

const MyCarousel = () => {
    const [carouselImages, setCarouselImages] = useState([]);

    useEffect(() => {
        getHomeBannerImages()
            .then(res => {
                setCarouselImages(res);
            })
            .catch(err => console.log('>>error', err));
    }, []);

    return (
        <div className={style.carousel}>
            {
                carouselImages.length > 0 &&
                <Carousel
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showArrows={false}
                    showStatus={false}
                >
                    {
                        carouselImages.map((item) => (
                            <div key={item.id} className={style.carousel_slider}>
                                <img
                                    id={item.id}
                                    alt={item.alt}
                                    src={item.img}
                                />
                            </div>
                        ))
                    }
                </Carousel>
            }
        </div>
    )
};

export default MyCarousel
