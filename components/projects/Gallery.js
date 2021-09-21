import React, { useState, useContext } from 'react';
import Collapsible from 'react-collapsible';
import Link from 'next/link';
import AppContext from '../AppContext';
//css
import styles from './gallery.module.scss';

const Gallery = () => {
    const { projectsData } = useContext(AppContext);

    const [isExpanded, setIsExpanded] = useState(false);
    const cleanBlankSpaces = (string) => string.replace(/\s+/g, '-');

    return (
        <>
            {
                projectsData && projectsData.length > 0
                    ? <div className={styles.images_wrapper}>
                        {projectsData.map((project, index) =>
                            <div
                                key={index}
                                className={styles.slide}
                            >
                                <Link
                                    href={{
                                        pathname: `/projects/${cleanBlankSpaces(project.name)}`,
                                    }}
                                >
                                    <img className={styles.image} alt={'Project preview'} src={project.main_image.url} />
                                </Link>
                            </div>
                        )}
                    </div>
                    : <h4>No projects to display</h4>
            }
            {
                projectsData && projectsData.length > 9 &&
                <Collapsible
                    trigger={
                        <h2
                            onClick={() => {setIsExpanded(!isExpanded)}}
                            className={styles.all_projects_cta}
                        >
                            {isExpanded ? 'SEE LESS >' : 'SEE ALL PROJECTS >'}
                        </h2>
                    }
                    classParentString={isExpanded ? 'expandedPanel' : ''}
                >
                    <div className={styles.more_images_wrapper}>
                       {/* //TODO: check logic about index when select a project*/}
                        {projectsData.slice(9,20).map((project, index) =>
                            <div
                                key={index}
                                className={`${styles.slide} more-slides`}
                            >
                                {/*<Link to={'/projects'} onClick={() => setSingleProject(index + 3)}>
                                    <img className={styles.image} alt={'as'} src={project.main_image.url}
                                         onClick={() => setSingleProject(index)}
                                    />
                                </Link>*/}
                            </div>
                        )}
                    </div>
                </Collapsible>
            }
        </>
    )
};

export default Gallery;
