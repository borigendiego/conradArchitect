import axios from 'axios';

const getProjects = () => {
    return (
        axios.get(`${process.env.REACT_APP_API_URL}/projects`)
        .then((response) => {
            const projectData = response.data.map(element =>
                ({
                    ...element.acf,
                    gallery: element.gallery_images,
                })
            );

            // sort by order home_page_order
            return projectData.sort(function (a, b) {
                return a.home_page_order - b.home_page_order;
            });

        })
        .catch(err => console.log('>>error', err))
    )
};

export {
    getProjects,
}
