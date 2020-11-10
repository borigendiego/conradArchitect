import React from 'react';
import { MENU_LINKS } from '../constants';
//Style
import './mobileMenu.scss';

const MobileMenu = () => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id={'menu'}>
                {
                    MENU_LINKS.map((link,index) => <a key={index} href={link.linkTo}><li>{link.label}</li></a>)
                }
            </ul>
        </div>
    )
};

export default MobileMenu;