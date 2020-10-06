import React from 'react';
import Gallery from './Gallery';
import SectionLayout from '../common/SectionLayout';
//css
import './projects.scss';

const Projects = () => {
    return (
        <SectionLayout sectionTitle={'PROJECTS'} id={'projects'}>
            <Gallery />
            {/*<div className={'projects-wrapper large-section-container'}>
                <h1 className={'section-title'}>PROJECTS</h1>
                <Gallery />
            </div>    */}
        </SectionLayout>
    )
};

export default Projects;