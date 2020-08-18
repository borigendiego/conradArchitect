import React from 'react';
import './sectionLayout.scss';

const SectionLayout = (props) => {
    const { sectionTitle } = props;

    return (
        <div className={'section-container'}>
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

export default SectionLayout