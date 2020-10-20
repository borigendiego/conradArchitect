import React from 'react';
//Style
import './project-details.scss';
//Components
import Gallery from './DetailsGallery';
import {
    Link
} from 'react-router-dom';
const ProjectDetails = () => {

    return (
        <div className={'project-details-container'}>
            <div className={'project-details-wrapper'}>
                <div>
                    <Link to={'/'} className={'project-details-back-arrow'}>
                        <span>&#8249; MAIN PAGE</span>
                    </Link>
                    <div className={'details-content'}>

                        <div className="image-container">
                            <img
                                alt={'main'}
                                className={'image-grey'}
                                src={'https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-2.jpg'}
                            />
                        </div>
                        <div className={'details-container'}>
                            <div>
                                <h1>RESIDENCE</h1>
                                <div className={'details-container-description'}>
                                    <h3 className={'details-item'}>Location: Buenos Aires, Argentina</h3>
                                    <h3 className={'details-item'}>Size: 1200m2</h3>
                                    <h3 className={'details-item'}>Year: 2010</h3>
                                    <h3 className={'details-item'}>Status: Built</h3>
                                    <h3 className={'details-item'}>Services: Architectural design</h3>
                                </div>
                            </div>
                            <div className={'gallery'}>
                                <Gallery />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'details-black-border'} />
            </div>
        </div>
    )
};

export default ProjectDetails