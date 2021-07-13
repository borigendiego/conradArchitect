import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import {
    Link
} from 'react-router-dom';
//Redux
import { connect } from 'react-redux';
import { getProjectsList } from '../../redux/selectors';
import { addProjectList, setSingleProject } from '../../redux/actions';
//css
import './gallery.scss';
//API
import { getProjects } from './API';

const Gallery = (props) => {
    const { addProjectList, setSingleProject, projectsList } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        getProjects()
            .then(res => {
                return addProjectList(res);
            })
            .catch(err => console.log('>>error', err))
    }, [addProjectList]);

    return (
        <>
            {
                projectsList
                    ? <div className={'images-wrapper'}>
                        {projectsList.slice(0,9).map((project, index) =>
                            <div
                                key={index}
                                className={'gallery-slide'}
                            >
                                <Link to={'/projects'}>
                                    <img className={'gallery-image'} alt={'as'} src={project.main_image.url}
                                         onClick={() => setSingleProject(index)}
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                    : <h4>No projects to display</h4>
            }

            {
                projectsList.length > 9 &&
                <Collapsible
                    trigger={
                        <h2
                            onClick={() => {setIsExpanded(!isExpanded)}}
                            className={'all-projects-cta'}
                        >
                            {isExpanded ? 'SEE LESS >' : 'SEE ALL PROJECTS >'}
                        </h2>
                    }
                    classParentString={isExpanded ? 'expandedPanel' : ''}
                >
                    <div className={'more-images-wrapper'}>
                       {/* //TODO: check logic about index when select a project*/}
                        {projectsList.slice(9,20).map((project, index) =>
                            <div
                                key={index}
                                className={'gallery-slide more-slides'}
                            >
                                <Link to={'/projects'} onClick={() => setSingleProject(index + 3)}>
                                    <img className={'gallery-image'} alt={'as'} src={project.main_image.url}
                                         onClick={() => setSingleProject(index)}
                                    />
                                </Link>
                            </div>
                        )}
                    </div>
                </Collapsible>
            }
        </>
    )
};

const mapStateToProps = (state) => ({
    projectsList: getProjectsList(state),
});

const mapDispatchToProps = (dispatch) => ({
    addProjectList: (values) => dispatch(addProjectList(values)),
    setSingleProject: (projectId) => dispatch(setSingleProject(projectId)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Gallery)
