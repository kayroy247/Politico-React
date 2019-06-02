import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'Helpers/history';
import NotFound from 'Containers/NotFound';
import Home from 'Containers/Home';
import Signup from 'Containers/Signup';
import Login from 'Containers/Login';
import UserProfile from 'Containers/UserProfile';


const App = () => (

  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/userprofile" exact component={UserProfile} />
      <Route path="/notfound" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
