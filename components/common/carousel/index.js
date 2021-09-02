import React from 'react';
import PropTypes from 'prop-types';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
//Styles
import styles from './mobile-carousel.module.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
//Icons
import Arrow from '../../../public/assets/right-arrow.svg';

const MyCarousel = ({ slides }) => {
    return (
        <div className={styles.container}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={110}
                totalSlides={slides.length}
                className={'carousel-container'}
            >
                <div className={'sliders'}>
                    <ButtonBack className={'arrow back'}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonBack>
                    <Slider
                        className={'slider-wrapper'}
                    >
                        {
                            slides.map((item, index) =>
                                <Slide key={`slide-${index}`} index={index}>
                                    {item}
                                </Slide>
                            )
                        }
                    </Slider>
                    <ButtonNext className={'arrow next'}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
};

MyCarousel.prototypes = {
    slides: PropTypes.array,
};

export default MyCarousel;