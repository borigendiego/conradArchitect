import React from 'react';
import {
    Link
} from 'react-router-dom';

const Tile = (props) => {
    const { key, name, lastName, rol, profilePicture, linkToProfile, id } = props.staffData;

    return (
        <div id={`order-${id}`} className={'team-tile member-tile'}>
            <img alt={`${key}-profile`} src={profilePicture} className={'member-tile-image'} />
            <div className={'text-wrapper'}>
                <h5 className={'tile-name-text'}>{`${name} ${lastName}`}</h5>
                <h6 className={'tile-text'}>{rol}</h6>
            </div>
            <Link to={`${linkToProfile}`} className={'tile-link'}>
                FULL PROFILE >
            </Link>
        </div>
    )
};

export default Tile;