import React from 'react';

const MEMBERS_PROFILES = [
    {
        name: 'Jim',
        lastName: 'Conrad',
        path: '/JimConradProfile',
        description:
            <div className={'description-wrapper'}>
                <p>
                    James Attended California Polytechnic University at Pomona in their school of Environmental Design.
                    He then went on to work for Newport Beach designer, James Adams, working on restaurants and hotel
                    projects around the United States. In 1986, James founded his own design/build firm, Pacific
                    Designers and Builders
                </p>
                <p>
                    He was also a licensed general building contractor and began designing and building custom homes
                    in South Orange County, primarily in Laguna Beach. This unique combination of skills allowed James
                    to design homes that were both beautiful and structurally efficient to build.
                </p>
                <p>
                    James then founded Conrad Development and he developed numerous high end custom homes in
                    Laguna Beach, California and Scottsdale, Arizona. He honed his skills in all aspects of development
                    from selection of property, Architectural and Interior Design, procurement of entitlements,
                    Finance, construction and marketing of properties.  This full spectrum of expertise allows James to guide
                    his clients through the entire development process.
                </p>
                <p>
                    In 2000, James suspended the construction side of his business and developed relationships with
                    highly qualified builders and interior designers to ensure his projects were built as well as they
                    are designed.  James now focuses his energy on the architectural discipline, designing high
                    end homes, restaurants and small commercial projects primarily in California and Cabo San Lucas,
                    Mexico.
                </p>
            </div>
        ,
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/Team-Jim.png',
        linkToNextProfile:'/MaureenScallyProfile',
        linkToBackProfile:'/team-ali',
    },
    {
        name: 'Maureen',
        lastName: 'Scally',
        path: '/MaureenScallyProfile',
        description:
            <div className={'description-wrapper'}>
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
            </div>,
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team-maureen.png',
        linkToNextProfile:'/team-ali',
        linkToBackProfile:'/JimConradProfile',
    },
    {
        name: 'Ali',
        profilePicture: 'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team2.png',
        lastName: 'Ashouriha',
        path: '/team-ali',
        description:
            <div className={'description-wrapper'}>
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
            </div>,
        linkToNextProfile:'/JimConradProfile',
        linkToBackProfile:'/MaureenScallyProfile',
    }
];

export {
    MEMBERS_PROFILES,
}