import React, { useEffect, useState } from 'react';
import AppContext from '../components/AppContext';
//Styles
import '../css/global-styles.scss';
import { getProjects } from '../API';

function MyApp({ Component, pageProps }) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        async function fetchProjectsAPI() {
            let response = await getProjects();
            //response = await response.json()
            setProjects(response);
        }

        fetchProjectsAPI();
    }, [])

    return (
            <AppContext.Provider value={{ projectsData: projects }}>
                <Component {...pageProps} />
            </AppContext.Provider>
        )
}

export default MyApp
