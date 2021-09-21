import React from 'react';
//Components
import BannerSection from '../components/banner';
import Projects from '../components/projects';
import About from '../components/about';
import Contact from '../components/contact';

const App = () => {
    return (
        <div className={'App'}>
            <BannerSection />
            <Projects />
            <About />
            <Contact />
        </div>
    );
}

export default App;
