import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
//Components
import BannerSection from './components/banner';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import ProjectDetails from './components/projects/project-details';
//css
import './css/global-styles.scss';

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <BannerSection />
                    <Projects />
                    <About />
                    <Contact />
                </Route>
                <Route path={'/projects'}>
                    <ProjectDetails />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
