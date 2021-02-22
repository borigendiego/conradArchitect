import React from 'react';
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
//Styles
import './mobile-carousel.scss';
import 'pure-react-carousel/dist/react-carousel.es.css';
//Icons
import Arrow from '../../../assets/right-arrow.svg';

const MyCarousel = () => {
    return (
        <div className={'mobile-carousel_container'}>
            <CarouselProvider
                naturalSlideWidth={200}
                naturalSlideHeight={110}
                totalSlides={3}
                className={'carousel-container'}
            >
                <div className={'sliders'}>
                    <ButtonBack className={'arrow back'}>
                        <img alt={'back-arrow'} src={Arrow} />
                    </ButtonBack>
                    <Slider
                        className={'slider-wrapper'}
                    >
                        <Slide index={1}>
                            <p>
                                The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
                                James Conrad. James concurrently found a development company called Conrad
                                Development.
                            </p>
                        </Slide>
                        <Slide index={2}>
                            <p>
                                The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
                                James Conrad. James concurrently found a development company called Conrad
                                Development.
                            </p>
                        </Slide>
                        <Slide index={3}>
                            <p>
                                The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
                                James Conrad. James concurrently found a development company called Conrad
                                Development.
                            </p>
                        </Slide>
                    </Slider>
                    <ButtonNext className={'arrow next'}>
                        <img className={'arrow back'} alt={'back-arrow'} src={Arrow} />
                    </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
};

export default MyCarousel;