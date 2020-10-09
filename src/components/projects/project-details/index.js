import React from 'react';
//Style
import './project-details.scss';
//Components
import Gallery from './DetailsGallery';
const ProjectDetails = () => {

    return (
        <div className={'project-details-container'}>
            <div className={'project-details-wrapper'}>
                <div>
                    <a className={'project-details-back-arrow'} href={'#home'}>&#8249; MAIN PAGE</a>
                    <div className={'details-content'}>

                        <div className="image-container">
                            <img alt={'main'} className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                        </div>
                        <div className={'details-container'}>
                            <div>
                                <h1>RESIDENCE</h1>
                                <h3>Location: Buenos Aires, Argentina</h3>
                                <h3>Size: 1200m2</h3>
                                <h3>Year: 2010</h3>
                                <h3>Status: Built</h3>
                                <h3>Services: Architecture</h3>
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