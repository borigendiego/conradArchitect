import React from 'react';
import Gallery from './Gallery';
import SectionLayout from '../common/SectionLayout';
//css
import './projects.scss';

const Projects = () => {
    return (
        <SectionLayout sectionTitle={'PROJECTS'} id={'projects'}>
            <Gallery />
        </SectionLayout>
    )
};

export default Projects;