import React from 'react';

const ABOUT_TEXT = [
    'The Architectural firm, James Conrad, Architects (JCA) was founded in 1990 by James Conrad. James concurrently found a development company called Conrad Development.',
    'JCA provide highly personalized service. Our wealth of experience is invaluable in selecting the right property. We can provide guidance through all phases of building a home starting at assistance with finding the right property',
    'JCA works primarily in Southern California but has projects throughout the United States, Canada and Mexico.',
    'The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.',
];

const TEAM_CAROUSEL_SLIDES = [
    <p>
        The Architectural firm, James Conrad, Architects (JCA ) was founded in 1990 by
        James Conrad. James concurrently found a development company called Conrad
        Development.
    </p>,
    <p>
        JCA provide highly personalized service. Our wealth of experience is invaluable
         in selecting the right property. We can provide guidance through all phases of
          building a home starting at assistance with finding the right property
    </p>,
    <p>
        JCA works primarily in Southern California but has projects throughout the United States,
         Canada and Mexico.
    </p>,
    <div>
        <p>
            The combination of experience and highly personalized service allows JCA provide a full array of services to clients wanting to build their dream home.
        </p>
        <p>- James Conrad, Founder</p>
    </div>
]

const MEMBERS = [
    {
        id: 3,
        name: 'Maureen',
        lastName: 'Scally',
        rol: 'Architect - Associate',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/maureen-scally-scaled.jpg',
        linkToProfile: '/team/maureen-scally',
        url: 'maureen-scally',
        linkToBackProfile:'ali-ashouriha',
        linkToNextProfile:'jim-conrad',
        description:
            `<div>
                <p>
                    Maureen Scally, was born in Salta, a beautiful province in the North of Argentina.
                    She studied Architecture in the University of Buenos Aires (UBA) and received her degree in 2016.
                    After graduating, Maureen joined Minond + Klotz Architecture Studio, a prestigious and award-winning
                    firm based in Argentina and Chile. She worked as a designer for two high-end residential projects.
                    She was part of the team in charge of the documentation of an exclusive residential and commercial
                    building: Oceana Puerto Madero.
                </p>
                <p>
                    Maureen moved to California in 2018 and joined a boutique and detailed
                    oriented architecture and interior design firm based in Los Angeles, Heusch Inc.  In 2019, Maureen moved
                    to Laguna Beach to Join James Conrad, Architects.
                </p>
                <p>
                    At JCA, Maureen is a project Manager where she is
                    in charge of the design and the project management. She enjoys the creativity and the challenge involved
                    in what she does.  Maureen Scally is also an artist; she sees Architecture as a way of expression and
                    as the possibility of creating spaces where people can make the most of their living experiences.
                </p>
            </div>`,
        mobileCarouselSlides: [
            <p>
                Maureen Scally, was born in Salta, a beautiful province in the North of Argentina.
                She studied Architecture in the University of Buenos Aires (UBA) and received her degree in 2016.
                After graduating, Maureen joined Minond + Klotz Architecture Studio, a prestigious and award-winning
                firm based in Argentina and Chile.
            </p>,
            <p>
                She worked as a designer for two high-end residential projects.
                She was part of the team in charge of the documentation of an exclusive residential and commercial
                building: Oceana Puerto Madero.
            </p>,
            <p>
                Maureen moved to California in 2018 and joined a boutique and detailed
                oriented architecture and interior design firm based in Los Angeles, Heusch Inc.  In 2019, Maureen moved
                to Laguna Beach to Join James Conrad, Architects.
            </p>,
            <p>
                At JCA, Maureen is a project Manager where she is
                in charge of the design and the project management. She enjoys the creativity and the challenge involved
                in what she does.  Maureen Scally is also an artist; she sees Architecture as a way of expression and
                as the possibility of creating spaces where people can make the most of their living experiences.
            </p>
        ],
    },
    {
        id: 1,
        name: 'Jim',
        lastName: 'Conrad',
        rol: 'Architect - Founder',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/jim-conrad-scaled.jpg',
        linkToProfile: '/team/jim-conrad',
        url: 'jim-conrad',
        linkToBackProfile:'maureen-scally',
        linkToNextProfile:'ali-ashouriha',
        description:
            `<div>
                <p>
                    James Attended California state Polytechnic University at Pomona in their school in environmental
                    design.  He then went on to work for Newport Beach designer, James Adams, working on restaurants
                    and hotel projects around the United States.
                </p>
                <p>
                    In 1986, James found it his own design/ build firm, Pacific Designers and Builders.
                    James was also a licensed general building contractor and began designing and building custom homes
                    in South Orange County, primarily in Laguna Beach. This unique combination of skills allowed James
                    to design homes that were both beautiful and structurally efficient to build.
                </p>
                <p>
                    James founded Conrad Development and he developed numerous high end custom homes in Laguna Beach,
                    California and Scottsdale, Arizona.  He honed his skills in all aspects of development from
                    Selection of property, Architectural and Interior Design, procurement of entitlements, Finance,
                    construction and marketing of property. This full spectrum expertise allows James to guide his
                    clients through the entire development process.
                </p>
                <p>
                    James now focuses his energy on the architectural discipline, designing high end homes, restaurants and small commercial projects primarily in California
                    and Cabo San Lucas, Mexico.
                </p>
            </div>
        `,
        mobileCarouselSlides: [
            <p>
                James Attended California state Polytechnic University at Pomona in their school in environmental
                design.  He then went on to work for Newport Beach designer, James Adams, working on restaurants
                and hotel projects around the United States.
            </p>,
            <p>
                In 1986, James found it his own design/ build firm, Pacific Designers and Builders.
                James was also a licensed general building contractor and began designing and building custom homes
                in South Orange County, primarily in Laguna Beach. This unique combination of skills allowed James
                to design homes that were both beautiful and structurally efficient to build.
            </p>,
            <p>
                James founded Conrad Development and he developed numerous high end custom homes in Laguna Beach,
                California and Scottsdale, Arizona.  He honed his skills in all aspects of development from
                Selection of property, Architectural and Interior Design, procurement of entitlements, Finance,
                construction and marketing of property.
            </p>,
            <p>
                This full spectrum expertise allows James to guide his clients through the entire development process.
                James now focuses his energy on the architectural discipline, designing high end homes, restaurants and
                small commercial projects primarily in California and Cabo San Lucas, Mexico.
            </p>
        ]
    },
    {
        id: 2,
        name: 'Ali',
        lastName: 'Ashouriha',
        rol: 'Architect - Associate',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2021/02/ali-Ashouriha-scaled.jpg',
        linkToProfile: '/team/ali-ashouriha',
        url: 'ali-ashouriha',
        linkToBackProfile:'jim-conrad',
        linkToNextProfile:'maureen-scally',
        description:
            `<div>
                <p>
                    With more than 26 years of experience in architecture and engineering design, Ali is an Associate at
                    James Conrad Architects, High- end residential Architecture and Planning design firm in Orange county,
                    CA. Ali received his master’s degree in Architecture &amp; Urbanism from Iran university of Science &amp;
                    Technology.
                </p>
                <p>
                    As an Architectural Designer and Project manager, Ali is the key point of contact with the clients &amp;
                    Engineering responsible for directing and coordinating all aspects of the construction documents and
                    Designing. Since 2009 Ali has moved to the United States and worked in Orange County. Which he mostly
                    focused on designing Residential High- end projects.
                </p>
                <p>
                    During his work in Iran, Ali designed residential housing, Office buildings, factories, Multifamily,
                    mixed- use residential and affordable housing projects as a licensed Architect and licensed Contractor.
                </p>
            </div>`,
        mobileCarouselSlides: [
            <p>
                With more than 26 years of experience in architecture and engineering design, Ali is an Associate at
                James Conrad Architects, High- end residential Architecture and Planning design firm in Orange county,
                CA. Ali received his master’s degree in Architecture &amp; Urbanism from Iran university of Science &amp;
                Technology.
            </p>,
            <p>
                As an Architectural Designer and Project manager, Ali is the key point of contact with the clients &amp;
                Engineering responsible for directing and coordinating all aspects of the construction documents and
                Designing. Since 2009 Ali has moved to the United States and worked in Orange County. Which he mostly
                focused on designing Residential High- end projects.
            </p>,
            <p>
                During his work in Iran, Ali designed residential housing, Office buildings, factories, Multifamily,
                mixed- use residential and affordable housing projects as a licensed Architect and licensed Contractor.
            </p>
        ]
    },
];

export {
    MEMBERS,
    TEAM_CAROUSEL_SLIDES,
    ABOUT_TEXT,
};
