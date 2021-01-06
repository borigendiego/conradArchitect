import React from 'react';
import './profile.scss';
import {
    Link
} from 'react-router-dom';
//Images
import arrow from '../../../assets/images/atras.svg';
import cross from '../../../assets/images/eliminar-cruz.svg';

const Profile = (props) => {
    const { key, name, lastName, description, profilePicture, linkToNextProfile, linkToBackProfile } = props;

    return (
        <div className={'profile-page'}>
            <div className={'profile-gray-background'} />
            <Link to={'/home'} className={'back-x-link'}>
                <img src={cross} alt={'x-back'} className={'back-x'}/>
            </Link>
            <img alt={`${key}-profile`} src={profilePicture} className={'profile-image'}/>
            <div className={'profile-white-background'} />
            <div className={'profile-wrapper'}>
                <Link to={linkToNextProfile} className={'arrow-link'}>
                    <img src={arrow} alt={'left-arrow'} className={'left image'}/>
                </Link>
                <div className={'profile-text-wrapper'}>
                    <h5 className={'profile-name-text'}>{`${name} ${lastName}`}</h5>
                    <p className={'tile-text'}>{description}</p>
                </div>
                <Link to={linkToBackProfile} className={'arrow-link'}>
                    <img src={arrow} alt={'right-arrow'} className={'right image'}/>
                </Link>
            </div>
        </div>
    )
};

export default Profile;