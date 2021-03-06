import React, { Component } from 'react';
import NavBar from './components/navBar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Main from './components/main';

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/detail/:videoId" component={} />
        </Switch>
      </Router>
    );
  }
}

export default App;
