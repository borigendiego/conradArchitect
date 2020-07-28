import React from 'react';
import './tile.scss';

const Tile = (props) => {
    const { name, lastName, rol, profilePicture } = props.staffData;

    return (
        <div className={'tile-wrapper'}>
            <div className={'border-overlay'} />
            <div className={'tide-content-wrapper'}>
                <img src={profilePicture} />
                <h4>{`${name} ${lastName}`}</h4>
                <h5>{rol}</h5>
            </div>
        </div>
    )
};

export default Tile;