import React from 'react';
import './tile.scss';

const Tile = (props) => {
    const { key, name, lastName, rol, description, profilePicture } = props.staffData;

    return (
        <div className={'tile-wrapper'}>
            <div className={'tide-content-wrapper'}>
                <img alt={`${key}-profile`} src={profilePicture} />
                <h4>{`${name} ${lastName}`}</h4>
                <h5>{rol}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default Tile;