import React from 'react';
//Components
import Gallery from 'react-grid-gallery';

const DetailsGallery = (props) => {
    const { galleryImages } = props;
    /*const IMAGES =
        [{
            src: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-4.jpg",
            thumbnail: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-4.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 1"
        },
        {
            src: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-2.jpg",
            thumbnail: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-2.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 2"
        },

        {
            src: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-1.jpg",
            thumbnail: "https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-1.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 3"
        }];*/

    const IMAGES = galleryImages.map((imageURL, index) => {
        return {
            src: imageURL,
            thumbnail: imageURL,
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: `Picture ${index}`
        }
    });

    return (
        <Gallery enableImageSelection={false} images={IMAGES} />
    )
};

export default DetailsGallery