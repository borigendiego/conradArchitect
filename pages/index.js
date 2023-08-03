import React from 'react';
//Components
import BannerSection from '../components/banner';
import Projects from '../components/projects';
import About from '../components/about';
import Contact from '../components/contact';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const App = () => {
    return (
        <div className={'App'}>
            <BannerSection />
            <Projects />
            <About />
            <Contact />
            <div className='copyright'>
                <motion.p
                    initial={{opacity: 0, y: -30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: .7}}
                    ><a href="https://www.thehipposoft.com/" target='_blank' rel='noreferrer'>Created by <span>HippoSoft</span> | All Right Reserved</a>
                </motion.p>
            </div>
        </div>
    );
}

export default App;
