import React, { useContext } from 'react';
//TODO: Add components
import { getProjects } from '../../API';
import AppContext from '../../components/AppContext';
import ProjectDetails from '../../components/projects/project-details';

export const getStaticPaths = async () => {
    const res = await getProjects();
    const cleanBlankSpaces = (string) => string.replace(/\s+/g, '-');

    return {
        paths: res.map(project => {
            return {
                params: {
                    project: cleanBlankSpaces(project.name),
                },
            };
        }),
        fallback: false //indicates the type of fallback
    }
}

export const getStaticProps = async (context) => {
    const projectId = context.params.project;

    return {
        props: {
            projectId: projectId,
        }
    }
}

const Project = ({ projectId }) => {
    const { projectsData } = useContext(AppContext);

    const selectedProject = projectsData.filter(project => project.id === projectId);

    return (
        <ProjectDetails project={selectedProject[0]} />
    )
}

export default Project;
