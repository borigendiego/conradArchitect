import React from 'react';
//Components
import Gallery from 'react-grid-gallery';

const DetailsGallery = (props) => {
    const { galleryImages } = props;

    const IMAGES = galleryImages.map((imageURL, index) => {
        return {
            src: imageURL.full_image_url,
            thumbnail: imageURL.thumbnail_image_url,
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