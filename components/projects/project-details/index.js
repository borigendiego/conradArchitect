import React from 'react';
//Style
import styles from  './project-details.module.scss';
//Components
import Gallery from './DetailsGallery';
import Link from 'next/link';

const ProjectDetails = ({ project }) => {
    return (
        project ?
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link href={'/'} >
                    <a className={styles.back_arrow}>
                        <span>&#8249; MAIN PAGE</span>
                    </a>
                </Link>
                <div className={styles.content}>
                    <img
                        alt={'Project main'}
                        className={styles.main_image}
                        src={project.main_image.url}
                    />
                    <div className={styles.details_container}>
                        <div>
                            <h1>{project.name}</h1>
                            <div className={styles.details_container_description}>
                                <h3 className={styles.details_item}><strong>Location: </strong>{project.location}</h3>
                                {project.size && <h3 className={styles.details_item}><strong>Size: </strong>{project.size}</h3>}
                                <h3 className={styles.details_item}><strong>Year: </strong>{project.year}</h3>
                                {project.status && <h3 className={styles.details_item}><strong>Status</strong>{project.status}</h3>}
                                <h3 className={styles.details_item}><strong>Services: </strong>{project.services}</h3>
                            </div>
                        </div>
                        <div className={styles.gallery}>
                            <Gallery galleryImages={project.gallery} />
                        </div>
                    </div>
                </div>
                <div className={styles.details_black_border} />
            </div>
            <style dangerouslySetInnerHTML={{
                __html: [
                    '.image-container:after {',
                    `  background-image:url(${project.main_image.url});`,
                    '}'
                ].join('\n')
            }} />
        </div>
        : <div>Loading...</div>
    )
};

export default ProjectDetails;
