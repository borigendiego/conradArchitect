import axios from 'axios';

const cleanBlankSpaces = (string) => string.replace(/\s+/g, '-');

const getHomeBannerImages = () => {
    return (
        axios.get(`https://wp.conradarchitect.com/wp-json/wp/v2/hero`)
            .then((response) => {
                return response.data[0].acf.foto_gallery.map((element, index) => (
                    {
                        id: index + 1,
                        alt: `Project ${index} main view`,
                        img: element.full_image_url
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
                    gallery: project.acf.photo_gallery,
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
