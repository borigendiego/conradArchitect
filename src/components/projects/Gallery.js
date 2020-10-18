import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import {
    Link
} from 'react-router-dom';
//css
import './gallery.scss';

const Gallery = () => {
    const fullProjects = ['project 1', 'project 2', 'project 3', '4', '5', '6'];
    const [projects] = useState(
        fullProjects.slice(0, 3)
    );
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <>
            <div className={'images-wrapper'}>
                {projects.map((image, index) =>
                    <div
                        key={index}
                        className={'gallery-slide'}
                    >
                        <Link to={'/projects'}>
                            <img className={'gallery-image'} alt={'as'} src={'https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-4.jpg'} />
                        </Link>
                    </div>
                )}
            </div>
            <Collapsible
                trigger={
                    <h2
                        onClick={() => {setIsExpanded(!isExpanded)}}
                        className={'all-projects-cta'}>{isExpanded ? 'SEE LESS >' : 'SEE ALL PROJECTS >'}
                    </h2>
                }
                classParentString={isExpanded ? 'expandedPanel' : ''}
            >
                <div className={'more-images-wrapper'}>
                    {fullProjects.map((image, index) =>
                        <div
                            key={index}
                            className={'gallery-slide more-slides'}
                        >
                            <Link to={'/projects'}>
                                <img className={'gallery-image'} alt={'as'} src={'https://wp.thehipposoft.com/wp-content/uploads/2020/10/project-image-4.jpg'} />
                            </Link>
                        </div>
                    )}
                </div>
            </Collapsible>
        </>
    )
};

export default Gallery