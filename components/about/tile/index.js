import React from 'react';
import Link from 'next/link';
import styles from '../about.module.scss';

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
        <div id={`order-${id}`} className={`${styles.team_tile} ${styles.member_tile}`}>
            <img alt={`${key}-profile`} src={profilePicture}/>
            <div className={styles.tile_text_wrapper}>
                <h5>{`${name} ${lastName}`}</h5>
                <h6>{rol}</h6>
            </div>
            <Link href={`${linkToProfile}`}>
                <a className={styles.tile_link}>FULL PROFILE ></a>
            </Link>
        </div>
    )
};

export default Tile;
