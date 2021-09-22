import React from 'react';
import { MENU_LINKS } from './constants';
//css
import styles from './header.module.scss';
//images
import Logo from '../../public/assets/images/jim-conrad-logo-light.png';
//Components
import MobileMenu from './mobile-menu';

const Header = () => {
    return (
        <nav role={'navigation'}>
            <div className={styles.container}>
                <img alt={'logo'} className={styles.logo} src={Logo} />
                <ul id={styles.bigScreenMenu} className={styles.nav}>
                    {
                        MENU_LINKS.map((link,index) =>
                            <a key={index} href={link.linkTo}><li>{link.label}</li></a>
                        )
                    }
                </ul>
                <MobileMenu menuItems={MENU_LINKS} />
            </div>
        </nav>
    )
};

export default Header;
