import React from 'react';
//Redux
import { connect } from 'react-redux';
import { getSingleProject } from '../../../redux/selectors';
//Style
import './project-details.module.scss';
//Components
import Gallery from './DetailsGallery';
import {
    Link
} from 'react-router-dom';

const ProjectDetails = (props) => {
    const { project } = props;

    return (
        <div className={'project-details-container'}>
            <div className={'project-details-wrapper'}>
                <Link to={'/'} className={'project-details-back-arrow'}>
                    <span>&#8249; MAIN PAGE</span>
                </Link>
                <div className={'details-content'}>
                    <div className={'grey-color-container'}>
                        <div className={'image-container'}>
                            <img
                                alt={'main'}
                                className={'image-grey'}
                                src={project.main_image.url}
                            />
                        </div>
                    </div>
                    <div className={'details-container'}>
                        <div>
                            <h1>{project.name}</h1>
                            <div className={'details-container-description'}>
                                <h3 className={'details-item'}><strong>Location: </strong>{project.location}</h3>
                                {project.size && <h3 className={'details-item'}><strong>Size: </strong>{project.size}</h3>}
                                <h3 className={'details-item'}><strong>Year: </strong>{project.year}</h3>
                                {project.status && <h3 className={'details-item'}><strong>Status</strong>{project.status}</h3>}
                                <h3 className={'details-item'}><strong>Services: </strong>{project.services}</h3>
                            </div>
                        </div>
                        <div className={'gallery'}>
                            <Gallery galleryImages={project.gallery} />
                        </div>
                    </div>
                </div>
                <div className={'details-black-border'} />
            </div>
            <style dangerouslySetInnerHTML={{
                __html: [
                    '.image-container:after {',
                    `  background-image:url(${project.main_image.url});`,
                    '}'
                ].join('\n')
            }}>
            </style>
        </div>
    )
};

const mapStateToProps = (state) => ({
    project: getSingleProject(state),
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetails)
