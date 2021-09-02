import React from 'react';
//Styles
import styles from './about.module.scss';
//Components
import SectionLayout from '../common/SectionLayout';
import MobileCarousel from '../common/carousel';
import Tile from './tile';
//Constant
import {
    MEMBERS,
    ABOUT_PARAGRAPH_FOUR,
    ABOUT_PARAGRAPH_ONE,
    ABOUT_PARAGRAPH_THREE,
    ABOUT_PARAGRAPH_TWO,
    TEAM_CAROUSEL_SLIDES,
} from './constants';
//Images
import team from '../../public/assets/images/conrad-architect-team-min.jpeg';

const About = () => {
    return (
        <SectionLayout sectionTitle={'ABOUT'} sectionId={'ABOUT'}>
            <div className={styles.container}>
                <div className={`${styles.team_tile} ${styles.full_team}`}>
                    <img
                        alt={'Conrad Architect team'}
                        src={team}
                        className={styles.team_picture}
                    />
                    <div className={styles.team_wrapper}>
                        <h2>CONRAD ARCHITECTS</h2>
                        <div className={styles.text_wrapper}>
                            <MobileCarousel slides={TEAM_CAROUSEL_SLIDES} />
                            <div className={styles.paragraphs}>
                                <p>{ABOUT_PARAGRAPH_ONE}</p>
                                <p>{ABOUT_PARAGRAPH_TWO}</p>
                                <p>{ABOUT_PARAGRAPH_THREE}</p>
                            </div>
                            <div className={styles.quote_container}>
                                <p className={styles.quote}>&#8220;{ABOUT_PARAGRAPH_FOUR}&#8221;</p>
                                <span className={styles.quote_name}>-James Conrad, Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.tile_container}>
                    {MEMBERS.map((value, index) => <Tile staffData={value} key={index} />)}
                </div>
            </div>
        </SectionLayout>
    )
};

export default About;