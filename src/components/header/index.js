import React from 'react';
//css
import './header.scss';
//images
import Logo from '../../assets/images/jim-conrad-logo-light.png';
//Components
import MobileMenu from './mobile-menu';
//TODO: Move menu link to a constant
const Header = () => {
    return (
        <nav role={'navigation'}>
            <div className={'header-wrapper'}>
                <div>
                    <img alt={'logo'} className={'banner-logo'} src={Logo} />
                </div>
                <ul id={'big-screen-menu'} className={'nav-menu'}>
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>INFO</li>
                    <li>CONTACT</li>
                </ul>
                <MobileMenu />
            </div>
        </nav>
    )
};

export default Header;


