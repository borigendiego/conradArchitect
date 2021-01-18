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
                <Route path={'/JimConradProfile'}>
                    <Profile
                        name={'Jim'}
                        lastName={'Conrad'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo ut felis at\n' +
                        '                            convallis. Nam viverra risus vel ante tristique, eu dapibus est ultrices. Maecenas ac lectus\n' +
                        '                            ut erat venenatis blandit eu eget magna. Nullam iaculis tempor felis vel varius. Aenean\n' +
                        '                            molestie sem neque, in viverra sem sagittis ac. Aliquam varius nibh a vulputate lacinia.\n' +
                        '                            Nulla dapibus lacus a condimentum venenatis. Mauris id urna in magna dignissim tempor congue\n' +
                        '                            vitae risus. Sed rhoncus dui nec sem pharetra congue. Ut ultricies pellentesque dolor, vel\n' +
                        '                            pellentesque erat gravida at. In facilisis arcu a maximus suscipit. Curabitur sed ex quis\n' +
                        '                            diam rutrum sollicitudin id a nisi. Nullam eros justo, posuere eget rutrum eget, bibendum at\n' +
                        '                            metus.'}
                        profilePicture={'https://wp.conradarchitect.com/wp-content/uploads/2020/12/Team-Jim.png'}
                        linkToNextProfile={'/MaureenScallyProfile'}
                        linkToBackProfile={'/Path3'}
                    />
                </Route>
                <Route path={'/MaureenScallyProfile'}>
                    <Profile
                        name={'Maureen'}
                        lastName={'Scally'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo ut felis at\n' +
                        '                            convallis. Nam viverra risus vel ante tristique, eu dapibus est ultrices. Maecenas ac lectus\n' +
                        '                            ut erat venenatis blandit eu eget magna. Nullam iaculis tempor felis vel varius. Aenean\n' +
                        '                            molestie sem neque, in viverra sem sagittis ac. Aliquam varius nibh a vulputate lacinia.\n' +
                        '                            Nulla dapibus lacus a condimentum venenatis. Mauris id urna in magna dignissim tempor congue\n' +
                        '                            vitae risus. Sed rhoncus dui nec sem pharetra congue. Ut ultricies pellentesque dolor, vel\n' +
                        '                            pellentesque erat gravida at. In facilisis arcu a maximus suscipit. Curabitur sed ex quis\n' +
                        '                            diam rutrum sollicitudin id a nisi. Nullam eros justo, posuere eget rutrum eget, bibendum at\n' +
                        '                            metus.'}
                        profilePicture={'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team-maureen.png'}
                        linkToNextProfile={'/Path3'}
                        linkToBackProfile={'/JimConradProfile'}
                    />
                </Route>
                <Route path={'/Path3'}>
                    <Profile
                        name={'Name3'}
                        lastName={'Lastname3'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo ut felis at\n' +
                        '                            convallis. Nam viverra risus vel ante tristique, eu dapibus est ultrices. Maecenas ac lectus\n' +
                        '                            ut erat venenatis blandit eu eget magna. Nullam iaculis tempor felis vel varius. Aenean\n' +
                        '                            molestie sem neque, in viverra sem sagittis ac. Aliquam varius nibh a vulputate lacinia.\n' +
                        '                            Nulla dapibus lacus a condimentum venenatis. Mauris id urna in magna dignissim tempor congue\n' +
                        '                            vitae risus. Sed rhoncus dui nec sem pharetra congue. Ut ultricies pellentesque dolor, vel\n' +
                        '                            pellentesque erat gravida at. In facilisis arcu a maximus suscipit. Curabitur sed ex quis\n' +
                        '                            diam rutrum sollicitudin id a nisi. Nullam eros justo, posuere eget rutrum eget, bibendum at\n' +
                        '                            metus.'}
                        profilePicture={'https://wp.conradarchitect.com/wp-content/uploads/2020/12/team2.png'}
                        linkToNextProfile={'/JimConradProfile'}
                        linkToBackProfile={'/MaureenScallyProfile'}
                    />
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
