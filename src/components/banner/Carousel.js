import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//Components
import { Carousel } from 'react-responsive-carousel';
//images
import slideImage from '../../assets/images/hor-artboard_3_opt.png';

const MyCarousel = () => {
    //TODO: Creat a constant and use a map function to render images
    return (
        <div className={'carousel'}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                showStatus={false}
            >
                <div>
                    <img
                        id={'first'}
                        alt={'first'}
                        src={slideImage}
                    />
                </div>
                <div>
                    <img
                        id={'second'}
                        alt={'second'}
                        src={slideImage}
                    />
                </div>
                <div>
                    <img
                        id={'third'}
                        alt={'third'}
                        src={slideImage}
                    />
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel