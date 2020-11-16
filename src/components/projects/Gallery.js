import React, { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import {
    Link
} from 'react-router-dom';
//css
import './gallery.scss';
//API
import { getProjects } from './API';

const Gallery = () => {
    const [fullProjectsAPI, setFullProjectsAPI] = useState([]);
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        getProjects()
            .then(res => {
                return setFullProjectsAPI(res);
            })
            .catch(err => console.log('>>error', err))
    }, []);
    //TODO: Finish logic to send project data to project details.
    return (
        <>
            <div className={'images-wrapper'}>
                {fullProjectsAPI.slice(0,3).map((project, index) =>
                    <div
                        key={index}
                        className={'gallery-slide'}
                    >
                        <Link to={'/projects'}>
                            <img className={'gallery-image'} alt={'as'} src={project.main_image.url} />
                        </Link>
                    </div>
                )}
            </div>
            {
                fullProjectsAPI.length > 3 &&
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
                        {fullProjectsAPI.slice(3,20).map((project, index) =>
                            <div
                                key={index}
                                className={'gallery-slide more-slides'}
                            >
                                <Link to={'/projects'}>
                                    <img className={'gallery-image'} alt={'as'} src={project.main_image.url} />
                                </Link>
                            </div>
                        )}
                    </div>
                </Collapsible>
            }
        </>
    )
};

export default Gallery