import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
        >
            <div>
                <img className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>

    )
};

export default MyCarousel