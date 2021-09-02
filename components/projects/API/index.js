import axios from 'axios';
import { PROJECTS_DATA } from './constants';

const getProjects = () => {
    return (
        axios.get(`${process.env.REACT_APP_API_URL}/projects`)
        .then((response) => {
            return response.data.map(element =>
                ({
                    ...element.acf,
                    gallery: element.gallery_images,
                })
            );
        })
        .catch(err => console.log('>>error', err))
    )
};

//TODO: This will be removed
const getTempProjects = () => {
    return PROJECTS_DATA.map(element =>
        ({
            ...element.acf,
            gallery: element.gallery_images,
        })
    );
}

export {
    getProjects,
    getTempProjects,
}
