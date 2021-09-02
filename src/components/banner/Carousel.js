import React, { useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { getHomeBannerImages } from '../projects/API'
//Components
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
    useEffect(() => {
        getHomeBannerImages()
            .then(res => {
                setCarouselImages(res)
            })
    }, []);

    const [carouselImages, setCarouselImages] = useState([]);
    return (
        <div className={'carousel'}>
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
            }
        </div>
    )
};

export default MyCarousel
