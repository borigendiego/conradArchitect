import React from 'react';
import { MENU_LINKS } from './constants';
//css
import styles from './header.module.scss';
//images
import Logo from '../../public/assets/images/jim-conrad-logo-light.png';
//Components
import MobileMenu from './mobile-menu';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const Header = () => {
    return (
        <nav role={'navigation'}>
            <div className={styles.container}>
                <motion.img 
                alt={'logo'} 
                className={styles.logo} 
                src={Logo}
                initial={{
                    opacity: 0,
                    x: -25,
                    }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 2.5}}
                 />
                <motion.ul 
                id={styles.bigScreenMenu} 
                className={styles.nav}
                initial={{
                    opacity: 0,
                    x: -25,
                    }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                viewport={{ once: true }}
                transition={{duration: 1, delay: 3}}
                >
                    {
                        MENU_LINKS.map((link,index) =>
                            <a key={index} href={link.linkTo}><li>{link.label}</li></a>
                        )
                    }
                </motion.ul>
                <MobileMenu menuItems={MENU_LINKS} />
            </div>
        </nav>
    )
};

export default Header;
