import React from 'react';
import PropTypes from 'prop-types';
import styles from './sectionLayout.module.scss';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const SectionLayout = (props) => {
    const { sectionTitle, sectionId } = props;

    return (
        <div className={'section-container'} id={sectionId}>
            <motion.h1 
            className={styles.title}
            initial={{
                opacity: 0,
                y: 25,
                }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 0.5}}
            >{sectionTitle}</motion.h1>
            <motion.div 
            className={styles.wrapper}
            >
                <motion.div
                 className={styles.gray_background}
                 initial={{
                    opacity: 0,
                    y: -25,
                    }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 2, delay: 1}}
                  />
                <motion.div 
                className={styles.content_container}
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
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
};

SectionLayout.prototypes = {
  sectionTitle: PropTypes.string,
};

export default SectionLayout;