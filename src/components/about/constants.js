import React from 'react';

const ABOUT_PARAGRAPH_ONE = 'The Architectural firm, James Conrad, Architects (JCA )' +
    ' was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development.';

const ABOUT_PARAGRAPH_TWO = 'JCA provide highly personalized service. Our wealth of experience is invaluable in' +
    ' selecting the right property. We can provide guidance through all phases of building a home starting at' +
    ' assistance with finding the right property';

const ABOUT_PARAGRAPH_THREE = 'JCA works primarily in Southern California but has projects throughout the' +
    ' United States, Canada and Mexico.';

const ABOUT_PARAGRAPH_FOUR = 'The combination of experience and highly personalized service allows JCA provide' +
    ' a full array of services to clients wanting to build their dream home.';

const TEAM_CAROUSEL_SLIDES = [
    <p>
        The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
        James Conrad. James concurrently found a development company called Conrad
        Development.
    </p>,
    <p>
        The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
        James Conrad. James concurrently found a development company called Conrad
        Development.
    </p>,
    <p>
        The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
        James Conrad. James concurrently found a development company called Conrad
        Development.
    </p>
]

const MEMBERS = [
    {
        id: 3,
        name: 'Maureen',
        lastName: 'Scally',
        rol: 'Architect - Associate',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/maureen-scally-scaled.jpg',
        linkToProfile: '/MaureenScallyProfile',
    },
    {
        id: 1,
        name: 'Jim',
        lastName: 'Conrad',
        rol: 'Architect - Founder',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/jim-conrad-scaled.jpg',
        linkToProfile: '/JimConradProfile',
    },
    {
        id: 2,
        name: 'Ali',
        lastName: 'Ashouriha',
        rol: 'Architect - Associate',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/ali-Ashouriha-scaled.jpg',
        linkToProfile: '/team-ali',
    },
];

export {
    ABOUT_PARAGRAPH_ONE,
    ABOUT_PARAGRAPH_TWO,
    ABOUT_PARAGRAPH_THREE,
    ABOUT_PARAGRAPH_FOUR,
    MEMBERS,
    TEAM_CAROUSEL_SLIDES
};