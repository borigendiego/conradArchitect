import React from 'react';
import './App.css';
//Components
import BannerSection from './components/banner';
import Projects from './components/projects';
import About from './components/about';
//css
import './css/global-styles.scss';

function App() {
  return (
    <div>
        <BannerSection />
        <Projects />
        <About />
    </div>
  );
}

export default App;
