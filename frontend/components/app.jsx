import React from 'react';
import NavBar from './nav_bar/nav_bar.jsx'
import SignupFormContainer from './session/signup_form_container.jsx';
import { Route, Switch, Router } from 'react-router-dom';
import { ProtectedRoute} from '../util/route_util';
import { createBrowserHistory } from 'history';
import HomePage from './home_page/home_page.jsx';
import LoginFormContainer from './session/login_form_container.jsx';
import ProfileContainer from './profile/profile_container';
import MusicPlayerContainer from './music_player/music_player_container'
import DiscoverContainer from './discover/discover_container'

 

const customHistory = createBrowserHistory();
const App = () => (
    <Router history={customHistory}>
       <div id='main'>
        
      <Switch history={customHistory}>
              <ProtectedRoute exact path="/register" component={SignupFormContainer} loggedIn />
              {/* <Route exact path="/" component={SignupFormContainer} /> */}
              <ProtectedRoute
                exact
                path="/login"
                component={LoginFormContainer}
                loggedIn
              />
              {/* <Route exact path="/navbar" component={NavBarContainer} /> */}
             <Route exact path="/" component={HomePage} />
             <Route exact path="/discover" component={DiscoverContainer} />
             <Route exact path="/:display_name" component={ProfileContainer} />


      </Switch>
      <MusicPlayerContainer />
      
       </div>
    </Router>
    

);

export default App;

