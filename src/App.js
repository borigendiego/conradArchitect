import React from 'react';
import './App.css';
//Components
import BannerSection from './components/banner/';
import Projects from './components/projects';
//css
import './css/global-styles.scss';

function App() {
  return (
    <div>
        <BannerSection />
        <Projects />
    </div>
  );
}

export default App;
