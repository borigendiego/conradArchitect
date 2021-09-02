import React from 'react';
import PropTypes from 'prop-types';
import styles from './sectionLayout.module.scss';

const SectionLayout = (props) => {
    const { sectionTitle, sectionId } = props;

    return (
        <div className={'section-container'} id={sectionId}>
            <h1>{sectionTitle}</h1>
            <div className={styles.wrapper}>
                <div className={styles.gray_background} />
                <div className={styles.content_container}>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
};

SectionLayout.prototypes = {
  sectionTitle: PropTypes.string,
};

export default SectionLayout;