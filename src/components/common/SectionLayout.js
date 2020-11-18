import React from 'react';
import PropTypes from 'prop-types';
import './sectionLayout.scss';

const SectionLayout = (props) => {
    const { sectionTitle, sectionId } = props;

    return (
        <div className={'section-container'} id={sectionId}>
            <h1 className={'section-title'}>{sectionTitle}</h1>
            <div className={'section-content-wrapper'}>
                <div className={'gray-background'} />
                <div className={'content-container'}>
                    <div className={'content'}>
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