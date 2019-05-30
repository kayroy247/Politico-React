import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from 'Containers/NotFound';
import Home from 'Containers/Home';
import Signup from 'Containers/Signup';
import Login from 'Containers/Login';


const App = () => (

  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <Route path="/notfound" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
