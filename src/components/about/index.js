import React from 'react';
//import axios from 'axios';
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
    CAROUSEL_TEXT_ONE,
    CAROUSEL_TEXT_TWO,
    CAROUSEL_TEXT_THREE,
} from './constants';

const About = () => {
    //TODO: Finish with the API implementation.
    /*useEffect(() => {
        axios.get('https://wp.thehipposoft.com/wp-json/wp/v2/members')
            .then((response) => {
                //console.log('>>res', response.data);
            })
            .catch(err => console.log('>>error', err));
    });*/

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
                            <MobileCarousel textOne={CAROUSEL_TEXT_ONE} textTwo={CAROUSEL_TEXT_TWO} textThree={CAROUSEL_TEXT_THREE} />
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
                   {/* <Link to={'/'} className={'tile-link team-link'}>
                        FULL PAGE >
                    </Link>*/}
                </div>
                <div className={'tile-container'}>
                    {MEMBERS.map((value, index) => <Tile staffData={value} key={index} />)}
                </div>
            </div>
        </SectionLayout>
    )
};

export default About;