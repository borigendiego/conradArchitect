import React from 'react';
import './tile.scss';

const Tile = (props) => {
    const { key, name, lastName, rol, description, profilePicture } = props.staffData;

    return (
        <div className={'tile-wrapper'}>
            <div className={'tide-content-wrapper'}>
                <img alt={`${key}-profile`} src={profilePicture} />
                <div className={'text-wrapper'}>
                    <h4 className={'tile-text'}>{`${name} ${lastName}`}</h4>
                    <h4 className={'tile-text'}>{rol}</h4>
                    <h4 className={'tile-text'}>{description}</h4>
                </div>
            </div>
        </div>
    )
};

export default Tile;