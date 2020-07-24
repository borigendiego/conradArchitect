import React from 'react';

const LargeSection = (props) => {
    return (
        <div className={'large-section-container'}>
            {props.children}
        </div>
    )
};

export default LargeSection;