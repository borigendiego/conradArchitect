import React from 'react';
//import axios from 'axios';
//Styles
import './about.scss';
//Components
import SectionLayout from '../common/SectionLayout';
import Tile from './tile';
//import {Link} from "react-router-dom";

const About = () => {
    //TODO: Finish with the API implementation.
    /*useEffect(() => {
        axios.get('https://wp.thehipposoft.com/wp-json/wp/v2/members')
            .then((response) => {
                //console.log('>>res', response.data);
            })
            .catch(err => console.log('>>error', err));
    });*/
    // TODO: Use the member profile constants
    const mockData = [
        {
            name: 'Maureen',
            lastName: 'Scally',
            rol: 'Architect - Associate',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/maureen-scally-scaled.jpg',
            linkToProfile: '/MaureenScallyProfile',
        },
        {
            name: 'Jim',
            lastName: 'Conrad',
            rol: 'Architect - Founder',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/jim-conrad-scaled.jpg',
            linkToProfile: '/JimConradProfile',
        },
        {
            name: 'Ali',
            lastName: 'Ashouriha',
            rol: 'Architect - Associate',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/ali-Ashouriha-scaled.jpg',
            linkToProfile: '/team-ali',
        },
    ];

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
                        <p>
                            The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by James Conrad.
                            James concurrently found a development company called Conrad Development.
                            JCA, focused it’s energy on designing high-end homes in South Orange County for clients
                            while the Development company, built residential properties, primarily high-end single-family
                            residences in Laguna Beach.  The JCA has always been a very small firm with just one or two
                            full-time employees. The intent was to provide highly personalized service and allow James
                            to closely oversee all work. The development company was also small and developed or
                            remodeled just a few homes each year. This unique, this combination of experience allows
                            JCA to provide a full array of services to clients wanting to build their dream home.
                            James, and his staff, can provide guidance through all phases of building a home starting
                            at assistance with finding the right property.  Once a  property is identified JCA can’t
                            help the client fully assess the property to insure that it is the best one for their needs.
                            For example, a lot that is available for purchase at a lower price may actually end up
                            costing much more to develop due to foundation and other issues.  In addition, some lots
                            have greater potential for development opportunities and others.  James's wealth of
                            experience is in valuable in selecting the right property.
                            Once a property is decided upon,  JCA can help the client refine the program for the
                            home, design the home,  and procure all necessary entitlements required for building.
                            JCA can assist the client in bidding the project to qualified contractors and help the
                            client decide which builder is the best fit for them.  JCA can assist with financing the
                            project and assist the client with all aspects of construction. JCA works primarily in
                            Southern California but has projects throughout the United States, Canada and Mexico.
                        </p>
                    </div>
                   {/* <Link to={'/'} className={'tile-link team-link'}>
                        FULL PAGE >
                    </Link>*/}
                </div>
                <div className={'tile-container'}>
                    {mockData.map((value, index) => <Tile staffData={value} key={index} />)}
                </div>
            </div>
        </SectionLayout>
    )
};

export default About;