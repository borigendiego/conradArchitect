import React from 'react';
import Gallery from './Gallery';
//css
import './projects.scss';

const Projects = () => {
    return (
        <div className={'projects-wrapper large-section-container'}>
            <h1 className={'section-title'}>PROJECTS</h1>
            <Gallery />
        </div>
    )
};

export default Projects;