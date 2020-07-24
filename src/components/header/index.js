import React from 'react';
//css
import './header.scss';

const Header = () => {
    return (
        <div className={'header-wrapper'}>
            <div>Logo</div>
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