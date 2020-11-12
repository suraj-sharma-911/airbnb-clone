import React from 'react';
import Home from './Home'
import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Searchpage from "./SearchPage";


/* React Router DOM */
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>

        <Switch>

          <Route path="/search">
            <Searchpage/>
          </Route>
          
          <Route path = "/">
            <Home/>
          </Route>
          
        </Switch>

        <Footer/>
      </Router>      
    </div>
  );
}

export default App;
