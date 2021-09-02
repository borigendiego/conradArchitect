import React from 'react';
import styles from './profile.module.scss';
import Link from 'next/link';
//Components
import MobileCarousel from '../../common/carousel'
//Images
import arrow from '../../../public/assets/images/atras.svg';
import cross from '../../../public/assets/images/eliminar-cruz.svg';

const Profile = (props) => {
    const { key,
        name,
        lastName,
        description,
        profilePicture,
        linkToNextProfile,
        linkToBackProfile,
        mobileCarouselSlides
    } = props;

    return (
        <div className={styles.container}>
            <Link href={'/'}>
                <div className={styles.backX_link}>
                    <img src={cross} alt={'x-back'} className={styles.backX}/>
                </div>
            </Link>
            <Link href={linkToNextProfile}>
                <div className={styles.arrow_link}>
                    <img src={arrow} alt={'left-arrow'} className={styles.image}/>
                </div>
            </Link>
            <div className={styles.content}>
                <img alt={`${key}-profile`} src={profilePicture} className={styles.profile_image}/>
                <h2 className={styles.name}>{`${name} ${lastName}`}</h2>
                <div className={styles.description}>
                    {description}
                </div>
                <MobileCarousel slides={mobileCarouselSlides} />
            </div>

            <Link href={linkToBackProfile}>
                <div className={`${styles.arrow_link} ${styles.right}`}>
                    <img src={arrow} alt={'right-arrow'} className={styles.image}/>
                </div>
            </Link>
        </div>
    )
};

export default Profile;

//Line 29 it was a "left" class non-existent