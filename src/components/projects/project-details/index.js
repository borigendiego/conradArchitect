import React from 'react';
//Redux
import { connect } from 'react-redux';
import { getSingleProject } from '../../../redux/selectors';
//Style
import './project-details.scss';
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
                <div>
                    <Link to={'/'} className={'project-details-back-arrow'}>
                        <span>&#8249; MAIN PAGE</span>
                    </Link>
                    <div className={'details-content'}>
                        <style dangerouslySetInnerHTML={{
                            __html: [
                                '.image-container:after {',
                                `  background-image:url(${project.main_image.url});`,
                                '}'
                            ].join('\n')
                        }}>
                        </style>
                        <div className={'image-container'} >
                            <img
                                alt={'main'}
                                className={'image-grey'}
                                src={project.main_image.url}
                            />
                        </div>
                        <div className={'details-container'}>
                            <div>
                                <h1>{project.name}</h1>
                                <div className={'details-container-description'}>
                                    <h3 className={'details-item'}>{`Location: ${project.location}`}</h3>
                                    <h3 className={'details-item'}>{`Size: ${project.size}`}</h3>
                                    <h3 className={'details-item'}>{`Year: ${project.year}`}</h3>
                                    <h3 className={'details-item'}>{`Status: ${project.status}`}</h3>
                                    <h3 className={'details-item'}>{`Services: ${project.services}`}</h3>
                                </div>
                            </div>
                            <div className={'gallery'}>
                                <Gallery galleryImages={project.gallery} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'details-black-border'} />
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    project: getSingleProject(state),
});

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectDetails)