import React from 'react';
import './App.css';
//Components
import BannerSection from './components/banner';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
//css
import './css/global-styles.scss';

function App() {
  return (
    <div>
        <BannerSection />
        <Projects />
        <About />
        <Contact />
    </div>
  );
}

export default App;
