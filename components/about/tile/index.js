import React from 'react';
import Link from 'next/link';
import styles from '../about.module.scss';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const Tile = ({ staffData }) => {
    const {
        key,
        name,
        lastName,
        rol,
        profilePicture,
        linkToProfile,
        id
    } = staffData;

    return (
        <motion.div
            id={`order-${id}`}
            className={`${styles.team_tile} ${styles.member_tile}`}
            initial={{
                opacity: 0,
                y: 25,
                }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{ once: true }}
            transition={{duration: 1, delay: 1}}
        >
            <img alt={`${key}-profile`} src={profilePicture}/>
            <div className={styles.tile_text_wrapper}>
                <h5>{`${name} ${lastName}`}</h5>
                <h6>{rol}</h6>
            </div>
            <Link href={`${linkToProfile}`}>
                <a className={styles.tile_link}>FULL PROFILE &gt;</a>
            </Link>
        </motion.div>
    )
};

export default Tile;
