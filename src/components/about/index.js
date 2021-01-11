import React from 'react';
//import axios from 'axios';
//Styles
import './about.scss';
//Components
import SectionLayout from '../common/SectionLayout';
import Tile from './tile';

const About = () => {
    //TODO: Finish with the API implementation.
    /*useEffect(() => {
        axios.get('https://wp.thehipposoft.com/wp-json/wp/v2/members')
            .then((response) => {
                //console.log('>>res', response.data);
            })
            .catch(err => console.log('>>error', err));
    });*/

    const mockData = [
        {
            name: 'Jim',
            lastName: 'Conrad',
            rol: 'Architect - Founder',
            description: 'Short description',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/Team-Jim.png',
            linkToProfile: '/JimConradProfile',
        },
        {
            name: 'Maureen',
            lastName: 'Scally',
            rol: 'Architect - Associate',
            description: 'Short description',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team-maureen.png',
            linkToProfile: '/MaureenScallyProfile',
        },
        {
            name: 'Jim',
            lastName: 'Conrad',
            rol: 'Architect - Founder',
            description: 'Short description',
            profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team2.png',
            linkToProfile: '/JimConradProfile',
        },
    ];

    return (
        <SectionLayout sectionTitle={'ABOUT'} sectionId={'ABOUT'}>
            <div className={'about-content-wrapper'}>
                <div className={'team-tile'}>
                    <img
                        alt={'team'}
                        src={'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team-pic2.png'}
                        className={'team-picture'}
                    />
                    <div className={'teams-text-wrapper'}>
                        <h2 className={'tile-name-text'}>CONRAD ARCHITECTS</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo ut felis at
                            convallis. Nam viverra risus vel ante tristique, eu dapibus est ultrices. Maecenas ac lectus
                            ut erat venenatis blandit eu eget magna. Nullam iaculis tempor felis vel varius. Aenean
                            molestie sem neque, in viverra sem sagittis ac. Aliquam varius nibh a vulputate lacinia.
                            Nulla dapibus lacus a condimentum venenatis. Mauris id urna in magna dignissim tempor congue
                            vitae risus. Sed rhoncus dui nec sem pharetra congue. Ut ultricies pellentesque dolor, vel
                            pellentesque erat gravida at. In facilisis arcu a maximus suscipit. Curabitur sed ex quis
                            diam rutrum sollicitudin id a nisi. Nullam eros justo, posuere eget rutrum eget, bibendum at
                            metus.
                        </p>
                    </div>
                </div>
                <div className={'tile-container'}>
                    {mockData.map((value, index) => <Tile staffData={value} key={index} />)}
                </div>
            </div>
        </SectionLayout>
    )
};

export default About;