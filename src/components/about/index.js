import React from 'react';
import './about.scss';
//Components
import SectionLayout from '../common/SectionLayout';
import Tide from './tile';

const About = () => {
    const mockData = [
        {
            name: 'Jim',
            lastName: 'Conrad',
            rol: 'Architect - Founder',
            description: 'Short description',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2014/09/h2f2004.jpg',
        },
        {
            name: 'Maureen',
            lastName: 'Scally',
            rol: 'Architect - Associate',
            description: 'Short description',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2020/08/maureen_profile.jpg',
        },
        {
            name: 'Jim',
            lastName: 'Conrad',
            rol: 'Architect - Founder',
            description: 'Short description',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2014/09/h2f2004.jpg',
        },
    ];

    return (
        <SectionLayout sectionTitle={'ABOUT'} id={'about'}>
            <div className={'tile-container'}>
                {mockData.map((value, index) => <Tide staffData={value} key={index} />)}
            </div>
        </SectionLayout>
    )
};

export default About;