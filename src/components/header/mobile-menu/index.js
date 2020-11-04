import React from 'react';
//Style
import './mobileMenu.scss';

const MobileMenu = () => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <ul id="menu">
                <a href={'#home'}><li>Home</li></a>
                <a href={'#home'}><li>About</li></a>
                <a href={'#home'}><li>Info</li></a>
                <a href={'#home'}><li>Contact</li></a>
            </ul>
        </div>
    )
};

export default MobileMenu;