import { ADD_PROJECTS_LIST, SET_SINGLE_PROJECT } from './actionTypes';

export const addProjectList = projectsList => {
    return {
        type: ADD_PROJECTS_LIST,
        projectsList: projectsList,
    }
};

export const setSingleProject = projectId => {
    return {
        type: SET_SINGLE_PROJECT,
        projectId: projectId,
    }
};