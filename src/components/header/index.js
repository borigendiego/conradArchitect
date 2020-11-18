import React from 'react';
import { MENU_LINKS } from './constants';
//css
import './header.scss';
//images
import Logo from '../../assets/images/jim-conrad-logo-light.png';
//Components
import MobileMenu from './mobile-menu';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => {
    return (
        <nav role={'navigation'}>
            <div className={'header-wrapper'}>
                <div>
                    <img alt={'logo'} className={'banner-logo'} src={Logo} />
                </div>
                <ul id={'big-screen-menu'} className={'nav-menu'}>
                    {
                        MENU_LINKS.map((link,index) => <AnchorLink key={index} href={link.linkTo}><li>{link.label}</li></AnchorLink>)
                    }
                </ul>
                <MobileMenu />
            </div>
        </nav>
    )
};

export default Header;