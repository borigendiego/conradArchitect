import React from 'react';
//Components
import Header from '../header';
import Carousel from './Carousel';
//css
import styles from './banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.carousel_container}>
                <Carousel />
            </div>
            <div className={styles.content}>
                <div className={styles.white_border}>
                    <Header />
                </div>
            </div>
        </div>
    )
};

export default Banner;