import React from 'react';
//Components
import Header from '../header';
import Carousel from './Carousel';
//css
import styles from './banner.module.scss';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const Banner = () => {
    return (
        <div className={styles.container}>
            <motion.div 
            className={styles.carousel_container}
            initial={{
                opacity: 0,
                }}
            whileInView={{
                opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
            >
                <Carousel />
            </motion.div>
            <div className={styles.content}>
                <motion.div 
                className={styles.white_border}
                initial={{
                    opacity: 0,
                    x: -25,
                    }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 2}}
                >
                    <Header />
                </motion.div>
            </div>
        </div>
    )
};

export default Banner;