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
                <div>
                    <img alt={'first'} className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img alt={'second'} className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img alt={'third'} className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
};

export default MyCarousel