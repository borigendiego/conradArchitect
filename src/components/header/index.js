import React from 'react';
import { MENU_LINKS } from './constants';
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
                <div className={'header-logo'}>
                    <img alt={'logo'} className={'banner-logo'} src={Logo} />
                </div>
                <ul id={'big-screen-menu'} className={'nav-menu'}>
                    {
                        MENU_LINKS.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                    }
                </ul>
                <MobileMenu menuItems={MENU_LINKS} />
            </div>
        </nav>
    )
};

export default Header;