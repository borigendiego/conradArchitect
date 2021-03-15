import React from 'react';
import './profile.scss';
import {
    Link
} from 'react-router-dom';
//Components
import MobileCarousel from '../../common/carousel'
//Images
import arrow from '../../../assets/images/atras.svg';
import cross from '../../../assets/images/eliminar-cruz.svg';

const Profile = (props) => {
    const { key,
        name,
        lastName,
        description,
        profilePicture,
        linkToNextProfile,
        linkToBackProfile,
        mobileCarouselSlides
    } = props;

    return (
        <div className={'profile-page'}>
            <Link to={'/'} className={'back-x-link'}>
                <img src={cross} alt={'x-back'} className={'back-x'}/>
            </Link>
            <Link to={linkToNextProfile} className={'arrow-link'}>
                <img src={arrow} alt={'left-arrow'} className={'left image'}/>
            </Link>
            <div className={'profile-wrapper'}>
                <img alt={`${key}-profile`} src={profilePicture} className={'profile-image'}/>
                <h2 className={'profile-name-text'}>{`${name} ${lastName}`}</h2>
                <div className={'profile-text-description'}>
                    {description}
                </div>
                <MobileCarousel slides={mobileCarouselSlides} />
            </div>

            <Link to={linkToBackProfile} className={'arrow-link right'}>
                <img src={arrow} alt={'right-arrow'} className={'image'}/>
            </Link>
        </div>
    )
};

export default Profile;