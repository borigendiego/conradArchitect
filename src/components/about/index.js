import React from 'react';
import './about.scss';
//Components
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
        <div className={'large-section-container about-section-wrapper'}>
            <h1 className={'section-title'}>ABOUT</h1>
            <div className={'tile-container'}>
                {mockData.map((value, index) => <Tide staffData={value}/>)}
            </div>
        </div>
    )
};

export default About;