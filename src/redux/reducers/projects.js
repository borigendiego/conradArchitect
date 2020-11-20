import { ADD_PROJECTS_LIST, SET_SINGLE_PROJECT } from '../actionTypes';

const initialState = {
    projectsList: [],
    selectedProject: {}
};

export default function(state = initialState, action) {
    console.log('>>action.type', action.type);
    switch (action.type) {
        case ADD_PROJECTS_LIST: {
            const { projectsList } = action;

            return {
                ...state,
                projectsList: projectsList,
            };
        }
        case SET_SINGLE_PROJECT: {
            const { projectId } = action;
            console.log('>>state.projectsList[projectId]', state.projectsList[projectId]);
            return {
                ...state,
                selectedProject: state.projectsList[projectId],
            }
        }
        default:
            return state;
    }
}
