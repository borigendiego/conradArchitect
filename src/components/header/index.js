import React from 'react';
//css
import './header.scss';
//images
import Logo from '../../assets/images/jim-conrad-logo-light.png';

const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div>
                <img alt={'logo'} className="image-grey" src={Logo} />
            </div>
            <ul className={'nav-menu'}>
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </div>
    )
};

export default Header;


