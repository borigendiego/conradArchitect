import axios from 'axios';

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

export {
    getProjects,
}