import React from 'react';
//Components
import Gallery from 'react-grid-gallery';

const DetailsGallery = () => {

    const IMAGES =
        [{
            src: "http://conradarchitect.com/wp-content/uploads/2014/09/fourth.jpg",
            thumbnail: "http://conradarchitect.com/wp-content/uploads/2014/09/fourth.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 1"
        },
        {
            src: "http://conradarchitect.com/wp-content/uploads/2014/09/fist-photo.jpg",
            thumbnail: "http://conradarchitect.com/wp-content/uploads/2014/09/fist-photo.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 2"
        },

        {
            src: "http://conradarchitect.com/wp-content/uploads/2014/09/second.jpg",
            thumbnail: "http://conradarchitect.com/wp-content/uploads/2014/09/second.jpg",
            thumbnailWidth: 150,
            thumbnailHeight: 150,
            caption: "Picture 3"
        }];

    return (
        <Gallery enableImageSelection={false} images={IMAGES} />
    )
};

export default DetailsGallery