import './App.css';

import React,{useState, useEffect} from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import HomePage from './components/pages/HomePage';
import ChoicePage from './components/pages/ChoicePage';
import RecordPage from './components/pages/ChoicePage';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SignInPage from './components/pages/SignInPage';
import UpdatePage from './components/pages/UpdatePage';

const routes = [
  <NavLink exact className='nav' activeClassName="selected" to="/">Home</NavLink>,
  <NavLink exact className='nav' activeClassName="selected" to="/picks">Picks</NavLink>,
  // <NavLink exact className='nav' activeClassName="selected" to="/record">Record</NavLink>,
]


function App() {

  const [width, setWidth] = useState(window.innerWidth);

  // Header will change based on size of screen, detect change in width
  useEffect(()=>{
      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      }


  })

  function updateWidth(){
    setWidth(window.innerWidth);
  }

  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Header routes={routes} width={width}/>

        <Switch>
          <Route path='/login' component={SignInPage} />
          <Route path='/update' component={UpdatePage} />
          <Route path='/record' component={RecordPage}/>
          <Route path='/picks' component={ChoicePage}/>
          <Route path='/home' component={HomePage}/>
          <Route path='/' component={HomePage}/>
        </Switch>
        <Footer width={width} />
      </Router>
    </div>
  );
}

export default App;
