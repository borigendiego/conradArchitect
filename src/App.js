import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
//Components
import BannerSection from './components/banner';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import ProjectDetails from './components/projects/project-details';
import Profile from './components/about/tile/profile';
//css
import './css/global-styles.scss';
//Constants
import { MEMBERS_PROFILES } from './constants';

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
                    {
                        MEMBERS_PROFILES.map(member =>
                            <Route path={member.path} key={member.name}>
                                <Profile
                                    name={member.name}
                                    lastName={member.lastName}
                                    description={member.description}
                                    profilePicture={member.profilePicture}
                                    linkToNextProfile={member.linkToNextProfile}
                                    linkToBackProfile={member.linkToBackProfile}
                                    mobileCarouselSlides={member.mobileCarouselSlides}
                                />
                            </Route>
                        )
                    }
                </Switch>
            </Router>
        </div>
    );
}

export default App;
