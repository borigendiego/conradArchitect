import React from 'react';
//Style
import './mobileMenu.scss';
//TODO: Move menu link to a constant
const MobileMenu = () => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
                <a href={'#home'}><li>HOME</li></a>
                <a href={'#home'}><li>PROJECTS</li></a>
                <a href={'#home'}><li>INFO</li></a>
                <a href={'#home'}><li>CONTACT</li></a>
            </ul>
        </div>
    )
};

export default MobileMenu;