import React from 'react';
import styles from './profile.module.scss';
import Link from 'next/link';
//Components
import MobileCarousel from '../../common/carousel'
//Images
import arrow from '../../../public/assets/images/atras.svg';
import cross from '../../../public/assets/images/eliminar-cruz.svg';

const Profile = ({ profileData }) => {
    const {
        key,
        name,
        lastName,
        description,
        profilePicture,
        linkToNextProfile,
        linkToBackProfile,
        mobileCarouselSlides
    } = profileData;

    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <div className={styles.back_link}>
                    <img src={cross} alt={'Back button icon'} className={styles.back}/>
                </div>
            </Link>
            <Link href={linkToBackProfile}>
                <div className={styles.arrow_link}>
                    <img src={arrow} alt={'Left arrow button'} className={styles.image}/>
                </div>
            </Link>
            <div className={styles.content}>
                <img alt={`${key}-profile`} src={profilePicture} className={styles.profile_image}/>
                <h2 className={styles.name}>{`${name} ${lastName}`}</h2>
                <div className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
                <MobileCarousel slides={mobileCarouselSlides} />
            </div>

            <Link href={linkToNextProfile}>
                <div className={`${styles.arrow_link} ${styles.right}`}>
                    <img src={arrow} alt={'Right icon button'} className={styles.image}/>
                </div>
            </Link>
        </div>
    )
};

export default Profile;
