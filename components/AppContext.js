import { createContext } from 'react';

const UserContext = createContext({
    projectsData: [],
    setProjectData: () => {}
});

export default UserContext;
