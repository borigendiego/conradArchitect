import React from 'react';
import styles from './profile.module.scss';
import Link from 'next/link';
//Components
import MobileCarousel from '../../common/carousel'
//Images
import arrow from '../../../public/assets/images/atras.svg';
import cross from '../../../public/assets/images/eliminar-cruz.svg';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


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
        <motion.div 
        className={styles.container}
        initial={{
            opacity: 0,
            }}
        animate={{
            opacity: 1,
        }}
        transition={{duration: 1, delay: 1}}
        >
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
                <motion.img 
                alt={`${key}-profile`} 
                src={profilePicture} 
                className={styles.profile_image}
                initial={{
                    opacity: 0,
                    x:-15,
                    }}
                animate={{
                    opacity: 1,
                    x:0,
                }}
                transition={{duration: 1, delay: 1}}
                />
                <motion.h2 
                className={styles.name}
                initial={{
                    opacity: 0,
                    y:-15,
                    }}
                animate={{
                    opacity: 1,
                    y:0,
                }}
                transition={{duration: 1, delay: 1.5}}
                >{`${name} ${lastName}`}</motion.h2>
                <motion.div 
                className={styles.description} 
                dangerouslySetInnerHTML={{ __html: description }}
                initial={{
                    opacity: 0,
                    }}
                animate={{
                    opacity: 1,
                }}
                transition={{duration: 1, delay: 2}}
                 />
                <MobileCarousel slides={mobileCarouselSlides} />
            </div>

            <Link href={linkToNextProfile}>
                <div className={`${styles.arrow_link} ${styles.right}`}>
                    <img src={arrow} alt={'Right icon button'} className={styles.image}/>
                </div>
            </Link>
        </motion.div>
    )
};

export default Profile;
