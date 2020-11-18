import React from 'react';
//Components
import Gallery from './Gallery';
import SectionLayout from '../common/SectionLayout';
//css
import './projects.scss';

const Projects = () => {
    return (
        <SectionLayout sectionTitle={'PROJECTS'} sectionId={'PROJECTS'}>
            <Gallery />
        </SectionLayout>
    )
};

export default Projects;