import './App.css';

import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import ChoicePage from './components/pages/ChoicePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/choice' component={ChoicePage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/' component={HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
