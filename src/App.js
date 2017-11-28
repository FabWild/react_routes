import React, { Component } from 'react';

//routing quest
import { Route, BrowserRouter, Switch, Link, NavLink } from 'react-router-dom';
import Home from './Home';
import Histoire from './Histoire';
// import Product from './Product';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavLink to="/"> Accueil </NavLink>
          <NavLink to="/histoire" activeClassName="selected"> Histoire </NavLink>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/histoire" component={Histoire} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
