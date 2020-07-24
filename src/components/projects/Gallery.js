import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
//css
import './gallery.scss';

const Gallery = () => {
    const fullProjects = ['project 1', 'project 2', 'project 3', '4', '5'];
    const [projects] = useState(
        fullProjects.slice(0, 3)
    );
    const [expandSection, setExpandSection] = useState(false);

    return (
        <div className={'gallery-wrapper'}>
            <div className={'gray-background'} />
            <div className={'gallery-container'}>
                <div className={'images-wrapper'}>
                    {projects.map((image, index) =>
                        <div
                            key={index}
                            className={'gallery-slide'}
                            //style={{backgroundImage: 'url("http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg")'}}
                        >
                            <img alt={'as'} src={'http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg'} />
                        </div>
                    )}
                </div>
                <Collapsible trigger={
                    <a
                        onClick={() => {
                            setExpandSection(!expandSection)
                        }}
                    >
                        <h2 className={'all-projects-cta'}>SEE ALL PROJECTS</h2>
                    </a>
                }>
                    {fullProjects.splice(0, 2).map((image, index) =>
                        <div
                            key={index}
                            className={'gallery-slide more-slides'}
                        >
                            <img alt={'as'} src={'http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg'} />
                        </div>
                    )}
                </Collapsible>
            </div>
        </div>
    )
};

export default Gallery