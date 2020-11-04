import React from 'react';
//css
import './header.scss';
//images
import Logo from '../../assets/images/jim-conrad-logo-light.png';
//Components
import MobileMenu from './mobile-menu';

const Header = () => {
    return (
        <nav role={'navigation'}>
            <div className={'header-wrapper'}>
                <div>
                    <img alt={'logo'} className="image-grey" src={Logo} />
                </div>
                <ul id={'big-screen-menu'} className={'nav-menu'}>
                    <li>HOME</li>
                    <li>PROJECTS</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                </ul>
                <MobileMenu />
            </div>
        </nav>
    )
};

export default Header;


