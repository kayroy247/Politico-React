import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from 'Containers/NotFound';
import Home from 'Containers/Home';


const App = () => (

  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/notfound" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
