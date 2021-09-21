export const getProjectsList = store => {
    return  store && store.projects ? store.projects.projectsList : [];
};

export const getSingleProject = store => {
    return store && store.projects ? store.projects.selectedProject : {};
};