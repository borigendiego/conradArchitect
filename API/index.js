import axios from 'axios';

const cleanBlankSpaces = (string) => string.replace(/\s+/g, '-');

const getHomeBannerImages = () => {
    return (
        axios.get(`https://wp.conradarchitect.com/wp-json/wp/v2/home`)
            .then((response) => {
                return response.data[0].gallery_images.map((element, index) => (
                    {
                        id: index + 1,
                        alt: `Project ${index} main view`,
                        img: element
                    }
                ));

            })
            .catch(err => console.log('>>error', err))
    )
}

const getProjects = () => {
    return (
        axios.get(`https://wp.conradarchitect.com/wp-json/wp/v2/projects`)
        .then((response) => {
            return response.data.map((project, index) =>
                ({
                    ...project.acf,
                    gallery: project.gallery_images,
                    id: cleanBlankSpaces(project.acf.name),
                    projectIndex: index,
                })
            );
        })
        .catch(err => console.log('>>error', err))
    )
};

export {
    getProjects,
    getHomeBannerImages
}
