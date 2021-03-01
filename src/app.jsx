import React, { Component } from 'react';
import NavBar from 'components/navBar';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <BrowserRouter>
          <Route path="/user/:username" component={User} />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
