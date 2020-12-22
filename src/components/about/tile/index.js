import React from 'react';

const Tile = (props) => {
    const { key, name, lastName, rol, description, profilePicture } = props.staffData;

    return (
        <div className={'team-tile member-tile'}>
            <img alt={`${key}-profile`} src={profilePicture} />
            <div className={'text-wrapper'}>
                <h5 className={'tile-name-text'}>{`${name} ${lastName}`}</h5>
                <h6 className={'tile-text'}>{rol}</h6>
                <h6 className={'tile-text'}>{description}</h6>
            </div>
            <a href={'#home'} className={'tile-link'}>FULL PROFILE ></a>
        </div>
    )
};

export default Tile;