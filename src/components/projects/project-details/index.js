import React from 'react';
import './project-details.scss';

const ProjectDetails = () => {

    return (
        <div className={'project-details-container'}>
            <div className={'large-section-container details-wrapper'}>
                <div className={'project-details-content'}>
                    <div className={'contenedor-img'}>
                        <div className="image-container">
                            <img className="image-grey" src="http://conradarchitect.com/wp-content/uploads/2014/09/third.jpg"/>
                        </div>
                    </div>
                    <div className={'details-container'}>
                        <h1>RESIDENCE</h1>
                        <h3>Description</h3>
                        <h3>meters</h3>
                        <h3>year</h3>
                        <h3>test</h3>
                        <div className={'gallery'}>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails