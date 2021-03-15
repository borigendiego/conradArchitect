import React from 'react';
//Styles
import './about.scss';
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

const About = () => {
    return (
        <SectionLayout sectionTitle={'ABOUT'} sectionId={'ABOUT'}>
            <div className={'about-content-wrapper'}>
                <div className={'team-tile full-team'}>
                    <img
                        alt={'team'}
                        src={'https://wp.conradarchitect.com/wp-content/uploads/2021/02/conrad-architect-team.jpg'}
                        className={'team-picture'}
                    />
                    <div className={'teams-text-wrapper'}>
                        <h2 className={'tile-name-text'}>CONRAD ARCHITECTS</h2>
                        <div className={'about-text-wrapper'}>
                            <MobileCarousel slides={TEAM_CAROUSEL_SLIDES} />
                            <div className={'about-paragraphs'}>
                                <p>{ABOUT_PARAGRAPH_ONE}</p>
                                <p>{ABOUT_PARAGRAPH_TWO}</p>
                                <p>{ABOUT_PARAGRAPH_THREE}</p>
                            </div>
                            <div className={'about-quote'}>
                                <p className={'quote-text'}>&#8220;{ABOUT_PARAGRAPH_FOUR}&#8221;</p>
                                <span className={'quote-name'}>-James Conrad, Founder</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'tile-container'}>
                    {MEMBERS.map((value, index) => <Tile staffData={value} key={index} />)}
                </div>
            </div>
        </SectionLayout>
    )
};

export default About;