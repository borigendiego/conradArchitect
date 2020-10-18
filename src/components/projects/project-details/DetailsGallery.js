import React from 'react';
//Components
import Gallery from 'react-grid-gallery';

const DetailsGallery = () => {

    const IMAGES =
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
        }];

    return (
        <Gallery enableImageSelection={false} images={IMAGES} />
    )
};

export default DetailsGallery