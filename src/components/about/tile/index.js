import React from 'react';
//Styles
import './tile.scss';

const Tile = (props) => {
    const { key, name, lastName, rol, description, profilePicture } = props.staffData;

    return (
        <div className={'tile-wrapper'}>
            <div className={'tide-content-wrapper'}>
                <img alt={`${key}-profile`} src={profilePicture} />
                <div className={'text-wrapper'}>
                    <h4 className={'tile-name-text'}>{`${name} ${lastName}`}</h4>
                    <h4 className={'tile-text'}>{rol}</h4>
                    <h4 className={'tile-text'}>{description}</h4>
                </div>
                <a href={'#home'} className={'tile-full-profile'}>FULL PROFILE ></a>
            </div>
        </div>
    )
};

export default Tile;