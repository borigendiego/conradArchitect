import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
//Components
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
                <div>
                    <img id={'first'} alt={'first'} />
                </div>
                <div>
                    <img id={'second'} alt={'second'} />
                </div>
                <div>
                    <img id={'third'} alt={'third'}  />
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel