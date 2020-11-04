import React from 'react';
//Style
import './mobileMenu.scss';

const MobileMenu = () => {
    return (
        <div id={'menuToggle'}>
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Info</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
            </ul>
        </div>
    )
};

export default MobileMenu;