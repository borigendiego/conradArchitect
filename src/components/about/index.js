import React from 'react';
import './about.scss';
//Components
import SectionLayout from '../common/SectionLayout';
import Tide from './tile';

const About = () => {
    const mockData = [
        {
            name: 'Diego',
            lastName: 'Test',
            rol: 'archi',
            description: 'asdsada sdasd',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2014/09/h2f2004.jpg',
        },
        {
            name: 'Diego',
            lastName: 'Test2',
            rol: 'archi',
            description: 'asdsada 22222',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2014/09/h2f2004.jpg',
        },
        {
            name: 'Diego',
            lastName: 'Test3',
            rol: 'archi',
            description: 'asdsada 3333',
            profilePicture: 'http://conradarchitect.com/wp-content/uploads/2014/09/h2f2004.jpg',
        }
    ];

    return (
        <SectionLayout sectionTitle={'ABOUT'}>
            <div className={'tile-container'}>
                {mockData.map((value, index) => <Tide staffData={value}/>)}
            </div>
        </SectionLayout>
    )
};

export default About;